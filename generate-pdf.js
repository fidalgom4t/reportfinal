 // generate-pdf.js
const path = require('path');
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const reportPath = 'file://' + path.resolve(__dirname, 'report.html');
  await page.goto(reportPath, { waitUntil: 'networkidle0' });
  await page.waitForTimeout(500);

  await page.pdf({
    path: 'report.pdf',
    format: 'A4',
    printBackground: true,
    margin: { top: '20mm', bottom: '15mm', left: '10mm', right: '10mm' }
  });

  await browser.close();
  console.log('✅ report.pdf generated');
})();
