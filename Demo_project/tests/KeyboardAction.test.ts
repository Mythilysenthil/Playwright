import { test } from '@playwright/test';

test('Keyboard Action - DemoBlaze', async ({ page }) => {
    
    test.setTimeout(60000); //for test
    page.setDefaultTimeout(10000); //for action
    await page.goto('https://www.demoblaze.com/');
    await page.click('#login2');
    await page.waitForSelector('#loginusername', {timeout:15000});
    await page.keyboard.type('admin');
    await page.keyboard.press('Tab');
    await page.keyboard.type('admin123');
    await page.keyboard.press('Enter');
});