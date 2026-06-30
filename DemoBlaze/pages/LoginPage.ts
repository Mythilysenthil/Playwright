import {Page, Locator } from '@playwright/test';
export class LoginPage{
    readonly page:Page;
    readonly logintab:Locator;
    readonly username:Locator;
    readonly password:Locator;
    readonly loginBtn:Locator;
    readonly loginacc:Locator;
    readonly logoutBtn:Locator;

    constructor(page:Page){
        this.page = page;
        this.logintab = page.getByRole("link",{name:"Log in"});
        this.username = page.locator("#loginusername");
        this.password = page.locator("#loginpassword");
        this.loginBtn = page.getByRole('button', {name:'Log in'});
        this.loginacc = page.getByRole('link', {name:'Welcome admin'});
        this.logoutBtn = page.getByRole('link', {name: 'Log out'});
    }
    async navigate(){
        const baseUrl = process.env.BASE_URL;
        if (!baseUrl) {
            throw new Error('BASE_URL is not defined');
        }    
        await this.page.goto(baseUrl,{ waitUntil:'domcontentloaded'});
    }
    async login(username:string, password:string){
        await this.logintab.click();
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginBtn.click();
    }
    async getAccount(){
        return await this.loginacc.textContent();
    }
    async logout(){
        await this.logoutBtn.click();
    }
}
