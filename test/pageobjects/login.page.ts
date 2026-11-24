import { $, driver } from '@wdio/globals';

class LoginPage {
  get loginTab() { return $('~Login'); }
  get emailInput() { return $('~input-email'); }
  get passwordInput() { return $('~input-password'); }
  get loginButton() { return $('~button-LOGIN'); }
  get alertTitle() { return $('android=new UiSelector().resourceIdMatches(".*id/alertTitle")'); }
  get alertOk() { return $('android=new UiSelector().resourceIdMatches(".*id/button1")'); }

  async open() {
    await this.loginTab.waitForDisplayed({ timeout: 20000 });
    await this.loginTab.click();
    await this.emailInput.waitForDisplayed({ timeout: 10000 });
  }

  async login(email: string, password: string) {
    await this.emailInput.setValue(email);
    await this.passwordInput.setValue(password);
    await driver.hideKeyboard();
    await this.loginButton.click();
  }

  async dismissAlert() {
    await this.alertOk.waitForDisplayed({ timeout: 10000 });
    await this.alertOk.click();
  }
}

export default new LoginPage();