import type { Award } from "../../data";

export default function AwardRow({ award }: { award: Award }) {
  return (
    <div className="py-5 border-t border-ink">
      <div className="flex justify-between items-baseline gap-3">
        <div className="font-sans font-semibold text-lg leading-[1.4]">{award.title}</div>
        <span className="font-mono font-medium text-[13px] text-[#8a8a8a] whitespace-nowrap">
          {award.date}
        </span>
      </div>
      <div className="mt-1.5 font-sans text-sm leading-[1.3] text-[#8a8a8a]">{award.org}</div>
    </div>
  );
}
