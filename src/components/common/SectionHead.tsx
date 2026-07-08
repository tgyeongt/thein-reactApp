interface SectionHeadProps {
  no: string;
  kicker: string;
  title: string;
  dataSec?: string;
}

export default function SectionHead({
  no,
  kicker,
  title,
  dataSec,
}: SectionHeadProps) {
  return (
    <div
      data-sec={dataSec}
      className="reveal flex items-baseline gap-5 mb-[54px]"
    >
      <span className="index-badge">{no}</span>
      <div>
        <div className="font-mono font-semibold text-xs tracking-[0.18em] text-[#8a8a8a] mb-[13px]">
          {kicker}
        </div>
        <h2 className="m-0 font-sans font-bold text-[clamp(34px,4.2vw,56px)] leading-[1.04] tracking-[-0.03em]">
          {title}
        </h2>
      </div>
    </div>
  );
}
