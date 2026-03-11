const {test} = require('@playwright/test');
const { LoginPage } = require('../PageObjects/LoginPage');
const config = require('../config.js');



const username = config.username;
const password = config.password; 


test('create an alert' , async ({page})=>
{
 
const loginpage = new LoginPage(page);
await loginpage.LaunchApplication();
await loginpage.validLogin(username,password)
await page.locator(".tab-label-overflow").first().click();
await page.getByText("New Alert").click();
await page.locator("#btn_new").click();
await page.waitForLoadState("networkidle");
await page.getByRole('button', { name: 'Unknown' }).click();
await page.locator("#High").click();

}
)