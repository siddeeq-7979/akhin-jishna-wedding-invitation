async (page) => {
  // 1. Capture OG Cover
  await page.setViewportSize({ width: 1200, height: 630 });
  await page.goto('file:///app/applet/public/og-cover.html', { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);
  await page.screenshot({ path: 'public/og-cover.png' });

  // 2. Capture Favicon
  await page.setViewportSize({ width: 128, height: 128 });
  await page.goto('file:///app/applet/public/favicon-render.html', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'public/favicon.png' });

  // 3. Capture Updated Hero Section freshly
  await page.setViewportSize({ width: 420, height: 900 });
  await page.goto('http://localhost:3000/?t=' + Date.now(), { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  const openBtn = page.locator('text=Tap to Open Invitation');
  if (await openBtn.count() > 0) {
    await openBtn.click();
    await page.waitForTimeout(1800);
  }
  const heroCard = page.locator('main section').first();
  if (await heroCard.count() > 0) {
    await heroCard.screenshot({ path: 'public/hero-screenshot.png' });
  }
}
