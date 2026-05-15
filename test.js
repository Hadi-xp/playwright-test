const { chromium } = require('playwright');

(async () => {

  const browser = await chromium.connectOverCDP('http://localhost:9222');

  const context = browser.contexts()[0];
  const page = context.pages()[0] || await context.newPage();

  await page.goto("https://www.youtube.com/");

})();
