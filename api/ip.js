export default function handler(req, res) {
  const ip =
    req.headers['x-forwarded-for']?.split(',')[0] ||
    req.socket?.remoteAddress ||
    "unknown";

  const port = req.socket?.remotePort || null;

  res.status(200).json({
    ip: ip,
    port: port,
    full: port ? `${ip}:${port}` : ip
  });
}
