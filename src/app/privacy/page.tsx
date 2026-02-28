import Link from "next/link";
import PageHero from "@/components/PageHero";
import { siteConfig, getCanonicalUrl, getOgImageUrl, getPageKeywords } from "@/lib/site";

const toc = [
  { id: "intro", label: "Introduction" },
  { id: "collecte", label: "Données collectées" },
  { id: "utilisation", label: "Utilisation" },
  { id: "partage", label: "Partage des données" },
  { id: "securite", label: "Sécurité" },
  { id: "droits", label: "Vos droits" },
  { id: "cookies", label: "Cookies" },
  { id: "conditions", label: "Conditions d'utilisation" },
  { id: "contact-privacy", label: "Nous contacter" },
];

export const metadata = {
  title: "Politique de Confidentialité – Baba Khan",
  description:
    "Politique de confidentialité et protection des données personnelles de Baba Khan. RGPD, cookies, droits des utilisateurs.",
  keywords: getPageKeywords(["confidentialité", "RGPD", "mentions légales", "protection des données", "cookies"]),
  alternates: { canonical: getCanonicalUrl("/privacy") },
  openGraph: {
    title: "Politique de Confidentialité | Baba Khan",
    description:
      "Politique de confidentialité et protection des données personnelles.",
    url: getCanonicalUrl("/privacy"),
    siteName: siteConfig.name,
    images: [{ url: getOgImageUrl(), width: 1200, height: 630, alt: "Baba Khan Confidentialité" }],
    locale: "fr_FR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        badge="Légal"
        title="Politique de Confidentialité"
        subtitle="Dernière mise à jour : 1er janvier 2025"
      />

      <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-16 px-8 py-16 lg:grid-cols-[220px_1fr] lg:items-start">
        <aside className="sticky top-[90px] rounded-2xl border border-[rgba(212,98,26,0.1)] bg-white p-6 lg:block" aria-label="Sommaire">
          <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-[var(--orange)]">
            Sommaire
          </h4>
          <ul className="list-none">
            {toc.map(({ id, label }) => (
              <li key={id} className="mb-2.5">
                <Link
                  href={`#${id}`}
                  title={`${label} – Politique de confidentialité Baba Khan`}
                  className="block border-l-2 border-transparent py-1 pl-3 text-[var(--text-light)] text-[0.85rem] no-underline transition-colors hover:border-[var(--orange)] hover:text-[var(--orange)]"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        <div className="min-w-0">
          <section
            id="intro"
            className="mb-12 scroll-mt-[90px]"
          >
            <h2 className="font-serif text-2xl font-black text-[var(--brown)] mb-4 border-b-2 border-[rgba(212,98,26,0.12)] pb-3">
              1. Introduction
            </h2>
            <p className="text-[var(--text-light)] mb-3 text-[0.95rem] leading-relaxed">
              Baba Khan (&quot;nous&quot;, &quot;notre&quot;) s&apos;engage à protéger la vie privée de ses utilisateurs. Cette politique de confidentialité décrit comment nous collectons, utilisons et protégeons vos informations personnelles lorsque vous utilisez notre application mobile Baba Khan – Épicerie livrée.
            </p>
            <div className="my-4 rounded-r-xl border-l-4 border-[var(--orange)] bg-[rgba(212,98,26,0.06)] p-5">
              <p className="text-[var(--brown)] text-[0.9rem] m-0">
                En utilisant notre application, vous acceptez les pratiques décrites dans cette politique. Si vous n&apos;êtes pas d&apos;accord, veuillez ne pas utiliser nos services.
              </p>
            </div>
          </section>

          <section id="collecte" className="mb-12 scroll-mt-[90px]">
            <h2 className="font-serif text-2xl font-black text-[var(--brown)] mb-4 border-b-2 border-[rgba(212,98,26,0.12)] pb-3">
              2. Données collectées
            </h2>
            <h3 className="mt-5 mb-2 text-base font-bold text-[var(--brown)]">
              Informations que vous nous fournissez
            </h3>
            <ul className="mb-3 list-disc pl-6 text-[var(--text-light)] text-[0.95rem] leading-relaxed">
              <li>Nom et prénom</li>
              <li>Numéro de téléphone (utilisé pour l&apos;authentification OTP)</li>
              <li>Adresse email (optionnelle)</li>
              <li>Adresse de livraison et localisation</li>
              <li>Historique des commandes</li>
            </ul>
            <h3 className="mt-5 mb-2 text-base font-bold text-[var(--brown)]">
              Informations collectées automatiquement
            </h3>
            <ul className="mb-3 list-disc pl-6 text-[var(--text-light)] text-[0.95rem] leading-relaxed">
              <li>Données de navigation dans l&apos;application</li>
              <li>Informations sur l&apos;appareil (modèle, système d&apos;exploitation)</li>
              <li>Adresse IP et données de connexion</li>
              <li>Token de notification push (Firebase)</li>
            </ul>
          </section>

          <section id="utilisation" className="mb-12 scroll-mt-[90px]">
            <h2 className="font-serif text-2xl font-black text-[var(--brown)] mb-4 border-b-2 border-[rgba(212,98,26,0.12)] pb-3">
              3. Utilisation des données
            </h2>
            <p className="text-[var(--text-light)] mb-3 text-[0.95rem] leading-relaxed">
              Nous utilisons vos données personnelles uniquement pour :
            </p>
            <ul className="mb-3 list-disc pl-6 text-[var(--text-light)] text-[0.95rem] leading-relaxed">
              <li>Créer et gérer votre compte utilisateur</li>
              <li>Traiter et livrer vos commandes</li>
              <li>Vous envoyer des notifications push sur l&apos;état de vos commandes</li>
              <li>Vous informer des promotions et offres spéciales</li>
              <li>Améliorer nos services et l&apos;expérience utilisateur</li>
              <li>Répondre à vos demandes de support</li>
            </ul>
            <p className="text-[var(--text-light)] text-[0.95rem] leading-relaxed">
              Nous ne vendons, n&apos;échangeons ni ne transférons vos données personnelles à des tiers à des fins commerciales.
            </p>
          </section>

          <section id="partage" className="mb-12 scroll-mt-[90px]">
            <h2 className="font-serif text-2xl font-black text-[var(--brown)] mb-4 border-b-2 border-[rgba(212,98,26,0.12)] pb-3">
              4. Partage des données
            </h2>
            <p className="text-[var(--text-light)] mb-3 text-[0.95rem] leading-relaxed">
              Vos données peuvent être partagées avec :
            </p>
            <h3 className="mt-4 mb-2 text-base font-bold text-[var(--brown)]">
              Nos livreurs
            </h3>
            <p className="text-[var(--text-light)] mb-3 text-[0.95rem] leading-relaxed">
              Votre nom, numéro de téléphone et adresse de livraison sont transmis au livreur assigné à votre commande, uniquement pour assurer la livraison.
            </p>
            <h3 className="mt-4 mb-2 text-base font-bold text-[var(--brown)]">
              Prestataires techniques
            </h3>
            <ul className="mb-3 list-disc pl-6 text-[var(--text-light)] text-[0.95rem] leading-relaxed">
              <li><strong>Twilio / Firebase</strong> : pour l&apos;envoi des OTP (authentification)</li>
              <li><strong>Firebase Cloud Messaging</strong> : pour les notifications push</li>
              <li><strong>Google Maps API</strong> : pour la géolocalisation et la livraison</li>
            </ul>
            <p className="text-[var(--text-light)] text-[0.95rem] leading-relaxed">
              Ces prestataires sont soumis à leurs propres politiques de confidentialité et traitent vos données uniquement pour fournir leurs services.
            </p>
          </section>

          <section id="securite" className="mb-12 scroll-mt-[90px]">
            <h2 className="font-serif text-2xl font-black text-[var(--brown)] mb-4 border-b-2 border-[rgba(212,98,26,0.12)] pb-3">
              5. Sécurité des données
            </h2>
            <p className="text-[var(--text-light)] mb-3 text-[0.95rem] leading-relaxed">
              Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger vos données :
            </p>
            <ul className="mb-3 list-disc pl-6 text-[var(--text-light)] text-[0.95rem] leading-relaxed">
              <li>Chiffrement des données en transit (HTTPS/TLS)</li>
              <li>Authentification sécurisée par OTP</li>
              <li>Accès limité aux données par notre équipe</li>
              <li>Bases de données sécurisées et sauvegardées</li>
            </ul>
            <div className="my-4 rounded-r-xl border-l-4 border-[var(--orange)] bg-[rgba(212,98,26,0.06)] p-5">
              <p className="text-[var(--brown)] text-[0.9rem] m-0">
                Bien que nous prenions toutes les précautions nécessaires, aucun système n&apos;est infaillible. En cas de violation de données, nous vous informerons dans les meilleurs délais.
              </p>
            </div>
          </section>

          <section id="droits" className="mb-12 scroll-mt-[90px]">
            <h2 className="font-serif text-2xl font-black text-[var(--brown)] mb-4 border-b-2 border-[rgba(212,98,26,0.12)] pb-3">
              6. Vos droits
            </h2>
            <p className="text-[var(--text-light)] mb-3 text-[0.95rem] leading-relaxed">
              Conformément aux lois en vigueur, vous disposez des droits suivants :
            </p>
            <ul className="mb-3 list-disc pl-6 text-[var(--text-light)] text-[0.95rem] leading-relaxed">
              <li><strong>Accès</strong> : consulter les données que nous détenons sur vous</li>
              <li><strong>Rectification</strong> : corriger des données inexactes</li>
              <li><strong>Suppression</strong> : demander la suppression de votre compte et données</li>
              <li><strong>Opposition</strong> : vous opposer au traitement de vos données</li>
              <li><strong>Portabilité</strong> : recevoir vos données dans un format lisible</li>
            </ul>
            <p className="text-[var(--text-light)] text-[0.95rem] leading-relaxed">
              Pour exercer ces droits, contactez-nous à{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                title="Email Baba Khan – Exercer vos droits"
                className="text-[var(--orange)] no-underline"
              >
                {siteConfig.email}
              </a>
              .
            </p>
          </section>

          <section id="cookies" className="mb-12 scroll-mt-[90px]">
            <h2 className="font-serif text-2xl font-black text-[var(--brown)] mb-4 border-b-2 border-[rgba(212,98,26,0.12)] pb-3">
              7. Cookies
            </h2>
            <p className="text-[var(--text-light)] mb-3 text-[0.95rem] leading-relaxed">
              Notre application mobile n&apos;utilise pas de cookies au sens traditionnel du terme. Cependant, nous utilisons des technologies similaires (tokens de session, identifiants locaux) pour :
            </p>
            <ul className="mb-3 list-disc pl-6 text-[var(--text-light)] text-[0.95rem] leading-relaxed">
              <li>Maintenir votre session connectée</li>
              <li>Mémoriser vos préférences (langue, etc.)</li>
              <li>Analyser l&apos;utilisation de l&apos;application (données anonymisées)</li>
            </ul>
          </section>

          <section id="conditions" className="mb-12 scroll-mt-[90px]">
            <h2 className="font-serif text-2xl font-black text-[var(--brown)] mb-4 border-b-2 border-[rgba(212,98,26,0.12)] pb-3">
              8. Conditions d&apos;utilisation
            </h2>
            <p className="text-[var(--text-light)] mb-3 text-[0.95rem] leading-relaxed">
              En utilisant l&apos;application Baba Khan, vous acceptez de :
            </p>
            <ul className="mb-3 list-disc pl-6 text-[var(--text-light)] text-[0.95rem] leading-relaxed">
              <li>Fournir des informations exactes et à jour</li>
              <li>Ne pas utiliser l&apos;application à des fins illégales</li>
              <li>Ne pas tenter de compromettre la sécurité de l&apos;application</li>
              <li>Respecter les droits des autres utilisateurs</li>
            </ul>
            <p className="text-[var(--text-light)] mb-3 text-[0.95rem] leading-relaxed">
              Nous nous réservons le droit de suspendre ou supprimer tout compte en cas de violation de ces conditions.
            </p>
            <h3 className="mt-4 mb-2 text-base font-bold text-[var(--brown)]">
              Limitation de responsabilité
            </h3>
            <p className="text-[var(--text-light)] text-[0.95rem] leading-relaxed">
              Baba Khan ne peut être tenu responsable des retards de livraison liés à des circonstances exceptionnelles (conditions météo, événements imprévus, etc.). Les délais indiqués sont donnés à titre indicatif.
            </p>
          </section>

          <section id="contact-privacy" className="mb-12 scroll-mt-[90px]">
            <h2 className="font-serif text-2xl font-black text-[var(--brown)] mb-4 border-b-2 border-[rgba(212,98,26,0.12)] pb-3">
              9. Modifications de cette politique
            </h2>
            <p className="text-[var(--text-light)] text-[0.95rem] leading-relaxed">
              Nous nous réservons le droit de modifier cette politique à tout moment. En cas de modification substantielle, nous vous informerons via l&apos;application ou par email. La date de dernière mise à jour est indiquée en haut de cette page.
            </p>
          </section>

          <div className="mt-12 rounded-2xl bg-[var(--brown)] p-8 text-center text-white">
            <h3 className="font-serif text-xl font-bold mb-3">
              Une question sur vos données ?
            </h3>
            <p className="text-white/80 text-[0.9rem] mb-4">
              Notre équipe est disponible pour toute demande relative à votre vie privée.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              title="Email Baba Khan – Données personnelles"
              className="font-semibold text-[var(--orange-light)] no-underline"
            >
              {siteConfig.email}
            </a>
            {" · "}
            <Link
              href="/contact"
              title="Formulaire de contact – Baba Khan"
              className="font-semibold text-[var(--orange-light)] no-underline"
            >
              Formulaire de contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
