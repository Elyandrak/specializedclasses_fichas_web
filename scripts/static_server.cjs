const fs = require('fs');
const path = require('path');
const http = require('http');

const mime = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml', '.webp': 'image/webp', '.md': 'text/markdown; charset=utf-8', '.txt': 'text/plain; charset=utf-8', '.csv': 'text/csv; charset=utf-8'
};

function startStaticServer(root, requestedPort = 0) {
  const resolvedRoot = path.resolve(root);
  const server = http.createServer((request, response) => {
    try {
      const pathname = decodeURIComponent(new URL(request.url, 'http://127.0.0.1').pathname);
      const relative = pathname === '/' ? 'index.html' : pathname.replace(/^\/+/, '');
      const file = path.resolve(resolvedRoot, relative);
      if (file !== resolvedRoot && !file.startsWith(resolvedRoot + path.sep)) {
        response.writeHead(403); response.end('Forbidden'); return;
      }
      const stat = fs.statSync(file);
      const target = stat.isDirectory() ? path.join(file, 'index.html') : file;
      const body = fs.readFileSync(target);
      response.writeHead(200, { 'Content-Type': mime[path.extname(target).toLowerCase()] || 'application/octet-stream', 'Cache-Control': 'no-store' });
      response.end(body);
    } catch (_) {
      response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }); response.end('Not found');
    }
  });
  return new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(requestedPort, '127.0.0.1', () => resolve({ server, port: server.address().port }));
  });
}

module.exports = { startStaticServer };

if (require.main === module) {
  const root = path.resolve(__dirname, '..');
  const port = Number(process.env.PORT || 8765);
  startStaticServer(root, port).then(() => process.stdout.write(`http://127.0.0.1:${port}\n`));
}
