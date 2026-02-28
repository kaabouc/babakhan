import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden px-8 pb-16 pt-24">
        <div
          className="absolute -right-24 -top-24 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(212,98,26,0.12)_0%,transparent_70%)] pointer-events-none"
          aria-hidden
        />
        <div className="relative mx-auto grid w-full max-w-[1100px] grid-cols-1 items-center gap-16 md:grid-cols-2">
          <div className="order-2 text-center md:order-1 md:text-left">
            <span className="mb-6 inline-block rounded-full bg-[rgba(212,98,26,0.1)] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--orange)]">
              Épicerie en ligne · Marrakech
            </span>
            <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-black leading-tight text-[var(--brown)] mb-6">
              Votre épicerie <span className="text-[var(--orange)]">livrée</span>{" "}
              chez vous.
            </h1>
            <p className="mx-auto mb-10 max-w-[460px] text-[var(--text-light)] text-[1.1rem] leading-relaxed md:mx-0">
              Fruits secs, huiles naturelles, épices et produits du terroir. Baba
              Khan vous livre la fraîcheur du marché directement à votre porte.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:justify-start">
              <Link
                href="#telecharger"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--orange)] px-8 py-3.5 text-sm font-semibold text-white no-underline transition-colors hover:bg-[var(--orange-dark)] hover:-translate-y-0.5"
              >
                Télécharger l&apos;app
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--orange)] px-8 py-3.5 text-sm font-semibold text-[var(--orange)] no-underline transition-colors hover:bg-[var(--orange)] hover:text-white"
              >
                Nos services →
              </Link>
            </div>
          </div>
          <div className="order-1 flex justify-center md:order-2">
            <div className="flex h-[280px] w-[280px] items-center justify-center rounded-full bg-gradient-to-br from-[var(--orange)] to-[var(--orange-dark)] md:h-[380px] md:w-[380px]">
              <span className="font-serif text-center text-3xl font-black text-white md:text-4xl">
                Baba
                <br />
                Khan
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[var(--orange)] px-8 py-12">
        <div className="mx-auto grid max-w-[900px] grid-cols-1 gap-8 text-center md:grid-cols-3">
          <div>
            <div className="font-serif text-4xl font-black text-white">
              500+
            </div>
            <div className="mt-1 text-sm text-white/80">
              Clients satisfaits
            </div>
          </div>
          <div>
            <div className="font-serif text-4xl font-black text-white">
              100+
            </div>
            <div className="mt-1 text-sm text-white/80">
              Produits disponibles
            </div>
          </div>
          <div>
            <div className="font-serif text-4xl font-black text-white">24h</div>
            <div className="mt-1 text-sm text-white/80">
              Délai de livraison
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-[var(--cream)] px-8 py-16">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-[var(--orange)] mb-2">
          Ce que nous offrons
        </p>
        <h2 className="font-serif text-center text-[clamp(2rem,4vw,3rem)] font-black text-[var(--brown)] mb-4">
          Nos Services
        </h2>
        <p className="mx-auto mb-14 max-w-[500px] text-center text-[var(--text-light)] text-[1.05rem] leading-relaxed">
          Une expérience d&apos;achat simple, fraîche et rapide depuis votre
          smartphone.
        </p>
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: "🌰",
              title: "Fruits Secs & Naturels",
              text: "Amandes, noix, dattes, raisins secs… Sélectionnés avec soin pour leur qualité et fraîcheur.",
            },
            {
              icon: "🫒",
              title: "Huiles & Épices",
              text: "Huile d'argan, d'olive, épices du Maroc. Directement du producteur à votre table.",
            },
            {
              icon: "🚚",
              title: "Livraison Rapide",
              text: "Votre commande livrée en moins de 24h. Suivi en temps réel depuis l'application.",
            },
            {
              icon: "💰",
              title: "Promotions & Remises",
              text: "Profitez de réductions automatiques selon votre panier. Livraison offerte dès un certain montant.",
            },
            {
              icon: "📦",
              title: "Suivi de Commande",
              text: "Consultez le statut de votre commande et les informations du livreur en direct.",
            },
            {
              icon: "💬",
              title: "Support WhatsApp",
              text: "Une question ? Notre équipe est disponible sur WhatsApp pour vous accompagner.",
            },
          ].map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-[rgba(212,98,26,0.1)] bg-white p-8 transition-all hover:-translate-y-1.5 hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[rgba(212,98,26,0.1)] text-2xl">
                {s.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-[var(--brown)] mb-2">
                {s.title}
              </h3>
              <p className="text-[var(--text-light)] text-sm leading-relaxed">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[var(--gray)] px-8 py-16">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-[var(--orange)] mb-2">
          Comment ça marche
        </p>
        <h2 className="font-serif text-center text-[clamp(2rem,4vw,3rem)] font-black text-[var(--brown)] mb-12">
          En 4 étapes simples
        </h2>
        <div className="mx-auto mt-12 grid max-w-[900px] grid-cols-1 gap-6 text-center sm:grid-cols-2 lg:grid-cols-4">
          {[
            { num: "1", title: "Téléchargez", text: "Installez l'application Baba Khan sur iOS ou Android" },
            { num: "2", title: "Parcourez", text: "Explorez notre catalogue et ajoutez vos produits au panier" },
            { num: "3", title: "Commandez", text: "Validez votre commande et attendez la confirmation" },
            { num: "4", title: "Recevez", text: "Votre livreur arrive chez vous dans les 24 heures" },
          ].map((step) => (
            <div key={step.num}>
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--orange)] font-serif text-xl font-black text-white">
                {step.num}
              </div>
              <h4 className="font-semibold text-[var(--brown)] mb-2">
                {step.title}
              </h4>
              <p className="text-sm text-[var(--text-light)] leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
