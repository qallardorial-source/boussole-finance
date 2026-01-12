import { Metadata } from 'next';

export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'Boussole Finance',
  title: 'Boussole Finance - Guide de Finance Personnelle pour Débutants',
  description: 'Apprenez la finance personnelle simplement : banques, investissements, épargne. Tests de produits et calculateurs gratuits.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://boussole-finance.fr',
  ogImage: '/og-image.jpg',
  keywords: [
    'finance personnelle',
    'banque en ligne',
    'investissement débutant',
    'épargne',
    'budget',
    'crédit immobilier',
    'assurance vie',
    'PEA',
    'livret A',
    'SCPI',
    'bourse',
    'ETF',
    'calculateur financier',
    'conseil finance',
  ],
  creator: 'Boussole Finance',
  authors: [{ name: 'Boussole Finance' }],
};

export function generateMetadata({
  title,
  description,
  image,
  url,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  noIndex?: boolean;
}): Metadata {
  const metadata: Metadata = {
    title: title ? `${title} | ${siteConfig.name}` : siteConfig.title,
    description: description || siteConfig.description,
    keywords: siteConfig.keywords,
    authors: siteConfig.authors,
    creator: siteConfig.creator,
    openGraph: {
      type: 'website',
      locale: 'fr_FR',
      url: url || siteConfig.url,
      title: title || siteConfig.title,
      description: description || siteConfig.description,
      siteName: siteConfig.name,
      images: [
        {
          url: image || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: title || siteConfig.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: title || siteConfig.title,
      description: description || siteConfig.description,
      images: [image || siteConfig.ogImage],
      creator: '@boussole_finance', // À remplacer par votre compte Twitter
    },
    alternates: {
      canonical: url || siteConfig.url,
    },
  };

  if (noIndex) {
    metadata.robots = {
      index: false,
      follow: false,
    };
  }

  return metadata;
}

// Données structurées JSON-LD pour le SEO
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    sameAs: [
      // Ajoutez vos réseaux sociaux ici
      // 'https://twitter.com/boussole_finance',
      // 'https://www.linkedin.com/company/boussole-finance',
    ],
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/articles?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateArticleSchema({
  title,
  description,
  publishedAt,
  modifiedAt,
  image,
  author = 'Boussole Finance',
  slug,
}: {
  title: string;
  description: string;
  publishedAt: string;
  modifiedAt?: string;
  image?: string;
  author?: string;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: image || siteConfig.ogImage,
    datePublished: publishedAt,
    dateModified: modifiedAt || publishedAt,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/articles/${slug}`,
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}

export function generateProductReviewSchema({
  name,
  description,
  rating,
  reviewCount = 1,
  author = 'Boussole Finance',
}: {
  name: string;
  description: string;
  rating: number;
  reviewCount?: number;
  author?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: name,
    description: description,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: rating,
      bestRating: 5,
      worstRating: 1,
      ratingCount: reviewCount,
    },
    review: {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: author,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: rating,
        bestRating: 5,
        worstRating: 1,
      },
    },
  };
}

export function generateHowToSchema({
  name,
  description,
  steps,
  totalTime,
}: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
  totalTime?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: name,
    description: description,
    totalTime: totalTime || 'PT5M',
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

export function generateSoftwareAppSchema({
  name,
  description,
  applicationCategory,
  offers,
}: {
  name: string;
  description: string;
  applicationCategory: string;
  offers?: {
    price: string;
    priceCurrency: string;
  };
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: name,
    description: description,
    applicationCategory: applicationCategory,
    operatingSystem: 'Web',
    offers: offers || {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '100',
    },
  };
}
