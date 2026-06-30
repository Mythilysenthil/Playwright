import { test,expect } from '@playwright/test';
import loginData from '../test-data/loginData.json'  with { type: "json" };

//Interface for JSON Data
interface LoginData{
     testName:string,
    username:string,
    password:string,
    expectedResult:"Success"|"Failure",
    expectedMessage:string
}
//Type Casting
const users=loginData as LoginData[];
console.log("Datas:",users);
//create one test for each json object
for(const data of users){
    test(`${data.testName}-${data.username || "Blank Username"}`,async({page})=>{
        await page.goto("https://www.demoblaze.com/");
        await page.click("#login2");
        await page.fill('#loginusername',data.username);
        await page.fill('#loginpassword',data.password);
        if(data.expectedResult== "Failure"){
            page.once("dialog",async (dialog) =>{
               expect(dialog.message()).toBe(data.expectedMessage);
               await dialog.accept();
            })
        }
        await page.click("button[onclick='logIn()']");
        //Success validation
        if(data.expectedResult == "Success"){
            await expect(page.locator("#nameofuser")).toBeVisible({timeout:10000});
            await expect(page.locator("#nameofuser")).toContainText(`Welcome ${data.username}`);
        }

 });
}