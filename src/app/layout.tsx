import type { Metadata } from "next";
import { Great_Vibes, Inter, Manrope } from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { organizationJsonLd, buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-signature",
  subsets: ["latin", "latin-ext"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  ...buildMetadata({
    title: siteConfig.name,
    description: siteConfig.description,
    path: "/",
  }),
  metadataBase: new URL(siteConfig.baseUrl),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = organizationJsonLd();

  return (
    <html lang="tr">
      <body
        className={`${manrope.variable} ${inter.variable} ${greatVibes.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:px-3 focus:py-2"
        >
          İçeriğe geç
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
