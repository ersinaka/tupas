import { NextResponse } from "next/server";
import { formatQuoteEmail, sendEmail } from "@/lib/email";
import { rateLimit } from "@/lib/rate-limit";
import { quoteFormSchema } from "@/lib/validation";

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  const limited = rateLimit(`quote:${ip}`);
  if (!limited.ok) {
    return NextResponse.json(
      { error: "Çok fazla istek. Lütfen kısa süre sonra tekrar deneyin." },
      {
        status: 429,
        headers: { "Retry-After": String(limited.retryAfterSec) },
      },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Geçersiz istek gövdesi." }, { status: 400 });
  }

  const parsed = quoteFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message || "Form doğrulaması başarısız." },
      { status: 400 },
    );
  }

  const data = parsed.data;
  if (data.website) {
    return NextResponse.json({ message: "Teklif talebiniz alındı." });
  }

  const result = await sendEmail({
    subject: `Teklif: ${data.productName || data.company || data.name}`,
    text: formatQuoteEmail({
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.company,
      productName: data.productName,
      productSlug: data.productSlug,
      city: data.city,
      message: data.message,
    }),
    replyTo: data.email,
  });

  if (!result.ok) {
    return NextResponse.json({ error: result.message }, { status: 503 });
  }

  return NextResponse.json({
    message: "Teklif talebiniz iletildi. Ekibimiz sizinle iletişime geçecektir.",
  });
}
