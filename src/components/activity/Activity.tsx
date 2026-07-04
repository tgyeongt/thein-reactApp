import { DATA } from "../../data";
import SchoolingItem from "./SchoolingItem";
import TrainingItem from "./TrainingItem";

export default function Activity() {
  return (
    <div className="max-w-[920px]">
      <div className="reveal">
        <div className="font-mono font-semibold text-[11px] tracking-[0.1em] text-[#8a8a8a] mb-1.5">
          학력
        </div>
        {DATA.schooling.map((e) => (
          <SchoolingItem key={e.title} item={e} />
        ))}
        <div className="border-t border-ink" />
      </div>
      <div className="reveal mt-12">
        <div className="font-mono font-semibold text-[11px] tracking-[0.1em] text-[#8a8a8a] mb-1.5">
          교육 & 연수
        </div>
        {DATA.education.map((e, i) => (
          <TrainingItem key={e.title} item={e} imgId={`edu-${i}`} />
        ))}
        <div className="border-t border-ink" />
      </div>
      <div className="reveal mt-12">
        <div className="font-mono font-semibold text-[11px] tracking-[0.1em] text-[#8a8a8a] mb-1.5">
          교내·외 활동 · 동아리
        </div>
        {DATA.activities.map((e, i) => (
          <TrainingItem key={e.title} item={e} imgId={`act-${i}`} />
        ))}
        <div className="border-t border-ink" />
      </div>
    </div>
  );
}
