browser.manage().timeouts().implicitlyWait(5000);
const LoginEmail = require('../PO/LoginPO');
browser.waitForAngularEnabled(false)
describe('Protractor Demo App', () => {
  it('goToYandex', async () => {
    await Login_email.goTo();
  });
  const Login_email = new LoginEmail


  it('Авторизация. Ввод логина/пароля', async () => {
    await Login_email.clickButtonEmail();
    await Login_email.enterLogin('AutotestUser');
    await Login_email.clickButtonLogin();
    await Login_email.enterPassword('AutotestUser123');
    await Login_email.clickButtonPassword(6);
  });

  it('выход', async () => {
    await Login_email.clickUserName();
    await Login_email.clickLogOut();
    
  });

  it('Поиск кнопки (Почта). Если кнопка есть, то выход осуществлен.', async () => {
    await Login_email.searchButtonEmail();

  });


});


