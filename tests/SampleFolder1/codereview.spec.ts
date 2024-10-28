import { expect,test } from "@playwright/test";

test(`Verify a new case in Chatter`, async ({page}) => {

  await page.goto("https://login.salesforce.com/");
  await page.getByLabel("Username").fill("angel@testleaf.com")
  await page.getByLabel("Password").fill("Jesus_0402");
  await page.locator("//input[@id='Login']").click();
  await page.locator(".slds-icon-waffle").click();
  await page.getByText("View All").click();
  await page.getByPlaceholder("Search apps or items...").fill("Service")
  await page.locator("(//mark[text()='Service'])[1]").click();
  await page.locator("//span[text()='Cases']").click();
  await page.locator("//div[text()='New']").click();
  await page.locator("//input[@placeholder='Search Contacts...']").click();
  await page.locator("//span[text()='New Contact']").click();
  await page.locator("//button[@type='button' and @name='salutation']").click();
  await page.locator("//span[text()='Ms.']").click();
  await page.locator("//input[@name='firstName']").fill('Hannah');
  await page.locator("//input[@name='lastName']").fill('Catelyn');
  await page.locator("(//button[@name='SaveEdit'])[2]").click();
  await page.locator("(//div[@role='alert'])[4]").isVisible();
  await page.locator("//input[@type='text' and @role='combobox' and @placeholder='Search Accounts...']").click();
  await page.locator("//span[text()='New Account']").click();
  await page.locator("//input[@name='Name']").fill("Hannah");
  await page.locator("//input[@name='AccountNumber']").fill("352464");
  await page.locator("//button[@type='button' and @aria-haspopup='listbox' and @aria-label='Rating']").click();
  await page.locator("//span[text()='Hot']").click();
  await page.locator("(//button[@type='button' and @name='SaveEdit' and text()='Save'])[2]").click();
  await page.locator("//div[@role='alert' and @data-aura-class='forceToastMessage']").isVisible();
  await page.locator("//button[@aria-haspopup='listbox' and @role='combobox' and @data-value='New']").click();
  await page.locator("//span[@class='slds-truncate' and @title='New' and text()='New']").click();
  await page.locator("//button[@aria-haspopup='listbox' and @role='combobox' and @data-value='Medium']").click();
  await page.locator("//span[text()='High']").click();
  await page.locator("(//button[@role='combobox' and @aria-haspopup='listbox' and @data-value='--None--'])[1]").click();
  await page.locator("//span[text()='Email']").click();
  await page.locator("//input[@name='Subject']").fill("Product Return Request");
  await page.locator("//textarea[@class='slds-textarea' and @maxlength='32000']").fill("Requesting a return for a defective product");
  await page.locator("//button[@name='SaveEdit']").click();
 // page.locator("//div[@role='alert' and @data-key='success']")
  await expect(page.locator("//div[@role='alert' and @data-key='success']")
  .filter({hasText:"Case"})).toBeVisible();
  await page.waitForTimeout(2000);
  await page.locator("//button[@class='slds-button slds-button_neutral'and @name='Edit'and text()='Edit']").click();
  await page.locator("//button[@aria-haspopup='listbox' and @role='combobox' and @data-value='New']").click();
  await page.locator("//span[@title='Escalated']").click();
  await page.locator("//button[@type='button' and @name='SaveEdit']").click();
  await page.locator("//div[@role='alert' and @data-key='success']").isVisible();
  await page.locator("//lightning-formatted-text[@data-output-element-id='output-field' and text()='Escalated']").isVisible();
  await page.locator("//button[@title='Share an update...']").click();
  await page.locator("//div[@data-placeholder='Share an update...']").fill("Playwright cases");
  await page.locator("//button[@title='Click, or press Ctrl+Enter']").click();

}
)