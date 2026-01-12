import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import NewsletterForm from "@/components/NewsletterForm";
import StarRating from "@/components/StarRating";
import { getAllArticles, getAllTests } from "@/lib/mdx";
import { TrendingUp, Calculator, FileText, Award, Users, BookOpen, CheckCircle, Target, Shield, Clock } from "lucide-react";

export const metadata = {
  title: "Boussole Finance | Guide Complet Finance Personnelle pour Débutants",
  description: "Apprenez à gérer votre argent : 37 guides détaillés, 9 calculateurs gratuits, tests produits. Épargne, investissement, budget, impôts. Gratuit et accessible.",
  keywords: "finance personnelle, épargne, investissement, budget, calculateur impôts, guide finance, débutant finance",
  openGraph: {
    title: "Boussole Finance | Maîtrisez vos finances personnelles",
    description: "37 articles éducatifs, 9 calculateurs professionnels, tests produits détaillés. Tout pour optimiser votre argent.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function Home() {
  const articles = getAllArticles().slice(0, 6);
  const tests = getAllTests().slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-secondary text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
              🎯 100% gratuit • Sans inscription • Pour tous
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Maîtrisez vos finances personnelles en toute simplicité
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-white/90 leading-relaxed">
              <strong>Boussole Finance</strong> vous accompagne dans la gestion de votre argent avec des guides pratiques, des calculateurs professionnels et des tests de produits financiers.
            </p>
            <p className="text-lg mb-8 text-white/80">
              Épargne, investissement, budget, impôts, crédit : tout ce qu&apos;il faut savoir pour optimiser vos finances.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/articles" className="btn-primary no-underline inline-block shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                📚 Découvrir les guides
              </Link>
              <Link href="/calculateurs" className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-all no-underline inline-block shadow-xl hover:shadow-2xl hover:scale-105">
                🧮 Calculateurs gratuits
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">37</div>
                <div className="text-sm text-white/80">Guides complets</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">9</div>
                <div className="text-sm text-white/80">Calculateurs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">5</div>
                <div className="text-sm text-white/80">Tests produits</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Tout pour optimiser votre argent
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-gradient-to-br from-secondary to-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">37 Articles éducatifs</h3>
              <p className="text-gray-600 mb-4">
                Guides détaillés sur l&apos;épargne, l&apos;investissement, le budget, les impôts et le crédit. Du débutant à l&apos;expert.
              </p>
              <Link href="/articles" className="text-secondary font-semibold hover:underline">
                Parcourir les guides →
              </Link>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-gradient-to-br from-secondary to-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">9 Calculateurs professionnels</h3>
              <p className="text-gray-600 mb-4">
                Impôts, rendement locatif, épargne retraite, frais bancaires : simulez tous vos projets financiers gratuitement.
              </p>
              <Link href="/calculateurs" className="text-secondary font-semibold hover:underline">
                Essayer les calculateurs →
              </Link>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-gradient-to-br from-secondary to-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Tests de produits</h3>
              <p className="text-gray-600 mb-4">
                Analyses détaillées et impartiales des meilleures banques, applications et placements du marché français.
              </p>
              <Link href="/tests" className="text-secondary font-semibold hover:underline">
                Lire les tests →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Boussole Finance */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pourquoi choisir Boussole Finance ?
            </h2>
            <p className="text-lg text-gray-600">
              Nous rendons la finance accessible à tous avec des ressources gratuites et de qualité
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">100% gratuit</h3>
                <p className="text-gray-600">
                  Tous nos articles, calculateurs et tests sont entièrement gratuits. Aucune inscription requise.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Pour les débutants</h3>
                <p className="text-gray-600">
                  Contenus vulgarisés et accessibles. Nous expliquons simplement les concepts financiers complexes.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Guides complets</h3>
                <p className="text-gray-600">
                  Chaque article est détaillé avec exemples concrets, chiffres à jour et conseils pratiques actionnables.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-orange-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Avis impartiaux</h3>
                <p className="text-gray-600">
                  Tests objectifs basés sur notre expérience réelle. Avantages et inconvénients clairement présentés.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold flex items-center gap-2">
              <TrendingUp className="w-8 h-8 text-secondary" />
              Articles récents
            </h2>
            <Link href="/articles" className="text-secondary font-semibold hover:underline">
              Voir tous les articles →
            </Link>
          </div>

          {articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <ArticleCard
                  key={article.slug}
                  title={article.title}
                  description={article.description}
                  category={article.category}
                  slug={article.slug}
                  publishedAt={article.publishedAt}
                  readTime={article.readTime}
                  image={article.image}
                  type="article"
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600">Aucun article pour le moment.</p>
          )}
        </div>
      </section>

      {/* Latest Tests */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold flex items-center gap-2">
              <Award className="w-8 h-8 text-secondary" />
              Derniers tests produits
            </h2>
            <Link href="/tests" className="text-secondary font-semibold hover:underline">
              Voir tous les tests →
            </Link>
          </div>

          {tests.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tests.map((test) => (
                <div key={test.slug} className="card">
                  <Link href={`/tests/${test.slug}`} className="no-underline">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                        {test.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 hover:text-secondary transition-colors">
                      {test.title}
                    </h3>
                    <StarRating rating={test.rating} />
                    <p className="text-gray-600 mt-3 line-clamp-2">
                      {test.description}
                    </p>
                    <div className="mt-4 text-secondary font-semibold">
                      Lire le test complet →
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600">Aucun test pour le moment.</p>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Questions fréquentes
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Tout ce que vous devez savoir sur Boussole Finance
            </p>

            <div className="space-y-6">
              <details className="group bg-gray-50 rounded-xl p-6 cursor-pointer hover:bg-gray-100 transition-colors">
                <summary className="flex items-start justify-between font-bold text-lg list-none">
                  <span>Boussole Finance est-il vraiment gratuit ?</span>
                  <span className="text-secondary ml-4 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Oui, 100% gratuit ! Tous nos articles, calculateurs et tests produits sont accessibles sans inscription et sans frais cachés. Nous finançons le site via des liens d&apos;affiliation sur certains produits testés, mais cela n&apos;influence jamais nos avis qui restent totalement impartiaux.
                </p>
              </details>

              <details className="group bg-gray-50 rounded-xl p-6 cursor-pointer hover:bg-gray-100 transition-colors">
                <summary className="flex items-start justify-between font-bold text-lg list-none">
                  <span>À qui s&apos;adresse Boussole Finance ?</span>
                  <span className="text-secondary ml-4 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Boussole Finance s&apos;adresse principalement aux débutants en finance personnelle qui souhaitent apprendre à gérer leur argent. Nos contenus sont vulgarisés pour être accessibles à tous, même sans connaissances préalables. Que vous souhaitiez épargner, investir, optimiser votre budget ou comprendre vos impôts, vous trouverez des guides adaptés.
                </p>
              </details>

              <details className="group bg-gray-50 rounded-xl p-6 cursor-pointer hover:bg-gray-100 transition-colors">
                <summary className="flex items-start justify-between font-bold text-lg list-none">
                  <span>Les calculateurs sont-ils fiables ?</span>
                  <span className="text-secondary ml-4 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Nos calculateurs utilisent les formules officielles et les barèmes à jour (impôts 2026, taux d&apos;endettement bancaire, etc.). Ils donnent des estimations fiables mais ne remplacent pas un conseil personnalisé d&apos;un professionnel. Pour des décisions importantes, nous recommandons de consulter un conseiller financier.
                </p>
              </details>

              <details className="group bg-gray-50 rounded-xl p-6 cursor-pointer hover:bg-gray-100 transition-colors">
                <summary className="flex items-start justify-between font-bold text-lg list-none">
                  <span>Comment sont réalisés vos tests produits ?</span>
                  <span className="text-secondary ml-4 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Nous testons réellement chaque produit financier pendant plusieurs semaines : ouverture de compte, utilisation quotidienne, analyse des frais, test du service client. Nos avis sont objectifs et présentent toujours les avantages ET les inconvénients. Nous comparons également avec la concurrence pour vous aider à faire le meilleur choix.
                </p>
              </details>

              <details className="group bg-gray-50 rounded-xl p-6 cursor-pointer hover:bg-gray-100 transition-colors">
                <summary className="flex items-start justify-between font-bold text-lg list-none">
                  <span>Puis-je vous contacter pour une question ?</span>
                  <span className="text-secondary ml-4 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Oui ! Consultez notre page <Link href="/a-propos" className="text-secondary hover:underline">À propos</Link> pour nous contacter. Nous répondons dans les meilleurs délais. Pour des questions générales sur la finance, vérifiez d&apos;abord si un article n&apos;y répond pas déjà - nous couvrons plus de 37 sujets différents !
                </p>
              </details>
            </div>

            {/* Schema.org FAQ structured data */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "Boussole Finance est-il vraiment gratuit ?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Oui, 100% gratuit ! Tous nos articles, calculateurs et tests produits sont accessibles sans inscription et sans frais cachés. Nous finançons le site via des liens d'affiliation sur certains produits testés, mais cela n'influence jamais nos avis qui restent totalement impartiaux."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "À qui s'adresse Boussole Finance ?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Boussole Finance s'adresse principalement aux débutants en finance personnelle qui souhaitent apprendre à gérer leur argent. Nos contenus sont vulgarisés pour être accessibles à tous, même sans connaissances préalables."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Les calculateurs sont-ils fiables ?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Nos calculateurs utilisent les formules officielles et les barèmes à jour (impôts 2026, taux d'endettement bancaire, etc.). Ils donnent des estimations fiables mais ne remplacent pas un conseil personnalisé d'un professionnel."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Comment sont réalisés vos tests produits ?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Nous testons réellement chaque produit financier pendant plusieurs semaines : ouverture de compte, utilisation quotidienne, analyse des frais, test du service client. Nos avis sont objectifs et présentent toujours les avantages ET les inconvénients."
                      }
                    }
                  ]
                })
              }}
            />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-gradient-to-br from-primary to-secondary">
        <div className="container-custom">
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
}
