import { test, expect } from '@playwright/test';

test('Prompt Alert Test', async({page}) => {
   await page.goto("https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/");
   console.log(page.url());
   page.once('dialog', async (dialog) => { 
    console.log(dialog.message());
    await dialog.accept("Mythily");
   });
   await page.getByRole('button', { name: 'Click Me' }).last().click();
   console.log(await expect(page.locator("#prompt-demo")).toHaveText("You have entered 'Mythily' !"));
   page.close(); 
});