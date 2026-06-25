# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Automate_login.test.ts >> Login Test
- Location: tests\Automate_login.test.ts:3:1

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('//a[text()=\' Logged in as \']')
Expected substring: "Logged in as Mythily"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('//a[text()=\' Logged in as \']')

```

```yaml
- banner:
  - link "Website for automation practice":
    - /url: /
    - img "Website for automation practice"
  - list:
    - listitem:
      - link " Home":
        - /url: /
    - listitem:
      - link " Products":
        - /url: /products
    - listitem:
      - link " Cart":
        - /url: /view_cart
    - listitem:
      - link " Signup / Login":
        - /url: /login
    - listitem:
      - link " Test Cases":
        - /url: /test_cases
    - listitem:
      - link " API Testing":
        - /url: /api_list
    - listitem:
      - link " Video Tutorials":
        - /url: https://www.youtube.com/c/AutomationExercise
    - listitem:
      - link " Contact us":
        - /url: /contact_us
- heading "Login to your account" [level=2]
- textbox "Email Address"
- textbox "Password": mythily
- button "Login"
- heading "OR" [level=2]
- heading "New User Signup!" [level=2]
- textbox "Name"
- textbox "Email Address"
- button "Signup"
- contentinfo:
  - heading "Subscription" [level=2]
  - textbox "Your email address"
  - button ""
  - paragraph: Get the most recent updates from our site and be updated your self...
  - paragraph: Copyright © 2021 All rights reserved
- insertion:
  - heading "These are topics related to the article that might interest you" [level=2]: Discover more
  - link "Website analytics tools"
  - link "Test case management"
  - link "Development Tools"
```

# Test source

```ts
  1  | import {test, expect } from '@playwright/test';
  2  | 
  3  | test('Login Test', async ({page}) => {
  4  |     await page.goto("http://automationexercise.com");
  5  |     await expect(page.locator("//img[@alt='Website for automation practice']")).toBeVisible();
  6  |     await page.getByText(" Signup / Login").click();
  7  |     await page.locator("//input[@data-qa='login-password']").fill(process.env.UNAME!);
  8  |     await page.getByPlaceholder("Password").fill(process.env.PASSWORD!);
  9  |     await page.getByRole('button',{name: 'Login'}).click();
> 10 |     await expect(page.locator("//a[text()=' Logged in as ']")).toContainText("Logged in as Mythily");
     |                                                                ^ Error: expect(locator).toContainText(expected) failed
  11 | });
```