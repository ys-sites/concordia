export default function handler(req, res) {
  const { path: filePath } = req.query;
  if (!filePath) {
    return res.status(400).send('Missing path parameter');
  }

  // Sanitize and redirect to static course asset served via Vercel Edge CDN
  const cleanPath = decodeURIComponent(filePath).replace(/^\/+/, '');
  return res.redirect(302, `/courses/${encodeURI(cleanPath)}`);
}
