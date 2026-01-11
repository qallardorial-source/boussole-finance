import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PlausibleAnalytics, GoogleAnalytics } from "@/components/Analytics";

export const metadata: Metadata = {
  title: 'Boussole Finance - Guide de Finance Personnelle pour Débutants',
  description: 'Apprenez la finance personnelle simplement : banques, investissements, épargne. Tests de produits et calculateurs gratuits.',
  keywords: ['finance personnelle', 'banque', 'investissement', 'épargne', 'budget'],
  openGraph: {
    title: 'Boussole Finance',
    description: 'Votre guide finance personnelle',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <PlausibleAnalytics />
        <GoogleAnalytics />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
