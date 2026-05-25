const { ghGet, b64ToUtf8, cors } = require('./_gh');

module.exports = async function handler(req, res) {
  cors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();

  try {
    const [galData, docsData, teachersData] = await Promise.all([
      ghGet('public/images'),
      ghGet('public/documents.html'),
      ghGet('public/teachers.html'),
    ]);

    const photos = galData.filter(f => /\.(jpe?g|png|webp|gif)$/i.test(f.name)).length;
    const docs = (b64ToUtf8(docsData.content).match(/class="doc-item"/g) || []).length;
    const teachers = (b64ToUtf8(teachersData.content).match(/class="teacher-card\b/g) || []).length;

    return res.json({ ok: true, photos, docs, teachers });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ ok: false, error: e.message });
  }
};
