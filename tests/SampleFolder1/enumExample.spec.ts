import { test } from "@playwright/test";

// Define an enum for element selectors
enum SalesforceLocators {
    UsernameInput = "//input[@id='username']",
    PasswordInput = "//input[@id='password']",
    LoginButton = "//input[@id='Login']"
}

// Define an enum for other constants, such as URLs
enum SalesforceUserInput {
    LoginURL = "https://login.salesforce.com/",
    Username = "ravindran.ramdas@testleaf.com",
    Password = "Ravi#1432"
}

test('Login to Salesforce using Enums', async ({ page }) => {

    /** Login to Salesforce **/
    await page.goto(SalesforceUserInput.LoginURL);
    await page.locator(SalesforceLocators.UsernameInput).fill(SalesforceUserInput.Username);
    await page.locator(SalesforceLocators.PasswordInput).fill(SalesforceUserInput.Password);
    await page.waitForTimeout(5000);
    await page.locator(SalesforceLocators.LoginButton).click();
    await page.waitForTimeout(5000);

});
