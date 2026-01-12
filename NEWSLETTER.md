# 📧 Configuration de la Newsletter

Ce guide explique comment configurer la newsletter de Boussole Finance avec différents services d'emailing.

## 🎯 Aperçu

La newsletter de Boussole Finance est maintenant **fonctionnelle** et peut être connectée à plusieurs services d'emailing :

- **Brevo** (ex-Sendinblue) - ⭐ **Recommandé** - Gratuit jusqu'à 300 emails/jour
- **Mailchimp** - Gratuit jusqu'à 500 contacts
- **SendGrid** - Gratuit jusqu'à 100 emails/jour
- **Log-only** - Mode développement (logs console uniquement)

## 🚀 Démarrage rapide

### 1. Mode développement (par défaut)

Par défaut, la newsletter fonctionne en mode `log-only` qui enregistre les inscriptions dans la console :

```bash
# Dans .env ou .env.local
NEWSLETTER_SERVICE=log-only
```

Les inscriptions seront loguées dans la console serveur mais pas envoyées à un service tiers.

### 2. Configuration en production

Choisissez un service d'emailing et suivez les instructions ci-dessous.

---

## 📮 Brevo (ex-Sendinblue) - Recommandé

**Avantages :**
- ✅ Gratuit jusqu'à 300 emails/jour
- ✅ Interface en français
- ✅ Facile à configurer
- ✅ Templates d'emails inclus
- ✅ Double opt-in automatique

### Étapes de configuration

#### 1. Créer un compte Brevo

1. Rendez-vous sur [https://www.brevo.com](https://www.brevo.com)
2. Créez un compte gratuit
3. Vérifiez votre email

#### 2. Obtenir votre clé API

1. Connectez-vous à votre compte Brevo
2. Allez dans **Paramètres** (roue dentée en haut à droite)
3. Cliquez sur **Clés API SMTP & API**
4. Cliquez sur **Créer une nouvelle clé API**
5. Nommez-la "Boussole Finance Newsletter"
6. Copiez la clé (format : `xkeysib-xxxxx...`)

#### 3. Créer une liste de contacts

1. Allez dans **Contacts** > **Listes**
2. Cliquez sur **Créer une liste**
3. Nommez-la "Newsletter Boussole Finance"
4. Notez l'ID de la liste (visible dans l'URL ou les paramètres)

#### 4. Configurer les variables d'environnement

Créez un fichier `.env.local` à la racine du projet :

```bash
NEWSLETTER_SERVICE=brevo
NEWSLETTER_API_KEY=xkeysib-votre-cle-api-ici
NEWSLETTER_LIST_ID=1
```

#### 5. Tester

1. Redémarrez le serveur : `npm run dev`
2. Allez sur votre site
3. Inscrivez-vous à la newsletter avec votre email
4. Vérifiez dans Brevo > Contacts que l'email apparaît

---

## 🐒 Mailchimp

**Avantages :**
- ✅ Gratuit jusqu'à 500 contacts
- ✅ Très populaire
- ✅ Beaucoup de templates
- ✅ Analytics avancés

### Étapes de configuration

#### 1. Créer un compte Mailchimp

1. Rendez-vous sur [https://mailchimp.com](https://mailchimp.com)
2. Créez un compte gratuit

#### 2. Obtenir votre clé API

1. Connectez-vous à Mailchimp
2. Cliquez sur votre profil (en haut à droite)
3. Allez dans **Account** > **Extras** > **API keys**
4. Cliquez sur **Create A Key**
5. Copiez la clé (format : `xxxxx-us1` où `us1` est le datacenter)

#### 3. Créer une audience

1. Allez dans **Audience** > **All contacts**
2. Si vous n'avez pas d'audience, créez-en une
3. Allez dans **Settings** > **Audience name and defaults**
4. Notez l'**Audience ID** (format : `xxxxxxxxxx`)

#### 4. Configurer les variables d'environnement

```bash
NEWSLETTER_SERVICE=mailchimp
NEWSLETTER_API_KEY=votre-cle-api-us1
NEWSLETTER_LIST_ID=votre-audience-id
```

---

## 📨 SendGrid

**Avantages :**
- ✅ Gratuit jusqu'à 100 emails/jour
- ✅ Infrastructure robuste
- ✅ Bonne délivrabilité

### Étapes de configuration

#### 1. Créer un compte SendGrid

1. Rendez-vous sur [https://sendgrid.com](https://sendgrid.com)
2. Créez un compte gratuit

#### 2. Obtenir votre clé API

1. Connectez-vous à SendGrid
2. Allez dans **Settings** > **API Keys**
3. Cliquez sur **Create API Key**
4. Choisissez **Full Access** ou **Restricted Access** avec permissions Marketing
5. Copiez la clé (format : `SG.xxxxx...`)

#### 3. Créer une liste Marketing

1. Allez dans **Marketing** > **Contacts** > **Lists**
2. Cliquez sur **Create List**
3. Nommez la liste "Newsletter Boussole Finance"
4. Notez l'ID de la liste (format UUID : `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)

#### 4. Configurer les variables d'environnement

```bash
NEWSLETTER_SERVICE=sendgrid
NEWSLETTER_API_KEY=SG.votre-cle-api-ici
NEWSLETTER_LIST_ID=votre-list-id-uuid
```

---

## 🔧 Configuration avancée

### Gestion du double opt-in

Pour être conforme RGPD, le double opt-in est recommandé. Voici comment le configurer :

#### Brevo
1. Allez dans **Contacts** > **Paramètres**
2. Activez **Double opt-in**
3. Personnalisez l'email de confirmation

#### Mailchimp
1. Allez dans **Audience** > **Settings** > **Audience name and defaults**
2. Cochez **Enable double opt-in**
3. Personnalisez l'email de confirmation dans **Signup forms** > **Form builder**

#### SendGrid
SendGrid nécessite une configuration manuelle du workflow pour le double opt-in.

### Template d'email de bienvenue

Créez un email de bienvenue automatique :

**Exemple de contenu :**

```
Sujet : Bienvenue sur Boussole Finance ! 🎯

Bonjour,

Merci de vous être inscrit(e) à la newsletter de Boussole Finance !

Vous recevrez désormais :
✅ Nos meilleurs articles sur la finance personnelle
✅ Des guides pratiques pour gérer votre argent
✅ Des tests de produits financiers
✅ Des conseils exclusifs

À très bientôt dans votre boîte mail !

L'équipe Boussole Finance
https://boussole-finance.fr

---
Vous pouvez vous désinscrire à tout moment en cliquant sur le lien en bas de chaque email.
```

---

## 🧪 Tests

### Test en développement

```bash
# Mode log-only
NEWSLETTER_SERVICE=log-only

# Lancez le serveur
npm run dev

# Inscrivez-vous avec votre email
# Vérifiez les logs console
```

### Test en production

1. Configurez le service choisi
2. Testez avec plusieurs emails
3. Vérifiez que les contacts apparaissent dans votre service
4. Testez le lien de désinscription

---

## 📊 Monitoring

### Métriques à surveiller

- **Taux d'inscription** : Nombre d'inscriptions / visiteurs
- **Taux de confirmation** (double opt-in) : Confirmations / inscriptions
- **Taux d'ouverture** : Emails ouverts / emails envoyés
- **Taux de désabonnement** : Désabonnements / abonnés totaux

### Tableau de bord

Chaque service offre un tableau de bord pour suivre ces métriques :

- **Brevo** : Statistiques > Campagnes
- **Mailchimp** : Reports
- **SendGrid** : Analytics

---

## 🐛 Dépannage

### L'inscription ne fonctionne pas

1. Vérifiez que les variables d'environnement sont correctes
2. Vérifiez les logs serveur : `npm run dev`
3. Testez l'API directement :

```bash
curl -X POST http://localhost:3000/api/newsletter \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'
```

### Erreur "Configuration manquante"

- Vérifiez que `NEWSLETTER_API_KEY` est définie
- Vérifiez que `NEWSLETTER_LIST_ID` est définie (si nécessaire)
- Redémarrez le serveur après modification du `.env.local`

### Erreur 401 (Unauthorized)

- Votre clé API est incorrecte ou expirée
- Régénérez une nouvelle clé API

### Les emails n'arrivent pas

1. Vérifiez le dossier spam
2. Vérifiez que l'email de l'expéditeur est vérifié dans votre service
3. Pour Brevo/SendGrid : configurez SPF/DKIM pour votre domaine

---

## 🔒 Sécurité

### Bonnes pratiques

1. **Ne jamais commiter les clés API** dans Git
2. Utilisez `.env.local` pour le développement local
3. Utilisez les variables d'environnement de votre hébergeur (Vercel, Netlify, etc.)
4. Limitez les permissions des clés API au minimum nécessaire
5. Régénérez les clés si elles sont compromises

### Variables d'environnement sur Vercel

```bash
# Via l'interface Vercel
1. Allez dans votre projet > Settings > Environment Variables
2. Ajoutez :
   - NEWSLETTER_SERVICE
   - NEWSLETTER_API_KEY
   - NEWSLETTER_LIST_ID

# Via CLI
vercel env add NEWSLETTER_SERVICE
vercel env add NEWSLETTER_API_KEY
vercel env add NEWSLETTER_LIST_ID
```

---

## 📚 Ressources

### Documentation officielle

- [Brevo API Docs](https://developers.brevo.com/)
- [Mailchimp API Docs](https://mailchimp.com/developer/)
- [SendGrid API Docs](https://docs.sendgrid.com/)

### Support

Pour toute question sur la configuration de la newsletter :

- **Email** : contact@boussole-finance.fr
- **Issues GitHub** : [Créer une issue](https://github.com/votre-repo/issues)

---

## ✅ Checklist de déploiement

Avant de déployer en production :

- [ ] Service d'emailing configuré (Brevo/Mailchimp/SendGrid)
- [ ] Clé API obtenue et testée
- [ ] Liste/Audience créée
- [ ] Variables d'environnement configurées sur l'hébergeur
- [ ] Double opt-in activé (RGPD)
- [ ] Email de bienvenue créé
- [ ] Tests d'inscription effectués
- [ ] Lien de désinscription vérifié
- [ ] Monitoring configuré

---

**Dernière mise à jour :** Janvier 2026
