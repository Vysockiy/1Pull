let changeLanguage = require('../PO/LanguagePO')
browser.manage().timeouts().implicitlyWait(4000);
browser.waitForAngularEnabled(false)
describe('Protractor Demo App', () => {
  it('goToYandex',async () => {
    await Changelanguage.goTo();
  });
  const Changelanguage = new changeLanguage();
  let a;
  it('Выбор английского языка', async () => {
    await Changelanguage.buttonLanguage();
    await Changelanguage.moreButton();
    await Changelanguage.buttonListLanguage(0)
    await Changelanguage.select_English(5);
    await Changelanguage.saveSatting(1);
   
  });

  it('Проверить, что язык соответствует выбранному', async () => {
    await Changelanguage.buttonLanguage();
    await Changelanguage.moreButton();
    await Changelanguage.compare();
  });

 
});

