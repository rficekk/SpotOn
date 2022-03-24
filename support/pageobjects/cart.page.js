const Page = require('./page');

class CartPage extends Page {
    get allCheckboxes() {
        return $$('[type=checkbox]')
    }
    get collarAndLeashCheckboxes() {
        return $$('#collar')
    }

    get chewToyCheckboxes() {
        return $$('#toy')
    }

    get travelCarrierCheckboxes() {
        return $$('#carrier')
    }

    get firstVetVisitCheckboxes() {
        return $$('#vet')
    }

    get completeAdoption() {
        return $('[value="Complete the Adoption"]')
    }

    get adoptAnotherPuppy() {
        return $('[value="Adopt Another Puppy"')
    }

    get puppiesNamesInCart() {
        return $('tbody').$$('h2*=:')
    }

    async getAllPuppiesNamesInCart() {
        return await this.puppiesNamesInCart.map(async (element) => {
            return (await element.getText()).slice(0, -1)
        })
    }

    async findPuppyIndex(name) {
        let allPuppiesNamesInCart = await this.getAllPuppiesNamesInCart()
        let puppyIndex = await allPuppiesNamesInCart.indexOf(name)
        return puppyIndex
    }

    async addAdditionalProductForPuppy(product, puppyIndex) {
        switch (product) {
            case 'Collar & Leash':
                await this.collarAndLeashCheckboxes[puppyIndex].click()
                break
            case 'Chew Toy':
                await this.chewToyCheckboxes[puppyIndex].click()
                break
            case 'Travel Carrier':
                await this.travelCarrierCheckboxes[puppyIndex].click()
                break
            case 'First Vet Visit':
                await this.firstVetVisitCheckboxes[puppyIndex].click()
                break
        }
    }

    async addTheSameAdditionalProductForEachPuppy(product) {
        let puppiesInCart = await this.getAllPuppiesNamesInCart()
        for(let i = 0; i <= puppiesInCart.length - 1; i++){
            let puppyIndex = await this.findPuppyIndex(puppiesInCart[i])
            await this.addAdditionalProductForPuppy(product, puppyIndex)
        }
    }

    async getUniqueAdditionalProductsNames() {
        let allProductsNames = await this.allCheckboxes.map(async (checkbox) => {
            let getProductName = await checkbox.parentElement().getText()
            return getProductName.split(' (')[0]
        })
        return [...new Set(allProductsNames)];
    }

    async addRandomDetailsForPuppy(numberOfDetails, numberOfPuppy) {
        let uniqueProducts = await this.getUniqueAdditionalProductsNames()
        var arr = [];
        while(arr.length < parseInt(numberOfDetails)){
            var r = Math.floor(Math.random() * uniqueProducts.length);
            if(arr.indexOf(r) === -1) arr.push(r);
        }
        for(let i = 0; i < arr.length; i++){
            await this.addAdditionalProductForPuppy(uniqueProducts[arr[i]], parseInt(numberOfPuppy) -1)
        }
    }
}
module.exports = new CartPage()