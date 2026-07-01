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
const defaultOutput = path.resolve(root, '..', 'exports_generados_2.6.4');
const allVersions = ['3.0.0-rc.1', '2.2.2'];
const allLanguages = ['es', 'en', 'de', 'ru', 'uk', 'pt', 'fr', 'ca', 'it'];
const args = process.argv.slice(2);

function argValues(name, defaults) {
  const item = args.find(value => value.startsWith(`--${name}=`));
  return item ? item.split('=')[1].split(',').map(value => value.trim()).filter(Boolean) : defaults;
}

function argValue(name, fallback) {
  const item = args.find(value => value.startsWith(`--${name}=`));
  return item ? item.slice(item.indexOf('=') + 1) : fallback;
}

function browserExecutable() {
  if (process.env.SC_BROWSER_EXECUTABLE) return process.env.SC_BROWSER_EXECUTABLE;
  const candidates = process.platform === 'win32'
    ? ['C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', 'C:/Program Files/Microsoft/Edge/Application/msedge.exe', 'C:/Program Files/Google/Chrome/Application/chrome.exe']
    : [];
  return candidates.find(fs.existsSync) || chromium.executablePath();
}

const versions = argValues('versions', allVersions);
const languages = argValues('languages', allLanguages);
const outputRoot = path.resolve(argValue('output', defaultOutput));

(async () => {
  for (const version of versions) if (!allVersions.includes(version)) throw new Error(`Versión no soportada: ${version}`);
  for (const lang of languages) if (!allLanguages.includes(lang)) throw new Error(`Idioma no soportado: ${lang}`);
  const { server, port } = await startStaticServer(root, 0);
  const browser = await chromium.launch({ headless: true, executablePath: browserExecutable() });
  let generated = 0;
  try {
    for (const version of versions) {
      for (const lang of languages) {
        const context = await browser.newContext({ viewport: { width: 1240, height: 1754 } });
        const page = await context.newPage();
        await page.goto(`http://127.0.0.1:${port}/ficha_export.html?version=${encodeURIComponent(version)}&lang=${encodeURIComponent(lang)}`, { waitUntil: 'domcontentloaded', timeout: 120000 });
        await page.waitForFunction(() => window.SC_APP?.getState().ready, null, { timeout: 120000 });
        const classes = await page.evaluate(() => window.SC_APP.getExportClasses());
        const pngDir = path.join(outputRoot, 'fichas_png', version, lang);
        const mdDir = path.join(outputRoot, 'fichas_md', version, lang);
        fs.mkdirSync(pngDir, { recursive: true });
        fs.mkdirSync(mdDir, { recursive: true });
        for (const item of classes) {
          const dataUrl = await page.evaluate(id => window.SC_APP.createPngDataUrl(id), item.id);
          fs.writeFileSync(path.join(pngDir, item.filename), Buffer.from(dataUrl.split(',')[1], 'base64'));
          const markdown = await page.evaluate(id => window.SC_APP.getExportMarkdown(id), item.id);
          fs.writeFileSync(path.join(mdDir, item.mdFilename), markdown, 'utf8');
          generated += 1;
        }
        await context.close();
        process.stdout.write(`${version}/${lang}: ${classes.length} PNG + MD\n`);
      }
    }
  } finally {
    await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
  process.stdout.write(`Generados: ${generated} PNG + ${generated} MD\nDestino externo: ${outputRoot}\n`);
})().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
