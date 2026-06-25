import {test, expect } from '@playwright/test';

test('Login Test', async ({page}) => {
    await page.goto("http://automationexercise.com");
    await expect(page.locator("//img[@alt='Website for automation practice']")).toBeVisible();
    await page.getByText(" Signup / Login").click();
    await page.locator("//input[@data-qa='login-email']").fill(process.env.UNAME!);
    await page.getByPlaceholder("Password").fill(process.env.PASSWORD!);
    await page.getByRole('button',{name: 'Login'}).click();
    await expect(page.locator("//a[text()=' Logged in as ']")).toBeVisible();
});