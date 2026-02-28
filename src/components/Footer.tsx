import Link from "next/link";
import { siteConfig } from "@/lib/site";

const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}`;

export default function Footer() {
  return (
    <footer className="bg-[var(--brown)] px-8 pb-8 pt-16 text-[rgba(255,255,255,0.8)]">
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-12 pt-4 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <div className="mb-4 flex items-center gap-2.5">
            <span className="font-serif text-lg font-bold text-white">
              Baba Khan
            </span>
          </div>
          <p className="max-w-[240px] text-sm leading-relaxed">
            Votre épicerie en ligne à Marrakech. Fruits secs, huiles naturelles
            et produits du terroir livrés chez vous.
          </p>
        </div>
        <div>
          <h5 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Navigation
          </h5>
          <ul className="list-none" role="list">
            <li className="mb-2.5">
              <Link
                href="/"
                title="Accueil – Baba Khan épicerie Marrakech"
                className="text-sm text-[rgba(255,255,255,0.7)] no-underline transition-colors hover:text-[var(--orange-light)]"
              >
                Accueil
              </Link>
            </li>
            <li className="mb-2.5">
              <Link
                href="/services"
                title="Services Baba Khan – Catalogue, livraison, support"
                className="text-sm text-[rgba(255,255,255,0.7)] no-underline transition-colors hover:text-[var(--orange-light)]"
              >
                Services
              </Link>
            </li>
            <li className="mb-2.5">
              <Link
                href="/contact"
                title="Contact Baba Khan – WhatsApp, email"
                className="text-sm text-[rgba(255,255,255,0.7)] no-underline transition-colors hover:text-[var(--orange-light)]"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Légal
          </h5>
          <ul className="list-none">
            <li className="mb-2.5">
              <Link
                href="/privacy"
                className="text-sm text-[rgba(255,255,255,0.7)] no-underline transition-colors hover:text-[var(--orange-light)]"
              >
                Politique de confidentialité
              </Link>
            </li>
            <li className="mb-2.5">
              <Link
                href="/privacy#conditions"
                className="text-sm text-[rgba(255,255,255,0.7)] no-underline transition-colors hover:text-[var(--orange-light)]"
              >
                Conditions d&apos;utilisation
              </Link>
            </li>
            <li className="mb-2.5">
              <Link
                href="/privacy#cookies"
                className="text-sm text-[rgba(255,255,255,0.7)] no-underline transition-colors hover:text-[var(--orange-light)]"
              >
                Cookies
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Contact
          </h5>
          <ul className="list-none" role="list">
            <li className="mb-2.5">
              <Link
                href="/contact"
                title="Nous contacter – Baba Khan"
                className="text-sm text-[rgba(255,255,255,0.7)] no-underline transition-colors hover:text-[var(--orange-light)]"
              >
                Nous contacter
              </Link>
            </li>
            <li className="mb-2.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Contacter Baba Khan sur WhatsApp (ouverture dans un nouvel onglet)"
                className="text-sm text-[rgba(255,255,255,0.7)] no-underline transition-colors hover:text-[var(--orange-light)]"
              >
                WhatsApp Support
              </a>
            </li>
            <li className="mb-2.5">
              <a
                href={`mailto:${siteConfig.email}`}
                title="Envoyer un email à Baba Khan"
                className="text-sm text-[rgba(255,255,255,0.7)] no-underline transition-colors hover:text-[var(--orange-light)]"
              >
                {siteConfig.email}
              </a>
            </li>
            <li className="mb-2.5">
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                title="Appeler Baba Khan"
                className="text-sm text-[rgba(255,255,255,0.7)] no-underline transition-colors hover:text-[var(--orange-light)]"
              >
                {siteConfig.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-[1100px] flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-[0.82rem]">
        <span>© 2025 Baba Khan. Tous droits réservés.</span>
        <div className="flex gap-6">
          <Link
            href="/privacy"
            title="Politique de confidentialité – Baba Khan"
            className="text-[rgba(255,255,255,0.6)] no-underline hover:text-[var(--orange-light)]"
          >
            Confidentialité
          </Link>
          <Link
            href="/contact"
            title="Contact – Baba Khan"
            className="text-[rgba(255,255,255,0.6)] no-underline hover:text-[var(--orange-light)]"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
