import Page from './page';

class PaymentPage extends Page {
    get paymentPage () { return $("//span[text()='Your payment method']") }
    get productname () { return $("(//p/a)[2]") }


    async validateProductDetails(){
        await this.paymentPage.waitForDisplayed({timeout:10000});
        expect(this.productname.getText()).toHaveTextContaining("Faded Short Sleeve T-shirts");
    }
}

export default new PaymentPage();