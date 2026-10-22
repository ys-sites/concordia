// Same URL-safe naming as src/utils/pdfUrl.ts (course files are published under these names)
const slugSegment = (name) =>
  name
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^A-Za-z0-9._-]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-(?=\.[A-Za-z0-9]+$)|-$/g, '');

export default function handler(req, res) {
  const { path: filePath } = req.query;
  if (!filePath) {
    return res.status(400).send('Missing path parameter');
  }

  // Redirect to the static course asset served via the Vercel CDN. Malformed encoding is a bad request, and
  // "." / ".." segments are dropped, so the redirect always stays inside /courses/.
  let cleanPath;
  try {
    cleanPath = decodeURIComponent(String(filePath))
      .split('/')
      .filter((seg) => seg && seg !== '.' && seg !== '..')
      .join('/');
  } catch {
    return res.status(400).send('Malformed path parameter');
  }
  if (!cleanPath) return res.status(400).send('Missing path parameter');
  // The redirect target never changes for a path, so let the CDN answer repeat requests
  res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=86400');
  return res.redirect(302, `/courses/${cleanPath.split('/').map(slugSegment).join('/')}`);
}
