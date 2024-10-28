import { test } from "@playwright/test";

test('To Create an Account',async ({page}) => {
    
    await page.goto("https://login.salesforce.com/");
//     2. Enter username using getByLabel

await page.getByLabel("Username").fill("ravindranr90@gmail.com");




// 3. Enter password using getByLabel

await page.getByLabel("Password").fill("Ravi#1432");

// 4. Click Login
await page.locator("#Login").click();


// 5. Verify the title and url of the page using appropriate assertions

// 6. Click App Launcher using the class locator
await page.click(".appLauncher button");

//await page.locator(".slds-button slds-context-bar__button slds-icon-waffle_container slds-show").click();


// 7. Click View All using getByText
await page.getByText("View All").click();

// 8. Enter ‘Service’ in the App Launcher Search box using getByPlaceHolder
await page.getByPlaceholder("Search apps or items...").fill("Service");

// 9. Click Service using index based XPath
await page.locator("[role='application'] one-app-launcher-app-tile").first().click(); //dint understand


// 10. Click Accounts using attribute based CSS selector
await page.locator('[title="Accounts"]').click();


// 11. Click New using getByRole

//await page.getByRole("link",{name:'New'}).click();

await page.click("div[title='New']");
// 12. Enter Account name using attribute based CSS selector
await page.locator('[name="Name"]').fill("Tina Acc");

//await page.locator("input[name='Name']").fill("Ramya Account");


// 13. Click Save button using XPath

await page.locator("//button[text()='Save']").click();

//await page.click("[name='SaveEdit']");  Ramya's

// 14. Verify the toast message displayed

// await expect(page.locator(".toastMessage")).toHaveText(`Account "Tina Acc" was created.`)

// await page.waitForTimeout(3000);

}

)