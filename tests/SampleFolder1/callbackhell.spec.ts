import test from "@playwright/test";

test('xpath', async ({ page }) => {

    // Step 1: Go to Salesforce login page
    page.goto("https://login.salesforce.com/", () => {
        console.log("Navigated to Salesforce");

        // Step 2: Fill in the username
        page.locator("//input[@id='username']").fill("ravindran.ramdas@testleaf.com", () => {
            console.log("Username filled");

            // Step 3: Fill in the password
            page.locator("//input[@id='password']").fill("Ravi#1432", () => {
                console.log("Password filled");

                // Step 4: Click the login button
                page.locator("//input[@id='Login']").click(() => {
                    console.log("Clicked on Login");
                    // You can add more steps here if necessary
                });
            });
        });
    });
});
