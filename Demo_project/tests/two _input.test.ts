import { test, expect } from '@playwright/test';

test('Two input Test', async ({page}) => {
   await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/", {waitUntil : 'networkidle'});
    console.log(page.url());
    await page.getByTitle("//h1[text()='Simple Form Demo']").isVisible();
    console.log(await expect(page.locator("#sum1")).toBeVisible());
    await page.getByPlaceholder("Please enter first value").fill('20');
    console.log(await expect(page.locator("#sum2")).toBeVisible());
    await page.locator("#sum2").pressSequentially('15', {delay: 100});
    await page.getByRole('button', {name: 'Get Sum'}).click();
    await expect(page.locator("#addmessage")).toContainText('35');
    page.close();
});