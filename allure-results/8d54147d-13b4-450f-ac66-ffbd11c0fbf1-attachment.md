# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: two _input.test.ts >> Two input Test
- Location: Demo_project\tests\two _input.test.ts:3:1

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('#addmessage')
Expected substring: "35"
Received string:    "Entered value is not a number"
Timeout: 5000ms

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('#addmessage')
    13 × locator resolved to <p class="mt-20" id="addmessage">Entered value is not a number</p>
       - unexpected value "Entered value is not a number"

```

```yaml
- paragraph: Entered value is not a number
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Two input Test', async ({page}) => {
  4  |    await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/");
  5  |     console.log(page.url());
  6  |     await page.getByTitle("//h1[text()='Simple Form Demo']").isVisible();
  7  |     console.log(await expect(page.locator("#sum1")).toBeVisible());
  8  |     await page.getByPlaceholder("Please enter first value").fill('15');
  9  |     console.log(await expect(page.locator("#sum2")).toBeVisible());
  10 |     await page.locator("#sum2").fill('20');
  11 |     await page.getByRole('button', {name: 'Get Sum'}).click();
> 12 |     await expect(page.locator("#addmessage")).toContainText('35');
     |                                               ^ Error: expect(locator).toContainText(expected) failed
  13 |     page.close();
  14 | });
  15 | 
```