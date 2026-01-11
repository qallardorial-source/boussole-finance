// Configuration Analytics pour Boussole Finance

export const analytics = {
  // Plausible Analytics (recommandé - respectueux de la vie privée, sans cookies)
  plausible: {
    enabled: true,
    domain: 'boussole-finance.fr', // À remplacer par votre domaine réel
  },

  // Google Analytics 4 (optionnel)
  googleAnalytics: {
    enabled: false, // Mettre à true pour activer
    measurementId: 'G-XXXXXXXXXX', // À remplacer par votre ID GA4
  },
};
