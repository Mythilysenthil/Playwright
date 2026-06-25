import { test, expect } from '@playwright/test';

test('Exist Registation Test', async ({ page }) => {
  await page.goto("http://automationexercise.com");
  await expect(page.locator("//img[@alt='Website for automation practice']")).toBeVisible();
  await page.getByText(" Signup / Login").click();
  await page.getByPlaceholder("Name").fill("Mythily");
  await page.locator("//input[@data-qa = 'signup-email']").fill("mythily@gmail.com");
  await page.getByRole('button',{name : 'Signup'}).click();
  await page.locator("#id_gender2").click();
  await page.locator("#password").fill("mythily");
  await page.selectOption("#days", {value: "11"});
  await page.selectOption("#months", {value: "9"});
  await page.selectOption("#years", {value: "2004"});
  await page.locator("#newsletter").check();
  await page.locator("#optin").check();
  await page.locator("#first_name").fill("Mythily");
  await page.locator("#last_name").fill("S");
  await page.locator("#company").fill("ABC");
  await page.locator("#address1").fill("12/6 Anna nagar");
  await page.selectOption("#country", {value: "India"});
  await page.locator("#state").fill("Tamil nadu");
  await page.locator("#city").fill("Salem");
  await page.locator("#zipcode").fill("636003");
  await page.locator("#mobile_number").fill("1234567890");
  await page.getByRole('button',{name : 'Create Account'}).click();
  await expect(page.locator("//b[text()='Account Created!']")).toContainText("Account Created!");
  await page.getByRole("link",{name : "Continue"}).click();
  await page.getByRole('link', {name: ' Logout'}).click();
  await page.getByPlaceholder("Name").fill("Mythily");
  await page.locator("//input[@data-qa = 'signup-email']").fill("mythily@gmail.com");
  await page.getByRole('button',{name : 'Signup'}).click();
  await expect(page.getByText("Email Address already exist!")).toBeVisible();
  
});