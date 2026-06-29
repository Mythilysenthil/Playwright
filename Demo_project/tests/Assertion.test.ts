import {test ,  expect } from '@playwright/test';

test.skip("Skip Demo Test", async({page}) => {
   test.skip(true, "Module under development");
    await page.goto("https://www.demoblaze.com/");
    await page.click('#login2');
    await page.fill('#loginusername','admin');
    await page.fill('#loginpassword','admin');
    await page.click('//button[@onclick="logIn()"]');

    await expect.soft(page.getByRole("link", { name: "Log out" })).toBeVisible();
    await expect.soft(page.locator('//a[text()="Welcome admin"]')).toHaveText("Welcome admin");
});

test("Login Test2 @smoke", async({page}) => {

    await page.goto("https://www.demoblaze.com/");
    await page.click('#login2');
    await page.fill('#loginusername','admin');
    await page.fill('#loginpassword','admin');
    await page.locator('//button[@onclick="logIn()"]').click();

    await expect.soft(page.locator("//a[text()='Log out']")).toBeVisible();
    await expect.soft(page.locator('//a[text()="Welcome admin"]')).toContainText("Welcome admin");
});

test("Login Test3 @regression", async({page}) => {

    await page.goto("https://www.demoblaze.com/");
    await page.click('#login2');
    await page.fill('#loginusername','admin');
    await page.fill('#loginpassword','admin');
    await page.click('//button[@onclick="logIn()"]');

    await expect.soft(page.getByRole("link", { name: "Log out" })).toBeVisible();
    await expect.soft(page.locator('//a[text()="Welcome admin"]')).toHaveText("Welcome admin");
});

test.describe.only("E-Commerce",{tag : "@smoke"}, () => {
    test.describe("Authentication", () =>{
        test("Login", async({page}) => {
            console.log("logging");
        });
        test("Log out", async({page}) => {
            console.log("log out");
        });
    });
    test.describe.skip("Shopping", () =>{
        test("Cart", async({page}) => {
            console.log("Add to cart");
        });
        test("Pay", async({page}) => {
            console.log("Payment");
        });
    });
});

test.afterEach(async ({}, testInfo) => {
    console.log("Test Name:", testInfo.title);
    console.log("Execution Status:", testInfo.status);
    console.log("Expected Status:", testInfo.expectedStatus);
});