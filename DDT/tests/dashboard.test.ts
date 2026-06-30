import { DashboardPage } from './../pages/DashboardPage';
import {test,expect} from '../fixture/baseFixture';
import loginData from '../test-data/loginData.json';

test.describe('Dashboard Tests',()=>{
    test.beforeEach(async({loginPage})=>{
        await loginPage.navigate();
        await loginPage.login(
            loginData.validUser.username,
            loginData.validUser.password
        );
        console.log("Login successfull");
    });
    test('Dashboard visible @regression',async({dashboardPage})=>{
        await expect(dashboardPage.timeAtWorkCard).toBeVisible();
        await expect(dashboardPage.quickLaunch).toBeVisible();
    })
    test.afterEach(async ({dashboardPage}) =>{
        await dashboardPage.logout();
    });
})