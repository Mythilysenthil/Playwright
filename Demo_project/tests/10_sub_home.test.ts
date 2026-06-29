import { test ,expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
   await page.goto('https://automationexercise.com');
});
test('Verify Test case', async({ page }) => {
   await expect(page.locator("//img[@alt='Website for automation practice']")).toBeVisible();
   const footer = page.getByText("Subscription");
   await footer.scrollIntoViewIfNeeded();
   await expect(footer).toContainText("Subscription");
   await page.getByPlaceholder("Your email address").fill("mythily@gmail.com");
   await page.locator("#subscribe").click();
   await expect(page.locator("//div[@class='alert-success alert']")).toHaveText("You have been successfully subscribed!");
});
test.afterEach(async ({page}, testInfo) => {
    console.log("Test Name:", testInfo.title);
    console.log("Execution Status:", testInfo.status);
    console.log("Expected Status:", testInfo.expectedStatus);
    page.close();
});