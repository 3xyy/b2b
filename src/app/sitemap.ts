import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bintobetter.org';
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

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
