class ViewOrderPage{

    constructor(page){

        this.ordersTable = page.locator("tbody");
        this.orderIdHeader =page.locator("//th[text()='Order Id']");
        this.orderTableRows= page.locator("tbody tr");
    }


    async goToOrderSummaryPage(orderIdTxt){
         await this.orderIdHeader.waitFor();
        const rows = await this.orderTableRows;
    
        for (let i = 0; i < await rows.count(); i++) {
            const rowOrderID = await rows.nth(i).locator("th").textContent();
            if (orderIdTxt.includes(rowOrderID)) {
                await rows.nth(i).locator("button").first().click();
                break;
            }
        }
    }

}
module.exports={ViewOrderPage};