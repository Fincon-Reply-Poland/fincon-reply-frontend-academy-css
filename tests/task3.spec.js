const { test, expect } = require('@playwright/test');
const path = require('path');
const fs = require('fs');

const SCSS_FILE = path.resolve(__dirname, '../task3/style.scss');

function stripComments(content) {
  let result = content.replace(/\/\*[\s\S]*?\*\//g, '');
  result = result.replace(/\/\/[^\n]*/g, '');
  return result;
}

test.describe('Ćwiczenie 3 – SCSS', () => {
  test('plik style.scss zawiera zmienne SCSS', () => {
    const scss = stripComments(fs.readFileSync(SCSS_FILE, 'utf-8'));
    const variables = scss.match(/\$[a-zA-Z][\w-]+\s*:/g) || [];
    expect(variables.length).toBeGreaterThanOrEqual(3);
  });

  test('plik style.scss zawiera zagnieżdżanie', () => {
    const scss = stripComments(fs.readFileSync(SCSS_FILE, 'utf-8'));
    expect(scss).toMatch(/&/);
  });

  test('plik style.scss zawiera definicję mixinu', () => {
    const scss = stripComments(fs.readFileSync(SCSS_FILE, 'utf-8'));
    expect(scss).toMatch(/@mixin\s+\w+/);
  });

  test('plik style.scss używa mixinu', () => {
    const scss = stripComments(fs.readFileSync(SCSS_FILE, 'utf-8'));
    expect(scss).toMatch(/@include\s+\w+/);
  });
});
