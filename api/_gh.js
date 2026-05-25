const GH_TOKEN  = process.env.GH_TOKEN;
const GH_REPO   = 'Meir909/-';
const GH_BRANCH = 'main';
const GH_API    = 'https://api.github.com';

export async function ghGet(path) {
  const r = await fetch(`${GH_API}/repos/${GH_REPO}/contents/${encodeURIComponent(path).replace(/%2F/g,'/')}?ref=${GH_BRANCH}`, {
    headers: { Authorization: `token ${GH_TOKEN}`, Accept: 'application/vnd.github.v3+json' }
  });
  if (!r.ok) throw new Error(`ghGet ${path}: ${r.status} ${await r.text()}`);
  return r.json();
}

export async function ghUpload(path, base64content, message, sha) {
  for (let attempt = 0; attempt < 3; attempt++) {
    const body = { message, content: base64content, branch: GH_BRANCH };
    if (sha) body.sha = sha;
    const r = await fetch(`${GH_API}/repos/${GH_REPO}/contents/${encodeURIComponent(path).replace(/%2F/g,'/')}`, {
      method: 'PUT',
      headers: { Authorization: `token ${GH_TOKEN}`, Accept: 'application/vnd.github.v3+json', 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    if (r.ok) return r.json();
    if (r.status === 409 && attempt < 2) {
      await new Promise(res => setTimeout(res, 600 * (attempt + 1)));
      try { const f = await ghGet(path); sha = f.sha; } catch(_) {}
      continue;
    }
    throw new Error(`ghUpload ${path}: ${r.status} ${await r.text()}`);
  }
}

export async function ghDelete(path, message, sha) {
  const r = await fetch(`${GH_API}/repos/${GH_REPO}/contents/${encodeURIComponent(path).replace(/%2F/g,'/')}`, {
    method: 'DELETE',
    headers: { Authorization: `token ${GH_TOKEN}`, Accept: 'application/vnd.github.v3+json', 'Content-Type': 'application/json' },
    body: JSON.stringify({ message, sha, branch: GH_BRANCH })
  });
  if (!r.ok) throw new Error(`ghDelete ${path}: ${r.status} ${await r.text()}`);
  return r.json();
}

export function b64ToUtf8(b64) {
  return Buffer.from(b64.replace(/\n/g, ''), 'base64').toString('utf-8');
}

export function utf8ToB64(str) {
  return Buffer.from(str, 'utf-8').toString('base64');
}

export function cors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}
