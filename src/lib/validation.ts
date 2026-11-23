import { z } from "zod";

const phoneRegex = /^[0-9+\s()-]{10,20}$/;

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Ad soyad en az 2 karakter olmalıdır.").max(120),
  email: z.string().trim().email("Geçerli bir e-posta giriniz.").max(160),
  phone: z
    .string()
    .trim()
    .regex(phoneRegex, "Geçerli bir telefon numarası giriniz."),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  subject: z.string().trim().min(3, "Konu giriniz.").max(160),
  message: z.string().trim().min(10, "Mesaj en az 10 karakter olmalıdır.").max(4000),
  website: z.string().max(0).optional().or(z.literal("")), // honeypot
});

export const quoteFormSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(160),
  phone: z.string().trim().regex(phoneRegex),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  productSlug: z.string().trim().max(200).optional().or(z.literal("")),
  productName: z.string().trim().max(200).optional().or(z.literal("")),
  city: z.string().trim().max(80).optional().or(z.literal("")),
  message: z.string().trim().min(10).max(4000),
  website: z.string().max(0).optional().or(z.literal("")), // honeypot
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
export type QuoteFormInput = z.infer<typeof quoteFormSchema>;
