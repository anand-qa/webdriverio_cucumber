import Page from './page';

class CatalogPage extends Page {
    get catalogHeader () { return $("//p[normalize-space()='Catalog']") }
    get prodImage () { return $('.product_img_link img') }
    get addToCartButton () { return $("//span[normalize-space()='Add to cart']") }

    async navigateToCartPage(){
        await this.prodImage.waitForDisplayed({timeout:30000});
        this.prodImage.scrollIntoView();
        this.prodImage.moveTo();
        await this.addToCartButton.waitForDisplayed({timeout:10000});
        this.addToCartButton.click();
    }
}

export default new CatalogPage();