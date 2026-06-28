import {test, expect } from '@playwright/test';

test('Form demo Test', async ({page}) => {

    await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/" , {waitUntil : 'networkidle'});
    console.log(page.url());
    await page.getByTitle("//h1[text()='Simple Form Demo']").isVisible();
    console.log(await page.getByPlaceholder("Please enter your Message").isVisible());
    console.log(await page.getByPlaceholder("Please enter your Message").innerText());
    await page.getByPlaceholder("Please enter your Message").fill("Mythily");
    await page.getByRole('button', {name: 'Get Checked Value'}).click();
    await expect(page.getByText("Mythily")).toContainText("Mythily");
    page.close();
});