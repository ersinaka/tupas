import type { NextConfig } from "next";
import { legacyRedirects } from "./redirects.data";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] || "tupas";
const basePath = isGitHubPages ? `/${repoName}` : "";

const staticRedirects = [
  { source: "/tr/tupas-anasayfa", destination: "/", permanent: true },
  { source: "/en/tupas-main-page", destination: "/", permanent: true },
  {
    source: "/tr/tupas-hakkimizda",
    destination: "/kurumsal/hakkimizda",
    permanent: true,
  },
  {
    source: "/tr/tupas-iletisim-bilgileri",
    destination: "/iletisim",
    permanent: true,
  },
  { source: "/tr/tupas-iletisim", destination: "/iletisim", permanent: true },
  { source: "/tr/tupas-urunler", destination: "/urunler", permanent: true },
  {
    source: "/tr/tupas-is-guvenligi",
    destination: "/urunler?grup=is-guvenligi",
    permanent: true,
  },
  {
    source: "/tr/tupas-insan-kaynaklari",
    destination: "/iletisim",
    permanent: true,
  },
  {
    source: "/tr/tupas-haberler",
    destination: "/bilgi-merkezi",
    permanent: true,
  },
  {
    source: "/tr/tupas-hizmetler/1/ucretsiz-kesif",
    destination: "/hizmetler/ucretsiz-kesif",
    permanent: true,
  },
  {
    source: "/tr/tupas-hizmetler/2/tatbikat",
    destination: "/hizmetler/yangin-tatbikati",
    permanent: true,
  },
  {
    source: "/tr/tupas-hizmetler/3/davlumbazlar",
    destination: "/cozumler/davlumbaz-sondurme-sistemleri",
    permanent: true,
  },
  {
    source: "/tr/tupas-hizmetler/5/itfaiye-ruhsati",
    destination: "/bilgi-merkezi/itfaiye-ruhsati-bilgilendirme",
    permanent: true,
  },
  {
    source: "/tr/tupas-hizmetler/6/dolum-ve-bakim",
    destination: "/hizmetler/dolum-ve-bakim",
    permanent: true,
  },
  {
    source: "/tr/tupas-urunler/54/yangin-algilama-sistemleri",
    destination: "/cozumler/yangin-algilama-sistemleri",
    permanent: true,
  },
  {
    source: "/tr/tupas-urunler/67/yangin-sondurme-sistemleri",
    destination: "/cozumler/yangin-sondurme-sistemleri",
    permanent: true,
  },
];

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : "standalone",
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: isGitHubPages
    ? {
        loader: "custom" as const,
        loaderFile: "./src/lib/image-loader.ts",
      }
    : {
        formats: ["image/avif", "image/webp"],
      },
  trailingSlash: isGitHubPages,
  ...(isGitHubPages
    ? {}
    : {
        async redirects() {
          return [...staticRedirects, ...legacyRedirects];
        },
      }),
};

export default nextConfig;
