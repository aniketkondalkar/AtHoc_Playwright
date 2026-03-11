const {test,expect} = require('@playwright/test');
const {LoginPage} = require('../PageObjects/LoginPage');
const config = require('../config.js');
const { count } = require('node:console');
const { EUM } = require('../PageObjects/EUM.js');

const username =config.username;
const password = config.password;
const loginID ="25febopr";
const randomNumber = Math.floor(Math.random() * 10000);
const user = "user"+randomNumber;


test('Login to Application', async ({page}) => 
{
const AppURL ="https://iwsweb-pubdev.athocdevo.com/";

const loginPage = new LoginPage(page);

loginPage.LaunchApplication();
loginPage.validLogin(username , password);

//expect(page.locator("#cmdLoginManual")).toBeVisible();

await page.waitForLoadState("networkidle");
await expect(page.locator(".tab-label-overflow.userProfileNav")).toHaveText(loginID);
await expect(page).toHaveTitle("BlackBerry AtHoc");
}
)

test ('create a user', async ({page})=>
{
const loginPage = new LoginPage(page);
const eum =new EUM(page);
loginPage.LaunchApplication();
loginPage.validLogin(username , password);

await page.waitForLoadState("networkidle");

await page.locator("#Users").click();
await page.locator("#NavBar_User_Manager").click();

await page.waitForTimeout(6000);
await eum.CreateUser(user);

//await page.reload();


/* const listitems = await page.locator(".table-truename").nth(4).textContent();
console.log(listitems); */
/* const count = await listitems.count()
console.log(count);

for (let i = 0; i < count; ++i) 
  {
    let text = await listitems.nth(i).textContent();
    if(text===user)
    {
        await listitems.nth(i).click();
        console.log(text);
        break;
    }
   
  }*/

  await page.waitForLoadState("networkidle");
  const listitems= page.locator(".table-col.col3.col-second");
  const count =await listitems.locator(".table-truename").count();
  console.log(count);


  // to verify if the created users is correctly displayed in the users grid 
  for (let i = 0; i < count; ++i) 
  {
    const text = await listitems.locator(".table-truename").nth(i).textContent();
    if(text===user)
    {
        await listitems.locator(".table-truename").nth(i).click();
        console.log(text);
        break;
    }
   
  }
   // verify the text "basic information" is displayed on users profile page.
   await expect(page.getByText("Basic Information")).toBeVisible();

} 

)
