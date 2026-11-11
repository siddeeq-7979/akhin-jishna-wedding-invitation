async (page) => {
  await page.setViewportSize({ width: 1200, height: 630 });
  await page.goto('file:///app/applet/public/og-cover.html', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'public/og-cover.png' });

  await page.setViewportSize({ width: 128, height: 128 });
  await page.goto('file:///app/applet/public/favicon-render.html', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'public/favicon.png' });
}
