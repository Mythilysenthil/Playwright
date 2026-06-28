# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: frame.test.ts >> Frame2 - Inner Frame
- Location: Demo_project\tests\frame.test.ts:15:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('iframe#firstFr').contentFrame().locator('input[name=\'fname\']')

```

# Test source

```ts
  1  | import { test,expect } from '@playwright/test';
  2  | 
  3  | test('Frame Test',async({page})=>{
  4  |     await page.goto('https://letcode.in/frame');
  5  |     const allframes=page.frames();
  6  |     console.log("No of Frames:" + allframes.length);
  7  |     const myframe=page.frame("firstFr");
  8  |     //? checking condition null
  9  |     await myframe?.fill("input[name='fname']","Mythily");
  10 |     await myframe?.fill("input[name='lname']","S");
  11 |     const frame=page.frameLocator('iframe[name="firstFr"]');
  12 |     await expect(frame.locator("p.text-sm.font-semibold.text-center")).toContainText("Mythily");
  13 | })
  14 | 
  15 | test("Frame2 - Inner Frame", async ({ page }) => {
  16 | 
  17 |   const firstFrame = page.frameLocator("iframe#firstFr");
> 18 |   await firstFrame.locator("input[name='fname']").fill("Mythily");
     |                                                   ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  19 |   await firstFrame.locator("input[name='lname']").fill("S");
  20 |   await expect(firstFrame.locator("p.text-sm.font-semibold.text-center"))
  21 |     .toContainText("Mythily");
  22 | 
  23 |   
  24 |   const innerFrame = firstFrame.frameLocator("iframe[src='innerFrame']");
  25 | 
  26 |   await innerFrame.locator("input[name='email']").fill("prasanna@gmail.com");
  27 | 
  28 | });
  29 | 
  30 | test.afterEach(async () => {
  31 |   console.log("Test is completed");
  32 | });
```