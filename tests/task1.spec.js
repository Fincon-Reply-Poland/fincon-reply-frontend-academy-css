const { test, expect } = require('@playwright/test');
const path = require('path');

const PAGE_URL = `file://${path.resolve(__dirname, '../task1/index.html')}`;

test.describe('Ćwiczenie 1 – Flexbox Cards', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(PAGE_URL);
  });

  test('.card-grid używa flexbox', async ({ page }) => {
    const display = await page.$eval('.card-grid', el =>
      getComputedStyle(el).display
    );
    expect(display).toBe('flex');
  });

  test('.card-grid ma włączone zawijanie', async ({ page }) => {
    const flexWrap = await page.$eval('.card-grid', el =>
      getComputedStyle(el).flexWrap
    );
    expect(flexWrap).toBe('wrap');
  });

  test('.card-grid ma gap między kartami', async ({ page }) => {
    const gap = await page.$eval('.card-grid', el => {
      const style = getComputedStyle(el);
      return style.gap || style.rowGap || style.columnGap;
    });
    const gapValue = parseFloat(gap);
    expect(gapValue).toBeGreaterThan(0);
  });

  test('.card używa flexbox z kierunkiem kolumny', async ({ page }) => {
    const display = await page.$eval('.card', el =>
      getComputedStyle(el).display
    );
    expect(display).toBe('flex');

    const flexDirection = await page.$eval('.card', el =>
      getComputedStyle(el).flexDirection
    );
    expect(flexDirection).toBe('column');
  });

  test('.card__body wypełnia dostępne miejsce', async ({ page }) => {
    const flexGrow = await page.$eval('.card__body', el =>
      parseFloat(getComputedStyle(el).flexGrow)
    );
    expect(flexGrow).toBeGreaterThanOrEqual(1);
  });
});
