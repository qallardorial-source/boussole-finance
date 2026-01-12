import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PlausibleAnalytics, GoogleAnalytics } from "@/components/Analytics";
import { generateMetadata as generateSEOMetadata, generateOrganizationSchema, generateWebSiteSchema } from "@/lib/seo";

export const metadata: Metadata = generateSEOMetadata({});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebSiteSchema();

  return (
    <html lang="fr">
      <head>
        {/* Données structurées JSON-LD pour SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>
        <PlausibleAnalytics />
        <GoogleAnalytics />
        <Header />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
