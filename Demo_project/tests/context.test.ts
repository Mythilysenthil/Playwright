import { chromium, test , expect} from "@playwright/test";

test("Login Test Demo", async() => {
    const browser = await chromium.launch({headless: false});
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.demoblaze.com/");
    await page.click("//a[@id='login2']");
    await page.fill("//input[@id='loginusername']","admin");
    await page.fill("//input[@id='loginpassword']","admin");
    await page.click("//button[@onclick='logIn()']");
    await page.waitForTimeout(5000);
    
    //context is shared to the nxt page1
    const page1 = await context.newPage();
    await page1.goto("https://www.demoblaze.com/cart.html");
    await page.waitForTimeout(5000);

    const NewPage = await context.newPage();
    await NewPage.goto("https://www.demoblaze.com/cart.html");
    await page.waitForTimeout(5000);
})