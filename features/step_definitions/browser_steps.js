// features/step_definitions/browser_steps.js
const seleniumWebdriver = require('selenium-webdriver');
const { defineSupportCode } = require('cucumber');
const helpers = require('../../tools');
const assert = require('assert');

defineSupportCode(function({ Given, When, Then }) {
  Given('I am on the test page', function() {
    return this.driver.get('http://10.80.7.118:4242');
  });

  When('I click on {stringInDoubleQuotes}', function(stringInDoubleQuotes) {
    const xpath = helpers.xpath.containsText(stringInDoubleQuotes);
    return this.driver.findElement({ xpath }).then(function(element) {
      return element.click();
    });
  });

  Then('I should see {stringInDoubleQuotes}', function(stringInDoubleQuotes) {
    const xpath = helpers.xpath.containsText(stringInDoubleQuotes);
    const condition = seleniumWebdriver.until.elementLocated({ xpath });
    return this.driver.wait(condition, 1000);
  });
});
