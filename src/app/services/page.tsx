import Link from "next/link";
import PageHero from "@/components/PageHero";
import { siteConfig, getCanonicalUrl, getOgImageUrl } from "@/lib/site";

const services = [
  {
    tag: "Catalogue",
    title: "Produits frais & naturels",
    text: "Découvrez une large sélection de fruits secs, huiles artisanales, épices et produits naturels du terroir marocain, soigneusement sélectionnés pour leur qualité.",
    emoji: "🌰🫒🌿",
    features: [
      "Fruits secs premium : amandes, noix, dattes, abricots…",
      "Huiles naturelles : argan, olive, nigelle",
      "Épices du Maroc et produits naturels",
      "Produits d'épicerie du quotidien",
      "Catalogue mis à jour régulièrement",
    ],
    reverse: false,
  },
  {
    tag: "Commande",
    title: "Commandez en quelques clics",
    text: "Naviguez par catégories, ajoutez vos produits au panier, validez votre commande et recevez une confirmation instantanée. Aucun paiement en ligne requis.",
    emoji: "🛒📱✅",
    features: [
      "Recherche par catégorie intuitive",
      "Panier avec calcul automatique",
      "Remises automatiques selon votre panier",
      "Livraison gratuite au-dessus d'un certain montant",
      "Facture générée automatiquement",
    ],
    reverse: true,
  },
  {
    tag: "Livraison",
    title: "Livraison rapide à domicile",
    text: "Un livreur dédié prend en charge votre commande et vous la livre en moins de 24 heures. Suivez votre livraison en temps réel depuis l'application.",
    emoji: "🚚📍⏱️",
    features: [
      "Livraison en moins de 24 heures",
      "Suivi de commande en temps réel",
      "Nom et informations du livreur communiqués",
      "Notifications push à chaque étape",
      "Statuts clairs : en attente, en cours, livré",
    ],
    reverse: false,
  },
  {
    tag: "Support",
    title: "Support client WhatsApp",
    text: "Notre équipe est disponible directement via WhatsApp pour répondre à vos questions, gérer vos réclamations ou vous accompagner dans vos commandes.",
    emoji: "💬📞🤝",
    features: [
      "Accès direct au support depuis l'app",
      "Réponse rapide via WhatsApp",
      "Notifications générales et promotions",
      "Assistance en français et en arabe",
    ],
    reverse: true,
  },
];

export const metadata = {
  title: "Services – Baba Khan",
  description:
    "Catalogue, commande, livraison et support : tout ce que Baba Khan vous offre.",
  alternates: { canonical: getCanonicalUrl("/services") },
  openGraph: {
    title: "Nos services | Baba Khan – Épicerie livrée à Marrakech",
    description:
      "Catalogue, commande, livraison et support : tout ce que Baba Khan vous offre.",
    url: getCanonicalUrl("/services"),
    siteName: siteConfig.name,
    images: [{ url: getOgImageUrl(), width: 1200, height: 630, alt: "Baba Khan Services" }],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nos services | Baba Khan",
    description:
      "Catalogue, commande, livraison et support : tout ce que Baba Khan vous offre.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        badge="Nos Services"
        title={
          <>
            Tout ce que <span className="text-[var(--orange)]">Baba Khan</span>{" "}
            vous offre
          </>
        }
        subtitle="Une plateforme complète pour commander vos produits d'épicerie et les recevoir rapidement chez vous."
      />

      <section className="px-8 py-16">
        <div className="mx-auto max-w-[1100px]">
          {services.map((s) => (
            <div
              key={s.title}
              className={`grid grid-cols-1 gap-16 border-b border-[rgba(212,98,26,0.1)] py-16 last:border-b-0 lg:grid-cols-2 lg:gap-16 lg:items-center ${
                s.reverse ? "lg:[&>.service-text]:order-2 lg:[&>.service-visual]:order-1" : ""
              }`}
            >
              <div className="service-text">
                <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--orange)]">
                  {s.tag}
                </div>
                <h2 className="font-serif text-3xl font-black text-[var(--brown)] mb-4">
                  {s.title}
                </h2>
                <p className="text-[var(--text-light)] mb-6 leading-relaxed">
                  {s.text}
                </p>
                <ul className="list-none">
                  {s.features.map((f) => (
                    <li
                      key={f}
                      className="mb-3 flex items-start gap-2 text-[var(--text)] text-[0.95rem]"
                    >
                      <span className="font-bold text-[var(--orange)] shrink-0">
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="service-visual flex min-h-[280px] items-center justify-center rounded-3xl border border-[rgba(212,98,26,0.12)] bg-gradient-to-br from-[rgba(212,98,26,0.08)] to-[rgba(212,98,26,0.02)] p-12">
                <span className="text-6xl">{s.emoji}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--orange)] px-8 py-16 text-center">
        <h2 className="font-serif text-4xl font-black text-white mb-4">
          Prêt à commander ?
        </h2>
        <p className="text-white/90 text-[1.1rem] mb-8">
          Téléchargez Baba Khan et profitez de votre première livraison.
        </p>
        <Link
          href="#telecharger"
          className="inline-block rounded-full bg-white px-10 py-3.5 text-[var(--orange)] font-bold no-underline transition-all hover:-translate-y-1 hover:shadow-lg"
        >
          Télécharger l&apos;application
        </Link>
      </section>
    </>
  );
}
