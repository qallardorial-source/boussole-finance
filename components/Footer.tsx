import Link from "next/link";
import { Compass, Rss, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    "Navigation": [
      { name: "Accueil", href: "/" },
      { name: "Tous les articles", href: "/articles" },
      { name: "Tests produits", href: "/tests" },
      { name: "Calculateurs", href: "/calculateurs" },
      { name: "À propos", href: "/a-propos" },
    ],
    "Catégories populaires": [
      { name: "Épargne", href: "/articles?category=Épargne" },
      { name: "Investissement", href: "/articles?category=Investissement" },
      { name: "Banques", href: "/articles?category=Banques" },
      { name: "Crédit & Prêts", href: "/articles?category=Crédit & Prêts" },
      { name: "Budget", href: "/articles?category=Budget" },
      { name: "Assurances", href: "/articles?category=Assurances" },
    ],
    "Calculateurs gratuits": [
      { name: "Calculateur d'impôts (TMI)", href: "/calculateurs#impots" },
      { name: "Frais bancaires", href: "/calculateurs#frais-bancaires" },
      { name: "Rendement locatif", href: "/calculateurs#rendement-locatif" },
      { name: "Épargne retraite", href: "/calculateurs#epargne-retraite" },
      { name: "Capacité d'emprunt", href: "/calculateurs#capacite-emprunt" },
    ],
    "Informations légales": [
      { name: "Mentions légales", href: "/mentions-legales" },
      { name: "Politique de confidentialité", href: "/politique-confidentialite" },
      { name: "CGU", href: "/cgu" },
    ],
  };

  return (
    <footer className="bg-primary text-white mt-auto">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Logo et description */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 no-underline hover:no-underline">
              <div className="p-2 bg-gradient-to-br from-secondary to-accent rounded-lg">
                <Compass className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Boussole Finance</span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Votre guide complet de finance personnelle : <strong className="text-white">37 articles</strong>, <strong className="text-white">9 calculateurs</strong> et <strong className="text-white">5 tests</strong> pour optimiser votre argent.
            </p>
            <div className="flex gap-3">
              <a
                href="/feed.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors text-sm no-underline"
                aria-label="Flux RSS"
              >
                <Rss className="w-4 h-4" />
                <span>RSS</span>
              </a>
            </div>
          </div>

          {/* Liens */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4 text-accent text-sm uppercase tracking-wider">{category}</h3>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-white text-sm transition-colors no-underline hover:underline inline-block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © {currentYear} Boussole Finance. Tous droits réservés.
              <span className="block md:inline md:ml-2 mt-1 md:mt-0">
                100% gratuit • Sans inscription • Pour tous
              </span>
            </p>
            <p className="text-xs text-gray-500 text-center md:text-right max-w-md">
              Les liens vers certains produits sont des liens d&apos;affiliation. Nous pouvons percevoir une commission, sans frais supplémentaires pour vous.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
