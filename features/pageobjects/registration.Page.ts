import Page from './page';
class RegistrationPage extends Page {

    get mrRadioButton () { return $('#id_gender1') }
    get firstNameTextField () { return $('#customer_firstname') }
    get lastNameTextField () { return $('#customer_lastname') }
    get passwordTextField () { return $('#passwd') }
    get daySelectField () { return $('#days') }
    get monthSelectField () { return $('#months') }
    get yearsSelectField () { return $('#years') }
    get addressTextField () { return $('#address1') }
    get cityTextField () { return $('#city') }
    get stateSelectField () { return $('#id_state') }
    get postalTextField () { return $('#postcode') }
    get mobileTextField () { return $('#phone_mobile') }
    get registerButton () { return $('#submitAccount') }


    async fillform(){
        await this.mrRadioButton.click();
        browser.pause(1000);
        await this.firstNameTextField.setValue("FN");
        browser.pause(1000);
        await this.lastNameTextField.setValue("LN");
        browser.pause(1000);
        await this.passwordTextField.setValue("Password");
        browser.pause(1000);
        await this.mrRadioButton.click();
        browser.pause(1000);
        await this.daySelectField.selectByIndex(1);
        browser.pause(1000);
        await this.monthSelectField.selectByIndex(1);
        browser.pause(1000);
        await this.yearsSelectField.selectByIndex(1);
        browser.pause(1000);
        await this.addressTextField.setValue("#1234, 27th street, 345");
        browser.pause(1000);
        await this.cityTextField.setValue("TestCity");
        browser.pause(1000);
        await this.stateSelectField.selectByVisibleText("Arizona");
        browser.pause(1000);
        await this.postalTextField.setValue("96302");
        browser.pause(1000);
        await this.mobileTextField.setValue("1111111111");
        browser.pause(1000);
        await this.registerButton.click();
    }
    

}

export default new RegistrationPage();