import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Mentions légales | Boussole Finance',
  description: 'Mentions légales du site Boussole Finance',
};

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Mentions légales
          </h1>
        </div>
      </section>

      {/* Content */}
      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto prose prose-lg">

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">1. Éditeur du site</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-2"><strong>Nom du site :</strong> Boussole Finance</p>
              <p className="mb-2"><strong>URL :</strong> https://boussole-finance.fr</p>
              <p className="mb-2"><strong>Propriétaire :</strong> Boussole Finance SARL</p>
              <p className="mb-2"><strong>Statut :</strong> Société à responsabilité limitée (SARL)</p>
              <p className="mb-2"><strong>Siège social :</strong> 15 rue de la Finance, 75002 Paris, France</p>
              <p className="mb-2"><strong>SIRET :</strong> 123 456 789 00012</p>
              <p className="mb-2"><strong>Capital social :</strong> 5 000 €</p>
              <p className="mb-2"><strong>Email :</strong> contact@boussole-finance.fr</p>
              <p className="mb-2"><strong>Téléphone :</strong> +33 (0)1 23 45 67 89</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">2. Directeur de la publication</h2>
            <p>
              Le directeur de la publication du site est <strong>Pierre Dubois</strong>, en sa qualité de gérant de la société Boussole Finance SARL.
            </p>
            <p className="mt-2">
              Email : <a href="mailto:direction@boussole-finance.fr" className="text-secondary hover:underline">direction@boussole-finance.fr</a>
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">3. Hébergement</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-2"><strong>Hébergeur :</strong> Vercel Inc.</p>
              <p className="mb-2"><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
              <p className="mb-2"><strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">https://vercel.com</a></p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">4. Propriété intellectuelle</h2>
            <p className="mb-4">
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle.
            </p>
            <p className="mb-4">
              Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
            <p>
              La reproduction de tout ou partie de ce site sur un support électronique ou autre quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">5. Liens hypertextes</h2>
            <p className="mb-4">
              Le site Boussole Finance peut contenir des liens hypertextes vers d'autres sites présents sur le réseau Internet.
            </p>
            <p className="mb-4">
              Les liens vers d'autres ressources présents sur ce site sont fournis à titre informatif et ne sauraient engager la responsabilité de Boussole Finance quant au contenu de ces sites.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">6. Liens d'affiliation</h2>
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6">
              <p className="mb-4">
                <strong>Transparence sur les liens d'affiliation :</strong>
              </p>
              <p className="mb-4">
                Certains liens présents sur Boussole Finance sont des liens d'affiliation. Cela signifie que nous pouvons recevoir une commission si vous effectuez un achat ou une souscription via ces liens, sans frais supplémentaires pour vous.
              </p>
              <p className="mb-4">
                Ces commissions nous permettent de financer la création de contenu gratuit et de maintenir le site.
              </p>
              <p>
                Les liens d'affiliation sont clairement indiqués sur le site. Notre objectif reste de vous fournir des informations objectives et de qualité, indépendamment de ces partenariats.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">7. Responsabilité</h2>
            <p className="mb-4">
              Les informations diffusées sur le site Boussole Finance sont présentées à titre purement informatif et sont de nature générale.
            </p>
            <p className="mb-4">
              <strong>Boussole Finance ne fournit pas de conseils en investissement personnalisés.</strong> Les informations présentées ne constituent pas des recommandations d'achat ou de vente.
            </p>
            <p className="mb-4">
              Malgré l'attention portée à la rédaction du contenu, Boussole Finance ne peut garantir l'exactitude, l'exhaustivité et l'actualité des informations diffusées.
            </p>
            <p>
              En conséquence, l'utilisateur reconnaît se servir de ces informations sous sa responsabilité exclusive. Pour des conseils personnalisés, consultez un professionnel (conseiller financier, expert-comptable, notaire, etc.).
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">8. Avertissement sur les investissements</h2>
            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <p className="mb-4">
                <strong>Les performances passées ne préjugent pas des performances futures.</strong>
              </p>
              <p className="mb-4">
                Tout investissement comporte des risques de perte en capital. Avant d'investir, assurez-vous de :
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Comprendre les risques associés</li>
                <li>Avoir une épargne de précaution</li>
                <li>Investir uniquement l'argent dont vous n'avez pas besoin à court terme</li>
                <li>Consulter un professionnel si nécessaire</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">9. Cookies et données personnelles</h2>
            <p>
              Pour en savoir plus sur la collecte et le traitement de vos données personnelles, consultez notre{' '}
              <a href="/politique-confidentialite" className="text-secondary hover:underline font-semibold">
                Politique de confidentialité
              </a>.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">10. Droit applicable</h2>
            <p>
              Les présentes mentions légales sont régies par le droit français. En cas de litige et à défaut d'accord amiable, le litige sera porté devant les tribunaux français conformément aux règles de compétence en vigueur.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">11. Contact</h2>
            <p>
              Pour toute question concernant ces mentions légales, vous pouvez nous contacter à l'adresse suivante :{' '}
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
