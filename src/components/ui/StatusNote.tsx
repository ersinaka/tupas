import type { VerificationStatus } from "@/types/content";

const labels: Record<VerificationStatus, string> = {
  verified: "Doğrulandı",
  provisional: "Geçici içerik — şirket doğrulaması bekleniyor",
  "needs-confirmation": "Şirket onayı gerekli",
  placeholder: "Yer tutucu içerik",
};

export function StatusNote({
  status,
  notes,
  className = "",
}: {
  status: VerificationStatus;
  notes?: string;
  className?: string;
}) {
  if (status === "verified") return null;

  return (
    <aside
      className={`border border-steel/30 bg-white px-4 py-3 text-sm text-steel ${className}`}
      role="note"
    >
      <p className="font-medium text-charcoal">{labels[status]}</p>
      {notes ? <p className="mt-1 leading-6">{notes}</p> : null}
    </aside>
  );
}
