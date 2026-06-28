# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: two _input.test.ts >> Two input Test
- Location: tests\two _input.test.ts:3:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://www.testmuai.com/selenium-playground/simple-form-demo/", waiting until "networkidle"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - 'heading "Application error: a client-side exception has occurred while loading www.testmuai.com (see the browser console for more information)." [level=2] [ref=e7]'
  - alert [ref=e8]
  - iframe [ref=e9]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Two input Test', async ({page}) => {
> 4  |    await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/", {waitUntil : 'networkidle'});
     |               ^ Error: page.goto: Test timeout of 30000ms exceeded.
  5  |     console.log(page.url());
  6  |     await page.getByTitle("//h1[text()='Simple Form Demo']").isVisible();
  7  |     console.log(await expect(page.locator("#sum1")).toBeVisible());
  8  |     await page.getByPlaceholder("Please enter first value").fill('20');
  9  |     console.log(await expect(page.locator("#sum2")).toBeVisible());
  10 |     await page.locator("#sum2").pressSequentially('15', {delay: 100});
  11 |     await page.getByRole('button', {name: 'Get Sum'}).click();
  12 |     await expect(page.locator("#addmessage")).toContainText('35');
  13 |     page.close();
  14 | });
```