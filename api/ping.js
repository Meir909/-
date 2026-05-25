const { cors } = require('./_gh');

module.exports = async function handler(req, res) {
  cors(res);
  res.json({ ok: true, token: !!process.env.GH_TOKEN, ts: Date.now() });
};
