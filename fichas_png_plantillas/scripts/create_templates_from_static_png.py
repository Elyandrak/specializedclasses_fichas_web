from pathlib import Path
from PIL import Image, ImageDraw
import zipfile, shutil, re, unicodedata

# Uso:
# python scripts/create_templates_from_static_png.py <zip_png_estaticos> <carpeta_salida>
# Ejemplo:
# python scripts/create_templates_from_static_png.py 3.0.0-rc.1-es.zip fichas_png_plantillas

def slugify(name):
    stem = Path(name).stem
    m = re.search(r'_([A-Za-z0-9]+)$', stem)
    if m:
        return m.group(1).lower()
    s = unicodedata.normalize('NFKD', stem).encode('ascii','ignore').decode()
    return re.sub(r'[^a-zA-Z0-9]+','_',s).strip('_').lower()

blank_regions = [
    [60, 58, 1170, 232],
    [330, 270, 1170, 390],
    [334, 382, 1170, 628],
    [50, 670, 1170, 1095],
    [50, 1115, 1170, 1410],
    [735, 1485, 1170, 1652],
]

def main(zip_path, output_dir):
    zip_path = Path(zip_path)
    output_dir = Path(output_dir)
    tmp = output_dir / "_tmp_source_extract"
    shutil.rmtree(tmp, ignore_errors=True)
    tmp.mkdir(parents=True)
    with zipfile.ZipFile(zip_path) as z:
        z.extractall(tmp)

    png_out = output_dir / "assets/card_templates/3.0.0-rc.1/png"
    webp_out = output_dir / "assets/card_templates/3.0.0-rc.1/webp"
    png_out.mkdir(parents=True, exist_ok=True)
    webp_out.mkdir(parents=True, exist_ok=True)

    fill = (33, 19, 9)
    for src in sorted(tmp.glob("*.png")):
        class_id = slugify(src.name)
        img = Image.open(src).convert("RGB")
        draw = ImageDraw.Draw(img)
        for box in blank_regions:
            draw.rectangle(box, fill=fill)
        img.save(png_out / f"{class_id}.png", optimize=True)
        img.save(webp_out / f"{class_id}.webp", "WEBP", quality=88, method=6)
        print("OK", class_id)

    shutil.rmtree(tmp, ignore_errors=True)

if __name__ == "__main__":
    import sys
    if len(sys.argv) != 3:
        raise SystemExit("Uso: python scripts/create_templates_from_static_png.py <zip_png_estaticos> <carpeta_salida>")
    main(sys.argv[1], sys.argv[2])
