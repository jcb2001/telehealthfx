interface Env {}

export const onRequest: PagesFunction<Env> = async (context) => {
  const url = new URL(context.request.url);

  // 1. Host Canonicalization: Redirect www to apex domain
  if (url.hostname === 'www.telehealthfx.com') {
    url.hostname = 'telehealthfx.com';
    return Response.redirect(url.toString(), 301);
  }

  // 2. Trailing Slash Normalization: Force trailing slash on clean directory paths
  if (!url.pathname.endsWith('/') && !url.pathname.includes('.')) {
    url.pathname = `${url.pathname}/`;
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
};
