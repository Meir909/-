const { ghGet, ghUpload, ghDelete, b64ToUtf8, utf8ToB64, cors } = require('./_gh');

module.exports = async function handler(req, res) {
  cors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();

  try {
    if (req.method === 'GET') {
      const files = await ghGet('public/images');
      const images = files
        .filter(f => /\.(jpe?g|png|webp|gif)$/i.test(f.name))
        .map(f => ({ name: f.name, path: f.path, src: 'images/' + f.name }));
      return res.json({ ok: true, images });
    }

    if (req.method === 'POST') {
      const { name, base64 } = req.body;
      if (!name || !base64) return res.status(400).json({ ok: false, error: 'Missing name or base64' });

      const ext = name.split('.').pop().toLowerCase() || 'jpg';
      const safeName = `upload_${Date.now()}.${ext}`;
      const ghPath = `public/images/${safeName}`;

      await ghUpload(ghPath, base64, `Add photo ${safeName}`);

      const galData = await ghGet('public/gallery.html');
      const content = b64ToUtf8(galData.content);
      const newBlock = `\n      <div class="gallery-item" data-cat="play">\n        <img src="images/${safeName}" alt="Фото" loading="lazy">\n        <div class="gallery-zoom"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div>\n      </div>`;
      const anchor = '    </div>\n  </div>\n</section>';
      const idx = content.indexOf(anchor);
      if (idx === -1) throw new Error('Anchor not found in gallery.html');
      const newContent = content.slice(0, idx) + newBlock + '\n' + content.slice(idx);
      await ghUpload('public/gallery.html', utf8ToB64(newContent), `Gallery: add ${safeName}`, galData.sha);

      return res.json({ ok: true, src: 'images/' + safeName, ghPath });
    }

    if (req.method === 'DELETE') {
      const { ghPath, replaceSrc, replacePath } = req.body;
      if (!ghPath) return res.status(400).json({ ok: false, error: 'Missing ghPath' });

      const delName = ghPath.replace('public/images/', '');
      const fileData = await ghGet(ghPath);
      await ghDelete(ghPath, `Delete ${delName}`, fileData.sha);

      const galData = await ghGet('public/gallery.html');
      let html = b64ToUtf8(galData.content);

      const blocks = [];
      const re = /(<div class="gallery-item"[\s\S]*?<\/div>\s*<\/div>)/g;
      let m;
      while ((m = re.exec(html)) !== null) blocks.push(m[0]);

      const replName = replaceSrc ? replaceSrc.replace('images/', '') : null;
      const delBlock  = blocks.find(b => b.includes(delName));
      const replBlock = replName ? blocks.find(b => b.includes(replName)) : null;

      if (delBlock && replBlock) {
        const escaped = delName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const newDelBlock = delBlock
          .replace(new RegExp(`src="images/${escaped}"`), `src="${replaceSrc}"`)
          .replace(/alt="[^"]*"/, 'alt="Фото"');
        html = html.replace(delBlock, newDelBlock).replace(replBlock, '');
      } else if (delBlock) {
        html = html.replace(delBlock, '');
      }

      await ghUpload('public/gallery.html', utf8ToB64(html), `Gallery: remove ${delName}`, galData.sha);
      return res.json({ ok: true });
    }

    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ ok: false, error: e.message });
  }
};
