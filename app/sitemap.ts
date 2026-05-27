import type { MetadataRoute } from "next";
import { SITE } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const primary = ["", "/about", "/ecosystem", "/join"];
  const secondary = [
    "/contact",
    "/legal/terms",
    "/legal/privacy",
    "/legal/refunds",
  ];
  const lastModified = new Date();

  return [
    ...primary.map((route) => ({
      url: `${SITE.url}${route}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...secondary.map((route) => ({
      url: `${SITE.url}${route}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
