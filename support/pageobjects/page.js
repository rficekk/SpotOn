module.exports = class Page {
    open() {
        return browser.url(`https://spartantest-puppies.herokuapp.com/`)
    }
}
