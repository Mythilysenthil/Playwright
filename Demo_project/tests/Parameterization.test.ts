import {test , expect } from '@playwright/test';

const searchData = [
    { keyword: "playwright", expectedTitle: "Playwright"},
    { keyword: "Selenium", expectedTitle: "Selenium"},
    { keyword: "Cypress", expectedTitle: "Cypress"}
]
test.beforeEach(async ({ page }) => {
    await page.goto("https://www.google.com");
});
test.describe("Google search", () => {
   for(const data of searchData){
    test(`Search Flow - ${data.keyword}`, async({ page }) => {
       await page.locator("textarea[name='q']").fill(data.keyword);
       await page.keyboard.press("Enter");
       //check the first result
       const firstResult = page.locator("h3").first();
       await firstResult.click();
       //validate title
       await expect(page).toHaveTitle(new RegExp(data.expectedTitle, "i"))
    });
   }
});
test.afterEach(async({page}) => {
    console.log("Test is completed")
    page.close();
});