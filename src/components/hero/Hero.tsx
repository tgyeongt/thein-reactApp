import { DATA } from "../../data";
import Console from "./Console";
import Stats from "./Stats";

export default function Hero() {
  const p = DATA.profile;

  return (
    <>
      <div className="flex flex-wrap gap-14 items-end justify-between">
        <div className="flex-[1_1_520px] min-w-[320px]">
          <div className="reveal flex items-center gap-3 font-mono font-medium text-xs text-[#8a8a8a] tracking-[0.14em] mb-[30px]">
            <span>PORTFOLIO</span>
            <span className="w-[26px] h-px bg-[#c9c9c9]" />
            <span>2026</span>
          </div>
          <h1 className="reveal m-0 font-sans font-bold text-[clamp(52px,9vw,116px)] leading-[0.92] tracking-[-0.045em]">
            {p.name}
          </h1>
          <div className="reveal mt-[18px] font-sans text-[clamp(19px,2.4vw,30px)] leading-[1.35] tracking-[-0.02em]">
            프론트엔드를 주력으로 하는{" "}
            <strong className="font-bold [box-shadow:inset_0_-0.42em_0_rgba(31,95,224,0.14)]">
              풀스택 개발자
            </strong>
          </div>
          <p className="reveal mt-[26px] max-w-[540px] font-sans text-base leading-[1.7] text-[#4a4a4a]">
            {p.intro}
          </p>
          <a
            href="#projects"
            className="reveal mt-[34px] inline-flex items-center gap-0 border-[1.5px] border-ink no-underline text-ink"
          >
            <span className="px-[15px] py-[11px] font-mono font-medium text-xs tracking-[0.04em] bg-ink text-white">
              VIEW
            </span>
            <span className="px-4 py-[11px] font-sans font-medium text-[14.5px] leading-none inline-flex items-center gap-[9px]">
              프로젝트 바로 가기 <span className="font-mono">↓</span>
            </span>
          </a>
        </div>
        <Console />
      </div>
      <Stats />
    </>
  );
}
