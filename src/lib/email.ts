export type EmailPayload = {
  subject: string;
  text: string;
  replyTo?: string;
};

export type EmailResult =
  | { ok: true; provider: string }
  | { ok: false; reason: "not_configured" | "send_failed"; message: string };

function isEmailConfigured() {
  const provider = process.env.EMAIL_PROVIDER?.toLowerCase();
  if (!provider || !process.env.EMAIL_FROM || !process.env.EMAIL_TO) {
    return false;
  }
  if (provider === "webhook") return Boolean(process.env.EMAIL_WEBHOOK_URL);
  if (provider === "smtp") {
    return Boolean(
      process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS,
    );
  }
  if (provider === "log") return process.env.NODE_ENV !== "production";
  return false;
}

/**
 * Provider-independent email sender.
 * Never claims success when delivery is not configured.
 * Does not log message body or personal data.
 */
export async function sendEmail(payload: EmailPayload): Promise<EmailResult> {
  if (!isEmailConfigured()) {
    return {
      ok: false,
      reason: "not_configured",
      message:
        "E-posta gönderimi yapılandırılmamış. Lütfen telefon ile iletişime geçin veya yöneticinin EMAIL_* ortam değişkenlerini tanımlamasını sağlayın.",
    };
  }

  const provider = process.env.EMAIL_PROVIDER!.toLowerCase();

  try {
    if (provider === "log") {
      console.info("[email:log] queued subject length=", payload.subject.length);
      return { ok: true, provider: "log" };
    }

    if (provider === "webhook") {
      const url = process.env.EMAIL_WEBHOOK_URL!;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(process.env.EMAIL_API_KEY
            ? { Authorization: `Bearer ${process.env.EMAIL_API_KEY}` }
            : {}),
        },
        body: JSON.stringify({
          from: process.env.EMAIL_FROM,
          to: process.env.EMAIL_TO,
          subject: payload.subject,
          text: payload.text,
          replyTo: payload.replyTo,
        }),
      });

      if (!response.ok) {
        return {
          ok: false,
          reason: "send_failed",
          message:
            "E-posta gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
        };
      }

      return { ok: true, provider: "webhook" };
    }

    if (provider === "smtp") {
      return {
        ok: false,
        reason: "not_configured",
        message:
          "SMTP seçildi. Üretimde webhook sağlayıcısı önerilir veya nodemailer tabanlı SMTP bağlayıcısı ayrıca etkinleştirilmelidir. Şu an sahte başarı dönülmez.",
      };
    }

    return {
      ok: false,
      reason: "not_configured",
      message: `Bilinmeyen e-posta sağlayıcısı: ${provider}`,
    };
  } catch {
    return {
      ok: false,
      reason: "send_failed",
      message:
        "E-posta gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
    };
  }
}

export function formatContactEmail(data: {
  name: string;
  email: string;
  phone: string;
  company?: string;
  subject: string;
  message: string;
}) {
  return [
    "Yeni iletişim formu",
    `Ad: ${data.name}`,
    `E-posta: ${data.email}`,
    `Telefon: ${data.phone}`,
    `Firma: ${data.company || "-"}`,
    `Konu: ${data.subject}`,
    "",
    data.message,
  ].join("\n");
}

export function formatQuoteEmail(data: {
  name: string;
  email: string;
  phone: string;
  company?: string;
  productName?: string;
  productSlug?: string;
  city?: string;
  message: string;
}) {
  return [
    "Yeni teklif talebi",
    `Ad: ${data.name}`,
    `E-posta: ${data.email}`,
    `Telefon: ${data.phone}`,
    `Firma: ${data.company || "-"}`,
    `Şehir: ${data.city || "-"}`,
    `Ürün: ${data.productName || "-"}`,
    `Ürün slug: ${data.productSlug || "-"}`,
    "",
    data.message,
  ].join("\n");
}
