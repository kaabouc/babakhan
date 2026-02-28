import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { siteConfig, getOgImageUrl } from "@/lib/site";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const baseUrl = siteConfig.url;

export const viewport: Viewport = {
  themeColor: "#D4621A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: siteConfig.nameLong,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.defaultDescription,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: baseUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: { telephone: false, email: false, address: false },
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: baseUrl,
    siteName: siteConfig.name,
    title: siteConfig.nameLong,
    description: siteConfig.defaultDescription,
    images: [
      {
        url: getOgImageUrl(),
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} – Épicerie livrée à Marrakech`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.nameLong,
    description: siteConfig.defaultDescription,
    images: [getOgImageUrl()],
    ...(siteConfig.twitterHandle && { creator: siteConfig.twitterHandle }),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    // Uncomment and set when you have them:
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  category: "food",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: siteConfig.name,
      url: baseUrl,
      logo: { "@type": "ImageObject", url: getOgImageUrl() },
      contactPoint: {
        "@type": "ContactPoint",
        email: siteConfig.email,
        contactType: "customer service",
        areaServed: siteConfig.areaServed,
        availableLanguage: ["French", "Arabic"],
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${baseUrl}/#localbusiness`,
      name: siteConfig.name,
      description: siteConfig.defaultDescription,
      url: baseUrl,
      image: getOgImageUrl(),
      address: { "@type": "PostalAddress", addressLocality: "Marrakech", addressCountry: "MA" },
      areaServed: siteConfig.areaServed,
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "20:00",
      },
      priceRange: "$$",
    },
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      url: baseUrl,
      name: siteConfig.name,
      description: siteConfig.defaultDescription,
      publisher: { "@id": `${baseUrl}/#organization` },
      inLanguage: siteConfig.defaultLocale,
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${baseUrl}/?q={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${playfair.variable} ${dmSans.variable} font-sans antialiased`}
      >
        <Nav />
        <main className="min-h-screen" id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
