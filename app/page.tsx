import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import NewsletterForm from "@/components/NewsletterForm";
import StarRating from "@/components/StarRating";
import { getAllArticles, getAllTests } from "@/lib/mdx";
import { TrendingUp, Calculator, FileText, Award } from "lucide-react";

export default function Home() {
  const articles = getAllArticles().slice(0, 6);
  const tests = getAllTests().slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-secondary text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Prenez le contrôle de vos finances personnelles
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Guides pratiques, tests de produits financiers et calculateurs gratuits pour gérer votre argent intelligemment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/articles" className="btn-primary no-underline inline-block">
                Découvrir les articles
              </Link>
              <Link href="/calculateurs" className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors no-underline inline-block">
                Utiliser les calculateurs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Articles éducatifs</h3>
              <p className="text-gray-600">
                Des guides complets pour comprendre la finance personnelle simplement
              </p>
            </div>
            <div className="text-center">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Tests de produits</h3>
              <p className="text-gray-600">
                Nos avis détaillés sur les banques, placements et applications finance
              </p>
            </div>
            <div className="text-center">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Calculateurs gratuits</h3>
              <p className="text-gray-600">
                Simulez vos projets financiers avec nos outils interactifs
              </p>
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

      {/* Newsletter */}
      <section className="section-padding">
        <div className="container-custom">
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
}
