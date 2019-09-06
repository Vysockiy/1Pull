const elem = require('../ElemPO/ElemLanguage');

module.exports = class changeLanguage {
  async  clic(elem) {
    await element(by.css(elem)).click();
    return this;
  };
  async sleep(time) {
    await browser.sleep(time);
    return this;
  };

  async buttonLanguage() {
    await element(by.partialLinkText(elem.BUTTON_LANGUAGE)).click();
    return this;
  };

  async moreButton() {
    await element(by.css(elem.MORE_BUTOON)).click();
    return this;
  };

  async buttonListLanguage(position) {
    await element.all(by.css(elem.BUTTON_LIST_LANGUAGE)).get(position).click();
    return this;
  };

  async  select_English(position) {
    await element.all(by.css(elem.ENG_SELECT)).get(position).click();
    return this;
  };


  async  saveSatting(position) {
    await element.all(by.css(elem.SAVE_SETTING)).get(position).click();
    return this;
  };
  async  compare() {
    let a;
    await (a = element.all(by.css(elem.COMPARE))).get(0);
    await expect(a.get(0).getText()).toEqual('English');

  };
  async goTo() {
    await browser.get('https://yandex.by/');
    return this;
  };


};