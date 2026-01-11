import CompoundInterestCalculator from "@/components/calculators/CompoundInterestCalculator";
import BudgetCalculator from "@/components/calculators/BudgetCalculator";
import LoanCapacityCalculator from "@/components/calculators/LoanCapacityCalculator";
import { Calculator } from "lucide-react";

export const metadata = {
  title: "Calculateurs Finance Gratuits | Boussole Finance",
  description: "Simulateurs financiers gratuits : intérêts composés, budget mensuel, capacité d'emprunt. Outils simples et efficaces.",
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
          <p className="text-xl text-white/90">
            Simulez vos projets financiers avec nos outils gratuits et interactifs
          </p>
        </div>
      </section>

      <div className="container-custom py-12">
        <div className="space-y-12">
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

        {/* Info Section */}
        <div className="mt-12 card bg-gradient-to-r from-secondary to-accent text-white">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Comment utiliser ces calculateurs ?
          </h2>
          <div className="space-y-3 text-white/90">
            <p>
              <span className="font-semibold">Calculateur d&apos;intérêts composés :</span> Simulez l&apos;évolution de votre épargne sur le long terme en tenant compte des intérêts composés et de vos versements réguliers.
            </p>
            <p>
              <span className="font-semibold">Calculateur de budget :</span> Analysez vos revenus et dépenses pour visualiser votre capacité d&apos;épargne mensuelle et optimiser votre budget.
            </p>
            <p>
              <span className="font-semibold">Calculateur de capacité d&apos;emprunt :</span> Estimez le montant que vous pouvez emprunter en fonction de vos revenus, charges et du taux d&apos;endettement maximum de 33%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
