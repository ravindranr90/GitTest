import test from "@playwright/test";

// Define an object literal to store locators and actions
const salesforceLogin = {
    url: "https://login.salesforce.com/",
    username: {
        locator: "//input[@id='username']",
        value: "ravindran.ramdas@testleaf.com"
    },
    password: {
        locator: "//input[@id='password']",
        value: "Ravi#1432"
    },
    loginButton: {
        locator: "//input[@id='Login']"
    },
    login: async function (page: any) {
        await page.goto(this.url);
        await page.locator(this.username.locator).fill(this.username.value);
        await page.locator(this.password.locator).fill(this.password.value);
        await page.locator(this.loginButton.locator).click();
        await page.waitForTimeout(5000);
    }
};

test('Login to Salesforce using Object Literals', async ({ page }) => {
    // Perform login using the object literal
    await salesforceLogin.login(page);
});
