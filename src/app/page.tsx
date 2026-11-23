import { HomeContactCta } from "@/components/home/HomeContactCta";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeIntro } from "@/components/home/HomeIntro";
import { HomeProducts } from "@/components/home/HomeProducts";
import { HomeServices } from "@/components/home/HomeServices";
import { HomeSolutions } from "@/components/home/HomeSolutions";
import { HomeWhy } from "@/components/home/HomeWhy";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: siteConfig.name,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeIntro />
      <HomeSolutions />
      <HomeProducts />
      <HomeServices />
      <HomeWhy />
      {/* Referans / kalite belgeleri: doğrulanmış varlık yok — bölüm kasıtlı olarak atlandı */}
      <HomeContactCta />
    </>
  );
}
