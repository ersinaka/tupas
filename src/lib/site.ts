export const siteConfig = {
  name: "TÜPAŞ",
  legalName: "TÜPAŞ Yangın Söndürme Cihazları",
  locale: "tr_TR",
  language: "tr",
  description:
    "1983’ten beri yangın söndürme cihazları, algılama sistemleri ve yangın güvenlik çözümleri.",
  get baseUrl() {
    return (
      process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
      "http://localhost:3000"
    );
  },
};
