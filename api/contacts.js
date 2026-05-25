const { ghGet, ghUpload, b64ToUtf8, utf8ToB64, cors } = require('./_gh');

module.exports = async function handler(req, res) {
  cors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method === 'GET') {
    try {
      const data = await ghGet('public/data/contacts.json');
      return res.json({ ok: true, contacts: JSON.parse(b64ToUtf8(data.content)) });
    } catch (e) {
      return res.status(500).json({ ok: false, error: e.message });
    }
  }

  if (req.method === 'POST') {
    const { addr, phone, email, whatsapp, hours } = req.body;
    if (!addr || !phone || !email || !whatsapp) {
      return res.status(400).json({ ok: false, error: 'Missing required fields' });
    }
    const phone_raw = phone.replace(/\s/g, '');
    const contacts = { addr, phone, phone_raw, email, whatsapp, hours: hours || '' };
    try {
      let sha;
      try { const existing = await ghGet('public/data/contacts.json'); sha = existing.sha; } catch (_) {}
      await ghUpload('public/data/contacts.json', utf8ToB64(JSON.stringify(contacts, null, 2)), 'Contacts: update', sha);
      return res.json({ ok: true });
    } catch (e) {
      return res.status(500).json({ ok: false, error: e.message });
    }
  }

  return res.status(405).json({ ok: false, error: 'Method not allowed' });
};
