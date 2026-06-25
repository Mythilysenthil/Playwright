import { chromium, firefox, webkit , Browser ,Page , expect} from "@playwright/test";

(async() => {
    const browser = await firefox.launch({
        headless: false
    })

const context = await browser.newContext();
const page = await context.newPage();
await page.setViewportSize({width: 1280,height: 720});
await page.goto("https://www.google.com");
const title = await page.title();
console.log("Page Title:", title);
expect(title).toContain("Google");
const html = await page.content();
console.log("HTML Length:", html.length);
await page.waitForTimeout(5000);
await browser.close();
})();