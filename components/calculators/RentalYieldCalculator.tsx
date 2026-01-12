"use client";

import { useState } from "react";
import { Building2 } from "lucide-react";

export default function RentalYieldCalculator() {
  const [data, setData] = useState({
    purchasePrice: 200000,
    notaryFees: 7, // %
    works: 10000,
    monthlyRent: 800,
    condoFees: 100,
    propertyTax: 80,
    insurance: 25,
    vacancyRate: 5, // %
    managementFees: 0, // % of rent
  });

  const [result, setResult] = useState<any>(null);

  const calculate = () => {
    // Coûts d'acquisition
    const notaryAmount = (data.purchasePrice * data.notaryFees) / 100;
    const totalInvestment = data.purchasePrice + notaryAmount + data.works;

    // Revenus locatifs annuels
    const annualRentGross = data.monthlyRent * 12;
    const vacancyLoss = (annualRentGross * data.vacancyRate) / 100;
    const managementCost = (annualRentGross * data.managementFees) / 100;
    const annualRentNet = annualRentGross - vacancyLoss - managementCost;

    // Charges annuelles
    const annualCharges = (data.condoFees + data.propertyTax + data.insurance) * 12;

    // Revenus nets
    const netIncome = annualRentNet - annualCharges;

    // Rendements
    const grossYield = (annualRentGross / data.purchasePrice) * 100;
    const netYield = (netIncome / totalInvestment) * 100;

    // Cashflow mensuel
    const monthlyCashflow = netIncome / 12;

    // Temps de retour sur investissement
    const paybackYears = netIncome > 0 ? totalInvestment / netIncome : 0;

    setResult({
      totalInvestment,
      notaryAmount,
      annualRentGross,
      annualRentNet,
      vacancyLoss,
      managementCost,
      annualCharges,
      netIncome,
      grossYield,
      netYield,
      monthlyCashflow,
      paybackYears,
    });
  };

  return (
    <div className="card">
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Building2 className="w-7 h-7 text-secondary" />
        Simulateur de rendement locatif
      </h3>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Prix d'achat */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Prix d&apos;achat du bien (€)
          </label>
          <input
            type="number"
            value={data.purchasePrice}
            onChange={(e) => setData({ ...data, purchasePrice: Number(e.target.value) })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            min="0"
            step="5000"
          />
        </div>

        {/* Frais de notaire */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Frais de notaire (%)
          </label>
          <select
            value={data.notaryFees}
            onChange={(e) => setData({ ...data, notaryFees: Number(e.target.value) })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
          >
            <option value={2.5}>2,5% (neuf)</option>
            <option value={7}>7% (ancien)</option>
            <option value={8}>8% (ancien + frais)</option>
          </select>
        </div>

        {/* Travaux */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Travaux/Rénovation (€)
          </label>
          <input
            type="number"
            value={data.works}
            onChange={(e) => setData({ ...data, works: Number(e.target.value) })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            min="0"
            step="1000"
          />
        </div>

        {/* Loyer mensuel */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Loyer mensuel (€)
          </label>
          <input
            type="number"
            value={data.monthlyRent}
            onChange={(e) => setData({ ...data, monthlyRent: Number(e.target.value) })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            min="0"
            step="50"
          />
        </div>

        {/* Charges de copropriété */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Charges de copro/mois (€)
          </label>
          <input
            type="number"
            value={data.condoFees}
            onChange={(e) => setData({ ...data, condoFees: Number(e.target.value) })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            min="0"
            step="10"
          />
        </div>

        {/* Taxe foncière */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Taxe foncière/mois (€)
          </label>
          <input
            type="number"
            value={data.propertyTax}
            onChange={(e) => setData({ ...data, propertyTax: Number(e.target.value) })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            min="0"
            step="10"
          />
          <p className="text-xs text-gray-500 mt-1">
            Taxe annuelle ÷ 12
          </p>
        </div>

        {/* Assurance */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Assurance PNO/mois (€)
          </label>
          <input
            type="number"
            value={data.insurance}
            onChange={(e) => setData({ ...data, insurance: Number(e.target.value) })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            min="0"
            step="5"
          />
        </div>

        {/* Taux de vacance */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Taux de vacance locative (%)
          </label>
          <select
            value={data.vacancyRate}
            onChange={(e) => setData({ ...data, vacancyRate: Number(e.target.value) })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
          >
            <option value={0}>0% (optimiste)</option>
            <option value={5}>5% (réaliste)</option>
            <option value={8}>8% (prudent)</option>
            <option value={10}>10% (très prudent)</option>
          </select>
        </div>

        {/* Frais de gestion */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Frais de gestion (%)
          </label>
          <select
            value={data.managementFees}
            onChange={(e) => setData({ ...data, managementFees: Number(e.target.value) })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
          >
            <option value={0}>0% (gestion en direct)</option>
            <option value={7}>7% (agence)</option>
            <option value={10}>10% (gestion complète)</option>
          </select>
        </div>
      </div>

      <button
        onClick={calculate}
        className="btn-primary w-full mb-6"
      >
        Calculer la rentabilité
      </button>

      {result && (
        <div>
          {/* Résumé investissement */}
          <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-200">
            <h4 className="font-bold text-lg mb-4 text-gray-800">
              💰 Investissement total
            </h4>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-sm text-gray-600">Prix d&apos;achat</p>
                <p className="text-xl font-bold text-gray-900">
                  {data.purchasePrice.toLocaleString('fr-FR')} €
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Notaire + Travaux</p>
                <p className="text-xl font-bold text-gray-900">
                  {(result.notaryAmount + data.works).toLocaleString('fr-FR')} €
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Total</p>
                <p className="text-2xl font-bold text-blue-700">
                  {result.totalInvestment.toLocaleString('fr-FR')} €
                </p>
              </div>
            </div>
          </div>

          {/* Rendements */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Rendement brut</p>
              <p className="text-4xl font-bold text-green-700">
                {result.grossYield.toFixed(2)}%
              </p>
              <p className="text-xs text-gray-500 mt-2">
                {result.annualRentGross.toLocaleString('fr-FR')} €/an de loyers
              </p>
            </div>

            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Rendement net</p>
              <p className="text-4xl font-bold text-emerald-700">
                {result.netYield.toFixed(2)}%
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Après charges et vacance locative
              </p>
            </div>
          </div>

          {/* Revenus nets */}
          <div className="mb-8 p-6 bg-white border-2 border-gray-200 rounded-xl">
            <h4 className="font-bold text-lg mb-4 text-gray-800">
              📊 Détail des revenus annuels
            </h4>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Loyers bruts</span>
                <span className="font-semibold text-green-600">
                  + {result.annualRentGross.toLocaleString('fr-FR')} €
                </span>
              </div>

              {result.vacancyLoss > 0 && (
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">- Vacance locative ({data.vacancyRate}%)</span>
                  <span className="text-red-600 text-sm">
                    - {result.vacancyLoss.toLocaleString('fr-FR')} €
                  </span>
                </div>
              )}

              {result.managementCost > 0 && (
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">- Frais de gestion ({data.managementFees}%)</span>
                  <span className="text-red-600 text-sm">
                    - {result.managementCost.toLocaleString('fr-FR')} €
                  </span>
                </div>
              )}

              <div className="flex justify-between items-center pt-2 border-t border-gray-300">
                <span className="text-gray-700 font-semibold">Loyers nets encaissés</span>
                <span className="font-bold text-gray-900">
                  {result.annualRentNet.toLocaleString('fr-FR')} €
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm">- Charges annuelles</span>
                <span className="text-red-600 text-sm">
                  - {result.annualCharges.toLocaleString('fr-FR')} €
                </span>
              </div>

              <div className="flex justify-between items-center pt-3 border-t-2 border-gray-400">
                <span className="text-gray-900 font-bold text-lg">Revenu net annuel</span>
                <span className={`font-bold text-xl ${result.netIncome > 0 ? 'text-green-700' : 'text-red-700'}`}>
                  {result.netIncome.toLocaleString('fr-FR')} €
                </span>
              </div>
            </div>
          </div>

          {/* Cashflow */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className={`p-6 rounded-xl border-2 ${result.monthlyCashflow > 0 ? 'bg-green-50 border-green-300' : 'bg-orange-50 border-orange-300'}`}>
              <p className="text-sm text-gray-600 mb-1">Cashflow mensuel moyen</p>
              <p className={`text-3xl font-bold ${result.monthlyCashflow > 0 ? 'text-green-700' : 'text-orange-700'}`}>
                {result.monthlyCashflow > 0 ? '+' : ''}{result.monthlyCashflow.toLocaleString('fr-FR')} €
              </p>
              <p className="text-xs text-gray-500 mt-2">
                {result.monthlyCashflow > 0 ? 'Rentabilité positive' : 'Besoin d\'apport mensuel'}
              </p>
            </div>

            <div className="bg-blue-50 border-2 border-blue-300 p-6 rounded-xl">
              <p className="text-sm text-gray-600 mb-1">Retour sur investissement</p>
              <p className="text-3xl font-bold text-blue-700">
                {result.paybackYears > 0 ? `${result.paybackYears.toFixed(1)} ans` : 'N/A'}
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Durée pour récupérer l&apos;investissement
              </p>
            </div>
          </div>

          {/* Analyse */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h5 className="font-semibold text-blue-900 mb-3">
              📈 Analyse de la rentabilité
            </h5>
            <div className="space-y-2 text-sm text-blue-800">
              {result.grossYield >= 8 && (
                <p>✓ <strong>Excellent rendement brut</strong> : {result.grossYield.toFixed(1)}% est très attractif</p>
              )}
              {result.grossYield >= 5 && result.grossYield < 8 && (
                <p>✓ <strong>Bon rendement brut</strong> : {result.grossYield.toFixed(1)}% est correct</p>
              )}
              {result.grossYield < 5 && (
                <p>⚠️ <strong>Rendement brut faible</strong> : {result.grossYield.toFixed(1)}% est en dessous de la moyenne</p>
              )}

              {result.netYield >= 4 && (
                <p>✓ <strong>Rentabilité nette excellente</strong> : {result.netYield.toFixed(1)}% après charges</p>
              )}
              {result.netYield >= 2 && result.netYield < 4 && (
                <p>⚠️ <strong>Rentabilité nette moyenne</strong> : {result.netYield.toFixed(1)}% est correct mais peut être amélioré</p>
              )}
              {result.netYield < 2 && result.netYield > 0 && (
                <p>⚠️ <strong>Rentabilité nette faible</strong> : {result.netYield.toFixed(1)}% est en dessous du marché</p>
              )}
              {result.netYield <= 0 && (
                <p>❌ <strong>Rentabilité négative</strong> : L&apos;investissement génère des pertes</p>
              )}

              <div className="mt-4 pt-4 border-t border-blue-300">
                <p className="font-semibold text-blue-900 mb-2">💡 Points à vérifier :</p>
                <ul className="space-y-1 ml-4">
                  <li>• L&apos;emplacement et la demande locative</li>
                  <li>• L&apos;état du bien et les travaux nécessaires</li>
                  <li>• La fiscalité (revenus fonciers, LMNP, etc.)</li>
                  <li>• Le financement et le coût du crédit</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
