const { When } = require('@wdio/cucumber-framework');
const CustomerDetailsPage = require('../pageobjects/customerDetails.page')
const CartPage = require('../pageobjects/cart.page')

When(/^I complete adoption with following details:$/, async (table) => {
    await CartPage.completeAdoption.click()
    this.table = table.hashes()[0]
    await CustomerDetailsPage.fillUpMyDetails(this.table.name, this.table.address, this.table.email, this.table.payType)
    await CustomerDetailsPage.placeOrder.click()
})