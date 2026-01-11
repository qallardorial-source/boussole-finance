import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation | Boussole Finance",
  description: "Conditions Générales d'Utilisation du site Boussole Finance",
};

export default function CGUPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Conditions Générales d'Utilisation
          </h1>
          <p className="text-xl text-white/90 mt-4">
            Conditions d'utilisation du site Boussole Finance
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto prose prose-lg">

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">1. Objet</h2>
            <p className="mb-4">
              Les présentes Conditions Générales d'Utilisation (CGU) ont pour objet de définir les modalités et conditions d'utilisation du site{' '}
              <strong>Boussole Finance</strong> ainsi que les droits et obligations des utilisateurs.
            </p>
            <p>
              L'utilisation du site implique l'acceptation pleine et entière des présentes CGU.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">2. Accès au site</h2>
            <p className="mb-4">
              Le site Boussole Finance est accessible gratuitement à tout utilisateur disposant d'un accès à Internet.
            </p>
            <p className="mb-4">
              Tous les frais nécessaires pour accéder au service (matériel informatique, connexion Internet, etc.) sont à la charge de l'utilisateur.
            </p>
            <p>
              L'éditeur se réserve le droit de modifier, suspendre ou interrompre l'accès au site à tout moment, sans préavis et sans justification.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">3. Nature du contenu</h2>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
              <h3 className="text-xl font-semibold text-yellow-800 mb-3">⚠️ Important - Contenu informatif uniquement</h3>
              <p className="mb-4">
                <strong>Boussole Finance est un site d'information à vocation éducative.</strong>
              </p>
              <p className="mb-4">
                Le contenu publié sur ce site :
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Est fourni à titre purement informatif</li>
                <li>Ne constitue pas un conseil en investissement personnalisé</li>
                <li>Ne constitue pas une recommandation d'achat ou de vente</li>
                <li>Ne remplace pas les conseils d'un professionnel qualifié</li>
              </ul>
            </div>

            <p className="mb-4">
              Les informations présentées sont de nature générale et ne tiennent pas compte de votre situation personnelle (objectifs, horizon de placement, tolérance au risque, situation fiscale).
            </p>
            <p>
              <strong>Pour des conseils personnalisés, consultez un professionnel :</strong> conseiller en investissements financiers (CIF), conseiller en gestion de patrimoine (CGP), expert-comptable, notaire, etc.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">4. Avertissements sur les investissements</h2>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
              <h3 className="text-xl font-semibold text-red-800 mb-3">🚨 Risques d'investissement</h3>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Tout investissement comporte un risque de perte en capital</strong></li>
                <li>Les performances passées ne préjugent pas des performances futures</li>
                <li>La valeur des investissements peut fluctuer à la hausse comme à la baisse</li>
                <li>Le capital investi n'est pas garanti (sauf produits spécifiques mentionnés)</li>
              </ul>
            </div>

            <p className="mb-4">
              Avant d'investir, vous devez :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Comprendre les caractéristiques et risques du produit</li>
              <li>Disposer d'une épargne de précaution</li>
              <li>Investir uniquement l'argent dont vous n'avez pas besoin à court terme</li>
              <li>Diversifier vos placements</li>
              <li>Consulter un professionnel si nécessaire</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">5. Exactitude des informations</h2>
            <p className="mb-4">
              Nous nous efforçons de fournir des informations exactes et à jour. Cependant :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Les informations peuvent contenir des erreurs ou inexactitudes</li>
              <li>La législation fiscale et financière évolue régulièrement</li>
              <li>Les taux, plafonds et conditions mentionnés peuvent changer</li>
            </ul>
            <p>
              L'utilisateur est invité à vérifier les informations auprès de sources officielles et à consulter les sites des organismes concernés.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">6. Liens d'affiliation</h2>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-6">
              <h3 className="text-xl font-semibold text-orange-800 mb-3">💼 Transparence sur les liens d'affiliation</h3>
              <p className="mb-4">
                Boussole Finance utilise des liens d'affiliation. Cela signifie que :
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Nous pouvons recevoir une commission si vous souscrivez via nos liens</li>
                <li>Cela ne vous coûte rien de plus</li>
                <li>Ces commissions financent la création de contenu gratuit</li>
                <li>Notre objectif reste de fournir des informations objectives</li>
              </ul>
            </div>

            <p className="mb-4">
              Les liens d'affiliation sont clairement identifiés sur le site avec les mentions :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>"Lien affilié"</li>
              <li>"Lien partenaire"</li>
              <li>"Nous pouvons recevoir une commission"</li>
            </ul>
            <p>
              Vous êtes libre de souscrire directement auprès des organismes sans passer par nos liens.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">7. Propriété intellectuelle</h2>
            <p className="mb-4">
              L'ensemble du contenu du site (textes, images, graphiques, logo, icônes, etc.) est la propriété exclusive de Boussole Finance, sauf mention contraire.
            </p>
            <p className="mb-4">
              <strong>Toute reproduction, distribution, modification ou utilisation du contenu sans autorisation expresse est interdite.</strong>
            </p>
            <p className="mb-4">
              Utilisations autorisées :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Citation courte avec mention de la source et lien vers l'article</li>
              <li>Partage sur les réseaux sociaux via les boutons de partage</li>
            </ul>
            <p>
              Pour toute autre utilisation, contactez-nous : contact@boussole-finance.fr
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">8. Liens externes</h2>
            <p className="mb-4">
              Le site Boussole Finance peut contenir des liens vers des sites tiers. Ces liens sont fournis uniquement pour votre commodité.
            </p>
            <p className="mb-4">
              Nous n'avons aucun contrôle sur le contenu de ces sites et ne pouvons être tenus responsables de :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Leur contenu</li>
              <li>Leur disponibilité</li>
              <li>Leurs pratiques de confidentialité</li>
              <li>Les dommages résultant de leur utilisation</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">9. Responsabilité</h2>

            <h3 className="text-xl font-semibold text-primary mb-3 mt-6">9.1 Limitation de responsabilité</h3>
            <p className="mb-4">
              L'utilisateur reconnaît utiliser le site et les informations qu'il contient sous sa seule et entière responsabilité.
            </p>
            <p className="mb-4">
              Boussole Finance ne pourra être tenu responsable :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Des décisions d'investissement prises sur la base des informations du site</li>
              <li>Des pertes financières résultant de l'utilisation du contenu</li>
              <li>De l'inexactitude, incomplet ou obsolescence des informations</li>
              <li>Des dommages directs ou indirects liés à l'utilisation du site</li>
              <li>De l'indisponibilité temporaire ou définitive du site</li>
              <li>Des virus ou autres éléments nuisibles</li>
            </ul>

            <h3 className="text-xl font-semibold text-primary mb-3 mt-6">9.2 Force majeure</h3>
            <p>
              Boussole Finance ne pourra être tenu responsable en cas de force majeure ou d'événements hors de son contrôle.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">10. Obligations de l'utilisateur</h2>
            <p className="mb-4">L'utilisateur s'engage à :</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Utiliser le site de manière loyale et conforme à sa destination</li>
              <li>Ne pas tenter de nuire au fonctionnement du site</li>
              <li>Ne pas extraire ou réutiliser le contenu sans autorisation</li>
              <li>Respecter les droits de propriété intellectuelle</li>
              <li>Fournir des informations exactes (formulaires)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">11. Données personnelles</h2>
            <p>
              Pour toute information sur la collecte et le traitement de vos données personnelles, consultez notre{' '}
              <a href="/politique-confidentialite" className="text-secondary hover:underline font-semibold">
                Politique de confidentialité
              </a>.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">12. Modifications des CGU</h2>
            <p className="mb-4">
              Boussole Finance se réserve le droit de modifier les présentes CGU à tout moment.
            </p>
            <p>
              Les CGU applicables sont celles en vigueur au moment de votre utilisation du site. Il vous appartient de consulter régulièrement les CGU.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">13. Droit applicable et juridiction</h2>
            <p className="mb-4">
              Les présentes CGU sont régies par le droit français.
            </p>
            <p>
              En cas de litige et à défaut de résolution amiable, les tribunaux français seront seuls compétents.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">14. Contact</h2>
            <p>
              Pour toute question concernant ces CGU :{' '}
              <a href="mailto:contact@boussole-finance.fr" className="text-secondary hover:underline font-semibold">
                contact@boussole-finance.fr
              </a>
            </p>
          </section>

          <div className="bg-gray-100 p-6 rounded-lg mt-12">
            <p className="mb-4">
              <strong>En résumé :</strong>
            </p>
            <ul className="list-disc pl-6 text-sm">
              <li>Boussole Finance est un site d'information éducative, pas un service de conseil financier</li>
              <li>Les informations sont fournies à titre indicatif et général</li>
              <li>Tout investissement comporte des risques</li>
              <li>Consultez un professionnel pour des conseils personnalisés</li>
              <li>Nous utilisons des liens d'affiliation (clairement indiqués)</li>
              <li>Vous utilisez le site sous votre propre responsabilité</li>
            </ul>
          </div>

          <div className="text-sm text-gray-500 mt-12 pt-6 border-t">
            <p>Dernière mise à jour : Janvier 2026</p>
          </div>

        </div>
      </div>
    </div>
  );
}
