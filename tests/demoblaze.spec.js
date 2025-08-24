import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/');

  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('Prabhu123');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('Jackman');
  await page.getByRole('button', { name: 'Log in' }).click();




  await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
  await page.getByRole('heading', { name: 'Samsung galaxy s6' }).click();
  await page.getByRole('heading', { name: '$360 *includes tax' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Cart', exact: true }).click();
//  await page.getByRole('cell', { name: 'Samsung galaxy s6' }).click();

const samsung = page.locator("//a[normalize-space()='Samsung galaxy s6']");
await samsung.waitFor(); // Wait until element is visible and attached
await samsung.click();   // Click on the element


  await page.getByRole('cell', { name: '360' }).click();
  await page.getByRole('heading', { name: '360' }).click();
  await page.getByRole('button', { name: 'Place Order' }).click();
  await page.getByText('Total:').click();
  await page.getByRole('heading', { name: 'Place order' }).click();
  await page.getByRole('textbox', { name: 'Total: 360 Name:' }).click();
  await page.getByRole('textbox', { name: 'Total: 360 Name:' }).press('CapsLock');

  await page.getByRole('textbox', { name: 'Total: 360 Name:' }).fill('');
  await page.getByRole('textbox', { name: 'Total: 360 Name:' }).press('CapsLock');
  
  await page.getByRole('textbox', { name: 'Total: 360 Name:' }).fill('Prabhu');
  await page.getByRole('textbox', { name: 'Total: 360 Name:' }).press('Tab');
  
  await page.getByRole('textbox', { name: 'Country:' }).fill('');
  await page.getByRole('textbox', { name: 'Country:' }).click();
  await page.getByRole('textbox', { name: 'Country:' }).fill('india');
  await page.getByRole('textbox', { name: 'Country:' }).press('Tab');
  await page.getByRole('textbox', { name: 'City:' }).click();
  await page.getByRole('textbox', { name: 'City:' }).fill('Myl');
  await page.getByRole('textbox', { name: 'Credit card:' }).click();
  await page.getByRole('textbox', { name: 'Credit card:' }).fill('6376161727161');
  await page.getByRole('textbox', { name: 'Month:' }).click();
  await page.getByRole('textbox', { name: 'Month:' }).fill('August');

  await page.getByRole('textbox', { name: 'Year:' }).click();
  await page.getByRole('textbox', { name: 'Year:' }).fill('2025');
  await page.getByRole('button', { name: 'Purchase' }).click();
  await page.getByRole('heading', { name: 'Thank you for your purchase!' }).click();

  //await page.getByText('Id: 4849532Amount: 360').click();

  await page.getByRole('button', { name: 'OK' }).click();

});