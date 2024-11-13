class LoginPage {

    constructor(page) {

        this.page=page;
        this.userName = page.locator("[id='userEmail']");
        this.password = page.locator("[id='userPassword']");
        this.loginInButton = page.locator("[id='login']");

    }
    async goTo() {
        await this.page.goto("https://rahulshettyacademy.com/client");
    }

    async validLogin(username, password) {

        await this.userName.fill(username);
        await this.password.fill(password);
        await this.loginInButton.click();
        await this.page.waitForLoadState('networkidle');

    }
}
module.exports={LoginPage};