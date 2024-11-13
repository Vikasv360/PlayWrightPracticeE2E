class DashBoardPage{

    constructor(page){

        this.products= page.locator(".card-body");
        this.productText= page.locator(".card-body b");
        this.cartButton = page.locator("[routerlink*='cart']");
    }


    async searchProductAddToCart(productName){

        const productTitles = await this.productText.allTextContents();
        const count = await this.products.count();
    
        for (let i = 0; i < count; i++) {
            if (await  this.products.nth(i).locator("b").textContent() == productName) {
                await  this.products.nth(i).locator("text= Add To Cart").click();
                break;
            }
        }
    
    }

    async goToCart(){

        await this.cartButton.click();
    }
}

module.exports={DashBoardPage};