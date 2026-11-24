import { driver, expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page';

describe('Offline behavior', () => {
  afterEach(async () => {
    await driver.execute('mobile: setConnectivity', { wifi: true, data: true });
  });

  it('keeps the login form usable with no network', async () => {
    await driver.execute('mobile: setConnectivity', { wifi: false, data: false });
    await LoginPage.open();
    await expect(LoginPage.loginButton).toBeDisplayed();
    await LoginPage.login('test@webdriver.io', 'Test1234!');
    await expect(LoginPage.alertOk).toBeDisplayed();
    await LoginPage.dismissAlert();
  });
});