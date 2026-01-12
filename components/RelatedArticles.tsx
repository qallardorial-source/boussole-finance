import ArticleCard from "./ArticleCard";
import { getAllArticles } from "@/lib/mdx";

interface RelatedArticlesProps {
  currentSlug: string;
  category: string;
  limit?: number;
}

export default function RelatedArticles({
  currentSlug,
  category,
  limit = 3,
}: RelatedArticlesProps) {
  const allArticles = getAllArticles();

  // Filtrer les articles de la même catégorie (sauf l'article actuel)
  const relatedArticles = allArticles
    .filter((article) => article.slug !== currentSlug && article.category === category)
    .slice(0, limit);

  // Si pas assez d'articles dans la catégorie, compléter avec d'autres articles
  if (relatedArticles.length < limit) {
    const otherArticles = allArticles
      .filter((article) => article.slug !== currentSlug && article.category !== category)
      .slice(0, limit - relatedArticles.length);
    relatedArticles.push(...otherArticles);
  }

  if (relatedArticles.length === 0) return null;

  return (
    <section className="mt-16 pt-12 border-t border-gray-200">
      <h2 className="text-3xl font-bold text-primary mb-8">
        Articles similaires
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedArticles.map((article) => (
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
    </section>
  );
}
