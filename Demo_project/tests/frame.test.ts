import { test,expect } from '@playwright/test';

test('Frame Test',async({page})=>{
    await page.goto('https://letcode.in/frame');
    const allframes=page.frames();
    console.log("No of Frames:" + allframes.length);
    const myframe=page.frame("firstFr");
    //? checking condition null
    await myframe?.fill("input[name='fname']","Mythily");
    await myframe?.fill("input[name='lname']","S");
    const frame=page.frameLocator('iframe[name="firstFr"]');
    await expect(frame.locator("p.text-sm.font-semibold.text-center")).toContainText("Mythily");
})

test("Frame2 - Inner Frame", async ({ page }) => {
  await page.goto("https://letcode.in/frame");
  const firstFrame = page.frameLocator("#firstFr");
  await firstFrame.locator("input[name='fname']").fill("Mythily");
  await firstFrame.locator("input[name='lname']").fill("S");
  await expect(firstFrame.locator("p.text-sm.font-semibold.text-center")).toContainText("Mythily S");
  const innerFrame = firstFrame.frameLocator("iframe[title='Inner Frame']");
  await expect(innerFrame.locator("input[name='email']")).toBeVisible();
  await innerFrame.locator("input[name='email']").fill("mythily@gmail.com");
});