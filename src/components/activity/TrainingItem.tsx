import type { TrainingItem as TrainingItemData } from "../../data";

interface TrainingItemProps {
  item: TrainingItemData;
  imgId: string;
}

export default function TrainingItem({ item, imgId }: TrainingItemProps) {
  return (
    <div className="grid grid-cols-[132px_1fr] gap-7 py-[26px] border-t border-ink items-start">
      <div className="img-slot w-[132px] h-[132px]" data-img={imgId}>
        이미지
      </div>
      <div>
        <span className="font-mono font-medium text-[11.5px] text-accent">{item.period}</span>
        <div className="mt-[9px] font-sans font-semibold text-[17.5px] leading-[1.35]">
          {item.title}
        </div>
        <div className="mt-[5px] font-sans text-sm leading-[1.45] text-[#6a6a6a]">{item.desc}</div>
        <ul className="mt-3 p-0 list-none">
          {item.bullets.map((b) => (
            <li
              key={b}
              className="flex gap-[10px] py-[3px] font-sans text-sm leading-[1.55] text-[#3a3a3a]"
            >
              <span className="flex-none w-[5px] h-[5px] bg-accent mt-2" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        {item.result && (
          <div className="mt-3 flex gap-[9px] items-baseline">
            <span className="flex-none font-mono font-medium text-[10px] text-accent tracking-[0.08em]">
              성과
            </span>
            <span className="font-sans font-medium text-sm leading-[1.5] text-[#1a1a1a]">
              {item.result}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
