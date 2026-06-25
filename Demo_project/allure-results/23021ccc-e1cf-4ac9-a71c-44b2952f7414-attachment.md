# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Automate_logout.test.ts >> Login Test
- Location: tests\Automate_logout.test.ts:3:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Logged in as Mythily')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Logged in as Mythily')

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
- textbox "Email Address": mythily@gmail.com
- textbox "Password": mythily123
- paragraph: Your email or password is incorrect!
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
  - insertion:
    - iframe
  - paragraph: Copyright © 2021 All rights reserved
```

# Test source

```ts
  1  | import {test, expect } from '@playwright/test';
  2  | 
  3  | test('Login Test', async ({page}) => {
  4  |     await page.goto("http://automationexercise.com");
  5  |     await expect(page.locator("//img[@alt='Website for automation practice']")).toBeVisible();
  6  |     await page.getByText(" Signup / Login").click();
  7  |     await page.locator("//input[@data-qa='login-email']").fill("mythily@gmail.com");
  8  |     await page.getByPlaceholder("Password").fill("mythily123");
  9  |     await page.getByRole('button',{name: 'Login'}).click();
> 10 |     await expect(page.getByText('Logged in as Mythily')).toBeVisible();
     |                                                          ^ Error: expect(locator).toBeVisible() failed
  11 |     await page.getByRole('link', {name: ' Logout'}).click();
  12 |     await expect(page).toHaveURL('https://automationexercise.com/login'); 
  13 | });
```