import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Politique de confidentialité | Boussole Finance',
  description: 'Politique de confidentialité et protection des données personnelles de Boussole Finance',
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Politique de confidentialité
          </h1>
          <p className="text-xl text-white/90 mt-4">
            Protection de vos données personnelles
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto prose prose-lg">

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">1. Introduction</h2>
            <p className="mb-4">
              Boussole Finance accorde une grande importance à la protection de votre vie privée et de vos données personnelles.
            </p>
            <p className="mb-4">
              Cette politique de confidentialité a pour but de vous informer sur :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Les données que nous collectons</li>
              <li>Comment nous les utilisons</li>
              <li>Comment nous les protégeons</li>
              <li>Vos droits concernant vos données</li>
            </ul>
            <p>
              En utilisant notre site, vous acceptez les pratiques décrites dans cette politique.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">2. Responsable du traitement</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-2"><strong>Responsable :</strong> Boussole Finance SARL</p>
              <p className="mb-2"><strong>Représentant légal :</strong> Pierre Dubois, Gérant</p>
              <p className="mb-2"><strong>Adresse :</strong> 15 rue de la Finance, 75002 Paris, France</p>
              <p className="mb-2"><strong>Email :</strong> contact@boussole-finance.fr</p>
              <p className="mb-2"><strong>SIRET :</strong> 123 456 789 00012</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">3. Données collectées</h2>

            <h3 className="text-xl font-semibold text-primary mb-3 mt-6">3.1 Données collectées automatiquement</h3>
            <p className="mb-4">
              Lors de votre navigation sur notre site, nous collectons automatiquement certaines informations :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Données de navigation :</strong> Pages visitées, durée de visite, liens cliqués</li>
              <li><strong>Données techniques :</strong> Adresse IP, type de navigateur, système d'exploitation</li>
              <li><strong>Données de provenance :</strong> Site web ou moteur de recherche d'où vous venez</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary mb-3 mt-6">3.2 Données que vous nous fournissez</h3>
            <p className="mb-4">Nous collectons les informations que vous nous transmettez volontairement :</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Formulaire de contact :</strong> Nom, email, message</li>
              <li><strong>Newsletter :</strong> Adresse email</li>
              <li><strong>Commentaires :</strong> Nom, email (si applicable)</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary mb-3 mt-6">3.3 Cookies</h3>
            <p className="mb-4">
              Notre site utilise des cookies pour améliorer votre expérience. Voir la section "Cookies" ci-dessous pour plus de détails.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">4. Utilisation des données</h2>
            <p className="mb-4">Nous utilisons vos données pour :</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Améliorer notre site :</strong> Analyser l'utilisation pour améliorer le contenu et l'expérience utilisateur</li>
              <li><strong>Communiquer avec vous :</strong> Répondre à vos questions via le formulaire de contact</li>
              <li><strong>Newsletter :</strong> Vous envoyer nos contenus si vous êtes inscrit (avec possibilité de désabonnement à tout moment)</li>
              <li><strong>Statistiques :</strong> Comprendre comment notre site est utilisé (via Plausible Analytics)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">5. Partage des données</h2>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
              <p className="mb-4">
                <strong>Nous ne vendons jamais vos données personnelles à des tiers.</strong>
              </p>
              <p className="mb-4">
                Vos données peuvent être partagées uniquement avec :
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Hébergeur :</strong> Vercel (pour l'hébergement du site)</li>
                <li><strong>Analytics :</strong> Plausible Analytics (outil respectueux de la vie privée, sans cookies)</li>
                <li><strong>Newsletter :</strong> [Service de newsletter si applicable - ex: Mailchimp]</li>
              </ul>
              <p>
                Ces prestataires s'engagent à respecter la confidentialité de vos données conformément au RGPD.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">6. Cookies et technologies similaires</h2>

            <h3 className="text-xl font-semibold text-primary mb-3 mt-6">6.1 Qu'est-ce qu'un cookie ?</h3>
            <p className="mb-4">
              Un cookie est un petit fichier texte déposé sur votre ordinateur lors de la visite d'un site web.
            </p>

            <h3 className="text-xl font-semibold text-primary mb-3 mt-6">6.2 Cookies utilisés sur notre site</h3>
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full bg-white border">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">Type</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">Description</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">Durée</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-6 py-4 text-sm">Essentiels</td>
                    <td className="px-6 py-4 text-sm">Nécessaires au fonctionnement du site</td>
                    <td className="px-6 py-4 text-sm">Session</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4 text-sm">Analytics (Plausible)</td>
                    <td className="px-6 py-4 text-sm">Statistiques anonymes, sans cookies</td>
                    <td className="px-6 py-4 text-sm">-</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-primary mb-3 mt-6">6.3 Plausible Analytics : Respectueux de la vie privée</h3>
            <div className="bg-green-50 border-l-4 border-green-500 p-6">
              <p className="mb-4">
                <strong>Pourquoi Plausible ?</strong>
              </p>
              <p className="mb-4">
                Nous utilisons Plausible Analytics, une solution respectueuse de la vie privée qui :
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>✅ Ne collecte aucune donnée personnelle</li>
                <li>✅ N'utilise pas de cookies</li>
                <li>✅ Ne suit pas les utilisateurs à travers les sites</li>
                <li>✅ Est conforme RGPD par défaut</li>
                <li>✅ Données hébergées en Europe</li>
              </ul>
              <p>
                Grâce à Plausible, nous comprenons l'utilisation de notre site sans compromettre votre vie privée.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-primary mb-3 mt-6">6.4 Gérer les cookies</h3>
            <p className="mb-4">
              Vous pouvez contrôler et supprimer les cookies via les paramètres de votre navigateur :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Chrome :</strong> Paramètres → Confidentialité et sécurité → Cookies</li>
              <li><strong>Firefox :</strong> Options → Vie privée et sécurité → Cookies</li>
              <li><strong>Safari :</strong> Préférences → Confidentialité</li>
              <li><strong>Edge :</strong> Paramètres → Confidentialité, recherche et services</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">7. Durée de conservation</h2>
            <p className="mb-4">Nous conservons vos données pour les durées suivantes :</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Données de navigation :</strong> 24 mois maximum</li>
              <li><strong>Formulaire de contact :</strong> 3 ans après le dernier contact</li>
              <li><strong>Newsletter :</strong> Jusqu'à votre désinscription</li>
            </ul>
            <p>
              Au-delà de ces durées, vos données sont supprimées ou anonymisées.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">8. Sécurité des données</h2>
            <p className="mb-4">
              Nous mettons en œuvre des mesures techniques et organisationnelles pour protéger vos données :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Hébergement sécurisé (HTTPS)</li>
              <li>Accès restreint aux données</li>
              <li>Sauvegardes régulières</li>
              <li>Mises à jour de sécurité</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">9. Vos droits (RGPD)</h2>
            <p className="mb-4">
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">✓ Droit d'accès</h4>
                <p className="text-sm">Obtenir une copie de vos données</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">✓ Droit de rectification</h4>
                <p className="text-sm">Corriger des données inexactes</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">✓ Droit à l'effacement</h4>
                <p className="text-sm">Supprimer vos données ("droit à l'oubli")</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">✓ Droit à la limitation</h4>
                <p className="text-sm">Limiter le traitement de vos données</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">✓ Droit à la portabilité</h4>
                <p className="text-sm">Recevoir vos données dans un format structuré</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">✓ Droit d'opposition</h4>
                <p className="text-sm">S'opposer au traitement de vos données</p>
              </div>
            </div>

            <p className="mb-4">
              <strong>Comment exercer vos droits ?</strong>
            </p>
            <p>
              Contactez-nous à :{' '}
              <a href="mailto:contact@boussole-finance.fr" className="text-secondary hover:underline font-semibold">
                contact@boussole-finance.fr
              </a>
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Nous répondrons à votre demande dans un délai maximum d'un mois.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">10. Droit de réclamation</h2>
            <p className="mb-4">
              Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL :
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-2"><strong>CNIL</strong> (Commission Nationale de l'Informatique et des Libertés)</p>
              <p className="mb-2">3 Place de Fontenoy - TSA 80715</p>
              <p className="mb-2">75334 PARIS CEDEX 07</p>
              <p className="mb-2">Tél : 01 53 73 22 22</p>
              <p><a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">www.cnil.fr</a></p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">11. Modifications de cette politique</h2>
            <p>
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec une date de mise à jour.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">12. Contact</h2>
            <p>
              Pour toute question concernant cette politique de confidentialité ou vos données personnelles :{' '}
              <a href="mailto:contact@boussole-finance.fr" className="text-secondary hover:underline font-semibold">
                contact@boussole-finance.fr
              </a>
            </p>
          </section>

          <div className="text-sm text-gray-500 mt-12 pt-6 border-t">
            <p>Dernière mise à jour : Janvier 2026</p>
          </div>

        </div>
      </div>
    </div>
  );
}
