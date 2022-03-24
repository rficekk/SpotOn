const { Given, When, Then } = require('@wdio/cucumber-framework');
const HomePage = require('../pageobjects/home.page')
const PuppyDetailsPage = require('../pageobjects/puppyDetails.page')

Given(/^I am on the homepage$/, async () => {
    await HomePage.open()
    await HomePage.isOpen()
});

When(/^I adopt puppy "([^"]*)"?$/, async (name) => {
    await HomePage.viewDetailsForPuppy(name)
    await PuppyDetailsPage.adoptMeButton.click()
})

When(/^I adopt random puppy$/, async () => {
    await HomePage.viewDetailsForRandomPuppy()
    await PuppyDetailsPage.adoptMeButton.click()
})

When(/^I go to page "([^"]*)"?$/, async (number) => {
    await HomePage.goToPage(number)
})

When(/^I can see puppy "([^"]*)"?$/, async (name) => {
    await HomePage.puppyIsDisplayed(name)
})

Then(/^Thanks notice should be visible$/, async () => {
    expect(await HomePage.adoptingPuppyNotice).toHaveText('Thank you for adopting a puppy!')
})

