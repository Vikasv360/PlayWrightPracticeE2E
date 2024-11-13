class OrderSubmitPage{

    constructor(page){

        this.orderSuccessTxt = page.locator("h1");
        this.orderIDLabel = page.locator(".em-spacer-1 .ng-star-inserted");
        this.ordersMenuBtn = page.locator("button[routerlink*='myorders']");
    }


    async verifyOrderSuccessText(){

        return this.orderSuccessTxt;
    }

    async getOrderID(){
        const orderId = await this.orderIDLabel.textContent();
        return orderId;

    }
   
   

    async goToOrders(){
        await this.ordersMenuBtn.click();

    }
    

}
module.exports={OrderSubmitPage};