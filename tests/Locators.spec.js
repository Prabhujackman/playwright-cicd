import {test,expect} from '@playwright/test'

test('Locators', async({page})=> {

    await page.goto("https://demoblaze.com/")

    //Prabhu123 --> Username
    // Jackman --> Password

//    Click on login button

    await page.locator('id=login2').click()
    console.log("test locator");

 //   await page.click('id=login2')    --> user can locate using this statement

    // Provide user name - CSS
    await page.locator('#loginusername').fill('Prabhu123'); // use locator method and pass the locator name 

    await page.fill('#loginusername','Prabhu123');  // calling fill method by passing the locators and user name as parameters

    //await page.type('#loginusername','Prabhu123')

 // Provide password - CSS
console.log("Test completed done");
    await page.fill('#loginpassword','Jackman') // locator and passing the password as parameter

    // Click on Login button - X path

    await page.click("//button[normalize-space()='Log in']") // locate element using xpath

    // verify logout link presence - X path

    const logoutlink = await page.locator("//a[@id='logout2']")

   // await expect(logoutlink).toBeVisible(); 
 
    await page.close();
  
 console.log("Test completed done");



})