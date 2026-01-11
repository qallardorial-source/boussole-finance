import Link from "next/link";
import { Compass } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    "Liens rapides": [
      { name: "Accueil", href: "/" },
      { name: "Articles", href: "/articles" },
      { name: "Tests", href: "/tests" },
      { name: "Calculateurs", href: "/calculateurs" },
      { name: "À propos", href: "/a-propos" },
    ],
    "Catégories": [
      { name: "Banques", href: "/articles?category=banques" },
      { name: "Investissement", href: "/articles?category=investissement" },
      { name: "Épargne", href: "/articles?category=epargne" },
      { name: "Budget", href: "/articles?category=budget" },
    ],
    "Légal": [
      { name: "Mentions légales", href: "/mentions-legales" },
      { name: "Politique de confidentialité", href: "/politique-confidentialite" },
      { name: "CGU", href: "/cgu" },
    ],
  };

  return (
    <footer className="bg-primary text-white mt-auto">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 no-underline hover:no-underline">
              <Compass className="w-8 h-8 text-accent" />
              <span className="text-xl font-bold text-white">Boussole Finance</span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Votre guide de finance personnelle pour débutants. Conseils, tests et outils gratuits.
            </p>
          </div>

          {/* Liens */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4 text-accent">{category}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-white text-sm transition-colors no-underline hover:underline"
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
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400 mb-2">
            Les liens vers certains produits peuvent être des liens d&apos;affiliation.
            Nous pouvons recevoir une commission si vous effectuez un achat via ces liens.
          </p>
          <p className="text-sm text-gray-400">
            © {currentYear} Boussole Finance. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
