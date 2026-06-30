import { DashboardPage } from './../pages/DashboardPage';
import {test,expect} from '../fixture/baseFixture';
import loginData from '../test-data/loginData.json';

test.describe('Login Tests',()=>{
    test.beforeEach(async({loginPage})=>{
        await loginPage.navigate();
    });
    test('Valid Login @Smoke',async({loginPage , dashboardPage})=>{
        await loginPage.login(
            loginData.validUser.username,
            loginData.validUser.password
        );
        await expect(dashboardPage.dashboardTitle).toBeVisible();
    })
    test('Invalid Login @smoke',async({loginPage})=>{
        await loginPage.login(
            loginData.invalidUser.username,
            loginData.invalidUser.password
        );
    await expect(loginPage.errorMessage).toHaveText('Invalid credentials');
    });
})