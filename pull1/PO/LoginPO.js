let elem = require('../ElemPO/elemLogin');
let singleton = null;
module.exports = class LoginEmail {
  constructor() {
    if (!singleton) {
      singleton = this;
    }

    return singleton;
  };

  async click(elem) {
    await element(by.css(elem)).click();
    return singleton;
  };

  async clickButtonEmail() {
    await element(by.css(elem.BUTTON_EMAIL)).click();
    return singleton;
  };

  async enterLogin(value) {
    await element(by.css(elem.ENTER_LOGIN)).sendKeys(value);
    return singleton;
  };

  async clickButtonLogin() {
    await element.all(by.css(elem.BUTTON_LOGIN)).get(1).click()
    return singleton;
  };


  async enterPassword(value) {
    let EC = protractor.ExpectedConditions;
    let pass;
    pass = element(by.css(elem.ENTER_PASS));
    await browser.wait(EC.presenceOf(pass), 1000);
    await browser.wait(EC.elementToBeClickable(pass), 2000);
    await pass.sendKeys(value);
    return singleton;
  };

  async  clickButtonPassword(position) {
    await element.all(by.css(elem.BUTTON_PASSWORD)).get(position).click();
    return singleton;
  };
  async sleep(time) {
    await browser.sleep(time);
    return singleton;
  };


  async clickUserName() {
    await element(by.css('.mail-User-Name')).click();
    return singleton;
  };

  async clickLogOut() {
    await element.all(by.css(elem.BUTTON_LOG_OUT)).get(3).click();
    return singleton;
  };

  async searchButtonEmail() {
    let a;
    await (a = element(by.partialLinkText(elem.SEARCH_BUTTON_EMAIL))).getText();
    await expect(a.getText()).toEqual('Завести почту');//если есть кнопка, значит логаут был выполнен
    return singleton;
  };

  async logPassError(text) {
    let err;
    await (err = element(by.css(elem.PASS_LOGIN_ERROR))).getText();
    await expect(err.getText()).toEqual(text);
    return singleton;

  };

  async homePage() {
    await element.all(by.css(".logo")).get(0).click();
    return singleton;
  };

  async goTo() {
    await browser.get('https://yandex.by/');
    return singleton;
  };
  async show(away, value) {
    let elem;
    await (elem = element(by.css(away)).isDisplayed());
    await expect(elem).toBe(value);
    return singleton;
  };
}