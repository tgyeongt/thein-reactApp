import { DATA } from "../../data";

export default function Contact() {
  const p = DATA.profile;

  return (
    <>
      <div className="reveal font-mono font-semibold text-xs tracking-[0.18em] text-[#7a7a7a] mb-[26px]">
        CONTACT
      </div>
      <h2 className="reveal m-0 font-sans font-bold text-[clamp(36px,6vw,84px)] leading-[1.02] tracking-[-0.04em]">
        함께 만들고 싶습니다.
      </h2>
      <div className="reveal mt-11 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] border border-[#2e2e2e]">
        <a
          href={`mailto:${p.email}`}
          className="p-[22px] border-r border-[#2e2e2e] no-underline text-[#f0f0f0]"
        >
          <div className="font-mono font-medium text-[11px] text-[#7a7a7a] tracking-[0.08em]">
            EMAIL
          </div>
          <div className="mt-[11px] font-sans font-semibold text-[17.5px] leading-[1.1]">
            {p.email}
          </div>
        </a>
        <a
          href={p.githubUrl}
          target="_blank"
          rel="noopener"
          className="p-[22px] border-r border-[#2e2e2e] no-underline text-[#f0f0f0]"
        >
          <div className="font-mono font-medium text-[11px] text-[#7a7a7a] tracking-[0.08em]">
            GITHUB
          </div>
          <div className="mt-[11px] font-sans font-semibold text-[17.5px] leading-[1.1]">
            {p.github}
          </div>
        </a>
        <a
          href={p.liveSite.url}
          target="_blank"
          rel="noopener"
          className="p-[22px] no-underline text-[#f0f0f0]"
        >
          <div className="font-mono font-medium text-[11px] text-[#7a7a7a] tracking-[0.08em]">
            LIVE PROJECT
          </div>
          <div className="mt-[11px] font-sans font-semibold text-[17.5px] leading-[1.1]">
            {p.liveSite.label} ↗
          </div>
        </a>
      </div>
      <div className="mt-14 flex justify-between items-center flex-wrap gap-4 font-mono font-medium text-[11.5px] text-[#6a6a6a]">
        <span>© 2026 {p.name} · FRONTEND-FOCUSED FULLSTACK DEVELOPER</span>
        <span>PORTFOLIO / v1.0</span>
      </div>
    </>
  );
}
