import { DashboardPage } from './../pages/DashboardPage';
import {test,expect} from '../fixture/baseFixture';
import loginData from '../test-data/loginData.json';
import { LoginPage } from '../pages/LoginPage';

test.describe('Logout Tests',()=>{
    test.beforeEach(async({loginPage})=>{
        await loginPage.navigate();
        await loginPage.login(
            loginData.validUser.username,
            loginData.validUser.password
        );
        console.log("Login successfull");
    });

    test('Validate logout @regression', async({loginPage,  dashboardPage}) =>{
        await expect(dashboardPage.dashboardTitle).toBeVisible();
        await dashboardPage.logout();
        expect(await loginPage.getLoginTitle()).toBe("Login");
    });
});