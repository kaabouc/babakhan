"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import { siteConfig } from "@/lib/site";

const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}`;

const faqs = [
  {
    q: "Quel est le délai de livraison ?",
    a: "Vos commandes sont livrées dans un délai de 24 heures après confirmation. Vous pouvez suivre l'état de votre livraison directement depuis l'application.",
  },
  {
    q: "Y a-t-il des frais de livraison ?",
    a: "Des frais de livraison s'appliquent selon votre commande. La livraison est gratuite si votre panier dépasse un montant minimum ou si une remise est appliquée.",
  },
  {
    q: "Comment payer ma commande ?",
    a: "Baba Khan fonctionne avec paiement à la livraison. Aucun paiement en ligne n'est requis pour passer une commande.",
  },
  {
    q: "Comment annuler une commande ?",
    a: "Contactez-nous via WhatsApp ou email dès que possible. L'annulation est possible avant que la commande ne soit prise en charge par un livreur.",
  },
  {
    q: "L'application est-elle disponible sur iOS et Android ?",
    a: "Oui, l'application Baba Khan est disponible sur l'App Store (iOS) et le Google Play Store (Android).",
  },
];

const SUJET_OPTIONS = [
  "",
  "Question sur ma commande",
  "Problème de livraison",
  "Produit manquant ou endommagé",
  "Remboursement",
  "Autre",
] as const;

export default function ContactPage() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({
    prenom: "",
    nom: "",
    email: "",
    sujet: "",
    message: "",
  });

  return (
    <>
      <PageHero
        badge="Contactez-nous"
        title={
          <>
            Nous sommes <span className="text-[var(--orange)]">là pour vous</span>
          </>
        }
        subtitle="Une question sur votre commande, un problème ? Notre équipe répond rapidement via WhatsApp ou email."
      />

      <section className="px-8 py-16">
        <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-16 lg:grid-cols-[1fr_1.4fr]">
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="font-serif text-3xl font-black text-[var(--brown)] mb-2">
                Restons en contact
              </h2>
              <p className="text-[var(--text-light)] mb-4 text-[0.95rem] leading-relaxed">
                Choisissez le canal qui vous convient le mieux. Nous répondons
                généralement dans l&apos;heure.
              </p>
            </div>
            {[
              {
                icon: "💬",
                title: "WhatsApp Support",
                text: "Disponible 7j/7 pour vos questions et commandes.",
                linkLabel: "Ouvrir WhatsApp →",
                linkHref: whatsappUrl,
              },
              {
                icon: "📧",
                title: "Email",
                text: "Pour les demandes formelles ou réclamations.",
                linkLabel: siteConfig.email,
                linkHref: `mailto:${siteConfig.email}`,
              },
              {
                icon: "📞",
                title: "Téléphone",
                text: "Appelez-nous pour toute question.",
                linkLabel: siteConfig.phone,
                linkHref: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
              },
              {
                icon: "📍",
                title: "Localisation",
                text: "Marrakech, Maroc — Livraison disponible dans toute la ville",
              },
              {
                icon: "🕐",
                title: "Horaires",
                text: "Lundi – Samedi : 8h00 – 20h00 — Dimanche : 9h00 – 17h00",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="flex items-start gap-4 rounded-2xl border border-[rgba(212,98,26,0.1)] bg-white p-6 transition-shadow hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[rgba(212,98,26,0.1)] text-2xl">
                  {card.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--brown)] mb-1 text-[0.95rem]">
                    {card.title}
                  </h4>
                  <p className="text-[var(--text-light)] text-[0.88rem] leading-relaxed">
                    {card.text}
                    {"linkHref" in card && card.linkHref && (
                      <>
                        <br />
                        <a
                          href={card.linkHref}
                          target={card.linkHref.startsWith("http") ? "_blank" : undefined}
                          rel={card.linkHref.startsWith("http") ? "noopener noreferrer" : undefined}
                          title={
                            card.linkHref.startsWith("http")
                              ? "Contacter Baba Khan sur WhatsApp (nouvel onglet)"
                              : card.linkHref.startsWith("mailto:")
                              ? "Envoyer un email à Baba Khan"
                              : "Appeler Baba Khan"
                          }
                          className="font-medium text-[var(--orange)] no-underline"
                        >
                          {card.linkLabel}
                        </a>
                      </>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-[rgba(212,98,26,0.1)] bg-white p-10 shadow-lg">
            <h3 className="font-serif text-2xl font-black text-[var(--brown)] mb-7">
              Envoyez-nous un message
            </h3>
            <form
              className="space-y-5"
              onSubmit={async (e) => {
                e.preventDefault();
                setError(null);
                if (!form.prenom.trim() || !form.nom.trim() || !form.email.trim() || !form.sujet.trim() || !form.message.trim()) {
                  setError("Veuillez remplir tous les champs.");
                  return;
                }
                setSending(true);
                try {
                  const res = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(form),
                  });
                  const data = await res.json().catch(() => ({}));
                  if (!res.ok) {
                    setError(data.error ?? "Erreur lors de l'envoi. Réessayez.");
                    return;
                  }
                  setSuccess(true);
                  setForm({ prenom: "", nom: "", email: "", sujet: "", message: "" });
                  setTimeout(() => setSuccess(false), 5000);
                } catch {
                  setError("Impossible d'envoyer le message. Vérifiez votre connexion.");
                } finally {
                  setSending(false);
                }
              }}
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="prenom"
                    className="mb-1.5 block text-sm font-semibold text-[var(--brown)]"
                  >
                    Prénom
                  </label>
                  <input
                    id="prenom"
                    type="text"
                    placeholder="Votre prénom"
                    value={form.prenom}
                    onChange={(e) => setForm((f) => ({ ...f, prenom: e.target.value }))}
                    className="w-full rounded-lg border border-[rgba(212,98,26,0.2)] bg-[var(--cream)] px-4 py-3 text-[var(--text)] outline-none transition-[border-color,box-shadow] focus:border-[var(--orange)] focus:ring-2 focus:ring-[rgba(212,98,26,0.1)]"
                    disabled={sending}
                  />
                </div>
                <div>
                  <label
                    htmlFor="nom"
                    className="mb-1.5 block text-sm font-semibold text-[var(--brown)]"
                  >
                    Nom
                  </label>
                  <input
                    id="nom"
                    type="text"
                    placeholder="Votre nom"
                    value={form.nom}
                    onChange={(e) => setForm((f) => ({ ...f, nom: e.target.value }))}
                    className="w-full rounded-lg border border-[rgba(212,98,26,0.2)] bg-[var(--cream)] px-4 py-3 text-[var(--text)] outline-none transition-[border-color,box-shadow] focus:border-[var(--orange)] focus:ring-2 focus:ring-[rgba(212,98,26,0.1)]"
                    disabled={sending}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-semibold text-[var(--brown)]"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="votre@email.com"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="w-full rounded-lg border border-[rgba(212,98,26,0.2)] bg-[var(--cream)] px-4 py-3 text-[var(--text)] outline-none transition-[border-color,box-shadow] focus:border-[var(--orange)] focus:ring-2 focus:ring-[rgba(212,98,26,0.1)]"
                  disabled={sending}
                />
              </div>
              <div>
                <label
                  htmlFor="sujet"
                  className="mb-1.5 block text-sm font-semibold text-[var(--brown)]"
                >
                  Sujet
                </label>
                <select
                  id="sujet"
                  value={form.sujet}
                  onChange={(e) => setForm((f) => ({ ...f, sujet: e.target.value }))}
                  className="w-full rounded-lg border border-[rgba(212,98,26,0.2)] bg-[var(--cream)] px-4 py-3 text-[var(--text)] outline-none transition-[border-color,box-shadow] focus:border-[var(--orange)] focus:ring-2 focus:ring-[rgba(212,98,26,0.1)]"
                  disabled={sending}
                >
                  {SUJET_OPTIONS.map((opt) => (
                    <option key={opt || "empty"} value={opt}>
                      {opt || "Choisir un sujet…"}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-semibold text-[var(--brown)]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Décrivez votre demande…"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="min-h-[130px] w-full resize-y rounded-lg border border-[rgba(212,98,26,0.2)] bg-[var(--cream)] px-4 py-3 text-[var(--text)] outline-none transition-[border-color,box-shadow] focus:border-[var(--orange)] focus:ring-2 focus:ring-[rgba(212,98,26,0.1)]"
                  disabled={sending}
                />
              </div>
              {error && (
                <p className="rounded-lg border border-red-200 bg-red-50 p-4 text-center text-sm font-medium text-red-700">
                  {error}
                </p>
              )}
              <button
                type="submit"
                disabled={sending}
                className="w-full rounded-full bg-[var(--orange)] py-4 text-base font-semibold text-white transition-all hover:bg-[var(--orange-dark)] hover:-translate-y-0.5 disabled:opacity-70 disabled:pointer-events-none"
              >
                {sending ? "Envoi en cours…" : "Envoyer le message ✉️"}
              </button>
              {success && (
                <p className="rounded-lg border border-green-300 bg-green-50 p-4 text-center font-medium text-green-700">
                  Message envoyé ! Nous vous répondrons sous 24h.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      <section className="bg-[var(--gray)] px-8 py-16">
        <div className="mx-auto max-w-[700px]">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-[var(--orange)] mb-2">
            FAQ
          </p>
          <h2 className="font-serif text-center text-[clamp(2rem,4vw,2.5rem)] font-black text-[var(--brown)] mb-12">
            Questions fréquentes
          </h2>
          {faqs.map((faq, i) => (
            <div
              key={faq.q}
              className="mb-4 overflow-hidden rounded-2xl border border-[rgba(212,98,26,0.1)] bg-white"
            >
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="flex w-full cursor-pointer items-center justify-between px-6 py-5 text-left font-semibold text-[var(--brown)] text-[0.95rem]"
              >
                {faq.q}
                <span
                  className={`text-xl transition-transform ${
                    openFaq === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  openFaq === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-[var(--text-light)] text-[0.9rem] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
