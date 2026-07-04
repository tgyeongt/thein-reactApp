import type { Cert } from "../../data";

export default function CertRow({ cert }: { cert: Cert }) {
  return (
    <div className="py-5 border-t border-ink">
      <div className="flex justify-between items-baseline gap-3">
        <div className="font-sans font-semibold text-[17.5px] leading-[1.35]">{cert.title}</div>
        <span className="font-mono font-medium text-xs text-[#8a8a8a] whitespace-nowrap">
          {cert.date}
        </span>
      </div>
      <div className="mt-1.5 font-sans text-sm leading-[1.3] text-[#8a8a8a]">{cert.org}</div>
    </div>
  );
}
