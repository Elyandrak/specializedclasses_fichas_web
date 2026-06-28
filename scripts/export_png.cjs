const fs = require('fs');
const path = require('path');
const { startStaticServer } = require('./static_server.cjs');

function loadPlaywright() {
  try { return require('playwright'); } catch (_) {}
  const bundled = 'C:/Users/hector/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules';
  const bundledPlaywright = `${bundled}/.pnpm/playwright@1.61.0/node_modules`;
  const bundledCore = `${bundled}/.pnpm/playwright-core@1.61.0/node_modules`;
  process.env.NODE_PATH = [bundled, bundledPlaywright, bundledCore].join(path.delimiter);
  require('module').Module._initPaths();
  return require(`${bundledPlaywright}/playwright`);
}

const { chromium } = loadPlaywright();
const root = path.resolve(__dirname, '..');
const allVersions = ['3.0.0-rc.1', '2.2.2'];
const allLanguages = ['es', 'en', 'de', 'ru', 'uk', 'pt', 'fr', 'ca', 'it'];
const args = process.argv.slice(2);

function argValues(name, defaults) {
  const item = args.find(value => value.startsWith(`--${name}=`));
  return item ? item.split('=')[1].split(',').map(value => value.trim()).filter(Boolean) : defaults;
}

const versions = argValues('versions', allVersions);
const languages = argValues('languages', allLanguages);

function browserExecutable() {
  if (process.env.SC_BROWSER_EXECUTABLE) return process.env.SC_BROWSER_EXECUTABLE;
  const candidates = process.platform === 'win32'
    ? ['C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', 'C:/Program Files/Microsoft/Edge/Application/msedge.exe', 'C:/Program Files/Google/Chrome/Application/chrome.exe']
    : [];
  return candidates.find(fs.existsSync) || chromium.executablePath();
}

async function waitForImages(page) {
  await page.evaluate(async () => {
    const images = [...document.images];
    await Promise.all(images.map(image => image.complete ? image.decode().catch(() => {}) : new Promise(resolve => {
      image.addEventListener('load', resolve, { once: true });
      image.addEventListener('error', resolve, { once: true });
    })));
  });
}

async function waitForPaint(page) {
  await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
}

function removeLegacyRootExports() {
  for (const [folder, extension] of [['fichas_png', '.png'], ['fichas_md', '.md']]) {
    const base = path.join(root, folder);
    if (!fs.existsSync(base)) continue;
    for (const entry of fs.readdirSync(base, { withFileTypes: true })) {
      if (entry.isFile() && entry.name.toLowerCase().endsWith(extension)) fs.rmSync(path.join(base, entry.name));
    }
  }
}

function buildManifest() {
  const files = [], mdFiles = [];
  function visit(dir,target) {
    if (!fs.existsSync(dir)) return;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) visit(full,target);
      else if (entry.name.toLowerCase().endsWith(target===files?'.png':'.md')) target.push(path.relative(root, full).replace(/\\/g, '/'));
    }
  }
  visit(path.join(root,'fichas_png'),files); visit(path.join(root,'fichas_md'),mdFiles);
  files.sort(); mdFiles.sort();
  const body = `window.SC_PNG_MANIFEST = ${JSON.stringify({ generatedAt: new Date().toISOString(), files, mdFiles }, null, 2)};\n`;
  fs.writeFileSync(path.join(root, 'data', 'png_manifest.js'), body, 'utf8');
  return { files, mdFiles };
}

(async () => {
  for (const version of versions) if (!allVersions.includes(version)) throw new Error(`Versión no soportada: ${version}`);
  for (const lang of languages) if (!allLanguages.includes(lang)) throw new Error(`Idioma no soportado: ${lang}`);
  const { server, port } = await startStaticServer(root, 0);
  const browser = await chromium.launch({ headless: true, executablePath: browserExecutable() });
  const exportUrl = `http://127.0.0.1:${port}/ficha_export.html`;
  const generated = [];
  removeLegacyRootExports();

  for (const version of versions) {
    for (const lang of languages) {
      const outDir = path.join(root, 'fichas_png', version, lang);
      const mdDir = path.join(root, 'fichas_md', version, lang);
      fs.rmSync(outDir, { recursive: true, force: true });
      fs.rmSync(mdDir, { recursive: true, force: true });
      fs.mkdirSync(outDir, { recursive: true });
      fs.mkdirSync(mdDir, { recursive: true });
      const context = await browser.newContext({ viewport: { width: 1240, height: 1754 }, deviceScaleFactor: 1 });
      const page = await context.newPage();
      await page.goto(`${exportUrl}?version=${encodeURIComponent(version)}&lang=${encodeURIComponent(lang)}&export=png`, { waitUntil: 'domcontentloaded', timeout: 120000 });
      await page.waitForSelector('#exportSheet', { state: 'visible', timeout: 120000 });
      const classes = await page.evaluate(() => window.SC_APP.getExportClasses());
      const session = await context.newCDPSession(page);

      for (const item of classes) {
        await page.evaluate(id => window.SC_APP.renderExportClass(id), item.id);
        await page.waitForSelector(`#exportSheet[data-class="${item.id}"]`, { state: 'visible', timeout: 30000 });
        await waitForImages(page);
        await waitForPaint(page);
        const clip = await page.evaluate(() => {
          const rect = document.querySelector('#exportSheet').getBoundingClientRect();
          return { x: rect.x, y: rect.y, width: rect.width, height: rect.height, scale: 1 };
        });
        const shot = await session.send('Page.captureScreenshot', { format: 'png', fromSurface: true, captureBeyondViewport: false, clip });
        const output = path.join(outDir, item.filename);
        fs.writeFileSync(output, Buffer.from(shot.data, 'base64'));
        const markdown = await page.evaluate(id => window.SC_APP.getExportMarkdown(id), item.id);
        fs.writeFileSync(path.join(mdDir, item.mdFilename), markdown, 'utf8');
        generated.push(path.relative(root, output).replace(/\\/g, '/'));
      }
      await session.detach();
      await context.close();
      process.stdout.write(`${version}/${lang}: ${classes.length} PNG\n`);
    }
  }

  const manifest = buildManifest();
  await browser.close();
  await new Promise(resolve => server.close(resolve));
  process.stdout.write(`Generados en esta ejecución: ${generated.length}\nPNG en manifiesto: ${manifest.files.length}\nMD en manifiesto: ${manifest.mdFiles.length}\n`);
})().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
