import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page';
import RegistrationPage from '../pageobjects/registration.Page';
import CatalogPage from '../pageobjects/catalog.page';
import CartPage from '../pageobjects/cart.page';
import AddressPage from '../pageobjects/address.page';
import ShippingPage from '../pageobjects/shipping.page';
import PaymentPage from '../pageobjects/payment.page';

const pages = {
    login: LoginPage
}



// Given(/^I am on the login page$/,async(page)=>{
//     await pages[page].open()
// });
// When(/^I login with (.+), (.+) and (.+)$/, async (username, password, email) => {
//     await LoginPage.login(username, password, email)
// });
Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I register with random email$/, async () => {
    await LoginPage.register()
});

// When(/^I register with (.+)$/, async (email) => {
//     await LoginPage.register(email)
// });

When(/^fill the registration form$/, async () => {
    await RegistrationPage.fillform()
    await LoginPage.waitTillPageOpens();
});

Then(/^I should be able to verify my credentials$/, async () => {
    await LoginPage.verifyCredentials();
});

Then(/^I should be able to logout$/, async () => {
    await LoginPage.logoutUser();
});

When(/^I login with registered email$/,async() =>{
    await LoginPage.login();
});

When(/^I select a product and navigate to payments page$/,async() =>{
    await LoginPage.validateHeader();
});

Then(/^I should navigate to my account page$/, async () => {
    await LoginPage.selectProdAndNavigateToCatalogPage();
    console.log("Login Page Over");
    await CatalogPage.navigateToCartPage();
    await CartPage.navigateToAddressPage();
    await AddressPage.navigateToShippingPage();
    await ShippingPage.navigateToPaymentPage();
});

Then(/^I should be able to verify product name$/, async () => {
    await PaymentPage.validateProductDetails();
});

// Then(/^I should see a flash message saying (.*)$/, async (message) => {
//     await expect(SecurePage.flashAlert).toBeExisting();
//     await expect(SecurePage.flashAlert).toHaveTextContaining(message);
// });

