# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: demoblazelogin.test.ts >> Login Test
- Location: tests\demoblazelogin.test.ts:3:1

# Error details

```
Error: page.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('#login2')

```

# Test source

```ts
  1  | import {test, expect } from '@playwright/test';
  2  | 
  3  | test('Login Test', async ({page}) => {
  4  |     await page.goto(process.env.BASE_URL!);
> 5  |     await page.click('#login2');
     |                ^ Error: page.click: Target page, context or browser has been closed
  6  |     await page.fill('#loginusername',process.env.UNAME!);
  7  |     await page.fill('#loginpassword',process.env.PASSWORD!);
  8  |     await page.click('//button[@onclick="logIn()"]');
  9  |     await expect(page.locator('//a[text()="Welcome admin"]')).toHaveText("Welcome admin");
  10 | });
```