import test from "@playwright/test"

test ( 'Inference Types', async({page}) =>{

/**Login to Salesforce**/
await page.goto("https://login.salesforce.com/");

// Input the username and password using type inference
const usernameInput = await page.locator("//input[@id='username']").fill("ravindran.ramdas@testleaf.com"); // Type inference: usernameInput is inferred as Promise<void>
const passwordInput = await page.locator("//input[@id='password']").fill("Ravi#1432"); // Type inference: passwordInput is inferred as Promise<void>
await page.waitForTimeout(5000);

// Input the username and password using explicit type inference
// const usernameInput: Promise<void> = await  page.locator("//input[@id='username']").fill("ravindran.ramdas@testleaf.com"); // Explicitly type as `Promise<void>`
// const passwordInput: Promise<void> = await page.locator("//input[@id='password']").fill("Ravi#1432"); // Explicitly type as `Promise<void>`
//await page.waitForTimeout(5000);

// Click the login button
await page.locator("//input[@id='Login']").click();
await page.waitForTimeout(5000);

await page.locator("(//span[@class='photoContainer forceSocialPhoto']//div/span[@class='uiImage'])").nth(0).click();
// Extract user data using type inference
const userName = await page.locator("(//a[@class='profile-link-label'])[1]").textContent(); // Inferred type: userName is inferred as string | null
const userDomain = await page.locator("//h2[@class='profile-card-domain']").textContent(); // Inferred type: userEmail is inferred as string | null

// Extract user data using explicit type inference
//const userName: string | null = await page.textContent('#userName'); // Explicitly type as `string | null`
//const userEmail: string | null = await page.textContent('#userEmail'); // Explicitly type as `string | null`

console.log(`User Name: ${userName}`);
console.log(`User Profile Domain Name: ${userDomain}`);

await page.waitForTimeout(5000);

}
)
