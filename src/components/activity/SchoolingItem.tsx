import type { SchoolingItem as SchoolingItemData } from "../../data";

export default function SchoolingItem({ item }: { item: SchoolingItemData }) {
  return (
    <div className="py-[22px] border-t border-ink">
      <span className="font-mono font-medium text-[11.5px] text-accent">{item.period}</span>
      <div className="mt-[9px] font-sans font-semibold text-[17.5px] leading-[1.35]">
        {item.title}
      </div>
      {item.note && (
        <div className="mt-[5px] font-sans text-[14.5px] leading-[1.45] text-[#6a6a6a]">
          {item.note}
        </div>
      )}
    </div>
  );
}
