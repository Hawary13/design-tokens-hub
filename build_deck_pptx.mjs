import puppeteer from "puppeteer-core";
import PptxGenJS from "pptxgenjs";
import fs from "node:fs";

const URL = "http://localhost:8080/deck";
const TOTAL = 15;
const W = 1920, H = 1080;
const OUT_DIR = "/tmp/deck_shots";
fs.mkdirSync(OUT_DIR, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: "/bin/chromium",
  headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox", "--font-render-hinting=none"],
  defaultViewport: { width: W, height: H, deviceScaleFactor: 2 },
});
const page = await browser.newPage();

// Hide chrome (top bar + footer) and make frame fill viewport
const HIDE_CSS = `
  .fixed.inset-x-0.top-0 { display:none !important; }
  main, body, html { background:#fff !important; }
  .max-w-\\[1600px\\] { max-width: 100vw !important; padding: 0 !important; }
  .aspect-\\[16\\/9\\] { aspect-ratio:auto !important; width:100vw !important; height:100vh !important; border-radius:0 !important; border:0 !important; box-shadow:none !important; }
  .mt-5.flex.items-center.justify-between { display:none !important; }
`;

await page.goto(URL, { waitUntil: "networkidle0", timeout: 60000 });
await page.addStyleTag({ content: HIDE_CSS });
// Wait for fonts
await page.evaluate(() => document.fonts.ready);

const shots = [];
for (let i = 0; i < TOTAL; i++) {
  // navigate via keyboard ArrowRight (Right -> next). Start at slide 0.
  if (i > 0) {
    await page.keyboard.press("ArrowRight");
    await new Promise(r => setTimeout(r, 350));
  }
  // Re-inject CSS in case react re-rendered
  await page.addStyleTag({ content: HIDE_CSS });
  await new Promise(r => setTimeout(r, 250));
  const file = `${OUT_DIR}/slide-${String(i+1).padStart(2,"0")}.png`;
  await page.screenshot({ path: file, clip: { x: 0, y: 0, width: W, height: H } });
  shots.push(file);
  console.log("captured", file);
}
await browser.close();

// Build pptx
const pptx = new PptxGenJS();
pptx.defineLayout({ name: "HD", width: 13.333, height: 7.5 });
pptx.layout = "HD";
pptx.rtlMode = true;
pptx.title = "Biruni — Pitch Deck";
for (const f of shots) {
  const s = pptx.addSlide();
  s.background = { color: "FFFFFF" };
  s.addImage({ path: f, x: 0, y: 0, w: 13.333, h: 7.5 });
}
const outPath = "/mnt/documents/Biruni_Pitch_Deck.pptx";
await pptx.writeFile({ fileName: outPath });
console.log("wrote", outPath);
