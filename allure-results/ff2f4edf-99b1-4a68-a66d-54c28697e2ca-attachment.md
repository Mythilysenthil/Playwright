# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PromtAlert.test.ts >> Conformation Alert Test
- Location: Demo_project\tests\PromtAlert.test.ts:3:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Click Me' }).last()
    - locator resolved to <button type="button" class="btn btn-dark mx-10 hover:bg-lambda-900 hover:border-lambda-900">Click Me</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
  - element was detached from the DOM, retrying
    - locator resolved to <button type="button" class="btn btn-dark mx-10 hover:bg-lambda-900 hover:border-lambda-900">Click Me</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Conformation Alert Test' , async({page}) => {
  4  |    await page.goto("https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/");
  5  |    console.log(page.url());
  6  |    page.once('dialog', async (dialog) => { 
  7  |     console.log(dialog.message());
  8  |     dialog.defaultValue(); 
  9  |    });
> 10 |    await page.getByRole('button', { name: 'Click Me' }).last().click();
     |                                                                ^ Error: locator.click: Test timeout of 30000ms exceeded.
  11 |    console.log(await expect(page.getByText("You pressed Cancel!")).toBeVisible());
  12 |    page.close(); 
  13 | });
```