"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";

type State =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

const fieldClass =
  "w-full border border-steel/30 bg-white px-3 py-2 text-base text-charcoal placeholder:text-steel/60";

type Props = {
  productSlug?: string;
  productName?: string;
};

export function QuoteForm({ productSlug = "", productName = "" }: Props) {
  const [state, setState] = useState<State>({ status: "idle" });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState({ status: "loading" });

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        setState({
          status: "error",
          message: data.error || "Gönderim başarısız oldu.",
        });
        return;
      }

      setState({
        status: "success",
        message: data.message || "Teklif talebiniz alındı.",
      });
      form.reset();
    } catch {
      setState({
        status: "error",
        message: "Bağlantı hatası. Lütfen daha sonra tekrar deneyin.",
      });
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <input type="hidden" name="productSlug" value={productSlug} />
      <input type="hidden" name="productName" value={productName} />

      {productName ? (
        <p className="border border-steel/20 bg-ivory px-3 py-2 text-sm text-charcoal">
          Teklif konusu: <strong>{productName}</strong>
        </p>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Ad Soyad
          </label>
          <input id="name" name="name" required className={fieldClass} autoComplete="name" />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            E-posta
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={fieldClass}
            autoComplete="email"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium">
            Telefon
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className={fieldClass}
            autoComplete="tel"
          />
        </div>
        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-medium">
            Firma (opsiyonel)
          </label>
          <input id="company" name="company" className={fieldClass} autoComplete="organization" />
        </div>
      </div>

      <div>
        <label htmlFor="city" className="mb-2 block text-sm font-medium">
          Şehir (opsiyonel)
        </label>
        <input id="city" name="city" className={fieldClass} />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          İhtiyaç açıklaması
        </label>
        <textarea id="message" name="message" required rows={6} className={fieldClass} />
      </div>

      {state.status === "error" ? (
        <p className="border border-crimson/40 bg-crimson/5 px-3 py-2 text-sm text-crimson" role="alert">
          {state.message}
        </p>
      ) : null}
      {state.status === "success" ? (
        <p className="border border-steel/30 bg-ivory px-3 py-2 text-sm text-charcoal" role="status">
          {state.message}
        </p>
      ) : null}

      <Button type="submit" disabled={state.status === "loading"}>
        {state.status === "loading" ? "Gönderiliyor…" : "Teklif Talebi Gönder"}
      </Button>
    </form>
  );
}
