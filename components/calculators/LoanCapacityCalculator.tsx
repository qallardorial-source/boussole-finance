"use client";

import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function LoanCapacityCalculator() {
  const [monthlyIncome, setMonthlyIncome] = useState(3000);
  const [monthlyCharges, setMonthlyCharges] = useState(500);
  const [interestRate, setInterestRate] = useState(3.5);
  const [loanDuration, setLoanDuration] = useState(20);
  const [maxDebtRatio] = useState(33);
  const [result, setResult] = useState<any>(null);

  const calculateLoanCapacity = () => {
    // Calcul de la capacité de mensualité
    const maxMonthlyPayment = (monthlyIncome * maxDebtRatio) / 100 - monthlyCharges;

    if (maxMonthlyPayment <= 0) {
      setResult({
        error: true,
        message: "Vos charges actuelles sont trop élevées pour contracter un prêt.",
      });
      return;
    }

    // Calcul du capital empruntable
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanDuration * 12;

    let loanCapacity;
    if (monthlyRate === 0) {
      loanCapacity = maxMonthlyPayment * numberOfPayments;
    } else {
      loanCapacity = maxMonthlyPayment * ((1 - Math.pow(1 + monthlyRate, -numberOfPayments)) / monthlyRate);
    }

    const totalInterest = (maxMonthlyPayment * numberOfPayments) - loanCapacity;
    const totalCost = loanCapacity + totalInterest;
    const debtRatio = ((maxMonthlyPayment + monthlyCharges) / monthlyIncome) * 100;

    // Données pour le graphique
    const chartData = [
      {
        name: 'Capital emprunté',
        value: Math.round(loanCapacity),
      },
      {
        name: 'Intérêts totaux',
        value: Math.round(totalInterest),
      },
    ];

    setResult({
      error: false,
      loanCapacity: Math.round(loanCapacity),
      maxMonthlyPayment: Math.round(maxMonthlyPayment),
      totalInterest: Math.round(totalInterest),
      totalCost: Math.round(totalCost),
      debtRatio: debtRatio.toFixed(1),
      chartData,
    });
  };

  return (
    <div className="card">
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
        🏠 Calculateur de capacité d&apos;emprunt
      </h3>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-semibold mb-2">
            Revenus mensuels nets (€)
          </label>
          <input
            type="number"
            value={monthlyIncome}
            onChange={(e) => setMonthlyIncome(Number(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            min="0"
            step="100"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">
            Charges mensuelles (€)
          </label>
          <input
            type="number"
            value={monthlyCharges}
            onChange={(e) => setMonthlyCharges(Number(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            min="0"
            step="50"
          />
          <p className="text-xs text-gray-500 mt-1">
            Crédits en cours, pensions...
          </p>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">
            Taux d&apos;intérêt annuel (%)
          </label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            min="0"
            max="10"
            step="0.1"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">
            Durée du prêt (années)
          </label>
          <input
            type="number"
            value={loanDuration}
            onChange={(e) => setLoanDuration(Number(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            min="5"
            max="30"
          />
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg mb-6 border border-blue-200">
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Taux d&apos;endettement maximum :</span> {maxDebtRatio}%
        </p>
        <p className="text-xs text-gray-600 mt-1">
          En France, le taux d&apos;endettement ne doit généralement pas dépasser 33% des revenus.
        </p>
      </div>

      <button
        onClick={calculateLoanCapacity}
        className="btn-primary w-full mb-6"
      >
        Calculer
      </button>

      {result && (
        <div>
          {result.error ? (
            <div className="bg-red-100 border border-red-300 rounded-lg p-4 text-red-800">
              <p className="font-semibold">⚠️ {result.message}</p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="text-sm text-gray-600 mb-1">Capacité d&apos;emprunt</p>
                  <p className="text-3xl font-bold text-blue-700">
                    {result.loanCapacity.toLocaleString('fr-FR')} €
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="text-sm text-gray-600 mb-1">Mensualité maximale</p>
                  <p className="text-3xl font-bold text-green-700">
                    {result.maxMonthlyPayment.toLocaleString('fr-FR')} €
                  </p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <p className="text-sm text-gray-600 mb-1">Intérêts totaux</p>
                  <p className="text-2xl font-bold text-orange-700">
                    {result.totalInterest.toLocaleString('fr-FR')} €
                  </p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <p className="text-sm text-gray-600 mb-1">Coût total du crédit</p>
                  <p className="text-2xl font-bold text-purple-700">
                    {result.totalCost.toLocaleString('fr-FR')} €
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="text-sm text-gray-600">Taux d&apos;endettement avec ce prêt</p>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex-1 bg-gray-200 rounded-full h-4 overflow-hidden">
                    <div
                      className={`h-full ${
                        parseFloat(result.debtRatio) <= 33 ? 'bg-green-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${Math.min(parseFloat(result.debtRatio), 100)}%` }}
                    ></div>
                  </div>
                  <span className="text-xl font-bold text-gray-700">{result.debtRatio}%</span>
                </div>
              </div>

              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={result.chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(value: number) => value.toLocaleString('fr-FR') + ' €'} />
                    <Bar dataKey="value" fill="#4A919E" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-4 mt-6 text-yellow-800">
                <p className="text-sm">
                  <span className="font-semibold">💡 Conseil :</span> Cette estimation ne prend pas en compte les frais de dossier, l&apos;assurance emprunteur et les garanties. Le montant réellement accordé peut varier selon votre profil et l&apos;établissement bancaire.
                </p>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
