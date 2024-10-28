import { chromium } from 'playwright';

async function loginToSalesforce() {
  // Launch Chromium in non-headless mode
  const browser = await chromium.launch({ headless: false });
  // Create a new browser context
  const context = await browser.newContext();
  // Open a new page within the browser context
  const page = await context.newPage();
  
  // Load the Salesforce login URL
  await page.goto('https://login.salesforce.com/');

  // Enter the username
  await page.fill('input[name="username"]', 'your_username'); // Replace with your Salesforce username
  // Enter the password
  await page.fill('input[name="pw"]', 'your_password'); // Replace with your Salesforce password
  // Click the Login button
  await page.click('input[type="submit"]');

  // Wait for 10 seconds
  await page.waitForTimeout(10000); // 10 seconds

  // Print the page title and current URL
  const title = await page.title();
  const url = page.url();
  console.log(`Page Title: ${title}`);
  console.log(`Current URL: ${url}`);

  // Close the browser
  await browser.close();
}

// Call the function to execute
loginToSalesforce().catch(error => console.error('Error:', error));
