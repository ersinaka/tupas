export type VerificationStatus =
  | "verified"
  | "provisional"
  | "needs-confirmation"
  | "placeholder";

export interface ContentMeta {
  status: VerificationStatus;
  notes?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface CompanyContact {
  label: string;
  addressLines: string[];
  phones: string[];
  fax?: string[];
  emails: string[];
  meta: ContentMeta;
}

export interface CompanyInfo {
  legalName: string;
  shortName: string;
  foundedYear: number;
  tagline: string;
  aboutSummary: string[];
  strengths: { title: string; description: string; meta: ContentMeta }[];
  contact: {
    headquarters: CompanyContact;
    factory?: CompanyContact;
    instagram?: string;
    whatsapp?: string;
    quoteEmail: string;
  };
  meta: ContentMeta;
}

export type ProductGroup = "yangin" | "is-guvenligi" | "sistem";

export interface ProductCategory {
  slug: string;
  name: string;
  group: ProductGroup;
  description: string;
  parentSlug?: string;
  legacyPaths?: string[];
  featured?: boolean;
  meta: ContentMeta;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductDocument {
  title: string;
  href: string;
  meta: ContentMeta;
}

export interface ProductImage {
  src: string;
  alt: string;
  isPlaceholder?: boolean;
}

export interface Product {
  slug: string;
  name: string;
  categorySlug: string;
  summary: string;
  description: string;
  images: ProductImage[];
  specifications: ProductSpec[];
  documents: ProductDocument[];
  relatedSlugs: string[];
  quoteEnabled: boolean;
  featured?: boolean;
  legacyPaths?: string[];
  legacyIds?: number[];
  meta: ContentMeta;
}

export interface SolutionPage {
  slug: string;
  title: string;
  summary: string;
  body: string[];
  relatedCategorySlugs: string[];
  meta: ContentMeta;
}

export interface ServicePage {
  slug: string;
  title: string;
  summary: string;
  body: string[];
  ctaHref: string;
  ctaLabel: string;
  meta: ContentMeta;
}

export interface InfoArticle {
  slug: string;
  title: string;
  summary: string;
  body: string[];
  meta: ContentMeta;
}
