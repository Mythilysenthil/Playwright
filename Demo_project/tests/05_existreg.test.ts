import { test, expect } from '@playwright/test';

test('Exist Registation Test', async ({ page }) => {
  await page.goto("http://automationexercise.com");
  await expect(page.locator("//img[@alt='Website for automation practice']")).toBeVisible();
  await page.getByText(" Signup / Login").click();
  await page.getByPlaceholder("Name").fill("Mythily");
  await page.locator("//input[@data-qa = 'signup-email']").fill("mythily@gmail.com");
  await page.getByRole('button',{name : 'Signup'}).click();
  await expect(page.getByText("Email Address already exist!")).toBeVisible();
});