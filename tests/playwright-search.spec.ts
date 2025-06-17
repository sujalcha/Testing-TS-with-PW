import { test, expect } from '@playwright/test';

test('Search for "writing test" on playwright.dev', async ({ page }) => {
  // Go to playwright.dev
  await page.goto('https://playwright.dev');

  // Open the search dialog
  await page.getByRole('button', { name: /search/i }).click();

  // Type the search query and press Enter
  await page.getByRole('searchbox', { name: /search/i }).fill('writing test');
  await page.getByRole('searchbox', { name: /search/i }).press('Enter');

  // Check if any search results are present
  const results = page.locator('[class*=DocSearch-Hit]');
  await expect(results.first()).toBeVisible();

  // Close the page
  await page.close();
});
