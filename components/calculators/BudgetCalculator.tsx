"use client";

import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

export default function BudgetCalculator() {
  const [income, setIncome] = useState(2500);
  const [fixedExpenses, setFixedExpenses] = useState(1200);
  const [variableExpenses, setVariableExpenses] = useState(800);
  const [result, setResult] = useState<any>(null);

  const COLORS = {
    available: '#4A919E',
    fixed: '#ef4444',
    variable: '#f59e0b',
  };

  const calculateBudget = () => {
    const totalExpenses = fixedExpenses + variableExpenses;
    const available = income - totalExpenses;
    const savingsRate = income > 0 ? (available / income) * 100 : 0;

    const chartData = [
      { name: 'Dépenses fixes', value: fixedExpenses },
      { name: 'Dépenses variables', value: variableExpenses },
      { name: 'Disponible/Épargne', value: Math.max(0, available) },
    ].filter(item => item.value > 0);

    setResult({
      totalExpenses,
      available,
      savingsRate,
      chartData,
      isDeficit: available < 0,
    });
  };

  return (
    <div className="card">
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
        💰 Calculateur de budget mensuel
      </h3>

      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div>
          <label className="block text-sm font-semibold mb-2">
            Revenus mensuels (€)
          </label>
          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(Number(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            min="0"
            step="100"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">
            Dépenses fixes (€)
          </label>
          <input
            type="number"
            value={fixedExpenses}
            onChange={(e) => setFixedExpenses(Number(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            min="0"
            step="50"
          />
          <p className="text-xs text-gray-500 mt-1">
            Loyer, assurances, abonnements...
          </p>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">
            Dépenses variables (€)
          </label>
          <input
            type="number"
            value={variableExpenses}
            onChange={(e) => setVariableExpenses(Number(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            min="0"
            step="50"
          />
          <p className="text-xs text-gray-500 mt-1">
            Courses, loisirs, transport...
          </p>
        </div>
      </div>

      <button
        onClick={calculateBudget}
        className="btn-primary w-full mb-6"
      >
        Calculer
      </button>

      {result && (
        <div>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Revenus mensuels</p>
                  <p className="text-2xl font-bold text-gray-800">
                    {income.toLocaleString('fr-FR')} €
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <p className="text-sm text-gray-600 mb-1">Total dépenses</p>
                  <p className="text-2xl font-bold text-red-700">
                    {result.totalExpenses.toLocaleString('fr-FR')} €
                  </p>
                </div>

                <div className={`p-4 rounded-lg border ${
                  result.isDeficit
                    ? 'bg-red-50 border-red-200'
                    : 'bg-green-50 border-green-200'
                }`}>
                  <p className="text-sm text-gray-600 mb-1">
                    {result.isDeficit ? 'Déficit' : 'Disponible/Épargne'}
                  </p>
                  <p className={`text-2xl font-bold ${
                    result.isDeficit ? 'text-red-700' : 'text-green-700'
                  }`}>
                    {result.available.toLocaleString('fr-FR')} €
                  </p>
                </div>

                {!result.isDeficit && (
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <p className="text-sm text-gray-600 mb-1">Taux d&apos;épargne</p>
                    <p className="text-2xl font-bold text-blue-700">
                      {result.savingsRate.toFixed(1)} %
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center justify-center">
              {result.chartData.length > 0 && (
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={result.chartData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {result.chartData.map((entry: any, index: number) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={
                            entry.name === 'Dépenses fixes'
                              ? COLORS.fixed
                              : entry.name === 'Dépenses variables'
                              ? COLORS.variable
                              : COLORS.available
                          }
                        />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value: number) => value.toLocaleString('fr-FR') + ' €'} />
                  </PieChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>

          {result.isDeficit && (
            <div className="bg-red-100 border border-red-300 rounded-lg p-4 text-red-800">
              <p className="font-semibold">⚠️ Attention : Votre budget est déficitaire !</p>
              <p className="text-sm mt-2">
                Vos dépenses dépassent vos revenus. Il est recommandé de réduire vos dépenses ou d&apos;augmenter vos revenus.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
