import Link from "next/link";
import Image from "next/image";
import { Clock, Calendar } from "lucide-react";

interface ArticleCardProps {
  title: string;
  description: string;
  category: string;
  slug: string;
  publishedAt: string;
  readTime: number;
  image?: string;
  type?: "article" | "test";
}

const categoryColors: Record<string, string> = {
  "Banques": "bg-blue-100 text-blue-800",
  "Investissement": "bg-green-100 text-green-800",
  "Épargne": "bg-purple-100 text-purple-800",
  "Crédit & Prêts": "bg-orange-100 text-orange-800",
  "Assurances": "bg-red-100 text-red-800",
  "Fiscalité": "bg-yellow-100 text-yellow-800",
  "Budget": "bg-indigo-100 text-indigo-800",
  "Crowdfunding Immobilier": "bg-teal-100 text-teal-800",
  "Banques en ligne": "bg-cyan-100 text-cyan-800",
  "Néobanques": "bg-pink-100 text-pink-800",
  "Placement & Investissement": "bg-emerald-100 text-emerald-800",
  "Applications Budget": "bg-violet-100 text-violet-800",
};

export default function ArticleCard({
  title,
  description,
  category,
  slug,
  publishedAt,
  readTime,
  image,
  type = "article",
}: ArticleCardProps) {
  const href = type === "article" ? `/articles/${slug}` : `/tests/${slug}`;
  const categoryColor = categoryColors[category] || "bg-gray-100 text-gray-800";

  return (
    <article className="card block no-underline hover:no-underline group h-full flex flex-col">
      <Link href={href} className="flex-1 flex flex-col no-underline hover:no-underline">
        {/* Image */}
        {image ? (
          <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-gray-100">
            <Image
              src={image}
              alt={`Illustration de l'article : ${title}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="w-full h-48 mb-4 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
            <span className="text-white text-6xl opacity-50" aria-hidden="true">📊</span>
          </div>
        )}

      {/* Category Badge */}
      <div className="mb-3">
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${categoryColor}`}>
          {category}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 mb-4 line-clamp-3">
        {description}
      </p>

      {/* Meta */}
      <div className="flex items-center gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          <span>{new Date(publishedAt).toLocaleDateString('fr-FR')}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>{readTime} min</span>
        </div>
      </div>

        {/* Read more link */}
        <div className="mt-auto pt-4 text-secondary font-semibold flex items-center gap-2">
          Lire la suite
          <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
        </div>
      </Link>
    </article>
  );
}
