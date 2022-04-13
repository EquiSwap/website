import { test, expect } from '@playwright/test';

test('renders the homepage', async ({ page, baseURL }) => {
  await page.goto(`${baseURL}/`);

  await expect(page.locator('button')).toBeVisible();
});
