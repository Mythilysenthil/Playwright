import { test, expect } from '@playwright/test';

test('Conformation Alert Test' , async({page}) => {
   await page.goto("https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/");
   console.log(page.url());
   page.once('dialog', async (dialog) => { 
    console.log(dialog.message());
    await dialog.accept("Mythily");
   });
   await page.getByRole('button', { name: 'Click Me' }).last().click();
   console.log(await expect(page.getByText("You pressed Cancel!")).toBeVisible());
   page.close(); 
});