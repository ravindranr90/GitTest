import { test, expect } from '@playwright/test';

test('Get selected text from multi-select dropdown textbox', async ({ page }) => {
  // Navigate to the page with the multi-select dropdown
  await page.goto('https://leafground.com/checkbox.xhtml');

  // Locator for the textbox containing the selected options
  const selectedOptionsTextbox = page.locator('.ui-selectcheckboxmenu-multiple-container');

  // Retrieve and print the text from the textbox
  const selectedOptionsText = await selectedOptionsTextbox.textContent();
  console.log('Selected Options Text:', selectedOptionsText);

  // Optionally, verify the text contains the selected options
  expect(selectedOptionsText).toContain('Miami');
  expect(selectedOptionsText).toContain('London');
});
