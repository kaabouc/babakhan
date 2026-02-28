/**
 * Central SEO & site configuration.
 * Update SITE_URL when deploying (e.g. https://babakhan.marocaine.org).
 */
export const siteConfig = {
  name: "Baba Khan",
  nameLong: "Baba Khan – Épicerie livrée chez vous",
  /** Production URL; used for canonical, OG, sitemap, JSON-LD */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://babakhan.marocaine.org",
  defaultLocale: "fr" as const,
  /** Short description for meta description / OG (≤160 chars) */
  defaultDescription:
    "Fruits secs, huiles naturelles, épices et produits du terroir livrés à Marrakech. Commandez en 24h.",
  /** Keywords for meta keywords (legacy but still used by some engines) */
  keywords: [
    "épicerie en ligne",
    "livraison Marrakech",
    "fruits secs Maroc",
    "huile d'argan",
    "épices Maroc",
    "Baba Khan",
    "épicerie livrée",
    "produits du terroir",
  ],
  /** Twitter handle (optional) */
  twitterHandle: "@babakhan_ma",
  /** Default OG image path (absolute URL built from url). Add public/og.png 1200×630. */
  defaultOgImagePath: "/og.png",
  /** Contact / business (for JSON-LD) */
  email: "contact@babakhan.ma",
  /** City/region for LocalBusiness schema */
  areaServed: "Marrakech, Maroc",
  /** Opening hours (for schema) – adjust to real hours */
  openingHours: "Mo-Sa 08:00-20:00, Su 09:00-17:00",
} as const;

export const getCanonicalUrl = (path: string) =>
  `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;

export const getOgImageUrl = (path?: string) =>
  path ? getCanonicalUrl(path) : getCanonicalUrl(siteConfig.defaultOgImagePath);
