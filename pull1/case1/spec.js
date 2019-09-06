browser.manage().timeouts().implicitlyWait(3000);
const geoYandex = require('../PO/GeoPO');
browser.waitForAngularEnabled(false)
describe('Protractor Demo App', () => {
  it('goToYandex', async () => {
    await geoyandex.goTo();
  });
  let london;
  let paris;
  const EC = protractor.ExpectedConditions;
  let el;
  const geoyandex = new geoYandex();
  it('выбор локации, выбрать Лондон,сохранить', async () => {
    await geoyandex.geoButto();
    await geoyandex.enterCity('Лондон');
    await geoyandex.targetCity('Великобритания');
    await geoyandex.saveLocation()
  });


  it('сохранить содержимое (Ещё) ', async () => {
    await geoyandex.moreButton();
    await geoyandex.listMoreSave(london);
  });

  
it('Отображается ли элемент', async () => {
    await geoyandex.show('.geolink__reg', true);


  });

  it('выбор локации,выбрать Париж,сохранить', async () => {
    await geoyandex.geoButto();
    await geoyandex.enterCity('Париж');
    await geoyandex.targetCity('Франция');
  });

 

  it('сохранить содержимое (Ещё)', async () => {
    await geoyandex.moreButton();
    await geoyandex.listMoreSave(paris);
  });

  it('Сравнить содержимое (ЕЩЁ) Лондон/Париж', async () => {
    await geoyandex.ex(london, paris);

  });

});


