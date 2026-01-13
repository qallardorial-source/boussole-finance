"use client";

import { useState, useMemo } from "react";
import ArticleCard from "@/components/ArticleCard";
import SearchBar from "@/components/SearchBar";
import { Filter, SortAsc, BookOpen } from "lucide-react";
import { Article } from "@/lib/mdx";

const categories = [
  "Tous",
  "Épargne",
  "Investissement",
  "Banques",
  "Crédit & Prêts",
  "Assurances",
  "Fiscalité",
  "Budget",
];

const categoryDescriptions: Record<string, string> = {
  "Tous": "Tous nos articles sur la finance personnelle",
  "Épargne": "Livrets, assurance-vie, PEL : optimisez votre épargne",
  "Investissement": "Bourse, SCPI, immobilier : faites fructifier votre argent",
  "Banques": "Banques en ligne, néobanques : trouvez la meilleure offre",
  "Crédit & Prêts": "Crédit immobilier, consommation : empruntez malin",
  "Assurances": "Auto, habitation, emprunteur : protégez-vous au meilleur prix",
  "Fiscalité": "Impôts, défiscalisation : optimisez votre situation fiscale",
  "Budget": "Gérez votre argent au quotidien et faites des économies",
};

interface ArticlesClientProps {
  allArticles: Article[];
}

export default function ArticlesClient({ allArticles }: ArticlesClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<"date" | "title">("date");
  const articlesPerPage = 12;

  const filteredArticles = useMemo(() => {
    let filtered = allArticles.filter((article) => {
      const matchesCategory =
        selectedCategory === "Tous" || article.category === selectedCategory;
      const matchesSearch =
        searchQuery === "" ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });

    // Tri
    if (sortBy === "date") {
      filtered.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
    } else {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    }

    return filtered;
  }, [allArticles, selectedCategory, searchQuery, sortBy]);

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  // Stats par catégorie
  const categoryStats = useMemo(() => {
    return categories.reduce((acc, cat) => {
      if (cat === "Tous") {
        acc[cat] = allArticles.length;
      } else {
        acc[cat] = allArticles.filter(a => a.category === cat).length;
      }
      return acc;
    }, {} as Record<string, number>);
  }, [allArticles]);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-16">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              {allArticles.length} Guides de Finance Personnelle
            </h1>
          </div>
          <p className="text-xl text-white/90 mb-6">
            {categoryDescriptions[selectedCategory]}
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <span className="text-white/80 text-sm">Total : </span>
              <span className="text-white font-bold">{allArticles.length} articles</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <span className="text-white/80 text-sm">Catégories : </span>
              <span className="text-white font-bold">{categories.length - 1}</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container-custom py-12">
        {/* Search & Filters */}
        <div className="mb-8 space-y-6">
          <SearchBar onSearch={setSearchQuery} />

          {/* Categories avec compteurs */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-gray-600" />
              <h2 className="text-lg font-semibold">Filtrer par catégorie</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setCurrentPage(1);
                  }}
                  className={`group px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-secondary text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                  <span className={`ml-2 text-sm ${
                    selectedCategory === category
                      ? "text-white/80"
                      : "text-gray-500"
                  }`}>
                    ({categoryStats[category] || 0})
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Tri */}
          <div className="flex items-center justify-between flex-wrap gap-4">
            <p className="text-gray-600">
              <strong>{filteredArticles.length}</strong> article{filteredArticles.length > 1 ? "s" : ""} {searchQuery && `pour "${searchQuery}"`}
            </p>
            <div className="flex items-center gap-2">
              <SortAsc className="w-4 h-4 text-gray-600" />
              <label className="text-sm text-gray-600 font-medium">Trier par :</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "date" | "title")}
                className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
              >
                <option value="date">Plus récents</option>
                <option value="title">Alphabétique</option>
              </select>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        {paginatedArticles.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {paginatedArticles.map((article) => (
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

            {/* Pagination améliorée */}
            {totalPages > 1 && (
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium transition-colors"
                  >
                    ← Précédent
                  </button>

                  <div className="flex gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                          currentPage === page
                            ? "bg-secondary text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium transition-colors"
                  >
                    Suivant →
                  </button>
                </div>
                <p className="text-sm text-gray-500">
                  Affichage de {(currentPage - 1) * articlesPerPage + 1} à {Math.min(currentPage * articlesPerPage, filteredArticles.length)} sur {filteredArticles.length} articles
                </p>
              </div>
            )}
          </>
        ) : (
          <p className="text-center text-gray-600 py-12">
            Aucun article trouvé pour cette recherche.
          </p>
        )}
      </div>
    </div>
  );
}
