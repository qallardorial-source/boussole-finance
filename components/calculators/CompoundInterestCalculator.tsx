"use client";

import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function CompoundInterestCalculator() {
  const [initialCapital, setInitialCapital] = useState(10000);
  const [monthlyContribution, setMonthlyContribution] = useState(200);
  const [annualRate, setAnnualRate] = useState(5);
  const [years, setYears] = useState(10);
  const [result, setResult] = useState<any>(null);

  const calculateCompoundInterest = () => {
    const monthlyRate = annualRate / 100 / 12;
    const months = years * 12;
    const data = [];
    let totalCapital = initialCapital;
    let totalContributions = initialCapital;

    for (let year = 0; year <= years; year++) {
      const monthsElapsed = year * 12;

      if (year === 0) {
        data.push({
          year: 0,
          capital: initialCapital,
          contributions: initialCapital,
          interests: 0,
        });
      } else {
        // Calcul avec formule des intérêts composés avec versements réguliers
        const futureValueInitial = initialCapital * Math.pow(1 + monthlyRate, monthsElapsed);
        const futureValueContributions = monthlyContribution * ((Math.pow(1 + monthlyRate, monthsElapsed) - 1) / monthlyRate);
        totalCapital = futureValueInitial + futureValueContributions;
        totalContributions = initialCapital + (monthlyContribution * monthsElapsed);
        const totalInterests = totalCapital - totalContributions;

        data.push({
          year,
          capital: Math.round(totalCapital),
          contributions: Math.round(totalContributions),
          interests: Math.round(totalInterests),
        });
      }
    }

    const finalData = data[data.length - 1];
    setResult({
      finalCapital: finalData.capital,
      totalContributions: finalData.contributions,
      totalInterests: finalData.interests,
      chartData: data,
    });
  };

  return (
    <div className="card">
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
        📈 Calculateur d&apos;intérêts composés
      </h3>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-semibold mb-2">
            Capital initial (€)
          </label>
          <input
            type="number"
            value={initialCapital}
            onChange={(e) => setInitialCapital(Number(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            min="0"
            step="100"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">
            Apport mensuel (€)
          </label>
          <input
            type="number"
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(Number(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            min="0"
            step="10"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">
            Taux d&apos;intérêt annuel (%)
          </label>
          <input
            type="number"
            value={annualRate}
            onChange={(e) => setAnnualRate(Number(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            min="0"
            max="20"
            step="0.1"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">
            Durée (années)
          </label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            min="1"
            max="50"
          />
        </div>
      </div>

      <button
        onClick={calculateCompoundInterest}
        className="btn-primary w-full mb-6"
      >
        Calculer
      </button>

      {result && (
        <div>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-sm text-gray-600 mb-1">Capital final</p>
              <p className="text-2xl font-bold text-blue-700">
                {result.finalCapital.toLocaleString('fr-FR')} €
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-sm text-gray-600 mb-1">Vos contributions</p>
              <p className="text-2xl font-bold text-green-700">
                {result.totalContributions.toLocaleString('fr-FR')} €
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <p className="text-sm text-gray-600 mb-1">Intérêts gagnés</p>
              <p className="text-2xl font-bold text-purple-700">
                {result.totalInterests.toLocaleString('fr-FR')} €
              </p>
            </div>
          </div>

          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={result.chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" label={{ value: 'Années', position: 'insideBottom', offset: -5 }} />
                <YAxis label={{ value: 'Montant (€)', angle: -90, position: 'insideLeft' }} />
                <Tooltip formatter={(value: number) => value.toLocaleString('fr-FR') + ' €'} />
                <Legend />
                <Line type="monotone" dataKey="capital" stroke="#4A919E" name="Capital total" strokeWidth={2} />
                <Line type="monotone" dataKey="contributions" stroke="#82ca9d" name="Contributions" strokeWidth={2} />
                <Line type="monotone" dataKey="interests" stroke="#8884d8" name="Intérêts" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
}
