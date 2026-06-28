import { test, expect } from '@playwright/test';

test('Simple Alert Test', async({page}) => {
   await page.goto("https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/");
   console.log(page.url());
   page.once('dialog', async (dialog) => { 
    console.log(dialog.message());
    await dialog.accept(); 
   });
   await page.getByRole('button', { name: 'Click Me' }).first().click();
   page.close(); 
});