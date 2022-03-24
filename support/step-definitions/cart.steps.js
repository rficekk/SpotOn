const { When } = require('@wdio/cucumber-framework');
const CartPage = require('../pageobjects/cart.page')

When(/^I add "([^"]*)"? product for puppy "([^"]*)"?$/, async (product, name) => {
    let puppyIndex = await CartPage.findPuppyIndex(name)
    await CartPage.addAdditionalProductForPuppy(product, puppyIndex)
})

When(/^I want to adopt another puppy?$/, async () => {
    await CartPage.adoptAnotherPuppy.click()
})

When(/^I add "([^"]*)" product for each puppie?$/, async (product) => {
    await CartPage.addTheSameAdditionalProductForEachPuppy(product)
})

When(/^I add "([^"]*)" products for puppy number "([^"]*)"?$/, async (numberOfProducts, numberOfPuppy) => {
    await CartPage.addRandomDetailsForPuppy(numberOfProducts, numberOfPuppy)
})