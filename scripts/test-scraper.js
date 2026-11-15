async function testLdJson(query) {
  const res = await fetch('https://www.pexels.com/search/' + encodeURIComponent(query) + '/', {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    }
  });
  const html = await res.text();
  const ldMatches = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)];
  for (const m of ldMatches) {
    try {
      const data = JSON.parse(m[1]);
      if (data.itemListElement) {
        data.itemListElement.slice(0, 5).forEach((item, i) => {
          console.log(`[${query}] #${i}:`, item.item?.image || item.item?.url);
        });
      }
    } catch (e) {}
  }
}

async function run() {
  await testLdJson('sink drain');
  await testLdJson('teflon tape');
  await testLdJson('glue tube');
  await testLdJson('corrugated pipe');
}

run();
