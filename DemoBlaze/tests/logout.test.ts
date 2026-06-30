import { Page } from '@playwright/test';
import { test, expect } from '../fixture/baseFixture';
import loginData from '../test-data/loginData.json';

test.describe('Logout Test', ()=>{
   test.beforeEach(async({loginPage}) =>{
       await loginPage.navigate();
       await loginPage.login(
           loginData.validuser.username,
           loginData.validuser.password
        );
   });
    test('Validlogin ',async({loginPage}) => {
        expect(await loginPage.getAccount()).toBe("Welcome admin");
        await loginPage.logout();
    });
});