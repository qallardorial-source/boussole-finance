# Guide de Déploiement - Boussole Finance

## Configuration GitHub Pages

Pour déployer le site en test avec GitHub Pages, suivez ces étapes :

### 1. Activer GitHub Pages

1. Allez dans **Settings** > **Pages** de votre repository
2. Dans **Source**, sélectionnez **GitHub Actions**
3. Sauvegardez les changements

### 2. Déploiement automatique

Le workflow GitHub Actions (`.github/workflows/deploy-test.yml`) se déclenchera automatiquement :
- À chaque push sur une branche `claude/prepare-github-test-deploy-*`
- Manuellement via l'onglet "Actions" du repository

### 3. Accéder au site déployé

Une fois le déploiement terminé :
- Allez dans **Settings** > **Pages**
- Vous verrez l'URL de votre site : `https://<username>.github.io/<repo-name>/`

## Limitations du déploiement statique

⚠️ **Important** : Certaines fonctionnalités ne fonctionneront pas en mode statique :

1. **Newsletter** : L'API route `/api/newsletter` ne fonctionne pas en mode statique
   - Le formulaire d'inscription sera affiché mais ne fonctionnera pas
   - Solution : Utiliser un service externe (Mailchimp, ConvertKit, etc.)

2. **Images optimisées** : Les images sont désoptimisées (`unoptimized: true`)
   - Toutes les images sont servies en taille originale
   - Peut affecter les performances

## Build local

Pour tester le build localement :

```bash
# Installer les dépendances
npm install

# Build le site
npm run build

# Le site statique sera dans le dossier ./out
```

## Configuration

Les fichiers de configuration importants :
- `next.config.js` : Configuration Next.js avec `output: 'export'`
- `.github/workflows/deploy-test.yml` : Workflow de déploiement
- `.eslintrc.json` : Désactive la règle `react/no-unescaped-entities`

## Corrections appliquées

Les corrections suivantes ont été appliquées pour permettre le build :

1. ✅ Séparation des composants client/serveur (ArticlesClient, TestsClient)
2. ✅ Désactivation de la règle ESLint `react/no-unescaped-entities`
3. ✅ Échappement des caractères `<` dans les fichiers MDX (ex: `<50%` → `&lt;50%`)
4. ✅ Configuration pour export statique (`output: 'export'`, `images.unoptimized: true`)

## Dépannage

Si le déploiement échoue :

1. Vérifiez les logs dans l'onglet **Actions** du repository
2. Assurez-vous que GitHub Pages est activé dans les Settings
3. Vérifiez que le workflow a les bonnes permissions (contents: read, pages: write)

## Déploiement en production

Pour un déploiement en production, considérez :
- **Vercel** ou **Netlify** pour un support complet de Next.js
- Un serveur Node.js pour utiliser les fonctionnalités server-side
- Configuration d'un domaine personnalisé
