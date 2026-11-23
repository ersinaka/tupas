import { NextResponse } from "next/server";
import { formatContactEmail, sendEmail } from "@/lib/email";
import { rateLimit } from "@/lib/rate-limit";
import { contactFormSchema } from "@/lib/validation";

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  const limited = rateLimit(`contact:${ip}`);
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

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message || "Form doğrulaması başarısız." },
      { status: 400 },
    );
  }

  const data = parsed.data;
  if (data.website) {
    // Honeypot filled — pretend success without sending
    return NextResponse.json({ message: "Talebiniz alındı." });
  }

  const result = await sendEmail({
    subject: `İletişim: ${data.subject}`,
    text: formatContactEmail({
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.company,
      subject: data.subject,
      message: data.message,
    }),
    replyTo: data.email,
  });

  if (!result.ok) {
    return NextResponse.json({ error: result.message }, { status: 503 });
  }

  return NextResponse.json({
    message: "Mesajınız iletildi. En kısa sürede dönüş yapılacaktır.",
  });
}
