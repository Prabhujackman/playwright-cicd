import { test, expect } from '@playwright/test';

test('Purchase Samsung Galaxy S6', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await expect(page).toHaveTitle('STORE'); // ✅ Assert correct page title

  // Login
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('Prabhu123');
  await page.locator('#loginpassword').fill('Jackman');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByRole('link', { name: 'Welcome Prabhu123' })).toBeVisible(); // ✅ Assert logged in

  // Select product
  await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
  console.log("Samsung galaxy s6 is selected");

//  await page.locator("//h2[normalize-space()='Samsung galaxy s6']").click({force:true});
//  await expect(page.getByRole('heading', { name: 'Samsung galaxy s6' })).toBeVisible(); // ✅ Assert product page loaded

await expect(page.locator("//h2[normalize-space()='Samsung galaxy s6']")).toHaveText('Samsung galaxy s6'); // ✅ Assert product in cart

  // Add to cart
  page.once('dialog', dialog => dialog.accept().catch(() => {})); // Handle alert
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Cart', exact: true }).click();
  

  // Place order
  await page.getByRole('button', { name: 'Place Order' }).click();
  await expect(page.getByRole('heading', { name: 'Place order' })).toHaveText('Place order');


  // Fill order details
  //await page.getByRole('textbox', { name: 'Total: 360 Name:' })
  
  await page.locator("//input[@id='name']").fill('Prabhu');
  await page.getByRole('textbox', { name: 'Country:' }).fill('India');
  await page.getByRole('textbox', { name: 'City:' }).fill('Myl');
  await page.getByRole('textbox', { name: 'Credit card:' }).fill('6376161727161');
  await page.getByRole('textbox', { name: 'Month:' }).fill('August');
  await page.getByRole('textbox', { name: 'Year:' }).fill('2025');
  await page.getByRole('button', { name: 'Purchase' }).click();

  // Verify purchase success
  await expect(page.getByRole('heading', { name: 'Thank you for your purchase!' })).toBeVisible(); // ✅ Assert success message
  await page.getByRole('button', { name: 'OK' }).click();
});
