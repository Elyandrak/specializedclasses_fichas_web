(function(){
  const manifest=()=>window.SC_CARD_TEMPLATES||{};
  const canvasSize=()=>manifest().canvas||{width:1240,height:1754};
  const fontFamily='Georgia, "Times New Roman", serif';
  const scriptBase=(()=>{
    const source=document.currentScript?.src||document.baseURI;
    return new URL('../../',source);
  })();

  function templateEntryFor(version,classId){
    const versionConfig=manifest().versions?.[version];
    const entry=versionConfig?.classes?.[classId]||null;
    if(!entry)return null;
    return typeof entry==='string'?{webp:entry}:entry;
  }

  function templateFor(version,classId){
    const entry=templateEntryFor(version,classId);
    return entry?.webp||entry?.dataUri||null;
  }

  function imageSource(template){
    const entry=typeof template==='string'?{webp:template}:template;
    const raw=entry?.dataUri||entry?.webp||entry?.path||'';
    if(!raw)return '';
    if(/^(data:|blob:|https?:|file:)/i.test(raw))return raw;
    return new URL(raw,scriptBase).href;
  }

  function loadImage(template){
    const label=typeof template==='string'?template:(template?.webp||template?.path||'plantilla incrustada');
    const src=imageSource(template);
    return new Promise((resolve,reject)=>{
      const image=new Image();
      image.decoding='async';
      image.onload=()=>resolve(image);
      image.onerror=()=>reject(new Error(`No se pudo cargar la plantilla ${label} (${src})`));
      image.src=src;
    });
  }

  function drawLoadError(ctx,size,message){
    ctx.fillStyle='#120b05';
    ctx.fillRect(0,0,size.width,size.height);
    ctx.strokeStyle='#d59f35';
    ctx.lineWidth=4;
    ctx.strokeRect(28,28,size.width-56,size.height-56);
    setFont(ctx,42,'#ffb38f','700');
    ctx.fillText('No se pudo cargar la plantilla',72,84);
    drawWrapped(ctx,message,{x:72,y:158,w:size.width-144,h:220},{size:22,lineHeight:1.35,color:'#ead7a2',maxLines:7});
  }

  function setFont(ctx,size,color,weight='400'){
    ctx.font=`${weight} ${size}px ${fontFamily}`;
    ctx.fillStyle=color;
    ctx.textBaseline='top';
  }

  function linesFor(ctx,value,maxWidth){
    const paragraphs=String(value??'').split(/\r?\n/),lines=[];
    paragraphs.forEach((paragraph,index)=>{
      const words=paragraph.trim().split(/\s+/).filter(Boolean);
      if(!words.length){if(index<paragraphs.length-1)lines.push('');return;}
      let line='';
      words.forEach(word=>{
        const candidate=line?`${line} ${word}`:word;
        if(line&&ctx.measureText(candidate).width>maxWidth){lines.push(line);line=word;}else line=candidate;
      });
      if(line)lines.push(line);
    });
    return lines;
  }

  function drawWrapped(ctx,value,zone,{size=22,lineHeight=1.22,color='#e8d7b4',weight='400',maxLines=null}={}){
    setFont(ctx,size,color,weight);
    const step=Math.round(size*lineHeight),limit=maxLines||Math.max(1,Math.floor(zone.h/step));
    const lines=linesFor(ctx,value,zone.w).slice(0,limit);
    if(lines.length===limit&&linesFor(ctx,value,zone.w).length>limit){
      let last=lines[limit-1];
      while(last&&ctx.measureText(`${last}…`).width>zone.w)last=last.slice(0,-1);
      lines[limit-1]=`${last.trim()}…`;
    }
    lines.forEach((line,index)=>ctx.fillText(line,zone.x,zone.y+index*step));
  }

  function drawCenteredStat(ctx,zone,value,label){
    setFont(ctx,28,'#ffeaa0','700');
    ctx.textAlign='center';
    ctx.fillText(String(value),zone.x+zone.w/2,zone.y+8);
    setFont(ctx,13,'#d8b16a','600');
    const labelLines=linesFor(ctx,label,zone.w-12).slice(0,2);
    labelLines.forEach((line,index)=>ctx.fillText(line,zone.x+zone.w/2,zone.y+46+index*15));
    ctx.textAlign='left';
  }

  function drawList(ctx,items,zone,color){
    const text=(items||[]).map(item=>`• ${item}`).join('\n');
    drawWrapped(ctx,text||'—',zone,{size:20,lineHeight:1.22,color,maxLines:13});
  }

  async function draw(canvas,model){
    const size=canvasSize();
    canvas.width=size.width; canvas.height=size.height;
    const ctx=canvas.getContext('2d',{alpha:false});
    const template=templateEntryFor(model.version,model.classId);
    if(!template)throw new Error(`No existe plantilla para ${model.classId} (${model.version})`);
    let background;
    try{background=await loadImage(template);}catch(error){drawLoadError(ctx,size,error.message);throw error;}
    ctx.drawImage(background,0,0,size.width,size.height);

    drawWrapped(ctx,model.title,{x:72,y:72,w:900,h:70},{size:58,lineHeight:1,color:'#ffeaa0',weight:'700',maxLines:1});
    drawWrapped(ctx,model.meta,{x:74,y:142,w:980,h:40},{size:20,lineHeight:1.2,color:'#d8b16a',weight:'600',maxLines:1});
    drawWrapped(ctx,model.intro,{x:74,y:182,w:1030,h:45},{size:18,lineHeight:1.25,color:'#c9ad85',maxLines:2});
    drawCenteredStat(ctx,{x:351,y:288,w:154,h:79},model.stats.traits,model.labels.traits);
    drawCenteredStat(ctx,{x:538,y:288,w:154,h:79},model.stats.bonus,model.labels.bonus);
    drawCenteredStat(ctx,{x:725,y:288,w:154,h:79},model.stats.malus,model.labels.malus);
    drawCenteredStat(ctx,{x:912,y:288,w:154,h:79},model.stats.recipes,model.labels.recipes);
    drawWrapped(ctx,model.labels.summary,{x:354,y:396,w:700,h:35},{size:26,lineHeight:1.1,color:'#f5c15d',weight:'700',maxLines:1});
    drawWrapped(ctx,model.summary,{x:354,y:437,w:780,h:170},{size:23,lineHeight:1.25,color:'#e8d7b4',maxLines:5});
    drawWrapped(ctx,model.labels.bonusTitle,{x:62,y:704,w:440,h:38},{size:26,lineHeight:1.1,color:'#86e86f',weight:'700',maxLines:1});
    drawList(ctx,model.bonus,{x:62,y:752,w:500,h:320},'#86e86f');
    drawWrapped(ctx,model.labels.malusTitle,{x:620,y:704,w:440,h:38},{size:26,lineHeight:1.1,color:'#ff8a5c',weight:'700',maxLines:1});
    drawList(ctx,model.malus,{x:620,y:752,w:500,h:320},'#ff8a5c');
    drawWrapped(ctx,model.labels.recipesTitle,{x:62,y:1142,w:780,h:38},{size:26,lineHeight:1.1,color:'#f5c15d',weight:'700',maxLines:1});
    drawList(ctx,model.recipeColumns[0],{x:62,y:1194,w:500,h:200},'#e8d7b4');
    drawList(ctx,model.recipeColumns[1],{x:620,y:1194,w:500,h:200},'#e8d7b4');
    drawWrapped(ctx,model.labels.categories,{x:755,y:1502,w:360,h:34},{size:25,lineHeight:1.1,color:'#f5c15d',weight:'700',maxLines:1});
    drawWrapped(ctx,model.categories,{x:755,y:1542,w:360,h:96},{size:20,lineHeight:1.2,color:'#e8d7b4',maxLines:4});
    return canvas;
  }

  async function create(model){
    const canvas=document.createElement('canvas');
    return draw(canvas,model);
  }

  function blobFromCanvas(canvas){
    return new Promise((resolve,reject)=>canvas.toBlob(blob=>blob?resolve(blob):reject(new Error('El navegador no pudo crear el PNG.')),'image/png'));
  }

  function saveBlob(blob,filename){
    const url=URL.createObjectURL(blob),anchor=document.createElement('a');
    anchor.href=url; anchor.download=filename; document.body.appendChild(anchor); anchor.click(); anchor.remove();
    setTimeout(()=>URL.revokeObjectURL(url),1000);
  }

  async function download(model,filename){
    const canvas=await create(model),blob=await blobFromCanvas(canvas);
    saveBlob(blob,filename);
    return {filename,width:canvas.width,height:canvas.height,size:blob.size};
  }

  window.SC_PNG_EXPORT={draw,create,download,blobFromCanvas,saveBlob,templateFor};
})();
