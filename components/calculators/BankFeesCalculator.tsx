"use client";

import { useState } from "react";

export default function BankFeesCalculator() {
  const [profile, setProfile] = useState({
    monthlyIncome: 2000,
    cardWithdrawals: 2,
    foreignWithdrawals: 1,
    wireTransfers: 1,
    overdrafts: 0,
    checkDeposits: 1,
  });

  const banks = [
    {
      name: "Banque traditionnelle",
      color: "red",
      fees: {
        card: 48,
        accountFee: 24,
        withdrawal: 1.5,
        foreignWithdrawal: 3.5,
        wireTransfer: 8,
        overdraftRate: 16,
        checkDeposit: 0,
      },
    },
    {
      name: "Boursorama Banque",
      color: "blue",
      fees: {
        card: 0,
        accountFee: 0,
        withdrawal: 0,
        foreignWithdrawal: 0,
        wireTransfer: 0,
        overdraftRate: 7,
        checkDeposit: 0,
      },
      condition: 1000,
    },
    {
      name: "Fortuneo",
      color: "green",
      fees: {
        card: 0,
        accountFee: 0,
        withdrawal: 0,
        foreignWithdrawal: 0,
        wireTransfer: 0,
        overdraftRate: 7,
        checkDeposit: 0,
      },
      condition: 1200,
    },
    {
      name: "Hello bank!",
      color: "orange",
      fees: {
        card: 0,
        accountFee: 0,
        withdrawal: 0,
        foreignWithdrawal: 0,
        wireTransfer: 0,
        overdraftRate: 8,
        checkDeposit: 0,
      },
      condition: 1000,
    },
  ];

  const calculateFees = (bank: any) => {
    let total = 0;

    // Carte bancaire (annuel)
    if (profile.monthlyIncome >= (bank.condition || 0)) {
      total += bank.fees.card;
    } else if (bank.fees.card > 0) {
      total += bank.fees.card * 2; // Double si conditions non remplies (estimation)
    }

    // Frais de tenue de compte (annuel)
    total += bank.fees.accountFee;

    // Retraits en zone euro (mensuel × 12)
    total += bank.fees.withdrawal * profile.cardWithdrawals * 12;

    // Retraits hors zone euro (mensuel × 12)
    total += bank.fees.foreignWithdrawal * profile.foreignWithdrawals * 12;

    // Virements (mensuel × 12)
    total += bank.fees.wireTransfer * profile.wireTransfers * 12;

    // Agios découvert (estimé)
    if (profile.overdrafts > 0) {
      total += (150 * profile.overdrafts * bank.fees.overdraftRate) / 100;
    }

    // Dépôt de chèques (mensuel × 12)
    total += bank.fees.checkDeposit * profile.checkDeposits * 12;

    return Math.round(total);
  };

  const results = banks.map((bank) => ({
    ...bank,
    total: calculateFees(bank),
  })).sort((a, b) => a.total - b.total);

  const savings = results[0].total > 0
    ? results[results.length - 1].total - results[0].total
    : results[1].total > 0
    ? results[results.length - 1].total - results[1].total
    : 0;

  return (
    <div className="card">
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
        🏦 Comparateur de frais bancaires
      </h3>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-semibold mb-2">
            Revenus mensuels (€)
          </label>
          <input
            type="number"
            value={profile.monthlyIncome}
            onChange={(e) => setProfile({ ...profile, monthlyIncome: Number(e.target.value) })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            min="0"
            step="100"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">
            Retraits DAB/mois
          </label>
          <input
            type="number"
            value={profile.cardWithdrawals}
            onChange={(e) => setProfile({ ...profile, cardWithdrawals: Number(e.target.value) })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            min="0"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">
            Retraits étranger/mois
          </label>
          <input
            type="number"
            value={profile.foreignWithdrawals}
            onChange={(e) => setProfile({ ...profile, foreignWithdrawals: Number(e.target.value) })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            min="0"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">
            Virements/mois
          </label>
          <input
            type="number"
            value={profile.wireTransfers}
            onChange={(e) => setProfile({ ...profile, wireTransfers: Number(e.target.value) })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            min="0"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">
            Découverts/an
          </label>
          <input
            type="number"
            value={profile.overdrafts}
            onChange={(e) => setProfile({ ...profile, overdrafts: Number(e.target.value) })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            min="0"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">
            Dépôts chèques/mois
          </label>
          <input
            type="number"
            value={profile.checkDeposits}
            onChange={(e) => setProfile({ ...profile, checkDeposits: Number(e.target.value) })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            min="0"
          />
        </div>
      </div>

      {/* Résultats */}
      <div className="space-y-4">
        <h4 className="font-bold text-lg text-gray-800 mb-4">
          Coût annuel par banque
        </h4>

        {results.map((bank, index) => (
          <div
            key={bank.name}
            className={`p-4 rounded-lg border-2 ${
              index === 0
                ? 'border-green-500 bg-green-50'
                : 'border-gray-200 bg-white'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div>
                <h5 className="font-bold text-gray-900">{bank.name}</h5>
                {bank.condition && (
                  <p className="text-xs text-gray-500">
                    Condition : {bank.condition}€ de revenus/mois
                    {profile.monthlyIncome < bank.condition && (
                      <span className="text-orange-600 ml-1">⚠️ Non remplie</span>
                    )}
                  </p>
                )}
              </div>
              <div className="text-right">
                <p className={`text-2xl font-bold ${
                  index === 0 ? 'text-green-700' : 'text-gray-900'
                }`}>
                  {bank.total} €<span className="text-sm font-normal">/an</span>
                </p>
                {index > 0 && (
                  <p className="text-sm text-red-600">
                    +{bank.total - results[0].total}€ vs {results[0].name}
                  </p>
                )}
              </div>
            </div>

            {index === 0 && bank.total === 0 && (
              <div className="mt-2 text-sm bg-white border border-green-300 rounded px-3 py-2 text-green-800">
                ✓ 100% gratuit pour votre profil !
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Économies */}
      {savings > 0 && (
        <div className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-6">
          <div className="text-center">
            <p className="text-sm font-semibold text-green-800 mb-2">
              💰 Économie potentielle
            </p>
            <p className="text-4xl font-bold text-green-700 mb-1">
              {savings} €<span className="text-xl">/an</span>
            </p>
            <p className="text-sm text-green-700">
              En passant de "{results[results.length - 1].name}" à "{results[0].name}"
            </p>
            <p className="text-xs text-green-600 mt-3">
              Soit {(savings * 10).toLocaleString('fr-FR')} € économisés sur 10 ans !
            </p>
          </div>
        </div>
      )}

      {/* Conseils */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h5 className="font-semibold text-blue-900 mb-2">💡 Nos recommandations</h5>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>✓ Les banques en ligne sont généralement 100% gratuites</li>
          <li>✓ Vérifiez les conditions de revenus pour garder la gratuité</li>
          <li>✓ Domiciliez vos revenus pour bénéficier de tous les avantages</li>
          <li>✓ Comparez aussi la qualité du service client</li>
        </ul>
      </div>
    </div>
  );
}
