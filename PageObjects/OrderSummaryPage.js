class OrderSummaryPage{

    constructor(page){

        this.OrderIdSummary = page.locator("[class='col-text -main']");

    }

    async getTheOrderIdInSummary(){
        const viewOrderID = await this.OrderIdSummary.textContent();
        return viewOrderID;
    }
    
}
module.exports={OrderSummaryPage};