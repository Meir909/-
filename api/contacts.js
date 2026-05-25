const { ghGet, ghUpload, b64ToUtf8, utf8ToB64, cors } = require('./_gh');

// All HTML files that contain contact data
const PAGES = [
  'public/index.html',
  'public/about.html',
  'public/contacts.html',
  'public/gallery.html',
  'public/teachers.html',
  'public/news.html',
  'public/documents.html',
  'public/admissions.html',
  'public/director.html',
  'public/attest.html',
  'public/consult.html',
];

function updateContacts(html, { addr, phone, phone_raw, email, whatsapp, hours }) {
  // data-i18n text values
  html = html.replace(
    /(<span data-i18n="contact\.addr\.v"[^>]*>)[^<]*/g,
    `$1${addr}`
  );
  html = html.replace(
    /(<span data-i18n="contact\.phone\.v"[^>]*>)[^<]*/g,
    `$1${phone}`
  );
  html = html.replace(
    /(<span data-i18n="contact\.email\.v"[^>]*>)[^<]*/g,
    `$1${email}`
  );
  html = html.replace(
    /(<div class="ci-value" data-i18n="contact\.addr\.v">)[^<]*/g,
    `$1${addr}`
  );
  html = html.replace(
    /(<div class="ci-value" data-i18n="contact\.hours\.v">)[^<]*/g,
    `$1${hours}`
  );
  // tel: links text and href
  html = html.replace(
    /(<a href="tel:[^"]*" data-i18n="contact\.phone\.v">)[^<]*/g,
    `$1${phone}`
  );
  html = html.replace(
    /(<a href=")tel:[^"]*(" data-i18n="contact\.phone\.v")/g,
    `$1tel:${phone_raw}$2`
  );
  // standalone tel: links (not i18n)
  html = html.replace(/href="tel:\+?[0-9 -]+"/g, `href="tel:${phone_raw}"`);
  // mailto: links
  html = html.replace(/href="mailto:[^"]+"/g, `href="mailto:${email}"`);
  // wa.me links
  html = html.replace(/href="https:\/\/wa\.me\/[0-9]+"/g, `href="https://wa.me/${whatsapp}"`);
  // email text inside <a href="mailto:...">...</a>
  html = html.replace(
    /(<a href="mailto:[^"]+">)[^<]*/g,
    `$1${email}`
  );
  return html;
}

module.exports = async function handler(req, res) {
  cors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method === 'POST') {
    const { addr, phone, email, whatsapp, hours } = req.body;
    if (!addr || !phone || !email || !whatsapp) {
      return res.status(400).json({ ok: false, error: 'Missing required fields' });
    }

    // Raw phone for tel: and wa.me (digits only, with country code)
    const phone_raw = phone.replace(/[^0-9+]/g, '');
    const params = { addr, phone, phone_raw, email, whatsapp, hours: hours || '' };

    // Fetch all pages in parallel
    const results = await Promise.allSettled(PAGES.map(p => ghGet(p)));

    const updates = [];
    for (let i = 0; i < PAGES.length; i++) {
      const r = results[i];
      if (r.status === 'rejected') continue; // skip missing pages
      const data = r.value;
      const original = b64ToUtf8(data.content);
      const updated = updateContacts(original, params);
      if (updated !== original) {
        updates.push({ path: PAGES[i], content: utf8ToB64(updated), sha: data.sha });
      }
    }

    // Upload changed pages sequentially to avoid 409
    for (const u of updates) {
      await ghUpload(u.path, u.content, `Contacts: update ${u.path}`, u.sha);
    }

    return res.json({ ok: true, updated: updates.length });
  }

  return res.status(405).json({ ok: false, error: 'Method not allowed' });
};
