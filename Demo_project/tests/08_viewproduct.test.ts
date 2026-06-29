import { test ,expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
   await page.goto('http://automationexercise.com');
});
test('Verify Test case', async({ page }) => {
   await expect.soft(page.locator("//img[@alt='Website for automation practice']")).toBeVisible();
   await page.getByRole('link' , {name: ' Products'}).click();
   await expect.soft(page).toHaveURL('https://automationexercise.com/products');
   await expect.soft(page.locator("//h2[text()='All Products']")).toBeVisible();
   await page.getByRole('link', {name: 'View Product'}).first().click();
   await expect.soft(page.locator("//div[@class='col-sm-7']")).toBeVisible();
});
test.afterEach(async ({page}, testInfo) => {
    console.log("Test Name:", testInfo.title);
    console.log("Execution Status:", testInfo.status);
    console.log("Expected Status:", testInfo.expectedStatus);
    page.close();
});