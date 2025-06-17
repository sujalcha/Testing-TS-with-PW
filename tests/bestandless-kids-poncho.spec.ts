import { test, expect } from '@playwright/test';
import path from 'path';

test('Search for "kids poncho" on bestandless.com.au', async ({ page }) => {
  // Go to bestandless.com.au
  await page.goto('https://bestandless.com.au');
  const screenshotDir = `test-results/${path.basename(__filename, '.spec.ts')}`;
  await page.screenshot({ path: `${screenshotDir}/step1-home.png` });

  // Type 'kids poncho' in the search box and press Enter
  await page.getByRole('textbox', { name: /search/i }).fill('kids poncho');
  await page.screenshot({ path: `${screenshotDir}/step2-query-filled.png` });
  await page.getByRole('textbox', { name: /search/i }).press('Enter');
  await page.waitForURL(/search/);
  await page.screenshot({ path: `${screenshotDir}/step3-results.png` });

  // Assert that at least one result is found
  const results = await page.locator('text=Kids Poncho');
  expect(await results.count()).toBeGreaterThan(0);

  // Optionally, click the result and take a screenshot
  await results.first().click();
  await page.screenshot({ path: `${screenshotDir}/step4-product.png` });

  // Close the page
  await page.close();
});
