import { test, expect } from '@playwright/test';
import path from 'path';

test('Search for "writing test" on playwright.dev', async ({ page }) => {
  // Go to playwright.dev
  await page.goto('https://playwright.dev');
  const screenshotDir = `test-results/${path.basename(__filename, '.spec.ts')}`;
  await page.screenshot({ path: `${screenshotDir}/step1-home.png` });

  // Open the search dialog
  await page.getByRole('button', { name: /search/i }).click();
  await page.screenshot({ path: `${screenshotDir}/step2-search-open.png` });

  // Type the search query and press Enter
  await page.getByRole('searchbox', { name: /search/i }).fill('writing test');
  await page.screenshot({ path: `${screenshotDir}/step3-query-filled.png` });
  await page.getByRole('searchbox', { name: /search/i }).press('Enter');
  await page.screenshot({ path: `${screenshotDir}/step4-results.png` });

  // Close the page
  await page.close();
});
