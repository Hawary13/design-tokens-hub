import puppeteer from "puppeteer-core";
import PptxGenJS from "pptxgenjs";
import fs from "node:fs";

const URL = "http://localhost:8080/deck";
const TOTAL = 15;
const OUT_DIR = "/tmp/deck_shots";
fs.mkdirSync(OUT_DIR, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: "/bin/chromium",
  headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox", "--font-render-hinting=none"],
  // Viewport wide enough so max-w-[1600px] container reaches its full width.
  defaultViewport: { width: 1640, height: 1000, deviceScaleFactor: 2 },
});
const page = await browser.newPage();

await page.goto(URL, { waitUntil: "networkidle0", timeout: 60000 });
await page.evaluate(() => document.fonts.ready);
await new Promise(r => setTimeout(r, 800));

const shots = [];
for (let i = 0; i < TOTAL; i++) {
  if (i > 0) {
    await page.keyboard.press("ArrowRight");
    await new Promise(r => setTimeout(r, 400));
  }
  // Find the slide frame (the aspect-16/9 container holding the slide)
  const box = await page.evaluate(() => {
    const el = document.querySelector('.aspect-\\[16\\/9\\]');
    if (!el) return null;
    const r = el.getBoundingClientRect();
    return { x: r.x, y: r.y, width: r.width, height: r.height };
  });
  if (!box) throw new Error("Slide frame not found on slide " + (i+1));
  const file = `${OUT_DIR}/slide-${String(i+1).padStart(2,"0")}.png`;
  await page.screenshot({
    path: file,
    clip: { x: Math.round(box.x), y: Math.round(box.y), width: Math.round(box.width), height: Math.round(box.height) },
  });
  shots.push(file);
  console.log("captured", file, `${Math.round(box.width)}x${Math.round(box.height)}`);
}
await browser.close();

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
