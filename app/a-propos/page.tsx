import { Mail, Target, Shield, TrendingUp, Users, Award, BookCheck } from "lucide-react";

export const metadata = {
  title: "À Propos | Boussole Finance - Notre Mission et Notre Expertise",
  description: "Découvrez Boussole Finance : notre mission, notre équipe d'experts en finance personnelle, notre méthodologie de test et notre engagement pour la transparence. Plus de 10 ans d'expérience en conseil financier.",
  openGraph: {
    title: "À Propos de Boussole Finance",
    description: "Votre guide de confiance pour la finance personnelle. Expertise, transparence et conseils impartiaux.",
    type: "website",
  },
};

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
              Boussole Finance est animé par une équipe passionnée par la finance personnelle et l&apos;éducation financière. Notre auteur principal est <strong>expert-comptable diplômé</strong> avec <strong>plus de 10 ans d&apos;expérience</strong> dans le conseil financier aux particuliers et aux professionnels.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Nous testons réellement les produits que nous recommandons et nous efforçons de fournir des informations précises, à jour et impartiales. Chaque article est relu et vérifié avant publication.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="flex gap-4 items-start p-4 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold mb-1">10+ ans d&apos;expérience</h3>
                  <p className="text-sm text-gray-600">En conseil financier et comptabilité</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <BookCheck className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold mb-1">37 guides publiés</h3>
                  <p className="text-sm text-gray-600">Articles vérifiés et actualisés</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Tests réels</h3>
                  <p className="text-sm text-gray-600">Produits utilisés pendant plusieurs semaines</p>
                </div>
              </div>
            </div>
          </section>

          {/* Méthodologie */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Notre méthodologie</h2>
            <div className="card bg-gray-50">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nous appliquons une méthodologie rigoureuse pour garantir la qualité et l&apos;impartialité de nos contenus :
              </p>

              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-bold mb-1">Recherche et vérification</h3>
                    <p className="text-gray-700">Nous consultons les sources officielles (Banque de France, Direction Générale des Finances Publiques, AMF) pour garantir l&apos;exactitude des informations.</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-bold mb-1">Tests en conditions réelles</h3>
                    <p className="text-gray-700">Pour les tests de produits, nous créons un compte réel et utilisons le service pendant au moins 3 semaines avant de publier notre avis.</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-bold mb-1">Comparaison objective</h3>
                    <p className="text-gray-700">Nous comparons chaque produit avec ses concurrents directs sur des critères mesurables : frais, rendement, ergonomie, service client.</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                  <div>
                    <h3 className="font-bold mb-1">Actualisation régulière</h3>
                    <p className="text-gray-700">Nos articles sont revus tous les 6 mois pour s&apos;assurer que les informations (taux, plafonds, législation) restent à jour.</p>
                  </div>
                </div>
              </div>
            </div>
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
              <p className="text-white/90 mb-4">
                Email : <a href="mailto:contact@boussole-finance.fr" className="font-semibold hover:underline text-white">contact@boussole-finance.fr</a>
              </p>
              <p className="text-sm text-white/80">
                Nous répondons généralement sous 48h. Pour les questions générales sur la finance, pensez à consulter nos 37 articles qui couvrent la plupart des sujets.
              </p>
            </div>
          </section>

          {/* Schema.org Organization + AboutPage structured data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Boussole Finance",
                "url": "https://boussole-finance.fr",
                "logo": "https://boussole-finance.fr/logo.png",
                "description": "Guide complet de finance personnelle pour débutants. 37 articles éducatifs, 9 calculateurs gratuits et tests de produits financiers.",
                "email": "contact@boussole-finance.fr",
                "foundingDate": "2024",
                "sameAs": [
                  "https://boussole-finance.fr/feed.xml"
                ],
                "areaServed": {
                  "@type": "Country",
                  "name": "France"
                },
                "knowsAbout": [
                  "Finance personnelle",
                  "Épargne",
                  "Investissement",
                  "Budget",
                  "Impôts",
                  "Crédit immobilier",
                  "Banques en ligne"
                ]
              })
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "AboutPage",
                "name": "À propos de Boussole Finance",
                "description": "Découvrez notre mission, notre expertise et notre engagement pour rendre la finance personnelle accessible à tous les Français.",
                "mainEntity": {
                  "@type": "Organization",
                  "name": "Boussole Finance"
                }
              })
            }}
          />
        </div>
      </div>
    </div>
  );
}
