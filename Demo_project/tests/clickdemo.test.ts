import { test } from '@playwright/test';

test.beforeEach(async ({page}) => {
   await page.goto('https://www.demoblaze.com');
});

test('Default Click', async ({page}) => { 
    await page.locator('#login2').click();
});

test('Right Click', async ({page}) => {   
    await page.locator('#login2').click({button:'right'});
});

test('Middle Click', async ({page}) => {
    await page.locator('#cartur').click({button:'middle'});
});

test('Double Click', async ({page}) => {
    await page.locator('#login2').click({clickCount:2});
});

test('Click With Delay', async ({page}) => {
    await page.locator('#login2').click({delay: 1000});
});

test.afterEach(async ({page}, testInfo ) => {
    console.log("Test name:", testInfo.title);
    console.log("Execution status:", testInfo.status);
    page.close();
});