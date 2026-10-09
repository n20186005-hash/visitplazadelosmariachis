import { SITE } from './config/site';

type AssetsBinding = {
  fetch(request: Request): Promise<Response>;
};

interface Env {
  ASSETS: AssetsBinding;
}

const CANONICAL_HOST = new URL(SITE.url).hostname;

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // Consolidate non-www traffic onto the canonical www host.
    if (url.hostname === SITE.domain) {
      url.hostname = CANONICAL_HOST;

      if (url.pathname === '/') {
        url.pathname = '/es';
      }

      return Response.redirect(url.toString(), 301);
    }

    // `/` exists only as a locale handoff and should not compete with `/es`.
    if (url.hostname === CANONICAL_HOST && url.pathname === '/') {
      url.pathname = '/es';
      return Response.redirect(url.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  },
};
