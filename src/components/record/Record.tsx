import { DATA } from "../../data";
import AwardRow from "./AwardRow";
import CertRow from "./CertRow";

export default function Record() {
  return (
    <div className="grid grid-cols-[1.3fr_1fr] gap-14">
      <div className="reveal">
        <div className="font-mono font-semibold text-[11px] tracking-[0.1em] text-[#8a8a8a] mb-1.5">
          수상경력 · {DATA.awards.length}
        </div>
        {DATA.awards.map((a) => (
          <AwardRow key={a.title} award={a} />
        ))}
        <div className="border-t border-ink" />
      </div>
      <div className="reveal">
        <div className="font-mono font-semibold text-[11px] tracking-[0.1em] text-[#8a8a8a] mb-1.5">
          자격증 · {DATA.certs.length}
        </div>
        {DATA.certs.map((c) => (
          <CertRow key={c.title} cert={c} />
        ))}
        <div className="border-t border-ink" />
      </div>
    </div>
  );
}
