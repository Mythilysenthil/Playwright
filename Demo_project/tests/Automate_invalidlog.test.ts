import {test, expect } from '@playwright/test';

test('Invalidlogin Test', async ({page}) => {
    await page.goto("http://automationexercise.com");
    await expect(page.locator("//img[@alt='Website for automation practice']")).toBeVisible();
    await page.getByText(" Signup / Login").click();
    await page.locator("//input[@data-qa='login-email']").fill("mythily@gmail.com");
    await page.getByPlaceholder("Password").fill("mythily123");
    await page.getByRole('button',{name: 'Login'}).click();
    await expect(page.locator("//p[text()='Your email or password is incorrect!']")).toBeVisible();
});