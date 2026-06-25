# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Automate_reg.test.ts >> Registation Test
- Location: tests\Automate_reg.test.ts:3:1

# Error details

```
Error: locator.fill: Error: strict mode violation: getByPlaceholder('Email Address') resolved to 3 elements:
    1) <input value="" required="" type="email" name="email" data-qa="login-email" placeholder="Email Address"/> aka locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address')
    2) <input value="" required="" type="email" name="email" data-qa="signup-email" placeholder="Email Address"/> aka locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address')
    3) <input required="" type="email" id="susbscribe_email" placeholder="Your email address"/> aka getByRole('textbox', { name: 'Your email address' })

Call log:
  - waiting for getByPlaceholder('Email Address')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e39]:
    - generic [ref=e41]:
      - heading "Login to your account" [level=2] [ref=e42]
      - generic [ref=e43]:
        - textbox "Email Address" [ref=e44]
        - textbox "Password" [ref=e45]
        - button "Login" [ref=e46] [cursor=pointer]
    - heading "OR" [level=2] [ref=e48]
    - generic [ref=e50]:
      - heading "New User Signup!" [level=2] [ref=e51]
      - generic [ref=e52]:
        - textbox "Name" [active] [ref=e53]: Mythily
        - textbox "Email Address" [ref=e54]
        - button "Signup" [ref=e55] [cursor=pointer]
  - contentinfo [ref=e56]:
    - generic [ref=e61]:
      - heading "Subscription" [level=2] [ref=e62]
      - generic [ref=e63]:
        - textbox "Your email address" [ref=e64]
        - button "" [ref=e65] [cursor=pointer]:
          - generic [ref=e66]: 
        - paragraph [ref=e67]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e71]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=e73]:
    - iframe [ref=e75]:
      
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Registation Test', async ({ page }) => {
  4  |   await page.goto("http://automationexercise.com");
  5  |   await expect(page.locator("//img[@alt='Website for automation practice']")).toBeVisible();
  6  |   await page.getByText(" Signup / Login").click();
  7  |   await page.getByPlaceholder("Name").fill("Mythily");
> 8  |   await page.getByPlaceholder("Email Address").fill("mythily@gmail.com");
     |                                                ^ Error: locator.fill: Error: strict mode violation: getByPlaceholder('Email Address') resolved to 3 elements:
  9  |   await page.getByRole('button',{name : 'Signup'}).click();
  10 |   await page.locator("#id_gender2").click();
  11 |   await page.locator("#password").fill("mythily");
  12 |   await page.selectOption("#days", {value: "11"});
  13 |   await page.selectOption("#months", {value: "9"});
  14 |   await page.selectOption("#years", {value: "2004"});
  15 |   await page.locator("#newsletter").check();
  16 |   await page.locator("#optin").check();
  17 |   await page.locator("#first_name").fill("Mythily");
  18 |   await page.locator("#last_name").fill("S");
  19 |   await page.locator("#company").fill("ABC");
  20 |   await page.locator("#address1").fill("12/6 Anna nagar");
  21 |   await page.selectOption("#country", {value: "India"});
  22 |   await page.locator("#state").fill("Tamil nadu");
  23 |   await page.locator("#city").fill("Salem");
  24 |   await page.locator("#zipcode").fill("636003");
  25 |   await page.locator("#mobile_number").fill("1234567890");
  26 |   await page.getByRole('button',{name : 'Create Account'}).click();
  27 |   await expect(page.locator("//b[text()='Account Created!']")).toContainText("Account Created!");
  28 |   await page.getByRole("link",{name : "Continue"}).click();
  29 |   await page.getByRole("link",{name : " Delete Account"}).click();
  30 |   await expect(page.locator("//b[text()='Account Deleted!']")).toContainText("Account Deleted!");
  31 |   await page.getByRole("link",{name : "Continue"}).click();
  32 | });
```