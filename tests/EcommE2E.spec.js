const { test, expect } = require('@playwright/test')

test('Validate the End to end Functionality of Ecomm', async ({ page }) => {

    //Login page : locators
    const userName = page.locator("[id='userEmail']");
    const username = "vikasbfc@testPlay.com";
    const password = "Test@123";
    const password1 = page.locator("[id='userPassword']");
    const loginBtn = page.locator("[id='login']");

    //Dashboard locators:
    const ProductName = "IPHONE 13 PRO";
    const products = page.locator(".card-body");

    await page.goto("https://rahulshettyacademy.com/client");
    await userName.fill(username);
    await password1.fill(password);
    await loginBtn.click();
    await page.waitForLoadState('networkidle');
    const productTitles = await page.locator(".card-body b").allTextContents();
    console.log(productTitles);

    const count = await products.count();

    for (let i = 0; i < count; i++) {
        if (await products.nth(i).locator("b").textContent() == ProductName) {
            await products.nth(i).locator("text= Add To Cart").click();
            break;
        }
    }

    await page.locator("[routerlink*='cart']").click();

    await page.locator("div li").first().waitFor();

    const bool = await page.locator("h3:has-text('IPHONE 13 PRO')").isVisible();
    expect(bool).toBeTruthy();

    await page.locator("text=Checkout").click();
    //For dynamic dropdown we can use a method 'pressSequentially'

    await page.locator("input[placeholder='Select Country']").pressSequentially("Ind");

    const countryList = await page.locator(".ta-results");
    await countryList.waitFor();
    const countryListCount = await countryList.locator("button").count();

    for (let i = 0; i < countryListCount; i++) {
        const txt = await countryList.locator("button").nth(i).textContent();
        if (txt === " India") {
            await countryList.locator("button").nth(i).click();
            break;
        }
    }

    expect(await page.locator("div label")).toHaveText(username);


    await page.locator("[class*='action__submit']").click();

    expect(await page.locator("h1")).toHaveText(" Thankyou for the order. ");

    const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log(orderId);

    await page.locator("button[routerlink*='myorders']").click();
    await page.locator("tbody").waitFor();
    const rows = await page.locator("tbody tr");

    for (let i = 0; i < await rows.count(); i++) {
        const rowOrderID = await rows.nth(i).locator("th").textContent();
        if (orderId.includes(rowOrderID)) {
            await rows.nth(i).locator("button").first().click();
            break;
        }
    }

   const viewOrderID=await page.locator("[class='col-text -main']").textContent();

    expect(orderId.includes(viewOrderID)).toBeTruthy();
})