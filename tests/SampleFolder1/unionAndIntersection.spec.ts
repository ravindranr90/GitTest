import test, { Page } from "@playwright/test";

// Define a union type for different login methods
type LoginMethod = 
  | { method: 'usernamePassword'; username: string; password: string }
  | { method: 'usernameOnly'; username: string };

// Define an intersection type that combines LoginMethod with a potential action
type LoginParams = LoginMethod & { action: 'login' };

test('Union and Intersection Example', async ({ page }) => {

  /** Function to handle login based on login method and action **/
  async function performLogin(page: Page, params: LoginParams) {
    await page.goto("https://login.salesforce.com/");
    
    if (params.method === 'usernamePassword' && params.action === 'login') {
      // Handle login with username and password
      await page.locator("//input[@id='username']").fill(params.username);
      await page.locator("//input[@id='password']").fill(params.password);
      await page.locator("//input[@id='Login']").click();
      console.log("Logged in using username and password.");
    } else if (params.method === 'usernameOnly' && params.action === 'login') {
      // Handle a situation where only a username is provided (e.g., for a different login flow)
      await page.locator("//input[@id='username']").fill(params.username);
      console.log("Username filled in for login.");
    }

  }

  // Example: Logging in with username and password
  const loginParams: LoginParams = {
    method: 'usernamePassword',
    username: 'ravindran.ramdas@testleaf.com',
    password: 'Ravi#1432',
    action: 'login'
  };
  
  await performLogin(page, loginParams);
  
});
