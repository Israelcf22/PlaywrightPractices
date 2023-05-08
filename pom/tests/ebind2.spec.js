import { test, expect } from '@playwright/test';
const { GoogleSpreadsheet } = require('google-spreadsheet');




test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://ebindqaem-app2.eglobal.com.mx/');
  await page.getByText('Ir a inicio de sesión').click();

  await page.getByPlaceholder('User Name').fill('icarrazco');
  await page.getByPlaceholder('Password').fill('T35t1n6B0_23*');
  await page.getByRole('button', { name: 'Log in' }).click();
  
  await page.getByText('more_horiz').click();
  await page.waitForSelector('.q-icon.ebind-icons.icon-consulta-log');
  await page.click('.q-icon.ebind-icons.icon-consulta-log');
  


   /* cerrar sesión
 await page.getByRole('banner').getByRole('button', { name: 'Expandir' }).click();
  await page.getByText('Cerrar sesión').click();
  */
})



//icarrazco  T35t1n6B0_23*
// Socejo T35t1n6B0_25*