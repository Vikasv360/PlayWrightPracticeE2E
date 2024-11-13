class CheckOutPage{

constructor(page){

    this.selectCountryField = page.locator("input[placeholder='Select Country']");
    this.countryList = page.locator(".ta-results");
    this.submitBtn =page.locator("[class*='action__submit']");
    this.shippingLabel=page.locator("div label");
}

async validateSelectingCountry(inputTxt,countryName){

    await this.selectCountryField.pressSequentially(inputTxt);
    await this.countryList.waitFor();

    const countryListCount = await this.countryList.locator("button").count();

    for (let i = 0; i < countryListCount; i++) {
        const txt = await this.countryList.locator("button").nth(i).textContent();
        console.log(txt);
        if (txt.trim() === countryName.trim()) {
            await this.countryList.locator("button").nth(i).click();
            break;
        }
    }
}

async verifyTheShippingInfoLabel(){

    return this.shippingLabel;

}

async submitOrder(){
    await this.submitBtn.click();
}

}
module.exports={CheckOutPage};