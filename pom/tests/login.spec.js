import { test, expect } from '@playwright/test'
const { LoginPage } = require('../pages/login-page');
import { URLS, CREDENTIALS } from '../data/Constantes'


import dotenv from 'dotenv'
dotenv.config()

test('Usuario inicia sesión correctamente', async ({ page }) => {
  await page.goto(URLS.SAUCEDEMOURL);
  const loginPage = new LoginPage(page);
  await loginPage.submitLoginForm(CREDENTIALS.SAUCEDEMOUSER,CREDENTIALS.SAUCEDEMOPASS)
  //await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html") esto no es buena practica por que las páginas a veces no cambian, siendo Single page
  await expect(page.getByText('PRODUCTS')).toBeVisible();
});
