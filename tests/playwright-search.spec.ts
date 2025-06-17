import { test, expect } from '@playwright/test';

test('Search for "writing test" on playwright.dev', async ({ page }) => {
  // Go to playwright.dev
  await page.goto('https://playwright.dev');
  await page.screenshot({ path: 'test-results/step1-home.png' });

  // Open the search dialog
  await page.getByRole('button', { name: /search/i }).click();
  await page.screenshot({ path: 'test-results/step2-search-open.png' });

  // Type the search query and press Enter
  await page.getByRole('searchbox', { name: /search/i }).fill('writing test');
  await page.screenshot({ path: 'test-results/step3-query-filled.png' });
  await page.getByRole('searchbox', { name: /search/i }).press('Enter');
  await page.screenshot({ path: 'test-results/step4-results.png' });

  // Close the page
  await page.close();
});
