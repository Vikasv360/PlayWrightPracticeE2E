const { test, expect } = require('@playwright/test')

const { PageObjectManager } = require('../PageObjects/PageObjectManager');

test('Validate the End to end Functionality of Ecomm', async ({ page }) => {

    const username = "vikasbfc@testPlay.com";
    const password = "Test@123";
    const productName = "IPHONE 13 PRO";
    const pageObjectManager = new PageObjectManager(page);

    //LoginPage
    const loginPage = pageObjectManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(username, password);

    //DashBoard Page
    const dashBoardPage = pageObjectManager.getDashboardPage();
    await dashBoardPage.searchProductAddToCart(productName);
    await dashBoardPage.goToCart();

    //My Cart Page
    const myCartPage = pageObjectManager.getMyCartPage();
    await myCartPage.goToCheckOut();


    //CheckOut Page
    const checkOutPage = pageObjectManager.getCheckOutPage();
    await checkOutPage.validateSelectingCountry("Ind", "India");
    const shippingLabel = await checkOutPage.verifyTheShippingInfoLabel();
    expect(await shippingLabel).toHaveText(username);
    await checkOutPage.verifyTheShippingInfoLabel(username);
    await checkOutPage.submitOrder();


    //Order submit page
    const orderSubmit = pageObjectManager.getOrderSubmitPage();
    const orderIDLabel = await orderSubmit.verifyOrderSuccessText()
    expect(await orderIDLabel).toHaveText(" Thankyou for the order. ");
    const orderId = await orderSubmit.getOrderID();
    console.log(orderId);
    await orderSubmit.goToOrders();


    // Order submit page
    const viewOrderPage = pageObjectManager.getViewOrderPage();
    await viewOrderPage.goToOrderSummaryPage(orderId);

 //Order summary page
    const orderSummaryPage = pageObjectManager.getOrderSummaryPage();
    const viewOrderID = await orderSummaryPage.getTheOrderIdInSummary();
    expect(orderId.includes(viewOrderID)).toBeTruthy();


})