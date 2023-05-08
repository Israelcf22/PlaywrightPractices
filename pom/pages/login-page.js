
const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.user = page.locator('[data-test="username"]');
   // this.user = page.getByPlaceholder('Username'); manera de localizar elementos desde la versión 1.27
    this.pass = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    
    /* this.getStartedLink = page.locator('a', { hasText: 'Get started' });
   this.gettingStartedHeader = page.locator('h1', { hasText: 'Installation' });
    this.pomLink = page.locator('li', { hasText: 'Guides' }).locator('a', { hasText: 'Page Object Model' });
    this.tocList = page.locator('article div.markdown ul > li > a');
    */
  }
  async submitLoginForm(user, pass) {
    await this.user.fill(user);
    await this.pass.fill(pass);
    await this.loginButton.click();
  }
/*
  async getStarted() {
    await this.getStartedLink.first().click();
    await expect(this.gettingStartedHeader).toBeVisible();
  }

  async pageObjectModel() {
    await this.getStarted();
    await this.pomLink.click();
  }
  */
}

                        