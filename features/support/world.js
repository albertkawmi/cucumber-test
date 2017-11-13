// features/support/world.js
require('chromedriver')
var seleniumWebdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var {defineSupportCode} = require('cucumber');

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const CANARY_PATH = '/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary';

function CustomWorld() {
  const options = new chrome.Options()
    .addArguments('headless')
    .addArguments('window-size=1200x600')
    .setChromeBinaryPath(CANARY_PATH);

  this.driver = new seleniumWebdriver.Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();
}

defineSupportCode(function({setWorldConstructor}) {
  setWorldConstructor(CustomWorld)
})
