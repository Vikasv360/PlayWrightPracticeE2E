const {LoginPage} = require('./LoginPage');
const {DashBoardPage} = require('./DashBoardPage');
const {MyCartPage} = require('./MyCartPage');
const {CheckOutPage} = require('./CheckOutPage');
const {OrderSubmitPage}=require('./OrderSubmitPage');
const {ViewOrderPage}=require('./ViewOrderPage');
const {OrderSummaryPage}=require('./OrderSummaryPage');

class PageObjectManager{

    constructor(page){

        this.page=page;
         this.loginPage = new LoginPage(this.page);
         this.dashBoardPage = new DashBoardPage(this.page);
         this.myCartPage =new MyCartPage(this.page);
         this.checkOutPage =new CheckOutPage(this.page);
         this.orderSumitPage = new OrderSubmitPage(this.page); 
         this.viewOrderPage =  new ViewOrderPage(this.page);
         this.orderSummaryPage=new OrderSummaryPage(this.page);
    }

    getLoginPage(){

        return this.loginPage;
    }

    getDashboardPage(){
        return this.dashBoardPage;
    }

    getMyCartPage(){
        return this.myCartPage;
    }

    getCheckOutPage(){
        return this.checkOutPage;
    }

    getOrderSubmitPage(){
        return this.orderSumitPage;
    }

    getViewOrderPage(){
        return this.viewOrderPage;
    }

    getOrderSummaryPage(){
        return this.orderSummaryPage;
    }

}
module.exports={PageObjectManager};