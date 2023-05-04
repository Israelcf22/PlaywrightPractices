import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://iam-dev.egl-cloud.com/samlv2_idp/XUI/?realm=/ebind-em-uat&spEntityID=urn:uat:ebind:em2:eglobal&goto=https://iam-dev.egl-cloud.com:443/samlv2_idp/saml2/continue/metaAlias/ebind-em-uat/idp?secondVisitUrl%3D/samlv2_idp/SSORedirect/metaAlias/ebind-em-uat/idp?ReqID%253Da2e45j81938fd4f9155f03766465f22&AMAuthCookie=#login/');
  await page.getByPlaceholder('User Name').click();
  await page.getByPlaceholder('User Name').fill('icarrazco');
  await page.getByPlaceholder('Password').fill('T35t1n6B0_23*');
  await page.getByRole('button', { name: 'Log in' }).click();


  
  await page.getByRole('banner').getByRole('button', { name: 'Expandir' }).click();
  await page.getByRole('button', { name: 'Colapsar' }).click();
});