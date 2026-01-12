"use client";

import { useState } from "react";

export default function TaxCalculator() {
  const [income, setIncome] = useState(35000);
  const [parts, setParts] = useState(1);
  const [result, setResult] = useState<any>(null);

  // Tranches 2026 (à jour)
  const taxBrackets = [
    { max: 11294, rate: 0 },
    { max: 28797, rate: 0.11 },
    { max: 82341, rate: 0.30 },
    { max: 177106, rate: 0.41 },
    { max: Infinity, rate: 0.45 },
  ];

  const calculateTax = () => {
    const quotientFamilial = income / parts;
    let taxByPart = 0;
    let previousMax = 0;
    let tmi = 0;
    const breakdown: any[] = [];

    for (const bracket of taxBrackets) {
      const taxableInBracket = Math.min(quotientFamilial, bracket.max) - previousMax;

      if (taxableInBracket > 0) {
        const taxInBracket = taxableInBracket * bracket.rate;
        taxByPart += taxInBracket;
        tmi = bracket.rate;

        breakdown.push({
          max: bracket.max,
          rate: bracket.rate,
          taxable: taxableInBracket,
          tax: taxInBracket,
        });
      }

      previousMax = bracket.max;
      if (quotientFamilial <= bracket.max) break;
    }

    const totalTax = taxByPart * parts;
    const netIncome = income - totalTax;
    const averageRate = (totalTax / income) * 100;

    setResult({
      totalTax,
      netIncome,
      tmi: tmi * 100,
      averageRate,
      quotientFamilial,
      breakdown,
      monthlyNet: netIncome / 12,
    });
  };

  return (
    <div className="card">
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
        💶 Calculateur d'impôts (TMI 2026)
      </h3>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-semibold mb-2">
            Revenus nets imposables annuels (€)
          </label>
          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(Number(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            min="0"
            step="1000"
          />
          <p className="text-xs text-gray-500 mt-1">
            Ligne "Revenu imposable" de votre avis d'imposition
          </p>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">
            Nombre de parts fiscales
          </label>
          <select
            value={parts}
            onChange={(e) => setParts(Number(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
          >
            <option value={1}>1 part (célibataire)</option>
            <option value={1.5}>1.5 parts (célibataire + 1 enfant)</option>
            <option value={2}>2 parts (couple sans enfant)</option>
            <option value={2.5}>2.5 parts (couple + 1 enfant)</option>
            <option value={3}>3 parts (couple + 2 enfants)</option>
            <option value={4}>4 parts (couple + 3 enfants)</option>
            <option value={5}>5 parts (couple + 4 enfants)</option>
          </select>
        </div>
      </div>

      <button
        onClick={calculateTax}
        className="btn-primary w-full mb-6"
      >
        Calculer mon impôt
      </button>

      {result && (
        <div>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Impôt total à payer</p>
                <p className="text-3xl font-bold text-red-700">
                  {result.totalTax.toLocaleString('fr-FR')} €
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Revenu net après impôt</p>
                <p className="text-2xl font-bold text-green-700">
                  {result.netIncome.toLocaleString('fr-FR')} €
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Soit {result.monthlyNet.toLocaleString('fr-FR')} €/mois
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">TMI (Tranche Marginale d'Imposition)</p>
                <p className="text-3xl font-bold text-blue-700">
                  {result.tmi}%
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Taux sur la dernière tranche
                </p>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Taux moyen d'imposition</p>
                <p className="text-3xl font-bold text-purple-700">
                  {result.averageRate.toFixed(1)}%
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Taux réel payé sur l'ensemble
                </p>
              </div>
            </div>
          </div>

          {/* Détail par tranche */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="font-bold text-lg mb-4 text-gray-800">
              Détail du calcul par tranche
            </h4>
            <p className="text-sm text-gray-600 mb-4">
              Quotient familial : {result.quotientFamilial.toLocaleString('fr-FR')} €
              {parts > 1 && ` (${income.toLocaleString('fr-FR')} € ÷ ${parts} parts)`}
            </p>

            <div className="space-y-3">
              {result.breakdown.map((bracket: any, index: number) => (
                <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <div>
                    <span className="font-semibold text-gray-900">
                      Tranche à {(bracket.rate * 100).toFixed(0)}%
                    </span>
                    <p className="text-sm text-gray-500">
                      {bracket.taxable.toLocaleString('fr-FR')} € imposés
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">
                      {(bracket.tax * parts).toLocaleString('fr-FR')} €
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-gray-300 flex justify-between items-center">
              <span className="font-bold text-gray-900">Total impôt</span>
              <span className="font-bold text-xl text-red-600">
                {result.totalTax.toLocaleString('fr-FR')} €
              </span>
            </div>
          </div>

          {/* Info TMI vs Taux moyen */}
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h5 className="font-semibold text-blue-900 mb-2">
              💡 Quelle est la différence entre TMI et taux moyen ?
            </h5>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>
                <strong>TMI ({result.tmi}%)</strong> : Taux appliqué sur votre dernière tranche de revenu
              </li>
              <li>
                <strong>Taux moyen ({result.averageRate.toFixed(1)}%)</strong> : Taux réel que vous payez sur l'ensemble de vos revenus
              </li>
              <li className="mt-2 pt-2 border-t border-blue-300">
                ✓ C'est le <strong>taux moyen</strong> qui reflète ce que vous payez réellement !
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
