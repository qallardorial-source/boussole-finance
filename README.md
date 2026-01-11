# Boussole Finance

Blog de finance personnelle destiné aux débutants français. Articles éducatifs, tests de produits financiers et calculateurs gratuits.

## Stack technique

- **Framework** : Next.js 14 (App Router)
- **Styling** : TailwindCSS
- **Contenu** : MDX (Markdown + React Components)
- **Graphiques** : Recharts
- **Icônes** : Lucide React
- **Déploiement** : Vercel

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Build

```bash
npm run build
npm start
```

## Structure du projet

```
boussole-finance/
├── app/                    # Pages Next.js (App Router)
│   ├── articles/          # Liste et articles individuels
│   ├── tests/             # Tests de produits
│   ├── calculateurs/      # Outils de calcul
│   └── a-propos/          # Page à propos
├── components/            # Composants React réutilisables
│   └── calculators/       # Composants des calculateurs
├── content/               # Contenu MDX
│   ├── articles/          # Articles éducatifs
│   └── tests/             # Tests produits
├── lib/                   # Utilitaires
└── public/                # Assets statiques
```

## Fonctionnalités

- ✅ Articles éducatifs sur la finance personnelle
- ✅ Tests de produits financiers avec notes
- ✅ 3 calculateurs interactifs :
  - Calculateur d'intérêts composés
  - Calculateur de budget mensuel
  - Calculateur de capacité d'emprunt
- ✅ Recherche et filtrage par catégorie
- ✅ Design responsive
- ✅ Newsletter (formulaire placeholder)

## Palette de couleurs

- **Primary** (bleu foncé) : `#212E53`
- **Secondary** (bleu-vert) : `#4A919E`
- **Accent** (vert clair) : `#BED3C3`
- **Neutral** (bleu-gris) : `#7A90A4`

## Prochaines étapes

- [ ] Générer du contenu SEO réel (30-40 articles)
- [ ] Intégrer une vraie newsletter (ConvertKit ou Mailchimp)
- [ ] Ajouter Analytics (Plausible ou Google Analytics)
- [ ] Créer les pages légales (mentions légales, politique de confidentialité)
- [ ] Configurer les liens d'affiliation réels
- [ ] Optimiser les images et le SEO
- [ ] Déployer sur Vercel

## Licence

© 2026 Boussole Finance. Tous droits réservés.
