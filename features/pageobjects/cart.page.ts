import Page from './page';

class CartPage extends Page {
    get proceedToCheckoutButton () { return $("//span[normalize-space()='Proceed to checkout']") }
    get cart_CheckoutButton () { return $("(//a[contains(@title,'checkout')])[2]") }

    async navigateToAddressPage(){
        await this.proceedToCheckoutButton.waitForDisplayed({timeout:10000});
        this.proceedToCheckoutButton.click();
        await this.cart_CheckoutButton.waitForDisplayed({timeout:10000});
        this.cart_CheckoutButton.click();
    }
}

export default new CartPage();