import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const baseUrl = siteConfig.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services",
    "/contact",
    "/privacy",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route || ""}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : (route === "/privacy" ? "monthly" as const : "weekly" as const),
    priority: route === "" ? 1 : 0.8,
  }));
}
