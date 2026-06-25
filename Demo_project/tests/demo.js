import { firefox } from "@playwright/test";
(async () => {
    const browser = await firefox.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto("https://www.google.com");
    await page.waitForTimeout(5000);
    await page.title();
    await browser.close();
})();
