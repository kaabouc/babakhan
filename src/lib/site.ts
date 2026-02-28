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
  /** Base keywords (include brand "babakhan" for search). Used by all pages + page-specific. */
  keywords: [
    "babakhan",
    "Baba Khan",
    "épicerie en ligne",
    "livraison Marrakech",
    "fruits secs Maroc",
    "huile d'argan",
    "épices Maroc",
    "épicerie livrée",
    "produits du terroir",
    "application épicerie",
    "Marrakech",
  ],
  /** Twitter handle (optional) */
  twitterHandle: "@babakhan_ma",
  /** Default OG image path (absolute URL built from url). Add public/og.png 1200×630. */
  defaultOgImagePath: "/og.png",
  /** Contact / business (for JSON-LD and display) */
  email: "babakhanmarket@gmail.com",
  /** Phone for display and WhatsApp (E.164 without + for wa.me) */
  phone: "+212600468073",
  /** WhatsApp link (same as phone, no +) */
  whatsappNumber: "212600468073",
  /** City/region for LocalBusiness schema */
  areaServed: "Marrakech, Maroc",
  /** Opening hours (for schema) – adjust to real hours */
  openingHours: "Mo-Sa 08:00-20:00, Su 09:00-17:00",
} as const;

export const getCanonicalUrl = (path: string) =>
  `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;

export const getOgImageUrl = (path?: string) =>
  path ? getCanonicalUrl(path) : getCanonicalUrl(siteConfig.defaultOgImagePath);

/** Page-specific keywords: always include babakhan + base + extra. Use for metadata.keywords. */
export function getPageKeywords(extra: string[]): string[] {
  return ["babakhan", ...siteConfig.keywords, ...extra].filter(
    (v, i, a) => a.indexOf(v) === i
  );
}
