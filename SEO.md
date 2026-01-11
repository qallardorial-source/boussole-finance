# Guide SEO - Boussole Finance

Ce guide détaille toutes les optimisations SEO mises en place pour Boussole Finance.

## ✅ Optimisations implémentées

### 1. Sitemap.xml dynamique

**Fichier** : `app/sitemap.ts`

Le sitemap est généré automatiquement et inclut :
- ✅ Toutes les pages statiques (accueil, articles, tests, calculateurs, etc.)
- ✅ Tous les articles dynamiques (37 articles)
- ✅ Tous les tests produits (2 tests)
- ✅ Priorités définies par type de page
- ✅ Fréquences de mise à jour adaptées
- ✅ Dates de dernière modification

**Accès** : `https://votre-domaine.fr/sitemap.xml`

**Configuration requise** :
- Remplacez `https://boussole-finance.fr` par votre vrai domaine dans `app/sitemap.ts`

### 2. Robots.txt

**Fichier** : `app/robots.ts`

Configuration robots.txt :
- ✅ Autorise tous les robots d'indexation
- ✅ Bloque les routes API et admin
- ✅ Pointe vers le sitemap.xml

**Accès** : `https://votre-domaine.fr/robots.txt`

**Configuration requise** :
- Remplacez `https://boussole-finance.fr` par votre vrai domaine dans `app/robots.ts`

### 3. Métadonnées SEO optimisées

**Fichier** : `lib/seo.ts`

Configuration centralisée des métadonnées :
- ✅ **Title tags** optimisés
- ✅ **Meta descriptions** uniques par page
- ✅ **Keywords** ciblés finance personnelle
- ✅ **Open Graph** pour réseaux sociaux (Facebook, LinkedIn)
- ✅ **Twitter Cards** pour Twitter/X
- ✅ **Canonical URLs** pour éviter contenu dupliqué

**Mots-clés principaux** :
- finance personnelle
- banque en ligne
- investissement débutant
- épargne
- budget
- crédit immobilier
- assurance vie
- PEA, livret A, SCPI, ETF

### 4. Données structurées JSON-LD

Les données structurées aident Google à mieux comprendre votre contenu.

**Types implémentés** :

#### Organisation (site global)
```json
{
  "@type": "Organization",
  "name": "Boussole Finance",
  "description": "...",
  "url": "https://boussole-finance.fr"
}
```

#### Article (articles de blog)
```json
{
  "@type": "Article",
  "headline": "...",
  "datePublished": "...",
  "author": {...}
}
```

#### Product Review (tests produits)
```json
{
  "@type": "Product",
  "aggregateRating": {
    "ratingValue": 4.5,
    "bestRating": 5
  }
}
```

#### Breadcrumb (fil d'Ariane)
```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [...]
}
```

**Avantages** :
- ✅ Rich snippets dans les résultats Google
- ✅ Étoiles de notation visibles
- ✅ Fil d'Ariane dans les résultats
- ✅ Meilleur CTR (taux de clic)

### 5. Manifest.json (PWA)

**Fichier** : `app/manifest.ts`

Configuration Progressive Web App :
- ✅ Nom et description du site
- ✅ Couleurs de thème
- ✅ Icônes (192x192 et 512x512)
- ✅ Mode standalone

**Avantages** :
- Installation sur mobile comme une app
- Meilleur engagement utilisateur
- Améliore le score Lighthouse

**Configuration requise** :
- Créez les icônes :
  - `public/icon-192.png` (192x192 px)
  - `public/icon-512.png` (512x512 px)

### 6. Optimisations techniques

✅ **Balise lang="fr"** dans `<html>`
✅ **Meta viewport** responsive
✅ **Sémantique HTML** correcte (h1, h2, sections)
✅ **URLs propres** et descriptives
✅ **HTTPS** (via Vercel)
✅ **Performance** optimisée (Next.js)

---

## 🎯 Checklist de configuration post-déploiement

### Étape 1 : Remplacer les domaines

Dans les fichiers suivants, remplacez `https://boussole-finance.fr` par votre vrai domaine :

- [ ] `app/sitemap.ts` (ligne 6)
- [ ] `app/robots.ts` (ligne 4)
- [ ] `lib/seo.ts` (ligne 19)

### Étape 2 : Créer les icônes

Créez des icônes pour PWA :

- [ ] `public/icon-192.png` (192x192 px)
- [ ] `public/icon-512.png` (512x512 px)
- [ ] `public/logo.png` (pour schema.org)
- [ ] `public/og-image.jpg` (1200x630 px pour Open Graph)

**Outils recommandés** :
- [Favicon.io](https://favicon.io/) - Générateur gratuit
- [RealFaviconGenerator](https://realfavicongenerator.net/)

### Étape 3 : Soumettre à Google

1. **Google Search Console**
   - Allez sur [search.google.com/search-console](https://search.google.com/search-console)
   - Ajoutez votre domaine
   - Vérifiez la propriété
   - Soumettez le sitemap : `https://votre-domaine.fr/sitemap.xml`

2. **Vérifier l'indexation**
   - Utilisez l'outil "Inspection d'URL"
   - Demandez l'indexation des pages principales

### Étape 4 : Configurer réseaux sociaux (optionnel)

Dans `lib/seo.ts`, ajoutez vos comptes :

```typescript
twitter: {
  creator: '@votre_compte', // Ligne 66
},

sameAs: [
  'https://twitter.com/votre_compte',
  'https://www.linkedin.com/company/votre-entreprise',
],
```

### Étape 5 : Vérifier les données structurées

1. Allez sur [Google Rich Results Test](https://search.google.com/test/rich-results)
2. Testez vos URLs :
   - Page d'accueil
   - Un article
   - Un test produit
3. Corrigez les erreurs éventuelles

---

## 📊 Utilisation des fonctions SEO

### Pour une page simple

```typescript
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Ma page',
  description: 'Description de ma page',
});
```

### Pour un article avec données structurées

```typescript
import { generateMetadata, generateArticleSchema } from '@/lib/seo';

export async function generateMetadata({ params }): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);

  return generateMetadata({
    title: article.title,
    description: article.description,
    url: `/articles/${params.slug}`,
  });
}

export default function ArticlePage({ params }) {
  const article = getArticleBySlug(params.slug);
  const schema = generateArticleSchema({
    title: article.title,
    description: article.description,
    publishedAt: article.publishedAt,
    slug: params.slug,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* Contenu de l'article */}
    </>
  );
}
```

### Pour un test produit avec notation

```typescript
import { generateProductReviewSchema } from '@/lib/seo';

const schema = generateProductReviewSchema({
  name: 'Briks',
  description: 'Plateforme de crowdfunding immobilier',
  rating: 4.5,
});
```

---

## 🔍 Mots-clés ciblés

### Principaux (Volume élevé)

- finance personnelle
- banque en ligne
- investissement débutant
- comment investir
- meilleure banque en ligne
- livret épargne

### Secondaires (Longue traîne)

- comment gérer son budget
- calculateur intérêts composés
- ouvrir PEA
- assurance vie rendement
- SCPI avis
- crédit immobilier taux
- comment économiser au quotidien

### Par catégorie

**Épargne** :
- livret A taux 2026
- LEP conditions
- assurance vie meilleur rendement

**Investissement** :
- PEA débutant
- ETF World
- SCPI rendement
- investir en bourse débutant

**Banques** :
- comparatif banques en ligne
- néobanque
- frais bancaires

**Budget** :
- méthode 50/30/20
- budget familial
- réduire ses dépenses

---

## 📈 Métriques à suivre

### Dans Google Search Console

- **Impressions** : Nombre d'apparitions dans les résultats
- **Clics** : Nombre de clics vers votre site
- **CTR** : Taux de clic (objectif : >3%)
- **Position moyenne** : Position dans les résultats (objectif : <10)

### Dans Google Analytics / Plausible

- **Pages vues** : Trafic global
- **Taux de rebond** : Visiteurs qui partent immédiatement (objectif : <60%)
- **Temps sur page** : Engagement (objectif : >2 min pour articles)
- **Pages par session** : Navigation (objectif : >2)

### Objectifs SEO par trimestre

**Trimestre 1** :
- 100 visites organiques/mois
- 10 mots-clés positionnés top 100
- Indexation de toutes les pages

**Trimestre 2** :
- 500 visites organiques/mois
- 20 mots-clés positionnés top 50
- 5 mots-clés top 10

**Trimestre 3** :
- 1 000 visites organiques/mois
- 30 mots-clés positionnés top 30
- 10 mots-clés top 10

---

## ✍️ Bonnes pratiques de rédaction SEO

### Structure d'un article optimisé

1. **Titre H1** : 1 seul, avec mot-clé principal
2. **Introduction** : 100-150 mots, contient le mot-clé
3. **Sous-titres H2** : Structurent le contenu
4. **Sous-titres H3** : Détaillent les H2
5. **Longueur** : Minimum 1 500 mots pour articles de fond
6. **Mot-clé** : Densité 1-2%, naturel
7. **Liens internes** : 3-5 liens vers autres articles
8. **Liens externes** : 2-3 vers sources fiables
9. **Call-to-action** : Incitation à agir (calculateur, autre article)
10. **Meta description** : 150-160 caractères max

### Optimisation images

- **Format** : WebP pour performance
- **Poids** : <100 KB par image
- **Alt text** : Descriptif avec mot-clé
- **Nom fichier** : descriptif (ex: `assurance-vie-rendement.webp`)

### URLs optimisées

✅ **Bon** : `/articles/assurance-vie-guide-debutant`
❌ **Mauvais** : `/articles/12345` ou `/articles/article-nouveau`

---

## 🛠️ Outils SEO recommandés

### Gratuits

- **Google Search Console** : Suivi indexation et positions
- **Google Analytics** : Analyse du trafic
- **Google PageSpeed Insights** : Performance
- **Ubersuggest** : Recherche de mots-clés (version gratuite limitée)
- **AnswerThePublic** : Questions des utilisateurs

### Payants (mais performants)

- **Semrush** : Audit SEO complet (99$/mois)
- **Ahrefs** : Backlinks et mots-clés (99$/mois)
- **Surfer SEO** : Optimisation contenu (59$/mois)

### Alternative gratuite

- **Plausible Analytics** : Vous l'avez déjà ! Simple et efficace

---

## 🎓 Ressources pour aller plus loin

- [Guide SEO Google](https://developers.google.com/search/docs)
- [Schema.org documentation](https://schema.org/)
- [Next.js SEO Guide](https://nextjs.org/learn/seo/introduction-to-seo)
- [Moz Beginner's Guide to SEO](https://moz.com/beginners-guide-to-seo)

---

## ✅ Résumé : Votre site est SEO-ready !

Toutes les bases SEO sont en place :

- ✅ Sitemap.xml automatique
- ✅ Robots.txt configuré
- ✅ Métadonnées optimisées
- ✅ Données structurées JSON-LD
- ✅ Open Graph / Twitter Cards
- ✅ Manifest PWA
- ✅ URLs propres et descriptives
- ✅ 37 articles avec contenu de qualité

**Prochaines étapes** :
1. Remplacer les domaines par votre vrai domaine
2. Créer les icônes manquantes
3. Déployer sur Vercel
4. Soumettre le sitemap à Google Search Console
5. Créer des backlinks (guest posts, annuaires, réseaux sociaux)

**Le SEO est un marathon, pas un sprint !** Les résultats apparaissent généralement après 3-6 mois de travail régulier.

---

*Dernière mise à jour : Janvier 2026*
