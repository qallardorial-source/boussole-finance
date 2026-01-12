"use client";

import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from "recharts";
import { TrendingUp } from "lucide-react";

export default function RetirementSavingsCalculator() {
  const [data, setData] = useState({
    currentAge: 30,
    retirementAge: 65,
    initialCapital: 10000,
    monthlyContribution: 300,
    annualReturn: 5, // %
  });

  const [result, setResult] = useState<any>(null);

  const calculate = () => {
    const years = data.retirementAge - data.currentAge;
    const monthlyRate = data.annualReturn / 100 / 12;
    const totalMonths = years * 12;

    let capital = data.initialCapital;
    const projection: any[] = [];
    let totalContributions = data.initialCapital;
    let totalInterest = 0;

    // Calcul année par année
    for (let year = 0; year <= years; year++) {
      const age = data.currentAge + year;

      if (year === 0) {
        projection.push({
          age,
          year,
          capital: Math.round(capital),
          contributions: Math.round(totalContributions),
          interest: 0,
        });
      } else {
        // Calcul mois par mois pour cette année
        for (let month = 0; month < 12; month++) {
          capital = capital * (1 + monthlyRate) + data.monthlyContribution;
          totalContributions += data.monthlyContribution;
        }

        totalInterest = capital - totalContributions;

        projection.push({
          age,
          year,
          capital: Math.round(capital),
          contributions: Math.round(totalContributions),
          interest: Math.round(totalInterest),
        });
      }
    }

    const finalCapital = capital;
    const totalInvested = totalContributions;
    const totalGains = totalInterest;
    const monthlyPension = (finalCapital * 0.04) / 12; // 4% withdrawal rate

    setResult({
      projection,
      finalCapital,
      totalInvested,
      totalGains,
      monthlyPension,
      years,
    });
  };

  return (
    <div className="card">
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <TrendingUp className="w-7 h-7 text-secondary" />
        Simulateur d&apos;épargne retraite
      </h3>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-semibold mb-2">
            Votre âge actuel
          </label>
          <input
            type="number"
            value={data.currentAge}
            onChange={(e) => setData({ ...data, currentAge: Number(e.target.value) })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            min="18"
            max="70"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">
            Âge de départ à la retraite
          </label>
          <input
            type="number"
            value={data.retirementAge}
            onChange={(e) => setData({ ...data, retirementAge: Number(e.target.value) })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            min="55"
            max="75"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">
            Capital initial (€)
          </label>
          <input
            type="number"
            value={data.initialCapital}
            onChange={(e) => setData({ ...data, initialCapital: Number(e.target.value) })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            min="0"
            step="1000"
          />
          <p className="text-xs text-gray-500 mt-1">
            Montant déjà épargné aujourd&apos;hui
          </p>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">
            Versement mensuel (€)
          </label>
          <input
            type="number"
            value={data.monthlyContribution}
            onChange={(e) => setData({ ...data, monthlyContribution: Number(e.target.value) })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            min="0"
            step="50"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold mb-2">
            Rendement annuel moyen attendu (%)
          </label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              value={data.annualReturn}
              onChange={(e) => setData({ ...data, annualReturn: Number(e.target.value) })}
              className="flex-1"
              min="0"
              max="10"
              step="0.5"
            />
            <span className="text-2xl font-bold text-secondary w-20 text-right">
              {data.annualReturn}%
            </span>
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>Livret A (3%)</span>
            <span>Assurance-vie (4-5%)</span>
            <span>Actions (7-8%)</span>
          </div>
        </div>
      </div>

      <button
        onClick={calculate}
        className="btn-primary w-full mb-6"
      >
        Projeter mon épargne retraite
      </button>

      {result && (
        <div>
          {/* Résumé */}
          <div className="mb-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-2 border-green-300">
            <h4 className="font-bold text-lg mb-4 text-gray-800 text-center">
              🎯 À {data.retirementAge} ans, vous aurez :
            </h4>
            <div className="text-center mb-6">
              <p className="text-5xl font-bold text-green-700 mb-2">
                {result.finalCapital.toLocaleString('fr-FR')} €
              </p>
              <p className="text-sm text-gray-600">
                Dont {result.totalGains.toLocaleString('fr-FR')} € d&apos;intérêts générés 📈
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-sm text-gray-600 mb-1">Vos versements</p>
                <p className="text-2xl font-bold text-gray-900">
                  {result.totalInvested.toLocaleString('fr-FR')} €
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <p className="text-sm text-gray-600 mb-1">Rente mensuelle estimée</p>
                <p className="text-2xl font-bold text-emerald-700">
                  {Math.round(result.monthlyPension).toLocaleString('fr-FR')} €
                </p>
                <p className="text-xs text-gray-500 mt-1">(règle des 4%)</p>
              </div>
            </div>
          </div>

          {/* Graphique */}
          <div className="mb-8 p-6 bg-white border-2 border-gray-200 rounded-xl">
            <h4 className="font-bold text-lg mb-4 text-gray-800">
              📊 Projection sur {result.years} ans
            </h4>

            <ResponsiveContainer width="100%" height={400}>
              <AreaChart data={result.projection}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="age"
                  label={{ value: 'Âge', position: 'insideBottom', offset: -5 }}
                />
                <YAxis
                  label={{ value: 'Capital (€)', angle: -90, position: 'insideLeft' }}
                  tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
                />
                <Tooltip
                  formatter={(value: any) => `${Math.round(value).toLocaleString('fr-FR')} €`}
                  labelFormatter={(label) => `Âge: ${label} ans`}
                />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="contributions"
                  stackId="1"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  name="Vos versements"
                />
                <Area
                  type="monotone"
                  dataKey="interest"
                  stackId="1"
                  stroke="#10b981"
                  fill="#10b981"
                  name="Intérêts générés"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Étapes clés */}
          <div className="mb-8 p-6 bg-gray-50 rounded-xl">
            <h4 className="font-bold text-lg mb-4 text-gray-800">
              🗓️ Étapes clés de votre épargne
            </h4>
            <div className="space-y-3">
              {[
                Math.floor(result.years * 0.25),
                Math.floor(result.years * 0.5),
                Math.floor(result.years * 0.75),
                result.years
              ].map((yearMark) => {
                const milestone = result.projection[yearMark];
                if (!milestone) return null;

                return (
                  <div key={yearMark} className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
                    <div>
                      <p className="font-semibold text-gray-900">
                        À {milestone.age} ans ({yearMark === result.years ? 'Retraite' : `+${yearMark} ans`})
                      </p>
                      <p className="text-sm text-gray-600">
                        Versements : {milestone.contributions.toLocaleString('fr-FR')} € •
                        Gains : {milestone.interest.toLocaleString('fr-FR')} €
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-secondary">
                        {milestone.capital.toLocaleString('fr-FR')} €
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Puissance des intérêts composés */}
          <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-300 rounded-xl">
            <h4 className="font-bold text-lg mb-3 text-purple-900">
              ✨ La magie des intérêts composés
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Total versé par vous</span>
                <span className="text-xl font-bold text-gray-900">
                  {result.totalInvested.toLocaleString('fr-FR')} €
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Gains générés par vos placements</span>
                <span className="text-xl font-bold text-green-600">
                  + {result.totalGains.toLocaleString('fr-FR')} €
                </span>
              </div>
              <div className="pt-3 border-t-2 border-purple-400">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-purple-900">Effet multiplicateur</span>
                  <span className="text-2xl font-bold text-purple-700">
                    ×{(result.finalCapital / result.totalInvested).toFixed(2)}
                  </span>
                </div>
                <p className="text-sm text-purple-800 mt-2">
                  Vos {result.totalInvested.toLocaleString('fr-FR')} € se transforment en {result.finalCapital.toLocaleString('fr-FR')} € !
                </p>
              </div>
            </div>
          </div>

          {/* Conseils */}
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h5 className="font-semibold text-blue-900 mb-3">
              💡 Nos recommandations
            </h5>
            <ul className="text-sm text-blue-800 space-y-2">
              <li>✓ <strong>Commencez tôt</strong> : Chaque année compte grâce aux intérêts composés</li>
              <li>✓ <strong>Soyez régulier</strong> : Des versements constants valent mieux que des gros montants sporadiques</li>
              <li>✓ <strong>Diversifiez</strong> : PER, assurance-vie, PEA selon votre profil de risque</li>
              <li>✓ <strong>Adaptez le risque</strong> : Plus d&apos;actions jeune, plus de sécurité proche de la retraite</li>
              <li>✓ <strong>Profitez de la fiscalité</strong> : Le PER offre une déduction d&apos;impôt immédiate</li>
              {result.monthlyPension < 1500 && (
                <li className="mt-3 pt-3 border-t border-blue-300">
                  ⚠️ <strong>Augmentez vos versements</strong> : {Math.round(result.monthlyPension)} €/mois peut être insuffisant à la retraite
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
