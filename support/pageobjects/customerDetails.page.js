const Page = require('./page');

class CustomerDetailsPage extends Page {
    get customerName() {
        return $('#order_name')
    }

    get customerAddress() {
        return $('#order_address')
    }

    get customerEmail() {
        return $('#order_email')
    }

    get payTypeDropdown() {
        return $('#order_pay_type')
    }

    get payTypeOptions() {
        return $$('#order_pay_type option')
    }

    get placeOrder() {
        return $('[type=submit]')
    }

    async fillUpMyDetails(name, address, email, payType) {
        await this.customerName.setValue(name)
        await this.customerAddress.setValue(address)
        await this.customerEmail.setValue(email)
        await this.selectPayMethod(payType)
    }

    async selectPayMethod(payMethod) {
        await this.payTypeDropdown.click()
        switch (payMethod) {
            case 'Check':
                await this.payTypeOptions[1].click()
                break
            case 'Credit card':
                await this.payTypeOptions[2].click()
                break
            case 'Purchase order':
                await this.payTypeOptions[3].click()
                break
        }
    }
}
module.exports = new CustomerDetailsPage()