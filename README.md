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

- ✅ **37 articles éducatifs** couvrant toutes les catégories de finance personnelle
- ✅ Tests de produits financiers avec notes et liens d'affiliation
- ✅ **3 calculateurs interactifs** avec graphiques :
  - Calculateur d'intérêts composés
  - Calculateur de budget mensuel
  - Calculateur de capacité d'emprunt
- ✅ Recherche et filtrage par catégorie
- ✅ Design responsive (mobile-first)
- ✅ Newsletter (formulaire placeholder)
- ✅ **Analytics intégré** (Plausible + Google Analytics optionnel)
- ✅ **Pages légales complètes** (Mentions légales, CGU, Politique de confidentialité)

## Palette de couleurs

- **Primary** (bleu foncé) : `#212E53`
- **Secondary** (bleu-vert) : `#4A919E`
- **Accent** (vert clair) : `#BED3C3`
- **Neutral** (bleu-gris) : `#7A90A4`

## Configuration Analytics

Voir [ANALYTICS.md](./ANALYTICS.md) pour configurer Plausible ou Google Analytics.

**Recommandation :** Utilisez Plausible pour une solution respectueuse de la vie privée et sans cookies.

## Pages légales

✅ Les pages légales sont déjà créées et conformes RGPD :
- `/mentions-legales` - À personnaliser avec vos informations
- `/politique-confidentialite` - Complète et conforme RGPD
- `/cgu` - Conditions générales d'utilisation

**⚠️ Important :** Mettez à jour les informations de l'éditeur dans les mentions légales.

## Prochaines étapes

- [x] Générer du contenu SEO réel (37 articles ✅)
- [x] Ajouter Analytics (Plausible + GA optionnel ✅)
- [x] Créer les pages légales ✅
- [ ] Intégrer une vraie newsletter (ConvertKit ou Mailchimp)
- [ ] Configurer les liens d'affiliation réels
- [ ] Ajouter des images réelles pour les articles
- [ ] Optimiser le SEO (sitemap, robots.txt, schema.org)
- [ ] Déployer sur Vercel
- [ ] Configurer un nom de domaine

## Licence

© 2026 Boussole Finance. Tous droits réservés.
