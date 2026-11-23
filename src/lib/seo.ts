import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

type BuildMetadataInput = {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
  ogImage?: string;
};

export function absoluteUrl(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.baseUrl}${normalized}`;
}

export function buildMetadata({
  title,
  description,
  path = "/",
  noIndex = false,
  ogImage = "/images/hero/yangin-sondurme.jpg",
}: BuildMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const fullTitle =
    title === siteConfig.name ? title : `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      images: [{ url: absoluteUrl(ogImage) }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [absoluteUrl(ogImage)],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.legalName,
    url: siteConfig.baseUrl,
    logo: absoluteUrl("/images/brand/logo-original.jpg"),
    foundingDate: "1983",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Doğu Sanayi Sitesi 14. Blok No:18",
      addressLocality: "Yenibosna",
      addressRegion: "İstanbul",
      addressCountry: "TR",
    },
    email: "info@tupas.com.tr",
    telephone: "+90-212-551-71-71",
  };
}
