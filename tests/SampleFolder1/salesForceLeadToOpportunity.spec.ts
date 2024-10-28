
import { expect, test } from "@playwright/test";

test.only(`TC_1:Chrome: Lead to opportunity Conversion`, async ({page}) =>{
    page.setDefaultTimeout(120000);
//Login to Salesforce
// const browser = await chromium.launch({headless: false});
// const browserContext = await browser.newContext();
// const page = await browserContext.newPage();
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

//Click on the Marketing application
await page.locator("//input[@part='input']").fill("Marketing");
await page.locator("//p[@class='slds-truncate']").click();

//Click Lead from Marketing dashboard
await page.locator("//a[@title='Leads']").click();

//Click on the New button to create a lead.
await page.locator("//div[text()='New']/..").click();


//Enter Salutation
await page.waitForTimeout(4000)
await page.locator("//button[@name='salutation']").click()
await page.locator("//span[text()='Mr.']")
 

//Enter First & Last Name
let fName = "Ravindran";
let lName = "R";
await page.locator("//input[@name='firstName']").fill(fName,{timeout:5000});
await page.locator("//input[@name='lastName']").fill(lName,{timeout:5000});

//Company
await page.locator("//input[@name='Company']").fill("TestLeaf");

//Save the Details
await page.locator(("//button[@name='SaveEdit']")).click();

console.log(`After Lead creation : ${await page.title()}`);

//Assert verify the page title

expect(await page.title()).toEqual(`New Lead | Salesforce`);

await page.locator("(//span[text()='Show more actions']/parent::button)").click();



// await page.waitForTimeout(3000);

//Convert the created Lead to Opportunity

await page.click("(//span[text()='Convert'])");

expect(await page.locator(".modal-header h1").innerText()).toEqual("Convert Lead");

await page.waitForTimeout(4000)

// //Enter the opportunity details
// await page.locator("//*[text()='Opportunity']/..//lightning-primitive-icon").click();
// await page.locator("//*[text()='Opportunity Name']/../../input").fill("TestLeaf-Opportunity");

// await page.locator("//button[@class='slds-button slds-button_brand']").click();

// let lead_conversion = await page.locator(".panel.runtime_sales_leadConvertedConfirmationDesktop h2").innerText({timeout:2000});

// console.log(`${lead_conversion}`);

// expect(lead_conversion).toEqual("Your lead has been converted");

// await page.locator("//button[text()='Go to Leads']").click({timeout:20000});

// // expect(await page.title()).toEqual("Lead Intelligence View | Leads | Salesforce");

// // await page.locator("//*[text()='Opportunities']/..").click({timeout:20000});

// // await page.fill("[name='Opportunity-search-input']","TestLeaf");
// // await page.keyboard.press("Enter");

// // let opp_data = page.locator("//tbody/tr/th//a[@title='TestLeaf-Opportunity']");
// // let count = await opp_data.count();
// // expect(count).toBeGreaterThan(1);

})
