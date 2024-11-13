class MyCartPage{

constructor(page){

    this.cartHeader = page.locator("div li");
    this.cartItemName = page.locator("h3:has-text('IPHONE 13 PRO')");
    this.checkOutBtn = page.locator("text=Checkout");
   
}

async goToCheckOut(){
    await this.checkOutBtn.click();
}

}
module.exports={MyCartPage};