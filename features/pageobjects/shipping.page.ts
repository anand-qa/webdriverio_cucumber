import Page from './page';

class ShippingPage extends Page {

    get shipping_CheckoutButton () { return $("//button[@name='processCarrier']//span[contains(text(),'Proceed to checkout')]") }
    get iAgreeCheckbox () { return $('#uniform-cgv') }


    async navigateToPaymentPage(){
        await this.shipping_CheckoutButton.waitForDisplayed({timeout:20000});
        await this.iAgreeCheckbox.waitForDisplayed({timeout:20000}); 
        this.iAgreeCheckbox.click();
        browser.pause(20000);
        this.shipping_CheckoutButton.click();
    }
}

export default new ShippingPage();