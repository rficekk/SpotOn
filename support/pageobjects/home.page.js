const Page = require('./page');

class HomePage extends Page {
    get puppiesNames() {
        return $$('.name')
    }
    get viewDetailsButtons() {
        return $$('[value="View Details"]')
    }

    get puppiesList() {
        return $('.puppy_list')
    }

    get adoptingPuppyNotice() {
        return $('#notice')
    }

    get pages() {
        return $$('[aria-label*="Page"')
    }
   
    async isOpen() {
       await expect(this.puppiesList).toBeDisplayed()
    }

    async getAllPuppiesNames() {
        return this.puppiesNames.map(async (element) => {
            return await element.getText();
        })    
    }

    async goToPage(number) {
        await this.pages[number -1].click()
    }

    async puppyIsDisplayed(name) {
        await this.puppiesNames.includes(name)
    }

    async viewDetailsForPuppy(puppyName) {
        let indexOfPuppy = (await this.getAllPuppiesNames()).indexOf(puppyName)
        await this.viewDetailsButtons[indexOfPuppy].click()
    }

    async viewDetailsForRandomPuppy() {
        let randomPuppyIndex = Math.floor(Math.random() * (await this.viewDetailsButtons.length))
        await this.viewDetailsButtons[randomPuppyIndex].click()
    }
}
module.exports = new HomePage()