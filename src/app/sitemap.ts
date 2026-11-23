import type { MetadataRoute } from "next";
import { infoArticles } from "@/content/info";
import { services } from "@/content/services";
import { solutions } from "@/content/solutions";
import { getAllProducts } from "@/lib/products";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.baseUrl;
  const now = new Date();

  const staticRoutes = [
    "",
    "/kurumsal/hakkimizda",
    "/kurumsal/tarihce",
    "/kurumsal/kalite-belgeleri",
    "/cozumler",
    "/urunler",
    "/hizmetler",
    "/bilgi-merkezi",
    "/iletisim",
    "/teklif-al",
    "/kvkk",
    "/gizlilik-politikasi",
    "/cerez-politikasi",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${base}${path || "/"}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...solutions.map((item) => ({
      url: `${base}/cozumler/${item.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...services.map((item) => ({
      url: `${base}/hizmetler/${item.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...getAllProducts().map((item) => ({
      url: `${base}/urunler/${item.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...infoArticles.map((item) => ({
      url: `${base}/bilgi-merkezi/${item.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
