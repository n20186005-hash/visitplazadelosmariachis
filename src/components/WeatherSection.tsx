import { SITE } from '@/config/site';
import type { LocaleCode } from '@/config/site';

type WeatherGroup = 'clear' | 'partly' | 'cloudy' | 'fog' | 'drizzle' | 'rain' | 'snow' | 'storm';
type Bucket = 'wear' | 'plan' | 'gear' | 'risk';

interface WeatherData {
  current: {
    time: string;
    temperature_2m: number;
    relative_humidity_2m: number;
    apparent_temperature: number;
    weather_code: number;
    wind_speed_10m: number;
  };
  daily: {
    time: string[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    precipitation_probability_max: Array<number | null>;
    uv_index_max: Array<number | null>;
  };
}

interface SmartRules {
  labels?: Partial<Record<Bucket, string>>;
  intro?: string;
  rules?: Record<string, Partial<Record<Bucket, string>>>;
  windScale?: string[];
  uvLevels?: string[];
}

// WMO codes that count as heavy / intense rain.
const HEAVY_RAIN = new Set([65, 67, 82]);

// Upper km/h bound of each Beaufort level 0..11 (level 12 is anything above 117 km/h).
const BEAUFORT_KMH = [1, 6, 12, 20, 29, 39, 50, 62, 75, 89, 103, 118];

function toGroup(code: number): WeatherGroup {
  if (code === 0) return 'clear';
  if (code === 1 || code === 2) return 'partly';
  if (code === 3) return 'cloudy';
  if (code === 45 || code === 48) return 'fog';
  if (code >= 51 && code <= 57) return 'drizzle';
  if ((code >= 61 && code <= 67) || (code >= 80 && code <= 82)) return 'rain';
  if ((code >= 71 && code <= 77) || code === 85 || code === 86) return 'snow';
  if (code >= 95) return 'storm';
  return 'cloudy';
}

function beaufort(kmh: number): number {
  let level = 0;
  while (level < 12 && kmh >= BEAUFORT_KMH[level]) level += 1;
  return level;
}

function uvLevelIndex(uv: number): number {
  if (uv <= 2) return 0;
  if (uv <= 5) return 1;
  if (uv <= 7) return 2;
  if (uv <= 10) return 3;
  return 4;
}

function langTag(locale: LocaleCode) {
  return locale === 'zh' ? 'zh-CN' : locale === 'es' ? 'es-MX' : 'en';
}

async function fetchWeather(): Promise<WeatherData | null> {
  const url =
    'https://api.open-meteo.com/v1/forecast' +
    `?latitude=${SITE.latitude}&longitude=${SITE.longitude}` +
    '&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m' +
    '&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,uv_index_max' +
    '&timezone=America%2FMexico_City&forecast_days=7';

  try {
    const res = await fetch(url, {
      next: { revalidate: 1800 },
      headers: { Accept: 'application/json' },
    });
    if (!res.ok) return null;
    return (await res.json()) as WeatherData;
  } catch {
    return null;
  }
}

export default async function WeatherSection({ locale }: { locale: LocaleCode }) {
  const messages = ((await import(`@/messages/${locale}.json`)) as any).default;
  const w = messages.weather;
  const data = await fetchWeather();

  if (!data) {
    return (
      <section id="weather" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-5xl mx-auto text-center">
          <p style={{ color: 'var(--text-secondary)' }}>{w.unavailable}</p>
        </div>
      </section>
    );
  }

  const localeTag = langTag(locale);
  const weekday = new Intl.DateTimeFormat(localeTag, { weekday: 'short' });
  const current = data.current;
  const days = data.daily;
  const smart = (w.smart || {}) as SmartRules;
  const rules = smart.rules || {};
  const labels = smart.labels || {};
  const windScale = smart.windScale || [];
  const uvLevels = smart.uvLevels || [];

  // ---- Today-derived inputs used by the advice engine ----
  const tMax = days.temperature_2m_max[0];
  const tMin = days.temperature_2m_min[0];
  const precip = days.precipitation_probability_max[0];
  const uvMax = days.uv_index_max?.[0] ?? 0;
  const humidity = current.relative_humidity_2m;
  const windKmh = Math.round(current.wind_speed_10m);
  const bf = beaufort(current.wind_speed_10m);
  const cond = toGroup(current.weather_code);

  const buckets: Record<Bucket, string[]> = { wear: [], plan: [], gear: [], risk: [] };
  const pushRule = (id: string) => {
    const r = rules[id];
    if (!r) return;
    (['wear', 'plan', 'gear', 'risk'] as Bucket[]).forEach((b) => {
      const v = r[b];
      if (v && !buckets[b].includes(v)) buckets[b].push(v);
    });
  };

  // Conditional triggers — only matching entries are shown to the visitor.
  if (typeof precip === 'number' && precip >= 60) pushRule('rainChance');
  switch (cond) {
    case 'clear': pushRule('clear'); break;
    case 'partly': pushRule('partly'); break;
    case 'cloudy': pushRule('cloudy'); break;
    case 'fog': pushRule('fog'); break;
    case 'drizzle': pushRule('drizzle'); break;
    case 'rain': pushRule(HEAVY_RAIN.has(current.weather_code) ? 'heavy' : 'rain'); break;
    case 'storm': pushRule('storm'); break;
    case 'snow': pushRule('snow'); break;
  }
  if (tMax >= 32) pushRule('heat');
  if (uvMax >= 5) pushRule('uv');
  if (tMax - tMin > 8) pushRule('tempRange');
  if (tMax <= 10) pushRule('cold');
  if (humidity >= 80) pushRule('humidity');
  if (bf >= 7) pushRule('wind7');
  else if (bf >= 5) pushRule('wind5');

  const showSmart =
    Boolean(smart.rules) &&
    (buckets.wear.length > 0 || buckets.plan.length > 0 || buckets.gear.length > 0 || buckets.risk.length > 0);

  const WmoIcon = ({ code, size = 22 }: { code: number; size?: number }) => {
    const kind = toGroup(code);
    const stroke = 'currentColor';
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        {kind === 'clear' && (
          <>
            <circle cx="12" cy="12" r="4" />
            <line x1="12" y1="2" x2="12" y2="5" />
            <line x1="12" y1="19" x2="12" y2="22" />
            <line x1="4.9" y1="4.9" x2="7" y2="7" />
            <line x1="17" y1="17" x2="19.1" y2="19.1" />
            <line x1="2" y1="12" x2="5" y2="12" />
            <line x1="19" y1="12" x2="22" y2="12" />
            <line x1="4.9" y1="19.1" x2="7" y2="17" />
            <line x1="17" y1="7" x2="19.1" y2="4.9" />
          </>
        )}
        {kind === 'partly' && (
          <>
            <path d="M17.5 13a4.5 4.5 0 0 0-4.3-6 5.5 5.5 0 0 0-10.4 2A3.5 3.5 0 0 0 4 16h13.5a3.5 3.5 0 0 0 0-3z" />
            <circle cx="19" cy="5.5" r="2.2" />
            <line x1="19" y1="1" x2="19" y2="2" />
            <line x1="19" y1="9" x2="19" y2="10" />
            <line x1="23" y1="5.5" x2="22" y2="5.5" />
            <line x1="16" y1="5.5" x2="15" y2="5.5" />
          </>
        )}
        {kind === 'cloudy' && <path d="M17.5 18a3.5 3.5 0 0 0 0-7 5.5 5.5 0 0 0-10.4 2A3.5 3.5 0 0 0 4 16.5 3.5 3.5 0 0 0 7.5 20h10z" />}
        {kind === 'fog' && (
          <>
            <line x1="3" y1="7" x2="21" y2="7" />
            <line x1="3" y1="12" x2="18" y2="12" />
            <line x1="3" y1="17" x2="21" y2="17" />
          </>
        )}
        {(kind === 'drizzle' || kind === 'rain') && (
          <>
            <path d="M17.5 18a3.5 3.5 0 0 0 0-7 5.5 5.5 0 0 0-10.4 2A3.5 3.5 0 0 0 4 16.5 3.5 3.5 0 0 0 7.5 20h10z" />
            {kind === 'rain' ? (
              <>
                <line x1="8" y1="20" x2="6.5" y2="23" />
                <line x1="13" y1="20" x2="11.5" y2="23" />
                <line x1="18" y1="20" x2="16.5" y2="23" />
              </>
            ) : (
              <>
                <line x1="8" y1="20" x2="7" y2="22" />
                <line x1="14" y1="20" x2="13" y2="22" />
                <line x1="19" y1="20" x2="18" y2="22" />
              </>
            )}
          </>
        )}
        {kind === 'snow' && (
          <>
            <path d="M17.5 18a3.5 3.5 0 0 0 0-7 5.5 5.5 0 0 0-10.4 2A3.5 3.5 0 0 0 4 16.5 3.5 3.5 0 0 0 7.5 20h10z" />
            <line x1="8" y1="21" x2="7" y2="23" />
            <line x1="13" y1="21" x2="12" y2="23" />
            <line x1="18" y1="21" x2="17" y2="23" />
            <line x1="8" y1="18" x2="7" y2="16" />
            <line x1="13" y1="18" x2="12" y2="16" />
            <line x1="18" y1="18" x2="17" y2="16" />
          </>
        )}
        {kind === 'storm' && (
          <>
            <path d="M17.5 18a3.5 3.5 0 0 0 0-7 5.5 5.5 0 0 0-10.4 2A3.5 3.5 0 0 0 4 16.5 3.5 3.5 0 0 0 7.5 20h10z" />
            <polyline points="10 15 7.5 19 11 19 9.5 22.5" />
          </>
        )}
      </svg>
    );
  };

  const groupText = (code: number) => w.codes[toGroup(code)] || w.codes.cloudy;

  return (
    <section id="weather" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
          {w.title}
        </h2>
        <p className="mb-8" style={{ color: 'var(--text-muted)' }}>{w.subtitle}</p>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
          {/* Current conditions */}
          <div
            className="rounded-xl p-6 sm:p-8 lg:col-span-2"
            style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
          >
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div>
                <p className="text-sm mb-1" style={{ color: 'var(--text-muted)' }}>{w.current}</p>
                <p className="flex items-start gap-2 font-display font-semibold" style={{ color: 'var(--text-primary)' }}>
                  <span className="text-5xl sm:text-6xl leading-none">{Math.round(current.temperature_2m)}</span>
                  <span className="text-2xl mt-1">°C</span>
                </p>
                <p className="mt-2 flex items-center gap-2 font-medium" style={{ color: 'var(--accent)' }}>
                  <WmoIcon code={current.weather_code} />
                  {groupText(current.weather_code)}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 min-w-0 w-full sm:w-auto">
                <MiniStat label={w.feelsLike} value={`${Math.round(current.apparent_temperature)}°C`} />
                <MiniStat label={w.humidity} value={`${humidity}%`} />
                <MiniStat
                  label={w.wind}
                  value={`${windKmh} ${w.kmh}`}
                  hint={windScale[bf] ? `${bf} · ${windScale[bf]}` : undefined}
                />
                <MiniStat label={w.precip} value={typeof precip === 'number' ? `${precip}%` : '—'} />
                <MiniStat
                  label={w.uv}
                  value={uvMax > 0 ? String(uvMax) : '—'}
                  hint={uvMax > 0 && uvLevels[uvLevelIndex(uvMax)] ? uvLevels[uvLevelIndex(uvMax)] : undefined}
                />
              </div>
            </div>
          </div>

          {/* 7-day forecast */}
          <div
            className="rounded-xl p-5 sm:p-6"
            style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
          >
            <p className="text-sm mb-3 font-medium" style={{ color: 'var(--text-primary)' }}>{w.forecast}</p>
            <div className="space-y-1">
              {days.time.map((day, i) => (
                <div
                  key={day}
                  className="flex items-center gap-3 rounded-lg px-3 py-1.5"
                  style={{ background: 'var(--bg-primary)' }}
                >
                  <p
                    className="w-10 text-xs font-medium flex-shrink-0"
                    style={{ color: i === 0 ? 'var(--accent)' : 'var(--text-secondary)' }}
                  >
                    {i === 0 ? w.today : weekday.format(new Date(`${day}T12:00:00`))}
                  </p>
                  <span className="flex-shrink-0" style={{ color: 'var(--accent)' }}>
                    <WmoIcon code={days.weather_code[i]} size={18} />
                  </span>
                  <span className="text-sm flex-shrink-0" style={{ color: 'var(--text-primary)' }}>
                    <span className="font-semibold">{Math.round(days.temperature_2m_max[i])}°</span>
                    <span className="mx-1" style={{ color: 'var(--text-muted)' }}>/</span>
                    <span style={{ color: 'var(--text-muted)' }}>{Math.round(days.temperature_2m_min[i])}°</span>
                  </span>
                  {typeof days.precipitation_probability_max[i] === 'number' && (
                    <span className="ml-auto text-xs flex-shrink-0" style={{ color: 'var(--text-muted)' }}>
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor" className="inline mr-0.5 -mt-0.5">
                        <path d="M12 2s-6 7.3-6 12a6 6 0 0 0 12 0c0-4.7-6-12-6-12z" />
                      </svg>
                      {days.precipitation_probability_max[i]}%
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Smart visitor advice (only triggered items are rendered) */}
        {showSmart && (
          <div
            className="rounded-xl p-6 sm:p-8 mt-6"
            style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
          >
            <h3 className="font-display text-xl sm:text-2xl font-semibold" style={{ color: 'var(--text-primary)' }}>
              {w.smartTitle}
            </h3>
            {smart.intro && (
              <p className="mt-1 mb-5 text-sm" style={{ color: 'var(--text-muted)' }}>{smart.intro}</p>
            )}

            {buckets.risk.length > 0 && (
              <div
                className="rounded-xl p-4 sm:p-5 mb-5"
                style={{ background: 'rgba(220,38,38,0.09)', border: '1px solid rgba(220,38,38,0.4)' }}
              >
                <p className="flex items-center gap-2 font-semibold mb-2" style={{ color: '#ef4444' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                  {labels.risk}
                </p>
                <ul className="space-y-1.5">
                  {buckets.risk.map((item, i) => (
                    <li key={i} className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {buckets.wear.length > 0 && (
                <AdviceCard
                  title={labels.wear}
                  icon="thermometer"
                  items={buckets.wear}
                />
              )}
              {buckets.plan.length > 0 && (
                <AdviceCard
                  title={labels.plan}
                  icon="map"
                  items={buckets.plan}
                />
              )}
              {buckets.gear.length > 0 && (
                <AdviceCard
                  title={labels.gear}
                  icon="bag"
                  items={buckets.gear}
                />
              )}
            </div>
          </div>
        )}

        <p className="text-xs mt-4" style={{ color: 'var(--text-muted)' }}>{w.note}</p>
      </div>
    </section>
  );
}

function MiniStat({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div
      className="rounded-lg px-3 py-2.5"
      style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-color)' }}
    >
      <p className="text-xs mb-0.5" style={{ color: 'var(--text-muted)' }}>{label}</p>
      <p className="font-semibold text-sm sm:text-base" style={{ color: 'var(--text-primary)' }}>{value}</p>
      {hint && <p className="text-[11px]" style={{ color: 'var(--text-muted)' }}>{hint}</p>}
    </div>
  );
}

function AdviceCard({ title, icon, items }: { title?: string; icon: 'thermometer' | 'map' | 'bag'; items: string[] }) {
  return (
    <div
      className="rounded-xl p-5"
      style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-color)' }}
    >
      {title && (
        <p className="flex items-center gap-2 font-medium mb-3" style={{ color: 'var(--text-primary)' }}>
          <span style={{ color: 'var(--accent)' }}>{iconSvg(icon)}</span>
          {title}
        </p>
      )}
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="2.5"
              className="flex-shrink-0 mt-0.5"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function iconSvg(icon: 'thermometer' | 'map' | 'bag') {
  const common = {
    width: 18,
    height: 18,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };
  if (icon === 'thermometer') {
    return (
      <svg {...common}>
        <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
      </svg>
    );
  }
  if (icon === 'map') {
    return (
      <svg {...common}>
        <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
        <line x1="8" y1="2" x2="8" y2="18" />
        <line x1="16" y1="6" x2="16" y2="22" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
}
