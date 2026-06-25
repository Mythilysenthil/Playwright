# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: herokulogin.test.ts >> Login Test
- Location: tests\herokulogin.test.ts:3:1

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://the-internet.herokuapp.com/login", waiting until "load"

```

# Test source

```ts
  1 | import {test, expect } from '@playwright/test';
  2 | 
  3 | test('Login Test', async ({page}) => {
> 4 |     await page.goto(process.env.BASE_URL!);
    |                ^ Error: page.goto: Target page, context or browser has been closed
  5 |     await page.fill('#username',process.env.UNAME!);
  6 |     await page.fill('#password',process.env.PASSWORD!);
  7 |     await page.click('button[type="submit"]');
  8 |     await expect(page.locator('.flash.success')).toBeVisible();
  9 | });
```