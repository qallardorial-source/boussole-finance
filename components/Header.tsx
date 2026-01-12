"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search, Compass, ChevronDown, Calculator, FileText, Award, TrendingUp, PiggyBank, CreditCard, Shield, Home as HomeIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/articles?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  const articleCategories = [
    { name: "Épargne", href: "/articles?category=Épargne", icon: PiggyBank, description: "Livrets, assurance-vie, PEL" },
    { name: "Investissement", href: "/articles?category=Investissement", icon: TrendingUp, description: "Bourse, SCPI, immobilier" },
    { name: "Banques", href: "/articles?category=Banques", icon: HomeIcon, description: "Banques en ligne, néobanques" },
    { name: "Crédit & Prêts", href: "/articles?category=Crédit & Prêts", icon: CreditCard, description: "Crédit immobilier, conso" },
    { name: "Assurances", href: "/articles?category=Assurances", icon: Shield, description: "Auto, habitation, emprunteur" },
    { name: "Budget", href: "/articles?category=Budget", icon: Calculator, description: "Gérer son argent au quotidien" },
  ];

  const calculators = [
    { name: "Impôts (TMI 2026)", href: "/calculateurs#impots", description: "Calculer votre impôt" },
    { name: "Frais bancaires", href: "/calculateurs#frais-bancaires", description: "Comparer les banques" },
    { name: "Rendement locatif", href: "/calculateurs#rendement-locatif", description: "Investissement immobilier" },
    { name: "Épargne retraite", href: "/calculateurs#epargne-retraite", description: "Projeter votre retraite" },
    { name: "Rachat de crédit", href: "/calculateurs#rachat-credit", description: "Analyser la rentabilité" },
    { name: "Intérêts composés", href: "/calculateurs#interets-composes", description: "Projeter votre épargne" },
    { name: "Budget mensuel", href: "/calculateurs#budget", description: "Analyser vos dépenses" },
    { name: "Capacité d'emprunt", href: "/calculateurs#capacite-emprunt", description: "Crédit immobilier" },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 no-underline hover:no-underline group">
            <div className="p-2 bg-gradient-to-br from-secondary to-accent rounded-xl group-hover:scale-105 transition-transform">
              <Compass className="w-7 h-7 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary leading-tight">Boussole Finance</span>
              <span className="text-xs text-gray-500 font-medium">Finance pour tous</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className="px-4 py-2 text-gray-700 hover:text-secondary hover:bg-gray-50 rounded-lg font-medium transition-all no-underline"
            >
              Accueil
            </Link>

            {/* Articles Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("articles")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-secondary hover:bg-gray-50 rounded-lg font-medium transition-all">
                <FileText className="w-4 h-4" />
                Articles
                <ChevronDown className="w-4 h-4" />
              </button>

              {activeDropdown === "articles" && (
                <div className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-xl shadow-2xl border border-gray-100 p-6 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="grid grid-cols-2 gap-4">
                    {articleCategories.map((category) => (
                      <Link
                        key={category.name}
                        href={category.href}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors no-underline group"
                      >
                        <div className="p-2 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                          <category.icon className="w-5 h-5 text-secondary" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 group-hover:text-secondary transition-colors">
                            {category.name}
                          </div>
                          <div className="text-sm text-gray-500">{category.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <Link
                      href="/articles"
                      className="text-sm font-semibold text-secondary hover:text-secondary/80 transition-colors no-underline"
                    >
                      Voir tous les articles →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Calculateurs Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("calculateurs")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-secondary hover:bg-gray-50 rounded-lg font-medium transition-all">
                <Calculator className="w-4 h-4" />
                Calculateurs
                <ChevronDown className="w-4 h-4" />
              </button>

              {activeDropdown === "calculateurs" && (
                <div className="absolute top-full left-0 mt-2 w-[400px] bg-white rounded-xl shadow-2xl border border-gray-100 p-4 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="space-y-1">
                    {calculators.map((calc) => (
                      <Link
                        key={calc.name}
                        href={calc.href}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors no-underline group"
                      >
                        <Calculator className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-gray-900 group-hover:text-secondary transition-colors">
                            {calc.name}
                          </div>
                          <div className="text-sm text-gray-500">{calc.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/tests"
              className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-secondary hover:bg-gray-50 rounded-lg font-medium transition-all no-underline"
            >
              <Award className="w-4 h-4" />
              Tests
            </Link>

            <Link
              href="/a-propos"
              className="px-4 py-2 text-gray-700 hover:text-secondary hover:bg-gray-50 rounded-lg font-medium transition-all no-underline"
            >
              À propos
            </Link>
          </div>

          {/* Search + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Rechercher..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-48 xl:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </form>

            {/* CTA Button */}
            <Link
              href="/calculateurs"
              className="px-5 py-2.5 bg-gradient-to-r from-secondary to-accent text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all no-underline"
            >
              Calculateurs
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 space-y-2">
            <Link
              href="/"
              className="block py-2 px-4 text-gray-700 hover:text-secondary hover:bg-gray-50 rounded-lg font-medium transition-colors no-underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link
              href="/articles"
              className="block py-2 px-4 text-gray-700 hover:text-secondary hover:bg-gray-50 rounded-lg font-medium transition-colors no-underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Articles
            </Link>
            <Link
              href="/calculateurs"
              className="block py-2 px-4 text-gray-700 hover:text-secondary hover:bg-gray-50 rounded-lg font-medium transition-colors no-underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Calculateurs
            </Link>
            <Link
              href="/tests"
              className="block py-2 px-4 text-gray-700 hover:text-secondary hover:bg-gray-50 rounded-lg font-medium transition-colors no-underline"
              onClick={() => setIsMenuOpen(false)}
            >
              Tests
            </Link>
            <Link
              href="/a-propos"
              className="block py-2 px-4 text-gray-700 hover:text-secondary hover:bg-gray-50 rounded-lg font-medium transition-colors no-underline"
              onClick={() => setIsMenuOpen(false)}
            >
              À propos
            </Link>

            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="px-4 pt-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </form>
          </div>
        )}
      </nav>
    </header>
  );
}
