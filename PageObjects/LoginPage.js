class LoginPage
{
constructor(page)
{
this.page = page;    
this.username = page.locator("#username");
this.password = page.locator("#password");
this.loginbtn = page.locator("#cmdLoginManual");

}

async LaunchApplication()
{
await this.page.goto("https://iwsweb-pubdev.athocdevo.com/");
await this.page.locator("#acceptButton").click();

}

async validLogin(username , password)
{
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginbtn.click();
}
}

module.exports ={LoginPage};
