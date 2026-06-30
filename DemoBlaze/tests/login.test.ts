import { Page } from '@playwright/test';
import { test, expect } from '../fixture/baseFixture';
import loginData from '../test-data/loginData.json';

test.describe('Login Test', ()=>{
   test.beforeEach(async({loginPage}) =>{
       await loginPage.navigate();
   });
   test('Valid login', async({loginPage}) => {
        await loginPage.login(
           loginData.validuser.username,
           loginData.validuser.password
        );
        expect (await loginPage.getAccount()).toBe('Welcome admin');
        //await loginPage.logout()
    });
    test('Invalid login', async({page,loginPage}) => {
        page.once('dialog', async (dialog) => {
        expect(dialog.message()).toBe('Wrong password.');
        await dialog.accept();
       });
       await loginPage.login(
        loginData.invaliduser.username, 
        loginData.invaliduser.password
        );     
    });
});