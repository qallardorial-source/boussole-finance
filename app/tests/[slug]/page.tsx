import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getTestBySlug, getAllTests } from "@/lib/mdx";
import StarRating from "@/components/StarRating";
import { Calendar, ArrowLeft, CheckCircle, XCircle, ExternalLink } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  const tests = getAllTests();
  return tests.map((test) => ({
    slug: test.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const test = getTestBySlug(params.slug);

  if (!test) {
    return {
      title: "Test non trouvé",
    };
  }

  return {
    title: `${test.title} | Boussole Finance`,
    description: test.description,
  };
}

export default function TestPage({ params }: { params: { slug: string } }) {
  const test = getTestBySlug(params.slug);

  if (!test) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-secondary text-white py-12">
        <div className="container-custom">
          <Link
            href="/tests"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 no-underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour aux tests
          </Link>

          <div className="mb-4 flex items-center gap-2">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-white/20 text-white">
              {test.category}
            </span>
            {test.affiliate && (
              <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-orange-200 text-orange-900">
                Lien affilié
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {test.title}
          </h1>

          <div className="flex items-center gap-6">
            <StarRating rating={test.rating} size="lg" />
            <div className="flex items-center gap-2 text-white/90">
              <Calendar className="w-5 h-5" />
              <span>{new Date(test.publishedAt).toLocaleDateString('fr-FR')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          {/* Pros and Cons */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Pros */}
            <div className="card border-2 border-green-200 bg-green-50">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-green-800">
                <CheckCircle className="w-6 h-6" />
                Points forts
              </h3>
              <ul className="space-y-2">
                {test.pros.map((pro, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons */}
            <div className="card border-2 border-red-200 bg-red-50">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-red-800">
                <XCircle className="w-6 h-6" />
                Points faibles
              </h3>
              <ul className="space-y-2">
                {test.cons.map((con, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <span className="text-red-600 mt-1">✗</span>
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <MDXRemote source={test.content} />
          </div>

          {/* Affiliate CTA */}
          {test.affiliate && test.affiliateLink && (
            <div className="card bg-gradient-to-r from-secondary to-accent text-white text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Intéressé par ce produit ?
              </h3>
              <p className="mb-6 text-white/90">
                Cliquez sur le lien ci-dessous pour découvrir l&apos;offre.
                En utilisant notre lien, vous nous aidez à continuer à produire du contenu gratuit.
              </p>
              <a
                href={test.affiliateLink}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-bold transition-colors no-underline"
              >
                Découvrir l&apos;offre
                <ExternalLink className="w-5 h-5" />
              </a>
              <p className="mt-4 text-sm text-white/80">
                Lien affilié - Nous pouvons recevoir une commission
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
