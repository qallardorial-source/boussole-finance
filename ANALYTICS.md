# Configuration Analytics - Boussole Finance

Ce guide explique comment configurer les analytics pour Boussole Finance.

## Plausible Analytics (Recommandé) ✅

Plausible est une solution d'analytics respectueuse de la vie privée, sans cookies, et conforme RGPD par défaut.

### Pourquoi Plausible ?

- ✅ **Respectueux de la vie privée** : Aucune donnée personnelle collectée
- ✅ **Sans cookies** : Pas de bannière cookie nécessaire
- ✅ **Conforme RGPD** : Par défaut, sans configuration
- ✅ **Léger** : < 1 KB, n'impacte pas la performance
- ✅ **Simple** : Interface claire et intuitive
- ✅ **Données en Europe** : Hébergé en Allemagne
- ✅ **Open Source** : Code transparent

### Configuration Plausible

1. **Créer un compte Plausible**
   - Allez sur [plausible.io](https://plausible.io)
   - Créez un compte (essai gratuit de 30 jours)
   - Ajoutez votre domaine : `boussole-finance.fr`

2. **Mettre à jour la configuration**

   Éditez le fichier `lib/analytics.ts` :

   ```typescript
   export const analytics = {
     plausible: {
       enabled: true,
       domain: 'votre-domaine.fr', // Remplacez par votre vrai domaine
     },
     // ...
   };
   ```

3. **C'est tout !** 🎉

   Le script Plausible est déjà intégré dans `components/Analytics.tsx` et chargé dans `app/layout.tsx`.

### Tarifs Plausible

- **Essai gratuit** : 30 jours
- **10K pageviews/mois** : 9€/mois
- **100K pageviews/mois** : 19€/mois
- **1M pageviews/mois** : 69€/mois

### Alternative : Auto-hébergement Plausible

Plausible peut être auto-hébergé gratuitement :
- Suivez le guide : [plausible.io/docs/self-hosting](https://plausible.io/docs/self-hosting)
- Nécessite un serveur (VPS, Docker)

---

## Google Analytics 4 (Optionnel)

Google Analytics est l'outil d'analytics le plus utilisé au monde, mais nécessite une bannière de consentement cookies.

### Configuration Google Analytics

1. **Créer un compte Google Analytics 4**
   - Allez sur [analytics.google.com](https://analytics.google.com)
   - Créez une propriété GA4
   - Récupérez votre Measurement ID (format : `G-XXXXXXXXXX`)

2. **Activer Google Analytics**

   Éditez le fichier `lib/analytics.ts` :

   ```typescript
   export const analytics = {
     plausible: {
       enabled: false, // Désactivez Plausible si vous utilisez GA
     },
     googleAnalytics: {
       enabled: true, // Activez Google Analytics
       measurementId: 'G-XXXXXXXXXX', // Remplacez par votre ID
     },
   };
   ```

3. **Ajoutez une bannière de consentement cookies** ⚠️

   Avec Google Analytics, vous devez ajouter une bannière de consentement RGPD.

   Solutions recommandées :
   - [Axeptio](https://www.axeptio.eu/)
   - [Tarteaucitron.js](https://tarteaucitron.io/)
   - [CookieBot](https://www.cookiebot.com/)

### Inconvénients de Google Analytics

- ❌ Nécessite une bannière cookies (coût + complexité)
- ❌ Collecte beaucoup de données (vie privée)
- ❌ Script plus lourd (~45 KB vs <1 KB Plausible)
- ❌ Bloqué par les adblockers (~30% des utilisateurs)
- ❌ Configuration RGPD complexe

---

## Utiliser les deux en même temps

Vous pouvez activer Plausible ET Google Analytics simultanément :

```typescript
export const analytics = {
  plausible: {
    enabled: true,
    domain: 'boussole-finance.fr',
  },
  googleAnalytics: {
    enabled: true,
    measurementId: 'G-XXXXXXXXXX',
  },
};
```

**Recommandation :** Utilisez uniquement Plausible pour simplifier et respecter la vie privée.

---

## Événements personnalisés (avancé)

### Avec Plausible

Pour tracker des événements spécifiques (clics sur boutons, téléchargements, etc.) :

```typescript
// Dans un composant
const handleClick = () => {
  if (window.plausible) {
    window.plausible('Calculateur', { props: { type: 'Intérêts composés' } });
  }
};
```

### Avec Google Analytics

```typescript
// Dans un composant
const handleClick = () => {
  if (window.gtag) {
    window.gtag('event', 'calculateur_utilise', {
      type: 'intérêts_composés',
    });
  }
};
```

---

## Vérifier que ça fonctionne

### Plausible

1. Ouvrez votre site
2. Allez sur votre tableau de bord Plausible
3. Vérifiez qu'un visiteur en temps réel apparaît

### Google Analytics

1. Ouvrez votre site
2. Allez sur Google Analytics → Rapports → Temps réel
3. Vérifiez qu'un visiteur actif apparaît

---

## Désactiver les analytics

Pour désactiver complètement les analytics :

```typescript
export const analytics = {
  plausible: {
    enabled: false,
  },
  googleAnalytics: {
    enabled: false,
  },
};
```

---

## FAQ

**Q : Plausible est-il vraiment sans cookies ?**
R : Oui, Plausible n'utilise aucun cookie. Il utilise un hash anonyme temporaire qui ne permet pas de suivre les utilisateurs.

**Q : Dois-je mettre une bannière cookies avec Plausible ?**
R : Non, Plausible ne nécessite pas de consentement cookies selon le RGPD car il ne collecte aucune donnée personnelle.

**Q : Google Analytics est-il gratuit ?**
R : Oui, Google Analytics 4 est gratuit (jusqu'à 10 millions d'événements/mois).

**Q : Puis-je utiliser les deux ?**
R : Oui, mais cela augmente le poids de la page et vous devrez quand même avoir une bannière cookies (à cause de GA).

---

## Recommandation finale

**Pour Boussole Finance, nous recommandons Plausible** car :
- ✅ Respectueux de la vie privée des utilisateurs
- ✅ Pas de bannière cookies (meilleure UX)
- ✅ Conforme RGPD automatiquement
- ✅ Très léger et rapide
- ✅ Interface simple et claire
- ✅ Données suffisantes pour un blog

**Coût estimé** : 9€/mois pour un site avec <10K visites/mois.

---

*Dernière mise à jour : Janvier 2026*
