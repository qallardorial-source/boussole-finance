import Link from "next/link";
import { Home, Search, TrendingUp } from "lucide-react";

export default function NotFound() {
  // Articles populaires suggérés (vous pouvez les dynamiser plus tard)
  const popularArticles = [
    { title: "Débuter dans l'investissement", href: "/articles/debuter-investissement" },
    { title: "Assurance-vie : Le guide complet", href: "/articles/assurance-vie-guide-debutant" },
    { title: "PEA : Plan Épargne Actions", href: "/articles/pea-plan-epargne-actions" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container-custom py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Emoji/Illustration */}
          <div className="mb-8">
            <span className="text-9xl">🧭</span>
          </div>

          {/* Titre */}
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Page introuvable
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Oups ! On dirait que vous vous êtes perdu. Cette page n'existe pas ou a été déplacée.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-lg font-semibold transition-colors no-underline"
            >
              <Home className="w-5 h-5" />
              Retour à l'accueil
            </Link>
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors no-underline"
            >
              <Search className="w-5 h-5" />
              Parcourir les articles
            </Link>
          </div>

          {/* Articles populaires */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-2 justify-center mb-6">
              <TrendingUp className="w-6 h-6 text-secondary" />
              <h3 className="text-xl font-bold text-primary">Articles populaires</h3>
            </div>
            <ul className="space-y-4">
              {popularArticles.map((article) => (
                <li key={article.href}>
                  <Link
                    href={article.href}
                    className="text-lg text-secondary hover:text-secondary/80 hover:underline transition-colors"
                  >
                    → {article.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
