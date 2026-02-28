import type { Metadata } from "next";
import { siteConfig, getCanonicalUrl, getOgImageUrl } from "@/lib/site";

const contactTitle = "Contact – Baba Khan";
const contactDescription =
  "Contactez Baba Khan : support WhatsApp, email, formulaire. Questions commande, livraison Marrakech. Réponse rapide.";

export const metadata: Metadata = {
  title: contactTitle,
  description: contactDescription,
  alternates: { canonical: getCanonicalUrl("/contact") },
  openGraph: {
    title: contactTitle,
    description: contactDescription,
    url: getCanonicalUrl("/contact"),
    siteName: siteConfig.name,
    images: [{ url: getOgImageUrl(), width: 1200, height: 630, alt: "Contact Baba Khan" }],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: contactTitle,
    description: contactDescription,
  },
};

const faqsForSchema = [
  {
    question: "Quel est le délai de livraison ?",
    answer:
      "Vos commandes sont livrées dans un délai de 24 heures après confirmation. Vous pouvez suivre l'état de votre livraison directement depuis l'application.",
  },
  {
    question: "Y a-t-il des frais de livraison ?",
    answer:
      "Des frais de livraison s'appliquent selon votre commande. La livraison est gratuite si votre panier dépasse un montant minimum ou si une remise est appliquée.",
  },
  {
    question: "Comment payer ma commande ?",
    answer:
      "Baba Khan fonctionne avec paiement à la livraison. Aucun paiement en ligne n'est requis pour passer une commande.",
  },
  {
    question: "Comment annuler une commande ?",
    answer:
      "Contactez-nous via WhatsApp ou email dès que possible. L'annulation est possible avant que la commande ne soit prise en charge par un livreur.",
  },
  {
    question: "L'application est-elle disponible sur iOS et Android ?",
    answer:
      "Oui, l'application Baba Khan est disponible sur l'App Store (iOS) et le Google Play Store (Android).",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqsForSchema.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
