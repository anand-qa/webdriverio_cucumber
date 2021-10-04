const chaiExp =  require('chai').expect;
import Page from './page';
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */

    get inputUsername () { return $('#email') }
    get inputPassword () { return $('#passwd') }
    get btnSubmit () { return $('#SubmitLogin') }
    get signIn () { return $('.login') }
    get emailTextField () { return $('#email_create') }
    get createAccButton () { return $('#SubmitCreate') }
    get logoutButton () { return $('.logout') }
    get userCredentials () { return $('.account') }
    get header () { return $('#center_column h1') }
    get mainmenuList () { return $$("//ul[contains(@class,'sf-menu')]/li")}
    get subMenuList () { return $$("//a") }
    get womenLink () { return $("//ul[contains(@class,'sf-menu')]/li/a[text()='Women']") }
    get tShirtLink () { return $("//li[@class='sfHover']//a[@title='T-shirts'][normalize-space()='T-shirts']") }
    
    async selectProdAndNavigateToCatalogPage(){
        await this.womenLink.waitForDisplayed({timeout:10000});
        this.womenLink.moveTo();
        await this.tShirtLink.waitForDisplayed({timeout:10000});
        browser.pause(3000);
        this.tShirtLink.click();
        browser.pause(3000);
    }
    
    hoverOnLink(linkList,link){
        const explink = linkList.filter(menuLink=>menuLink.getText()===link);
        explink[0].moveTo();
    }

    clickOnLink(linkList,link){
        const explink = linkList.filter(menuLink=>menuLink.getText()===link);
        explink[0].click();
    }

    async validateHeader(){
        this.logoutButton.waitForExist({timeout:10000});
        expect(this.userCredentials.getText()).toHaveTextContaining("My account");
    }

    async logoutUser(){
        await this.logoutButton.click();
        this.signIn.waitForExist({timeout:10000});
    }

    async verifyCredentials(){
        browser.pause(2000);
        expect(this.userCredentials).toHaveTextContaining("FN LN");
    }

    async waitTillPageOpens(){
        this.logoutButton.waitForExist({timeout:10000});
        browser.pause(10000);
    }

    async createRandomNumber() {
        var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
        var string = '';
        for(var ii=0; ii<15; ii++){
            string += chars[Math.floor(Math.random() * chars.length)];
        }
    }

    generateEmail() {
        var allchars = 'abcdefghijklmnopqrstuvwxyz1234567890';
        var emailLength = 15;
        var string = '';
        for(var i=0; i<emailLength; i++){
            string += allchars[Math.floor(Math.random() * allchars.length)];
        }
        string = string + '@gmail.com';
        return string;
    }
    newEmail = this.generateEmail();

    async register () {
        browser.maximizeWindow();
        browser.pause(5000);
        await this.signIn.click();
        console.log("Generating Email");
        await this.emailTextField.setValue(this.newEmail+"");
        await this.createAccButton.click();
        browser.pause(2000);
    }

    // async register (email: string) {
    //     browser.maximizeWindow();
    //     browser.pause(5000);
    //     await this.signIn.click();
    //     // await this.emailTextField.setValue(email);
    //     await this.emailTextField.setValue(this.createRandomNumber() + '@gmail.com');
    //     await this.createAccButton.click();
    //     browser.pause(2000);
    // }

    async login () {
        browser.maximizeWindow();
        browser.pause(5000);
        this.signIn.waitForExist({timeout:20000});
        await this.signIn.click();
        this.inputUsername.waitForExist({timeout:20000});
        await this.inputUsername.setValue(this.newEmail+"");
        await this.inputPassword.setValue("Password");
        await this.btnSubmit.click();
        this.logoutButton.waitForExist({timeout:10000});
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('login');
        
    }
}

export default new LoginPage();
