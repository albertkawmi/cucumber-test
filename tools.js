module.exports = {
    xpath: {
        containsText: text => `//*[contains(text(),'${text}')]`
    }
}
