import { test ,expect } from '@playwright/test';

test.beforeEach(async ({page}, testInfo) => {
   await page.goto('http://automationexercise.com');
});
test('Verify Test case', async({ page }) => {
   await expect.soft(page.locator("//img[@alt='Website for automation practice']")).toBeVisible();
   await page.locator("//a[@href='/test_cases']").nth(1).click();
   await expect.soft(page).toHaveURL('https://automationexercise.com/test_cases');
});
test.afterEach(async ({page}, testInfo) => {
    console.log("Test Name:", testInfo.title);
    console.log("Execution Status:", testInfo.status);
    console.log("Expected Status:", testInfo.expectedStatus);
    page.close();
});