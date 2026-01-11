import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://boussole-finance.fr'; // À remplacer par votre domaine réel

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'], // Bloquer les routes API et admin si elles existent
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
