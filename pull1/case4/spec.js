
browser.manage().timeouts().implicitlyWait(3000);
browser.waitForAngularEnabled(false)
let LoginEmail = require('../PO/LoginPO');
describe('Protractor Demo App', () => {
  it('goToYandex', async () => {
    await Login_email.goTo();
  });
  const Login_email = new LoginEmail
  it('Авторизация. Ввод невалидного логина.', async () => {
    await Login_email.clickButtonEmail();
    await Login_email.enterLogin('NoAutotestUser');
    await Login_email.clickButtonLogin();
    await Login_email.logPassError("Такого аккаунта нет");
    await Login_email.homePage();
  });

  it('Авторизация.Ввод невалидного пароля.', async () => {
    await Login_email.clickButtonEmail();
    await Login_email.enterLogin('AutotestUser');
    await Login_email.clickButtonLogin();
    await Login_email.enterPassword('NoAutotestUser123');
    await Login_email.clickButtonPassword(6)
    await Login_email.logPassError("Неверный пароль");
  });

  

});

