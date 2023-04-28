
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://ebindqaem-app2.eglobal.com.mx/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Eglobal/);
});

test('get started link', async ({ context }) => {
  // Launch a new browser context with ignoreHTTPSErrors option.
  
  const browser = await context.newContext({ ignoreHTTPSErrors: true });
  const page = await context.newPage();


  const inicioSesion = page.locator('text=Ir a inicio de sesión');

  await page.goto('https://ebindqaem-app2.eglobal.com.mx/');

  // Click the get started link.
  await inicioSesion.click();

  // Expects the URL to contain intro.
  await expect(page).toHaveTitle("Eglobal Servicios Financieros - Dev");

  // Close the browser.
  await browser.close();
});
