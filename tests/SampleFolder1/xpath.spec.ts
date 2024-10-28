import test from "@playwright/test"

test ( 'xpath', async({page}) =>{

/**Login to Salesforce**/
await page.goto("https://login.salesforce.com/");
await page.locator("//input[@id='username']").fill("ravindran.ramdas@testleaf.com");
await page.locator("//input[@id='password']").fill("Ravi#1432");
await page.waitForTimeout(5000);
await page.locator("//input[@id='Login']").click();
await page.waitForTimeout(5000);

await page.locator("//div[@class='slds-icon-waffle']").click();
await page.locator("//button[text()='View All']").click();
await page.locator("//input[@placeholder='Search apps or items...']").fill("Service");
await page.locator("//div[@class='slds-truncate']//p/mark[text()='Service']").nth(0).click();
//await page.locator("mark:text-is('Service')").click();
await page.locator("//span[text()='Cases']").click();

await page.locator("//div[@class='slds-spinner_container slds-grid']") //spinner locator

await page.locator("//div[text()='New']").click();

await page.locator("//button[@title='Close this window']").click();

await page.locator("//span[text()='Select list display']").click();
await page.locator("//li[@title='Display as kanban']/a").click();
//await page.locator("//*[name()='svg']//*[@data-key='kanban']").click();

}
)
