import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const site = 'https://indushekhar.tech';
  const now = new Date().toISOString().split('T')[0];

  const projects = await getCollection('projects');
  const posts = await getCollection('blog', ({ data }) => !data.draft);

  const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/projects/', priority: '0.9', changefreq: 'weekly' },
    { url: '/blog/', priority: '0.9', changefreq: 'daily' },
  ];

  const projectPages = projects.map(p => ({
    url: `/projects/${p.slug}/`,
    priority: '0.8',
    changefreq: 'monthly',
  }));

  const blogPages = posts.map(p => ({
    url: `/blog/${p.slug}/`,
    priority: '0.8',
    changefreq: 'monthly',
  }));

  const allPages = [...staticPages, ...projectPages, ...blogPages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    page => `  <url>
    <loc>${site}${page.url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
