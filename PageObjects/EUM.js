class EUM
{

    constructor(page)
    {
        this.page = page ;
        this.newButton = page.locator("#btnNewUser");
        this.loginID = page.locator("#LOGIN_ID");
        this.saveButton = page.locator("#endUserSave");
        this.UsersLink = page.locator("#lnkUsers");
    }


    async CreateUser(user)
    {
        await this.newButton.click();
        await this.loginID.fill(user);
        await this.saveButton.click();
        await this.UsersLink.click();
    }
}
module.exports = {EUM};