import type { AboutItem as AboutItemData } from "../../data";

interface AboutItemProps {
  item: AboutItemData;
  no: string;
  isLast: boolean;
}

export default function AboutItem({ item, no, isLast }: AboutItemProps) {
  return (
    <div
      className={`grid grid-cols-[auto_1fr] gap-[22px] py-6 border-t border-ink ${
        isLast ? "border-b" : ""
      }`}
    >
      <span className="font-mono font-bold text-[13px] text-accent">{no}</span>
      <div>
        <div className="font-mono font-semibold text-[11px] tracking-[0.12em] text-[#8a8a8a]">
          {item.key}
        </div>
        <div className="mt-2.5 font-sans font-bold text-xl leading-[1.35] tracking-[-0.01em]">
          {item.title}
        </div>
        <p className="mt-[9px] font-sans text-[15px] leading-[1.65] text-[#5a5a5a]">
          {item.desc}
        </p>
      </div>
    </div>
  );
}
