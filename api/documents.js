const { ghGet, ghUpload, b64ToUtf8, utf8ToB64, cors } = require('./_gh');

const CAT_ANCHORS = {
  cat1: 'docs.cat1', cat2: 'docs.cat2', cat3: 'docs.cat3', cat4: 'docs.cat4'
};

function parseDocItems(html) {
  const items = [];
  const catKeys = ['cat1', 'cat2', 'cat3', 'cat4'];
  const catAnchors = Object.values(CAT_ANCHORS);
  const re = /<div class="doc-item">([\s\S]*?)<\/div>\s*<\/div>/g;
  let m;
  while ((m = re.exec(html)) !== null) {
    const block = m[0];
    const blockStart = m.index;
    const nameMatch = block.match(/class="doc-item-name"[^>]*>([^<]+)</);
    const hrefMatch = block.match(/href="([^"#][^"]+)"/);
    const name = nameMatch ? nameMatch[1].trim() : '';
    if (!name) continue;
    let catKey = 'cat1';
    for (let i = catAnchors.length - 1; i >= 0; i--) {
      if (html.lastIndexOf(`data-i18n="${catAnchors[i]}"`, blockStart) !== -1) {
        catKey = catKeys[i]; break;
      }
    }
    items.push({ name, href: hrefMatch ? hrefMatch[1] : '#', block, catKey });
  }
  return items;
}

module.exports = async function handler(req, res) {
  cors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();

  try {
    if (req.method === 'GET') {
      const data = await ghGet('public/documents.html');
      const html = b64ToUtf8(data.content);
      return res.json({ ok: true, documents: parseDocItems(html) });
    }

    if (req.method === 'POST') {
      const { name, catKey, url } = req.body;
      if (!name || !catKey) return res.status(400).json({ ok: false, error: 'Missing name or catKey' });

      const data = await ghGet('public/documents.html');
      let html = b64ToUtf8(data.content);

      const anchor = CAT_ANCHORS[catKey];
      const sectionRe = new RegExp(`(<div class="docs-section-title">[\\s\\S]*?data-i18n="${anchor}"[\\s\\S]*?<\\/div>)`);
      const match = sectionRe.exec(html);
      if (!match) throw new Error('Section not found');

      const docHtml = `\n      <div class="doc-item"><div class="doc-item-icon"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div><span class="doc-item-name">${name}</span><a href="${url || '#'}" class="doc-item-dl"><svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg><span>Скачать</span></a></div>`;
      const insertPos = html.indexOf(match[0]) + match[0].length;
      html = html.slice(0, insertPos) + docHtml + html.slice(insertPos);

      await ghUpload('public/documents.html', utf8ToB64(html), `Docs: add ${name}`, data.sha);
      return res.json({ ok: true });
    }

    if (req.method === 'DELETE') {
      const { name } = req.body;
      if (!name) return res.status(400).json({ ok: false, error: 'Missing name' });

      const data = await ghGet('public/documents.html');
      let html = b64ToUtf8(data.content);
      const items = parseDocItems(html);
      const item = items.find(i => i.name === name);
      if (!item) throw new Error('Document not found');

      await ghUpload('public/documents.html', utf8ToB64(html.replace(item.block, '')), `Docs: remove ${name}`, data.sha);
      return res.json({ ok: true });
    }

    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ ok: false, error: e.message });
  }
};
