import { test } from '@playwright/test';

test('Keyboard Action - DemoBlaze', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');
    await page.click('#login2');
    await page.waitForSelector('#loginusername');
    await page.keyboard.type('admin');
    await page.keyboard.press('Tab');
    await page.keyboard.type('admin123');
    await page.keyboard.press('Enter');
});