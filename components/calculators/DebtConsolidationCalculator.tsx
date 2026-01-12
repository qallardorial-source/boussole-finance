"use client";

import { useState } from "react";
import { Repeat, Plus, X } from "lucide-react";

interface Loan {
  id: number;
  name: string;
  remaining: number;
  rate: number;
  monthlyPayment: number;
}

export default function DebtConsolidationCalculator() {
  const [loans, setLoans] = useState<Loan[]>([
    { id: 1, name: "Crédit auto", remaining: 15000, rate: 4.5, monthlyPayment: 350 },
    { id: 2, name: "Crédit conso", remaining: 8000, rate: 6.5, monthlyPayment: 250 },
  ]);

  const [consolidation, setConsolidation] = useState({
    newRate: 3.5,
    newDuration: 120, // mois
  });

  const [result, setResult] = useState<any>(null);

  const addLoan = () => {
    setLoans([
      ...loans,
      {
        id: Date.now(),
        name: `Crédit ${loans.length + 1}`,
        remaining: 5000,
        rate: 5,
        monthlyPayment: 150,
      },
    ]);
  };

  const removeLoan = (id: number) => {
    if (loans.length > 1) {
      setLoans(loans.filter(loan => loan.id !== id));
    }
  };

  const updateLoan = (id: number, field: string, value: any) => {
    setLoans(loans.map(loan =>
      loan.id === id ? { ...loan, [field]: value } : loan
    ));
  };

  const calculate = () => {
    // Calculs actuels
    const totalRemaining = loans.reduce((sum, loan) => sum + loan.remaining, 0);
    const totalMonthlyPayment = loans.reduce((sum, loan) => sum + loan.monthlyPayment, 0);

    // Estimation durée moyenne actuelle
    const avgCurrentDuration = loans.reduce((sum, loan) => {
      const duration = loan.remaining / loan.monthlyPayment;
      return sum + duration;
    }, 0) / loans.length;

    const totalCurrentCost = totalMonthlyPayment * avgCurrentDuration;

    // Calculs avec rachat
    const monthlyRate = consolidation.newRate / 100 / 12;
    const newMonthlyPayment = totalRemaining * (monthlyRate * Math.pow(1 + monthlyRate, consolidation.newDuration)) /
      (Math.pow(1 + monthlyRate, consolidation.newDuration) - 1);

    const totalNewCost = newMonthlyPayment * consolidation.newDuration;
    const totalInterest = totalNewCost - totalRemaining;

    // Économies ou surcoût
    const monthlySavings = totalMonthlyPayment - newMonthlyPayment;
    const totalCostDifference = totalCurrentCost - totalNewCost;

    // Taux d'endettement (simulation avec revenus moyens)
    const averageIncome = 2500; // revenus moyens pour l'exemple
    const currentDebtRatio = (totalMonthlyPayment / averageIncome) * 100;
    const newDebtRatio = (newMonthlyPayment / averageIncome) * 100;

    setResult({
      // Situation actuelle
      totalRemaining,
      totalMonthlyPayment,
      totalCurrentCost,
      avgCurrentDuration,
      // Nouvelle situation
      newMonthlyPayment,
      totalNewCost,
      totalInterest,
      // Comparaison
      monthlySavings,
      totalCostDifference,
      currentDebtRatio,
      newDebtRatio,
      isGoodDeal: monthlySavings > 0 || totalCostDifference > 0,
    });
  };

  return (
    <div className="card">
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Repeat className="w-7 h-7 text-secondary" />
        Calculateur de rachat de crédit
      </h3>

      {/* Crédits actuels */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-bold text-lg text-gray-800">
            Vos crédits actuels
          </h4>
          <button
            onClick={addLoan}
            className="flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Ajouter un crédit
          </button>
        </div>

        <div className="space-y-4">
          {loans.map((loan, index) => (
            <div key={loan.id} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-start justify-between mb-3">
                <input
                  type="text"
                  value={loan.name}
                  onChange={(e) => updateLoan(loan.id, 'name', e.target.value)}
                  className="font-semibold text-gray-900 bg-transparent border-b border-transparent hover:border-gray-300 focus:outline-none focus:border-secondary"
                />
                {loans.length > 1 && (
                  <button
                    onClick={() => removeLoan(loan.id)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">
                    Capital restant (€)
                  </label>
                  <input
                    type="number"
                    value={loan.remaining}
                    onChange={(e) => updateLoan(loan.id, 'remaining', Number(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                    min="0"
                    step="1000"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-600 mb-1">
                    Taux (%)
                  </label>
                  <input
                    type="number"
                    value={loan.rate}
                    onChange={(e) => updateLoan(loan.id, 'rate', Number(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                    min="0"
                    step="0.1"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-600 mb-1">
                    Mensualité (€)
                  </label>
                  <input
                    type="number"
                    value={loan.monthlyPayment}
                    onChange={(e) => updateLoan(loan.id, 'monthlyPayment', Number(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
                    min="0"
                    step="10"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Nouveau crédit consolidé */}
      <div className="mb-6 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-200">
        <h4 className="font-bold text-lg text-gray-800 mb-4">
          Nouveau crédit unique
        </h4>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold mb-2">
              Taux du nouveau crédit (%)
            </label>
            <input
              type="number"
              value={consolidation.newRate}
              onChange={(e) => setConsolidation({ ...consolidation, newRate: Number(e.target.value) })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              min="0"
              step="0.1"
            />
            <p className="text-xs text-gray-500 mt-1">
              Taux proposé par votre banque
            </p>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Durée du nouveau crédit (mois)
            </label>
            <select
              value={consolidation.newDuration}
              onChange={(e) => setConsolidation({ ...consolidation, newDuration: Number(e.target.value) })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            >
              <option value={60}>5 ans (60 mois)</option>
              <option value={84}>7 ans (84 mois)</option>
              <option value={120}>10 ans (120 mois)</option>
              <option value={180}>15 ans (180 mois)</option>
              <option value={240}>20 ans (240 mois)</option>
            </select>
          </div>
        </div>
      </div>

      <button
        onClick={calculate}
        className="btn-primary w-full mb-6"
      >
        Analyser la rentabilité du rachat
      </button>

      {result && (
        <div>
          {/* Verdict */}
          <div className={`mb-8 p-6 rounded-xl border-2 ${result.isGoodDeal ? 'bg-green-50 border-green-300' : 'bg-orange-50 border-orange-300'}`}>
            <div className="text-center">
              <p className="text-4xl mb-2">{result.isGoodDeal ? '✅' : '⚠️'}</p>
              <h4 className="font-bold text-2xl mb-2 text-gray-900">
                {result.isGoodDeal ? 'Rachat intéressant !' : 'À étudier attentivement'}
              </h4>
              <p className="text-gray-700">
                {result.monthlySavings > 0
                  ? `Vous économisez ${Math.round(result.monthlySavings)} €/mois`
                  : `Votre mensualité augmente de ${Math.round(Math.abs(result.monthlySavings))} €/mois`
                }
              </p>
            </div>
          </div>

          {/* Comparaison */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Situation actuelle */}
            <div className="p-6 bg-red-50 rounded-xl border-2 border-red-200">
              <h5 className="font-bold text-lg mb-4 text-red-900">
                📋 Situation actuelle
              </h5>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">Total à rembourser</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {result.totalRemaining.toLocaleString('fr-FR')} €
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Mensualités cumulées</p>
                  <p className="text-2xl font-bold text-red-700">
                    {result.totalMonthlyPayment.toLocaleString('fr-FR')} €
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Coût total estimé</p>
                  <p className="text-xl font-semibold text-gray-700">
                    {Math.round(result.totalCurrentCost).toLocaleString('fr-FR')} €
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Durée moyenne restante</p>
                  <p className="text-lg font-semibold text-gray-700">
                    {Math.round(result.avgCurrentDuration)} mois
                  </p>
                </div>
              </div>
            </div>

            {/* Avec rachat */}
            <div className="p-6 bg-green-50 rounded-xl border-2 border-green-200">
              <h5 className="font-bold text-lg mb-4 text-green-900">
                ✨ Avec rachat de crédit
              </h5>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">Total à rembourser</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {result.totalRemaining.toLocaleString('fr-FR')} €
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Nouvelle mensualité unique</p>
                  <p className="text-2xl font-bold text-green-700">
                    {Math.round(result.newMonthlyPayment).toLocaleString('fr-FR')} €
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Coût total</p>
                  <p className="text-xl font-semibold text-gray-700">
                    {Math.round(result.totalNewCost).toLocaleString('fr-FR')} €
                  </p>
                  <p className="text-xs text-gray-500">
                    dont {Math.round(result.totalInterest).toLocaleString('fr-FR')} € d&apos;intérêts
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Nouvelle durée</p>
                  <p className="text-lg font-semibold text-gray-700">
                    {consolidation.newDuration} mois
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Économies */}
          <div className="mb-8 p-6 bg-white border-2 border-gray-200 rounded-xl">
            <h5 className="font-bold text-lg mb-4 text-gray-800">
              💰 Impact financier
            </h5>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">Économie mensuelle</p>
                  <p className="text-sm text-gray-600">
                    {result.monthlySavings > 0 ? 'Vous gagnez en pouvoir d\'achat' : 'Mensualité plus élevée'}
                  </p>
                </div>
                <p className={`text-3xl font-bold ${result.monthlySavings > 0 ? 'text-green-700' : 'text-red-700'}`}>
                  {result.monthlySavings > 0 ? '+' : ''}{Math.round(result.monthlySavings).toLocaleString('fr-FR')} €
                </p>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">Différence de coût total</p>
                  <p className="text-sm text-gray-600">
                    {result.totalCostDifference > 0 ? 'Vous payez moins d\'intérêts' : 'Vous payez plus d\'intérêts sur la durée'}
                  </p>
                </div>
                <p className={`text-3xl font-bold ${result.totalCostDifference > 0 ? 'text-green-700' : 'text-orange-700'}`}>
                  {result.totalCostDifference > 0 ? '+' : ''}{Math.round(result.totalCostDifference).toLocaleString('fr-FR')} €
                </p>
              </div>

              {result.monthlySavings > 0 && (
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-900">
                    💡 <strong>Sur 1 an</strong> : vous économisez {Math.round(result.monthlySavings * 12).toLocaleString('fr-FR')} €
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Taux d'endettement (simulation) */}
          <div className="mb-8 p-6 bg-purple-50 rounded-xl border-2 border-purple-200">
            <h5 className="font-bold text-lg mb-4 text-purple-900">
              📊 Impact sur le taux d&apos;endettement
            </h5>
            <p className="text-sm text-purple-800 mb-4">
              Simulation avec 2500€ de revenus mensuels
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Taux actuel</p>
                <p className={`text-3xl font-bold ${result.currentDebtRatio > 33 ? 'text-red-600' : 'text-gray-900'}`}>
                  {result.currentDebtRatio.toFixed(1)}%
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Nouveau taux</p>
                <p className={`text-3xl font-bold ${result.newDebtRatio > 33 ? 'text-red-600' : 'text-green-700'}`}>
                  {result.newDebtRatio.toFixed(1)}%
                </p>
              </div>
            </div>
            <p className="text-xs text-purple-700 mt-3">
              {result.newDebtRatio < 33 ? '✓ En dessous du seuil maximum de 33%' : '⚠️ Au-dessus du seuil recommandé de 33%'}
            </p>
          </div>

          {/* Conseils */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h5 className="font-semibold text-blue-900 mb-3">
              💡 Points à vérifier avant de racheter
            </h5>
            <ul className="text-sm text-blue-800 space-y-2">
              <li>✓ <strong>Frais de dossier</strong> : Vérifiez les frais du nouveau crédit (0,5 à 1% du capital)</li>
              <li>✓ <strong>Indemnités de remboursement anticipé (IRA)</strong> : Sur vos crédits actuels (max 3% du capital)</li>
              <li>✓ <strong>Assurance emprunteur</strong> : Comparez le coût de la nouvelle assurance</li>
              <li>✓ <strong>Durée totale</strong> : Une durée plus longue = mensualité plus faible mais coût total plus élevé</li>
              <li>✓ <strong>Objectif</strong> : Rachat pour réduire mensualités ? Pour financer un nouveau projet ? Pour simplifier ?</li>
              {result.monthlySavings > 0 && result.totalCostDifference < 0 && (
                <li className="mt-3 pt-3 border-t border-blue-300">
                  ⚠️ <strong>Attention</strong> : Vous gagnez en mensualité ({Math.round(result.monthlySavings)}€) mais payez plus d&apos;intérêts sur la durée totale ({Math.round(Math.abs(result.totalCostDifference))}€)
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
