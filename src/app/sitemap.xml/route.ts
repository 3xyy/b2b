export const revalidate = 3600;

export async function GET() {
  const baseUrl = 'https://FreeForCharity.github.io/FFC-EX-bintobetter.org';
  const routes = [
    '',
    '/about',
    '/bounce-back',
    '/corporate-partners',
    '/donate',
    '/eco-filament',
    '/events',
    '/officers-and-team',
    '/partners',
    '/tech-to-treasure',
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${routes
      .map((route) => {
        return `
    <url>
      <loc>${baseUrl}${route}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>${route === '' ? '1.0' : '0.8'}</priority>
    </url>`;
      })
      .join('')}
  </urlset>
  `;

  return new Response(sitemap.trim(), {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
