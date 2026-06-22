
(function(){
  const $ = (sel, root=document) => root.querySelector(sel);
  const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));
  const cacheScripts = new Set();
  const loadedVersions = new Set();
  const state = { version: null, data: null };

  function esc(v){ return String(v ?? '').replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s])); }
  function pad2(n){ return String(n).padStart(2,'0'); }
  function clsName(c){ return `${c.name_es} / ${c.name_en}`; }
  function kindClass(kind){ return kind === 'malus' ? 'neg' : kind === 'bonus' ? 'pos' : 'unlock'; }
  function kindLabel(kind){ return kind === 'malus' ? 'Malus' : kind === 'bonus' ? 'Bonus' : 'Desbloqueo'; }
  function scriptPath(path){ const depth = document.body.dataset.depth || ''; return depth + path; }

  function loadScript(path){
    const src = scriptPath(path);
    if(cacheScripts.has(src)) return Promise.resolve();
    return new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = src;
      s.onload = () => { cacheScripts.add(src); resolve(); };
      s.onerror = () => reject(new Error('No se pudo cargar ' + src));
      document.head.appendChild(s);
    });
  }

  async function loadVersion(version){
    const catalog = window.SC_MOD_VERSION_CATALOG;
    if(!catalog) throw new Error('No existe catalog_ES.js');
    const v = catalog.versions.find(x => x.id === version) || catalog.versions[0];
    if(!loadedVersions.has(v.id)){
      await loadScript(v.files.classes);
      await loadScript(v.files.traits);
      await loadScript(v.files.categories);
      await loadScript(v.files.recipes_summary);
      if(v.files.usage) await loadScript(v.files.usage);
      loadedVersions.add(v.id);
    }
    state.version = v.id;
    state.data = window.SC_MOD_VERSION_DATA[v.id];
    return state.data;
  }

  function buildVersionSelector(){
    const box = $('#versionBox');
    if(!box || !window.SC_MOD_VERSION_CATALOG) return;
    const c = window.SC_MOD_VERSION_CATALOG;
    box.innerHTML = `<label class="select-label">Versión del mod analizada</label><select id="versionSelect" class="select"></select>`;
    const select = $('#versionSelect');
    select.innerHTML = c.versions.map(v => `<option value="${esc(v.id)}">${esc(v.label)}</option>`).join('');
    select.value = state.version || c.defaultVersion;
    select.addEventListener('change', async () => { await loadVersion(select.value); renderCurrentPage(); });
  }

  function effectsForClass(classId){ return (state.data?.traits?.effects || []).filter(e => e.classId === classId); }
  function uniqueTraitsForClass(classId){ return [...new Set(effectsForClass(classId).map(e => e.traitId))]; }
  function countsForClass(classId){
    const eff = effectsForClass(classId);
    return { traits: uniqueTraitsForClass(classId).length, bonus: eff.filter(e => e.kind === 'bonus').length, malus: eff.filter(e => e.kind === 'malus').length, unlock: eff.filter(e => e.kind === 'desbloqueo').length };
  }
  function recipeSummary(classId){ return state.data?.recipes_summary?.recipesByClass?.[classId] || {total:0, byMethod:{}, topCategories:[], examples:[]}; }
  function usageForClass(classId){ return state.data?.usage?.classUsage?.[classId] || null; }

  function renderHeroTotals(){
    const target = $('#heroTotals');
    if(!target || !state.data) return;
    const classes = state.data.classes.classes;
    const effects = state.data.traits.effects;
    const recipes = state.data.recipes_summary.globalTotals;
    target.innerHTML = `<div class="statbox"><b>${classes.length}</b><span>clases</span></div><div class="statbox"><b>${new Set(effects.map(e=>e.traitId)).size}</b><span>rasgos</span></div><div class="statbox"><b>${effects.filter(e=>e.kind==='bonus').length}</b><span>bonus</span></div><div class="statbox"><b>${effects.filter(e=>e.kind==='malus').length}</b><span>malus</span></div><div class="statbox"><b>${recipes.totalRecipes}</b><span>recetas/desbloqueos</span></div>`;
  }

  function renderCards(){
    renderHeroTotals();
    const grid = $('#cards'); const table = $('#globalTable');
    if(!grid || !table || !state.data) return;
    const classes = state.data.classes.classes;
    grid.innerHTML = classes.map(c => {
      const counts = countsForClass(c.id); const rec = recipeSummary(c.id);
      return `<article class="card class-card" data-name="${esc((c.name_es+' '+c.name_en+' '+c.id).toLowerCase())}"><div class="card-topline"><span class="number">${pad2(c.order)}</span><code>${esc(c.id)}</code></div><h3>${esc(c.name_es)} <span class="muted">/ ${esc(c.name_en)}</span></h3><p>${esc(c.description_es)}</p><div class="badges"><span class="badge">Rasgos ${counts.traits}</span><span class="badge pos">Bonus ${counts.bonus}</span><span class="badge neg">Malus ${counts.malus}</span></div><div class="stats-row"><div class="statbox"><b>${rec.byMethod['mesa normal'] || 0}</b><span>mesa</span></div><div class="statbox"><b>${rec.byMethod['estación'] || 0}</b><span>estación</span></div><div class="statbox"><b>${rec.byMethod['compatibilidad'] || 0}</b><span>compat.</span></div><div class="statbox"><b>${rec.total}</b><span>total</span></div></div><p><a href="clase.html?class=${esc(c.id)}">Ver ficha dinámica</a> · ${c.static_exports.png ? `<a href="${esc(c.static_exports.png)}">PNG</a>` : ''} · <a href="${esc(c.static_exports.md)}">MD estático</a></p></article>`;
    }).join('');
    table.innerHTML = `<thead><tr><th>#</th><th>Clase</th><th>Código</th><th>Rasgos</th><th>Bonus</th><th>Malus</th><th>Recetas</th></tr></thead><tbody>` + classes.map(c => { const counts = countsForClass(c.id); const rec = recipeSummary(c.id); return `<tr><td>${pad2(c.order)}</td><td><a href="clase.html?class=${esc(c.id)}">${esc(c.name_es)}</a><br><span class="muted">${esc(c.name_en)}</span></td><td><code>${esc(c.id)}</code></td><td>${counts.traits}</td><td class="pos">${counts.bonus}</td><td class="neg">${counts.malus}</td><td>${rec.total}</td></tr>`; }).join('') + `</tbody>`;
    const q = $('#q');
    if(q && !q.dataset.bound){ q.dataset.bound = '1'; q.addEventListener('input',()=>{const v=q.value.toLowerCase().trim();$$('.class-card').forEach(c=>{c.style.display=c.dataset.name.includes(v)?'grid':'none';})}); }
  }

  function renderSideNav(current){
    const classes = state.data.classes.classes;
    const list = classes.map(c=>`<li><a ${c.id===current?'class="active-class"':''} href="clase.html?class=${esc(c.id)}">${pad2(c.order)}. ${esc(c.name_es)}</a></li>`).join('');
    return `<aside class="panel side"><h3>Clases</h3><ol class="clean small">${list}</ol><div class="side-version"><div id="versionBox"></div></div><p class="note small">El selector cambia la versión del mod analizada.</p><p class="small"><a href="rasgos.html">Rasgos</a> · <a href="mecanicas.html">Uso</a> · <a href="historico_web.html">Histórico web</a></p></aside>`;
  }

  function renderToolsCard(classId){
    const u = usageForClass(classId);
    if(!u) return `<div class="card"><h2>Herramientas especiales</h2><p class="human">Sin herramienta especial registrada para esta clase.</p></div>`;
    const tools = (u.keyObjects || []).slice(0,4).map(o=>`<li><b>${esc(o.name_es)}</b>: ${esc(o.use_es)}</li>`).join('');
    const steps = (u.howToUse_es || []).slice(0,3).map(x=>`<li>${esc(x)}</li>`).join('');
    const stations = (u.stations_es || []).length ? `<p class="note"><b>Estaciones:</b> ${u.stations_es.map(esc).join(' · ')}</p>` : '';
    return `<div class="card"><h2>Herramientas especiales</h2><p class="human">${esc(u.summary_es)}</p>${tools ? `<ul class="clean">${tools}</ul>` : ''}${steps ? `<details><summary>Uso rápido</summary><ol class="clean">${steps}</ol></details>` : ''}${stations}</div>`;
  }

  function effectLi(e){
    const label = e.effectLabel_es || e.effectText_es || e.statKey;
    const value = e.displayValue && e.displayValue !== '—' ? ` <b>${esc(e.displayValue)}</b>` : '';
    const raw = e.rawValue && e.rawValue !== '—' ? ` <span class="muted">(valor interno <code>${esc(e.rawValue)}</code>)</span>` : '';
    const method = e.method_es ? `<div class="method-note">${esc(e.method_es)}</div>` : '';
    return `<li>${esc(label)}:${value}${raw}${method}</li>`;
  }

  function renderEffectCards(effects){
    const bonus = effects.filter(e=>e.kind === 'bonus');
    const malus = effects.filter(e=>e.kind === 'malus');
    const unlock = effects.filter(e=>e.kind === 'desbloqueo');
    return `<div class="grid"><div class="card"><h2>Bonus objetivos</h2><ul class="clean pos">${bonus.length ? bonus.map(effectLi).join('') : '<li>Sin bonus registrado.</li>'}</ul></div><div class="card"><h2>Malus objetivos</h2><ul class="clean neg">${malus.length ? malus.map(effectLi).join('') : '<li>Sin malus registrado.</li>'}</ul></div></div>${unlock.length ? `<div class="card"><h2>Desbloqueos / permisos</h2><ul class="clean unlock">${unlock.map(effectLi).join('')}</ul></div>` : ''}`;
  }

  function renderClassPage(){
    const params = new URLSearchParams(location.search);
    const classId = params.get('class') || state.data.classes.classes[0].id;
    const c = state.data.classes.classes.find(x => x.id === classId) || state.data.classes.classes[0];
    const counts = countsForClass(c.id); const rec = recipeSummary(c.id); const effects = effectsForClass(c.id);
    const target = $('#classContent');
    const portrait = c.image ? `<img class="char" src="${esc(c.image)}" alt="${esc(c.name_es)}">` : `<div class="char-placeholder">Clase base</div>`;
    const icon = c.iconStrip ? `<img class="icon-strip" src="${esc(c.iconStrip)}" alt="Iconos de ${esc(c.name_es)}">` : '';
    const traitGroups = {}; effects.forEach(e => { (traitGroups[e.traitId] ||= []).push(e); });
    target.innerHTML = `<section class="hero portrait">${portrait}<div><h1>${esc(c.name_es)}</h1><div class="sub">${esc(c.name_en)} · código oficial <code>${esc(c.id)}</code> · ficha ${pad2(c.order)}/${pad2(state.data.classes.classes.length)}</div><div class="badges" style="margin-top:12px"><span class="badge">Rasgos: <b>&nbsp;${counts.traits}</b></span><span class="badge">Bonus: <b>&nbsp;${counts.bonus}</b></span><span class="badge">Malus: <b>&nbsp;${counts.malus}</b></span><span class="badge">Recetas: <b>&nbsp;${rec.total}</b></span></div>${icon}</div></section><div class="layout">${renderSideNav(c.id)}<section>${renderToolsCard(c.id)}${renderEffectCards(effects)}<div class="card"><h2>Rasgos oficiales y efectos reales</h2><p class="note">Datos dinámicos desde <code>data/mod_versions/${esc(state.version)}/traits_ES.js</code>.</p><div class="table-wrap"><table><thead><tr><th>Rasgo</th><th>Tipo</th><th>Datos objetivos</th></tr></thead><tbody>${Object.entries(traitGroups).map(([tid, arr])=>{const first=arr[0]; return `<tr><td><b>${esc(first.traitName_es)}</b><br><code>${esc(tid)}</code></td><td class="${kindClass(first.kind)}">${esc(first.sourceType_es || kindLabel(first.kind))}</td><td>${arr.map(e=>`${esc(e.effectLabel_es || e.effectText_es)}${e.displayValue && e.displayValue !== '—' ? `: <b>${esc(e.displayValue)}</b>` : ''} <span class="muted">${e.rawValue && e.rawValue !== '—' ? `(interno <code>${esc(e.rawValue)}</code>; técnico <code>${esc(e.statKey)}</code>)` : `(técnico <code>${esc(e.statKey)}</code>)`}</span>${e.method_es ? `<div class="method-note">${esc(e.method_es)}</div>` : ''}`).join('<br>')}</td></tr>`;}).join('')}</tbody></table></div></div><div class="card"><h2>Recetas / desbloqueos</h2><div class="stats-row"><div class="statbox"><b>${rec.byMethod['mesa normal'] || 0}</b><span>mesa normal</span></div><div class="statbox"><b>${rec.byMethod['estación'] || 0}</b><span>estación especial</span></div><div class="statbox"><b>${rec.byMethod['compatibilidad'] || 0}</b><span>compatibilidad</span></div><div class="statbox"><b>${rec.total}</b><span>salidas listadas</span></div></div><h3 style="margin-top:16px">Categorías principales</h3><div class="recipe-chips">${rec.topCategories.map(x=>`<span>${esc(x.category)}: <b>${x.count}</b></span>`).join('')}</div><details><summary>Ver ejemplos representativos</summary><div class="table-wrap"><table><thead><tr><th>Tipo</th><th>Categoría</th><th>Resultado</th><th>Compatibilidad</th></tr></thead><tbody>${rec.examples.map(x=>`<tr><td>${esc(x.method)}</td><td>${esc(x.category)}</td><td>${esc(x.output)}</td><td>${esc(x.compatMod)}</td></tr>`).join('')}</tbody></table></div></details></div><div class="card"><h2>Archivos de esta ficha</h2><p>${c.static_exports.png ? `<a href="${esc(c.static_exports.png)}">PNG estático</a> · ` : ''}<a href="${esc(c.static_exports.md)}">Markdown estático</a> · <a href="${esc(c.static_exports.html)}">HTML 2.1.2 estático</a></p><p class="note">Esta ficha visual imita la 2.1.2, pero los bonus, malus, rasgos, recetas y herramientas salen de los archivos dinámicos.</p></div></section></div>`;
    buildVersionSelector();
  }

  function renderTraitsPage(){
    const target = $('#traitsContent'); renderHeroTotals(); if(!target) return;
    const defs = state.data.traits.traits.slice().sort((a,b)=>a.name_es.localeCompare(b.name_es,'es'));
    const effects = state.data.traits.effects;
    target.innerHTML = defs.map(t => { const rows = effects.filter(e => e.traitId === t.id); const classNames = [...new Set(rows.map(e=>e.className_es))].join(', '); return `<article class="card trait-card" data-name="${esc((t.name_es+' '+t.name_en+' '+t.id+' '+classNames).toLowerCase())}"><h3>${esc(t.name_es)} <span class="muted">/ ${esc(t.name_en)}</span> <code>${esc(t.id)}</code></h3>${t.description_en_official ? `<p class="note">Descripción oficial EN: ${esc(t.description_en_official)}</p>` : ''}${state.data.usage?.traitUsageNotes?.[t.id] ? `<p class="usage-note"><b>Uso:</b> ${esc(state.data.usage.traitUsageNotes[t.id])}</p>` : ''}<p><b>Clases:</b> ${esc(classNames)}</p><div class="table-wrap"><table><thead><tr><th>Clase</th><th>Tipo</th><th>Efecto</th><th>Valor</th></tr></thead><tbody>${rows.map(e=>`<tr><td><a href="clase.html?class=${esc(e.classId)}">${esc(e.className_es)}</a></td><td class="${kindClass(e.kind)}">${kindLabel(e.kind)}</td><td>${esc(e.effectText_es)}${e.method_es ? `<div class="method-note">${esc(e.method_es)}</div>` : ''}</td><td>${esc(e.displayValue)}</td></tr>`).join('')}</tbody></table></div></article>`; }).join('');
    const q = $('#traitQ'); if(q && !q.dataset.bound){ q.dataset.bound = '1'; q.addEventListener('input',()=>{const v=q.value.toLowerCase().trim();$$('.trait-card').forEach(c=>{c.style.display=c.dataset.name.includes(v)?'block':'none';})}); }
  }

  function renderMechanicsPage(){
    renderHeroTotals(); const target = $('#mechanicsContent'); if(!target || !state.data?.usage) return;
    const classes = state.data.classes.classes; const udata = state.data.usage.classUsage || {}; const global = state.data.usage.globalMechanics || [];
    target.innerHTML = `<section class="grid">${global.map(g=>`<article class="card"><h3>${esc(g.title_es)}</h3><p>${esc(g.body_es)}</p></article>`).join('')}</section><section class="card"><h2>Objetos y mecánicas por clase</h2><div class="table-wrap"><table><thead><tr><th>Clase</th><th>Resumen de uso</th><th>Objetos clave</th></tr></thead><tbody>${classes.map(c=>{const u=udata[c.id]||{}; const objs=(u.keyObjects||[]).map(o=>o.name_es).join(' · '); return `<tr><td><a href="clase.html?class=${esc(c.id)}"><b>${esc(c.name_es)}</b></a><br><span class="muted">${esc(c.name_en)}</span></td><td>${esc(u.summary_es || c.description_es)}</td><td>${esc(objs || '—')}</td></tr>`;}).join('')}</tbody></table></div></section>`;
  }

  function renderWebHistoryPage(){
    const target = $('#webHistoryContent'); if(!target) return;
    const entries = [
      {v:'2.4.2', title:'Versión del mod 2.2.2 añadida', items:['Se añade Specialized Classes 2.2.2 al selector de versión del mod.', 'Stats, rasgos y recetas de 2.2.2 salen de data/mod_versions/2.2.2/.', 'Se mantiene 3.0.0-rc.1 como versión analizada por defecto y 2.2.2 como histórica/comparable.']},
      {v:'2.4.1', title:'Ficha dinámica con aspecto 2.1.2', items:['Las fichas dinámicas vuelven al diseño visual de la 2.1.2: retrato grande, menú lateral, bonus y malus en dos tarjetas.', 'El bloque Resumen humano se sustituye por Herramientas especiales, usando datos de usage_ES.js.', 'La pantalla principal deja de mostrar el bloque de cambios para no confundirlo con la versión del mod.']},
      {v:'2.4.0', title:'Uso real por clase', items:['Se añadió usage_ES.js con herramientas, estaciones y pasos de uso por clase.', 'Se creó Objetos y uso por clase.', 'Se corrigió el Archivista: palanca/crowbar + clic derecho para clutter/vasijas compatibles.']},
      {v:'2.3.0', title:'Datos separados y rasgos mantenibles', items:['Clases, rasgos, recetas y categorías se separaron en archivos dinámicos.', 'Se añadió selector de versión del mod.', 'Se creó Rasgos y efectos.']},
      {v:'2.1.2', title:'Lectura humana', items:['Se humanizaron categorías técnicas tipo clutter-*.', 'Se regeneraron fichas PNG/HTML/MD estáticas.', 'Se añadió glosario de lectura humana.']}
    ];
    target.innerHTML = `<section class="card"><h2>Importante</h2><p class="human">Estas versiones son de la <b>web/documentación</b>. No son versiones del juego ni del mod Specialized Classes.</p><p>La versión del mod analizada se elige con el selector: por ahora <code>${esc(window.SC_MOD_VERSION_CATALOG.defaultVersion)}</code>.</p></section>` + entries.map(e=>`<article class="card"><h2>Web ${esc(e.v)} — ${esc(e.title)}</h2><ul class="clean">${e.items.map(i=>`<li>${esc(i)}</li>`).join('')}</ul></article>`).join('');
  }

  function renderCurrentPage(){
    const page = document.body.dataset.page;
    if(page !== 'class' && page !== 'webhistory') buildVersionSelector();
    if(page === 'index') renderCards();
    if(page === 'class') renderClassPage();
    if(page === 'traits') renderTraitsPage();
    if(page === 'mechanics') renderMechanicsPage();
    if(page === 'webhistory' || page === 'versions') renderWebHistoryPage();
  }

  document.addEventListener('DOMContentLoaded', async () => {
    try{ const defaultVersion = window.SC_MOD_VERSION_CATALOG.defaultVersion; await loadVersion(defaultVersion); renderCurrentPage(); }
    catch(err){ console.error(err); const main = $('main') || document.body; main.insertAdjacentHTML('afterbegin', `<section class="card error"><h2>Error cargando datos</h2><p>${esc(err.message)}</p><p>Comprueba que existen los archivos en <code>data/mod_versions/</code>.</p></section>`); }
  });
})();
