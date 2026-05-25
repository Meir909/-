const { ghGet, ghUpload, ghDelete, b64ToUtf8, utf8ToB64, cors } = require('./_gh');

const DATA_PATH = 'public/data/teachers.json';

module.exports = async function handler(req, res) {
  cors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();

  try {
    if (req.method === 'GET') {
      const data = await ghGet(DATA_PATH);
      const teachers = JSON.parse(b64ToUtf8(data.content));
      return res.json({ ok: true, teachers });
    }

    // POST — add teacher (with optional photo upload)
    if (req.method === 'POST') {
      const { name, role, desc, photoBase64, photoExt } = req.body;
      if (!name) return res.status(400).json({ ok: false, error: 'Missing name' });

      let photoUrl = req.body.photoUrl || '';

      if (photoBase64 && photoExt) {
        const safeName = `teacher_${Date.now()}.${photoExt}`;
        const ghPath = `public/images/teachers/${safeName}`;
        await ghUpload(ghPath, photoBase64, `Teachers: add photo ${safeName}`);
        photoUrl = `images/teachers/${safeName}`;
      }

      const existing = await ghGet(DATA_PATH);
      const teachers = JSON.parse(b64ToUtf8(existing.content));
      const id = Date.now();
      teachers.push({ id, name, role: role || '', desc: desc || '', photo: photoUrl });
      await ghUpload(DATA_PATH, utf8ToB64(JSON.stringify(teachers, null, 2)), `Teachers: add ${name}`, existing.sha);
      return res.json({ ok: true, id, photoUrl });
    }

    // DELETE — remove by id
    if (req.method === 'DELETE') {
      const { id, photo } = req.body;
      if (!id) return res.status(400).json({ ok: false, error: 'Missing id' });

      const existing = await ghGet(DATA_PATH);
      let teachers = JSON.parse(b64ToUtf8(existing.content));
      teachers = teachers.filter(t => String(t.id) !== String(id));
      await ghUpload(DATA_PATH, utf8ToB64(JSON.stringify(teachers, null, 2)), `Teachers: delete ${id}`, existing.sha);

      // Try to delete photo file if it's in teachers folder
      if (photo && photo.includes('images/teachers/')) {
        try {
          const ghPath = 'public/' + photo;
          const fileData = await ghGet(ghPath);
          await ghDelete(ghPath, `Teachers: remove photo`, fileData.sha);
        } catch (_) {}
      }

      return res.json({ ok: true });
    }

    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ ok: false, error: e.message });
  }
};
