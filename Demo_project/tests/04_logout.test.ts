import {test, expect } from '@playwright/test';

test('Logout Test', async ({page}) => {
    await page.goto("http://automationexercise.com");
    await expect(page.locator("//img[@alt='Website for automation practice']")).toBeVisible();
    await page.getByText(" Signup / Login").click();
    await page.locator("//input[@data-qa='login-email']").fill("mythily11@gmail.com");
    await page.getByPlaceholder("Password").fill("mythily");
    await page.getByRole('button',{name: 'Login'}).click();
    await expect(page.getByText('Logged in as Mythily')).toBeVisible();
    await page.getByRole('link', {name: ' Logout'}).click();
    await expect(page).toHaveURL('https://automationexercise.com/login'); 
});