import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Boussole Finance - Guide de Finance Personnelle',
    short_name: 'Boussole Finance',
    description: 'Apprenez la finance personnelle simplement : banques, investissements, épargne. Tests de produits et calculateurs gratuits.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#212E53',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
