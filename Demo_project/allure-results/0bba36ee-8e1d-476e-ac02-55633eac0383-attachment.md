# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: codegenDemo.test.ts >> test
- Location: tests\codegenDemo.test.ts:3:1

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://automationexercise.com/", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('test', async ({ page }) => {
> 4  |   await page.goto(process.env.BASE_URL!);
     |              ^ Error: page.goto: Target page, context or browser has been closed
  5  |   await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();
  6  | 
  7  |   await page.getByRole('link', { name: 'Log in' }).click();
  8  |   await expect(page.getByRole('dialog', { name: 'Log in' })).toBeVisible();
  9  | 
  10 |   await page.locator('#loginusername').click();
  11 |   await page.locator('#loginusername').fill(process.env.UNAME!);
  12 |   await page.locator('#loginpassword').click();
  13 |   await page.locator('#loginpassword').fill(process.env.PASSWORD!);
  14 |   await page.getByRole('button', { name: 'Log in' }).click();
  15 |   await expect(page.locator('#nameofuser')).toContainText('Welcome admin');
  16 | });
```