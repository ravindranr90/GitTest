import { expect, test } from "@playwright/test";

test.only(`Create and verify a New Case in Chatter`, async ({page}) =>{
    
/**Login to Salesforce**/
await page.goto("https://login.salesforce.com/");
await page.locator("//input[@id='username']").fill("ravindran.ramdas@testleaf.com");
await page.locator("//input[@id='password']").fill("Ravi#1432");
await page.waitForTimeout(5000);
await page.locator("//input[@id='Login']").click();
await page.waitForTimeout(5000);
console.log(`Page URL : ${page.url()}`);
console.log(`Page Title : ${await page.title()}`);


//Click AppLauncher
await page.click("//div[@class='slds-icon-waffle']");
await page.click("//button[text()='View All']");

//Click on the Service application
await page.locator("//input[@part='input']").fill("Service");
await page.locator("(//div[@class='slds-truncate'])[1]").click();

/**Click Case from Service dashboard**/
await page.locator("(//span[text()='Cases'])[1]").click();


 /**Click on the New button to create a lead.**/
 await page.locator("//div[text()='New']").click();
 

// /**Enter Case Details Contact Name dropdown**/
await page.locator("(//input[@class='slds-combobox__input slds-input'])[1]").click();

// /**Click New Contact from dropdown**/
await page.locator("//span[text()='New Contact']").click();


// //Enter Salutation
await page.waitForTimeout(4000)
await page.locator("//button[@name='salutation']").click()
await page.locator("//span[text()='Mr.']");
 

// //Enter First & Last Name
let fName = "Ravindran";
let lName = "R";
await page.locator("//input[@name='firstName']").fill(fName,{timeout:5000});
await page.locator("//input[@name='lastName']").fill(lName,{timeout:5000});


// //Save the Details
await page.locator("(//button[@name='SaveEdit'])[2]").click();

/**Assert the Toast message**/
await expect(page.locator('.toastMessage')).toBeVisible();

await page.waitForTimeout(4000)
// /**Enter Account Details from dropdown**/
await page.locator("//input[@class='slds-combobox__input slds-input']").click();

// /**Click New Account from dropdown**/
await page.locator("//span[text()='New Account']").click();

// //Enter Account Name & Account No.
await page.locator("//input[@name='Name']").fill("Ravindran");
await page.locator("//input[@name='AccountNumber']").fill("9992229992");

await page.waitForTimeout(4000)
// //Select the Rating dropdown and choose the option ‘Hot’
await page.click("//button[@aria-label='Rating']");
await page.click("//span[text()='Hot']");

// /**Click on SAVE button**/
await page.locator("(//button[@class='slds-button slds-button_brand'])[2]").click();

/**Assert the Toast message**/
await expect(page.locator('.toastMessage')).toBeVisible();

// //Select the Status dropdown and choose the option 'New'
await page.click("//button[@aria-label='Status']");
await page.locator("//span[text()='New']").nth(1).click();

// //Select the Case Origin dropdown and choose the option 'High'
await page.click("//button[@aria-label='Priority']");
await page.click("//span[text()='High']");

// Select the Case Origin dropdown icon and choose the value as ‘Email
await page.click("//button[@aria-label='Case Origin']");
await page.click("//span[text()='Email']");

await page.fill("//input[@name='Subject']",'Product Return Request');
await page.fill("//label[text()='Description']/following-sibling::div/textarea",'Requesting a return for a defective product');
await page.click("//button[text()='Save']");

//Select the Status and choose the option'Escalated'
await page.locator("//button[@title='Edit Status']").click();
await page.locator("//*[text()='Status']/..//button").click();
await page.locator("//lightning-base-combobox-item[@data-value='Escalated']").click();

// // Save the updated Status 
await page.click("//button[@name='SaveEdit']");

// /**Share an update details */
await page.locator("(//span[text()='Share an update...'])[1]").dblclick({timeout:3000});
await page.locator("//*[@data-placeholder='Share an update...']/p").fill("My Update Details");


await page.click("//button[text()='Share']",{ force: true })

// //Click on the dropdown icon and choose the Like on Chatter option.
await page.click("(//span[text()='Just now']//parent::a//following::a)[1]");
await page.click("//span[text()='Like on Chatter']");

// //Navigate to the Chatter tab and verify the post liked by the user
await page.locator("//span[text()='Chatter']");

})