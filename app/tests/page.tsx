"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import StarRating from "@/components/StarRating";
import SearchBar from "@/components/SearchBar";
import { getAllTests } from "@/lib/mdx";

const categories = [
  "Tous",
  "Crowdfunding Immobilier",
  "Banques en ligne",
  "Néobanques",
  "Placement & Investissement",
  "Applications Budget",
];

export default function TestsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [searchQuery, setSearchQuery] = useState("");

  const allTests = getAllTests();

  const filteredTests = useMemo(() => {
    return allTests.filter((test) => {
      const matchesCategory =
        selectedCategory === "Tous" || test.category === selectedCategory;
      const matchesSearch =
        searchQuery === "" ||
        test.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        test.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [allTests, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Tests de produits financiers
          </h1>
          <p className="text-xl text-white/90">
            Nos avis détaillés et notes sur les meilleures solutions finance
          </p>
        </div>
      </section>

      <div className="container-custom py-12">
        {/* Search */}
        <div className="mb-8">
          <SearchBar onSearch={setSearchQuery} placeholder="Rechercher un test..." />
        </div>

        {/* Categories */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-secondary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Tests Count */}
        <p className="text-gray-600 mb-6">
          {filteredTests.length} test{filteredTests.length > 1 ? "s" : ""} trouvé{filteredTests.length > 1 ? "s" : ""}
        </p>

        {/* Tests Grid */}
        {filteredTests.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTests.map((test) => (
              <Link
                key={test.slug}
                href={`/tests/${test.slug}`}
                className="card no-underline group"
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                    {test.category}
                  </span>
                  {test.affiliate && (
                    <span className="ml-2 inline-block px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-800">
                      Lien affilié
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-secondary transition-colors">
                  {test.title}
                </h3>

                <div className="mb-4">
                  <StarRating rating={test.rating} />
                </div>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {test.description}
                </p>

                <div className="text-secondary font-semibold group-hover:underline">
                  Lire le test complet →
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 py-12">
            Aucun test trouvé pour cette recherche.
          </p>
        )}
      </div>
    </div>
  );
}
