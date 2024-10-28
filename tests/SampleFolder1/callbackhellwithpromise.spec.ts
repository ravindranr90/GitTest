import test from "@playwright/test" 

test ( 'xpath', async({page}) =>{

/**Login to Salesforce**/
await page.goto("https://login.salesforce.com/");
await page.locator("//input[@id='username']").fill("ravindran.ramdas@testleaf.com");
await page.locator("//input[@id='password']").fill("Ravi#1432");

await page.locator("//input[@id='Login']").click();
})