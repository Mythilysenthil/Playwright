import {test, expect } from '@playwright/test';
import dotenv from 'dotenv'
dotenv.config()
test('Login Test', async ({page}) => {
    await page.goto(process.env.BASE_URL!);
    await page.click('#login2');
    await page.fill('#loginusername',process.env.UNAME!);
    await page.fill('#loginpassword',process.env.PASSWORD!);
    await page.click('//button[@onclick="logIn()"]');
    await expect(page.locator('//a[text()="Welcome admin"]')).toHaveText("Welcome admin");
});