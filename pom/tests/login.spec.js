import { test, expect } from '@playwright/test';
//import { LoginPage } from '../pages/login-page';
const { LoginPage } = require('../pages/login-page');

test('Usuario inicia sesión correctamente', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  const loginPage = new LoginPage(page);
  await loginPage.submitLoginForm('standard_user','secret_sauce')
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
 
});