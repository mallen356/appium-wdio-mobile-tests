import { $, expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page';

describe('Login screen', () => {
  beforeEach(async () => {
    await LoginPage.open();
  });

  it('shows the login form', async () => {
    await expect(LoginPage.emailInput).toBeDisplayed();
    await expect(LoginPage.passwordInput).toBeDisplayed();
    await expect(LoginPage.loginButton).toBeDisplayed();
  });

  it('logs in with valid credentials', async () => {
    await LoginPage.login('test@webdriver.io', 'Test1234!');
    await expect(LoginPage.alertOk).toBeDisplayed();
    await LoginPage.dismissAlert();
  });

  it('shows validation errors for invalid input', async () => {
    await LoginPage.login('not-an-email', '123');
    await expect($('android=new UiSelector().text("Please enter a valid email address")')).toBeDisplayed();
    await expect($('android=new UiSelector().text("Please enter at least 8 characters")')).toBeDisplayed();
  });
});