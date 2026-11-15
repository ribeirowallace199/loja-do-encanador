import fs from 'fs';
import path from 'path';

const outDir = 'C:/Users/Desktop/.gemini/antigravity/scratch/casa-do-encanador/public/images/products';

async function searchPexels(query) {
  const url = 'https://www.pexels.com/search/' + encodeURIComponent(query) + '/';
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
  });
  const html = await res.text();
  const matches = [...html.matchAll(/https:\/\/images\.pexels\.com\/photos\/[0-9]+\/[^"'\\s\?]+\.jpeg/g)];
  return matches.map(m => m[0]);
}

async function download(url, filename) {
  const dest = path.join(outDir, filename);
  // append sizing params for clean 800px product image
  const fullUrl = url.includes('?') ? url : `${url}?auto=compress&cs=tinysrgb&w=800`;
  const res = await fetch(fullUrl, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    }
  });
  if (res.ok) {
    const buffer = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(dest, buffer);
    console.log(`[OK] Downloaded ${filename} (${buffer.length} bytes)`);
    return true;
  } else {
    console.log(`[FAIL] ${filename}: HTTP ${res.status}`);
    return false;
  }
}

async function main() {
  const items = [
    { query: 'metal water tap', file: 'torneira-jardim.jpg' },
    { query: 'garden hose coiled', file: 'mangueira-jardim.jpg' },
    { query: 'shower faucet fixture', file: 'registro-chuveiro.jpg' },
    { query: 'sink drain pipe', file: 'sifao-sanfonado-branco.jpg' },
    { query: 'chrome bathroom sink faucet', file: 'sifao-sanfonado-cromado.jpg' },
    { query: 'yellow conduit pipe', file: 'conduite-amarelo.jpg' },
    { query: 'white teflon tape roll', file: 'fita-veda-rosca.jpg' },
    { query: 'glue tube adhesive', file: 'cola-pvc.jpg' },
    { query: 'braided flexible hose pipe', file: 'engate-inox.jpg' },
  ];

  for (const item of items) {
    try {
      const urls = await searchPexels(item.query);
      if (urls && urls.length > 0) {
        console.log(`Found ${urls.length} images for "${item.query}", downloading top match...`);
        await download(urls[0], item.file);
      } else {
        console.log(`No results for "${item.query}"`);
      }
    } catch (err) {
      console.log(`Error searching for ${item.query}:`, err.message);
    }
  }
}

main();
