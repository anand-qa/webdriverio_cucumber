import Page from './page';

class AddressPage extends Page {
    get address_CheckoutButton () { return $("//button[@name='processAddress']") }
    async navigateToShippingPage(){
        await this.address_CheckoutButton.waitForDisplayed({timeout:20000});
        this.address_CheckoutButton.scrollIntoView();
        this.address_CheckoutButton.click();
    }
}

export default new AddressPage();