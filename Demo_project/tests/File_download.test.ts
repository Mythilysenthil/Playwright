import {test} from "@playwright/test";

test("Download file",async({page})=>{

    await page.goto("https://demoqa.com/upload-download");
    const downloadPromise=page.waitForEvent('download');
    await page.locator('#downloadButton').click();
    const download=await downloadPromise;
    console.log(await download.suggestedFilename());
    await download.saveAs("Downloads/sample.jpeg");
});