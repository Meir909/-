const { ghGet, b64ToUtf8, cors } = require('./_gh');

module.exports = async (req, res) => {
  cors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();

  try {
    const [galData, docsData, teachersData] = await Promise.all([
      ghGet('public/images'),
      ghGet('public/documents.html'),
      ghGet('public/teachers.html'),
    ]);

    const photos = galData.filter(f => /\.(jpe?g|png|webp|gif)$/i.test(f.name)).length;

    const docsHtml = b64ToUtf8(docsData.content);
    const docs = (docsHtml.match(/class="doc-item"/g) || []).length;

    const teachHtml = b64ToUtf8(teachersData.content);
    const teachers = (teachHtml.match(/class="teacher-card"/g) || []).length;

    return res.json({ ok: true, photos, docs, teachers });
  } catch (e) {
    return res.status(500).json({ ok: false, error: e.message });
  }
};
