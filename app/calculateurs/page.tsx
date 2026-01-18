import CompoundInterestCalculator from "@/components/calculators/CompoundInterestCalculator";
import BudgetCalculator from "@/components/calculators/BudgetCalculator";
import LoanCapacityCalculator from "@/components/calculators/LoanCapacityCalculator";
import TaxCalculator from "@/components/calculators/TaxCalculator";
import BankFeesCalculator from "@/components/calculators/BankFeesCalculator";
import RentalYieldCalculator from "@/components/calculators/RentalYieldCalculator";
import RetirementSavingsCalculator from "@/components/calculators/RetirementSavingsCalculator";
import DebtConsolidationCalculator from "@/components/calculators/DebtConsolidationCalculator";
import { Calculator } from "lucide-react";

export const metadata = {
  title: "9 Calculateurs Finance Gratuits | Boussole Finance",
  description: "Simulateurs financiers gratuits : impôts, épargne retraite, rendement locatif, frais bancaires, intérêts composés, budget, capacité d'emprunt et rachat de crédit. Outils professionnels pour optimiser vos finances.",
};

export default function CalculateursPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-16">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-4">
            <Calculator className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Calculateurs financiers
            </h1>
          </div>
          <p className="text-xl text-white/90 mb-6">
            9 simulateurs professionnels pour optimiser vos finances
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#impots" className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-medium transition-colors">
              Impôts
            </a>
            <a href="#frais-bancaires" className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-medium transition-colors">
              Frais bancaires
            </a>
            <a href="#rendement-locatif" className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-medium transition-colors">
              Immobilier locatif
            </a>
            <a href="#epargne-retraite" className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-medium transition-colors">
              Épargne retraite
            </a>
            <a href="#rachat-credit" className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-medium transition-colors">
              Rachat de crédit
            </a>
          </div>
        </div>
      </section>

      <div className="container-custom py-12">
        <div className="space-y-16">
          {/* Nouveaux calculateurs professionnels */}

          {/* Tax Calculator */}
          <section id="impots">
            <TaxCalculator />
          </section>

          {/* Bank Fees Calculator */}
          <section id="frais-bancaires">
            <BankFeesCalculator />
          </section>

          {/* Rental Yield Calculator */}
          <section id="rendement-locatif">
            <RentalYieldCalculator />
          </section>

          {/* Retirement Savings Calculator */}
          <section id="epargne-retraite">
            <RetirementSavingsCalculator />
          </section>

          {/* Debt Consolidation Calculator */}
          <section id="rachat-credit">
            <DebtConsolidationCalculator />
          </section>

          {/* Divider */}
          <div className="border-t-2 border-gray-200 my-12"></div>

          {/* Calculateurs classiques */}

          {/* Compound Interest Calculator */}
          <section id="interets-composes">
            <CompoundInterestCalculator />
          </section>

          {/* Budget Calculator */}
          <section id="budget">
            <BudgetCalculator />
          </section>

          {/* Loan Capacity Calculator */}
          <section id="capacite-emprunt">
            <LoanCapacityCalculator />
          </section>
        </div>

        {/* Call to Action */}
        <div className="mt-16 p-8 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Besoin d&apos;aide pour vos finances ?
          </h2>
          <p className="text-xl text-white/90 mb-6">
            Découvrez nos guides complets pour maîtriser votre argent
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/articles"
              className="px-8 py-3 bg-white text-primary font-bold rounded-lg hover:bg-white/90 transition-colors"
            >
              Lire nos articles
            </a>
            <a
              href="/tests"
              className="px-8 py-3 bg-white/20 hover:bg-white/30 text-white font-bold rounded-lg border-2 border-white transition-colors"
            >
              Comparer les produits
            </a>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-12 card bg-gradient-to-r from-accent to-secondary/80 text-white">
          <h2 className="text-2xl font-bold mb-6 text-white">
            📚 Guide d&apos;utilisation des calculateurs
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-white/95">
            <div>
              <p className="font-semibold text-white mb-2">💶 Calculateur d&apos;impôts (TMI 2026)</p>
              <p className="text-sm">
                Calculez votre impôt sur le revenu avec les tranches 2026. Découvrez votre TMI (Tranche Marginale d&apos;Imposition) et votre taux moyen réel.
              </p>
            </div>
            <div>
              <p className="font-semibold text-white mb-2">🏦 Comparateur de frais bancaires</p>
              <p className="text-sm">
                Comparez les frais des banques traditionnelles et en ligne. Découvrez combien vous pouvez économiser en changeant de banque.
              </p>
            </div>
            <div>
              <p className="font-semibold text-white mb-2">🏠 Simulateur de rendement locatif</p>
              <p className="text-sm">
                Calculez la rentabilité brute et nette de votre investissement locatif. Prend en compte tous les frais et charges réels.
              </p>
            </div>
            <div>
              <p className="font-semibold text-white mb-2">📈 Projection épargne retraite</p>
              <p className="text-sm">
                Projetez l&apos;évolution de votre épargne retraite avec un graphique détaillé. Visualisez la puissance des intérêts composés.
              </p>
            </div>
            <div>
              <p className="font-semibold text-white mb-2">🔄 Calculateur rachat de crédit</p>
              <p className="text-sm">
                Analysez si un rachat de crédit est avantageux. Comparez mensualités actuelles vs mensualité unique consolidée.
              </p>
            </div>
            <div>
              <p className="font-semibold text-white mb-2">💰 Calculateurs classiques</p>
              <p className="text-sm">
                Intérêts composés, budget mensuel et capacité d&apos;emprunt pour gérer votre épargne et vos projets immobiliers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
