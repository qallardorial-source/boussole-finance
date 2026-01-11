import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getArticleBySlug, getAllArticles } from "@/lib/mdx";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return {
      title: "Article non trouvé",
    };
  }

  return {
    title: `${article.title} | Boussole Finance`,
    description: article.description,
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-secondary text-white py-12">
        <div className="container-custom">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 no-underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour aux articles
          </Link>

          <div className="mb-4">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-white/20 text-white">
              {article.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {article.title}
          </h1>

          <div className="flex items-center gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{new Date(article.publishedAt).toLocaleDateString('fr-FR')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{article.readTime} min de lecture</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <MDXRemote source={article.content} />
          </div>
        </div>
      </article>
    </div>
  );
}
