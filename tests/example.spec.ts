import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/GoMango - Cooking Assistant/);
});

test('get started link', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('test3', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'Decide My Dinner' }).click();
  await page.getByRole('textbox', { name: 'Type ingredient and press' }).click();
  await page.getByRole('textbox', { name: 'Type ingredient and press' }).fill('hgj');
  await page.getByRole('combobox').first().selectOption('20');
  await page.getByRole('combobox').nth(1).selectOption('medium');
  await page.getByRole('combobox').nth(2).selectOption('stove');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Tell Me What To Cook' }).click();
  await page.getByRole('button', { name: '← Back' }).click();
});
