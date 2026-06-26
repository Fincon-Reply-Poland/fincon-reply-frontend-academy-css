const { test, expect } = require('@playwright/test');
const path = require('path');

const PAGE_URL = `file://${path.resolve(__dirname, '../task2/index.html')}`;

test.describe('Ćwiczenie 2 – CSS Grid Layout', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(PAGE_URL);
  });

  test('.layout używa CSS Grid', async ({ page }) => {
    const display = await page.$eval('.layout', el =>
      getComputedStyle(el).display
    );
    expect(display).toBe('grid');
  });

  test('.layout ma gap między obszarami', async ({ page }) => {
    const gap = await page.$eval('.layout', el => {
      const style = getComputedStyle(el);
      return style.gap || style.rowGap || style.columnGap;
    });
    const gapValue = parseFloat(gap);
    expect(gapValue).toBeGreaterThan(0);
  });

  test('.header zajmuje wszystkie kolumny', async ({ page }) => {
    const gridColumnEnd = await page.$eval('.header', el =>
      getComputedStyle(el).gridColumnEnd
    );
    expect(gridColumnEnd).not.toBe('auto');
  });

  test('.footer zajmuje wszystkie kolumny', async ({ page }) => {
    const gridColumnEnd = await page.$eval('.footer', el =>
      getComputedStyle(el).gridColumnEnd
    );
    expect(gridColumnEnd).not.toBe('auto');
  });

  test('.sidebar i .main są obok siebie', async ({ page }) => {
    const sidebarBox = await page.$eval('.sidebar', el => el.getBoundingClientRect());
    const mainBox = await page.$eval('.main', el => el.getBoundingClientRect());

    const topDiff = Math.abs(sidebarBox.top - mainBox.top);
    expect(topDiff).toBeLessThanOrEqual(10);
    expect(sidebarBox.left).toBeLessThan(mainBox.left);
  });

  test('.sidebar ma mniejszą szerokość niż .main', async ({ page }) => {
    const sidebarBox = await page.$eval('.sidebar', el => el.getBoundingClientRect());
    const mainBox = await page.$eval('.main', el => el.getBoundingClientRect());
    expect(sidebarBox.width).toBeLessThan(mainBox.width);
  });
});
