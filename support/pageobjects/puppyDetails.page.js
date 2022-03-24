const Page = require('./page');

class PuppyDetailsPage extends Page {
    get adoptMeButton () {
        return $('[value="Adopt Me!"]')
    }
}
module.exports = new PuppyDetailsPage()