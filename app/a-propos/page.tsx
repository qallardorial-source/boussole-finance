import { Mail, Target, Shield, TrendingUp } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            À propos de Boussole Finance
          </h1>
          <p className="text-xl text-white/90">
            Votre guide de confiance pour la finance personnelle
          </p>
        </div>
      </section>

      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          {/* Mission */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-secondary" />
              <h2 className="text-3xl font-bold">Notre mission</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Boussole Finance a été créé avec une mission simple : rendre la finance personnelle accessible à tous les Français, même sans connaissances préalables.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nous croyons que chacun devrait pouvoir comprendre comment gérer son argent, faire des choix éclairés sur ses placements, et atteindre ses objectifs financiers sans avoir besoin d&apos;un diplôme en finance.
            </p>
          </section>

          {/* Expertise */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-8 h-8 text-secondary" />
              <h2 className="text-3xl font-bold">Notre expertise</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Boussole Finance est animé par une équipe passionnée par la finance personnelle et l&apos;éducation financière. Notre auteur principal est expert-comptable avec plus de 10 ans d&apos;expérience dans le conseil financier aux particuliers.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nous testons réellement les produits que nous recommandons et nous efforçons de fournir des informations précises, à jour et impartiales.
            </p>
          </section>

          {/* Transparency */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-secondary" />
              <h2 className="text-3xl font-bold">Transparence et liens d&apos;affiliation</h2>
            </div>
            <div className="card bg-blue-50 border-blue-200">
              <p className="text-gray-700 leading-relaxed mb-4">
                Certains liens présents sur notre site sont des liens d&apos;affiliation. Cela signifie que nous pouvons recevoir une commission si vous souscrivez à un produit via nos liens, sans frais supplémentaires pour vous.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ces commissions nous permettent de maintenir le site gratuit et de continuer à produire du contenu de qualité. Cependant, elles n&apos;influencent jamais nos avis ou nos notes.
              </p>
              <p className="text-gray-700 leading-relaxed font-semibold">
                Nous ne recommandons que des produits que nous avons testés et que nous estimons réellement utiles pour nos lecteurs.
              </p>
            </div>
          </section>

          {/* What we offer */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Ce que nous proposons</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="card">
                <h3 className="text-xl font-bold mb-3">Articles éducatifs</h3>
                <p className="text-gray-700">
                  Des guides complets sur tous les aspects de la finance personnelle : banques, investissement, épargne, crédit, fiscalité et budget.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold mb-3">Tests de produits</h3>
                <p className="text-gray-700">
                  Des avis détaillés et objectifs sur les banques en ligne, néobanques, plateformes d&apos;investissement et applications de gestion de budget.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-bold mb-3">Calculateurs gratuits</h3>
                <p className="text-gray-700">
                  Des outils interactifs pour simuler vos projets : intérêts composés, budget mensuel, capacité d&apos;emprunt et plus encore.
                </p>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Mail className="w-8 h-8 text-secondary" />
              <h2 className="text-3xl font-bold">Nous contacter</h2>
            </div>
            <div className="card bg-gradient-to-r from-secondary to-accent text-white">
              <p className="text-lg mb-4 text-white">
                Une question ? Une suggestion ? Nous serions ravis d&apos;avoir de vos nouvelles.
              </p>
              <p className="text-white/90">
                Email : <a href="mailto:contact@boussole-finance.fr" className="font-semibold hover:underline text-white">contact@boussole-finance.fr</a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
