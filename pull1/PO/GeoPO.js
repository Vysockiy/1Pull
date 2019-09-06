let elem = require('../ElemPO/ElemGeo');
let EC = protractor.ExpectedConditions;
let singleton = null;
module.exports = class geoYandex {
  constructor() {
    if (!singleton) {
      singleton = this;
    }

    return singleton;
  }

  async click(elem) {
    await element(by.css(elem)).click();
    return singleton;
  };
  async sleep(time) {
    await browser.sleep(time);
    return singleton;
  };

  async geoButto() {
    await element(by.css(elem.GEO_BUTTON)).click();
    return singleton;
  };


  async  enterCity(value) {
  await element(by.css(elem.ENTER_CITY)).click().clear().sendKeys(value);
    return singleton;
  };

  async  targetCity(text) {
  const EC = protractor.ExpectedConditions;
  let el;
  el= element.all(by.cssContainingText(elem.TARGET_CITY,text)).get(0);
 await browser.wait(EC.presenceOf(el),1000); 
 await browser.wait(EC.elementToBeClickable(el),2000);
 await el.click();
  
    return singleton;
  };

  async saveLocation() {
    await element(by.css(elem.SAVE_LOCATION)).click();
    return singleton;
  }

  async  moreButton() {
    await element(by.css(elem.MORE_BUTTON)).click();
    return singleton;
  }
  async  listMoreSave(place) {
    await( place = element.all(by.css(elem.LIST_MORE_SAVE))).getText();
    return singleton;
  };

 async ex(elem1, elem2) {
   await expect(elem1).toEqual(elem2);
    return singleton;
  };


  async show(away,value) {
    let elem;
    await (elem = element(by.css(away)));
    await expect(elem.isDisplayed()).toBe(value);
    return singleton;
  };

  async goTo() {
    await browser.get('https://yandex.by/');
    return singleton;
  };

  /*
    show(way,value){
      elem=browser.wait(EC.presenceOf(element(by.css(way))),5000);
      expect(elem).toBe(value);
      return singleton;
    };
  */
};