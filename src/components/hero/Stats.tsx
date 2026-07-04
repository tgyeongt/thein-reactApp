import { useEffect, useRef, useState } from "react";
import { DATA, type Stat } from "../../data";

function StatCount({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const dur = 1150;
          const t0 = performance.now();
          const step = (t: number) => {
            const p = Math.min(1, (t - t0) / dur);
            const e = 1 - Math.pow(1 - p, 3);
            setDisplay(Math.round(value * e));
            if (p < 1) requestAnimationFrame(step);
            else setDisplay(value);
          };
          requestAnimationFrame(step);
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return <span ref={ref}>{display.toLocaleString()}</span>;
}

function StatCell({ stat }: { stat: Stat }) {
  return (
    <div className="px-[22px] py-[26px] border-r border-[#d8d8d8]">
      <div className="font-sans font-bold text-[clamp(30px,4vw,48px)] leading-none tracking-[-0.03em]">
        <StatCount value={stat.n} />
        {stat.suffix}
      </div>
      <div className="mt-[9px] font-mono font-medium text-[11.5px] text-[#8a8a8a] tracking-[0.08em] uppercase">
        {stat.label}
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <div className="reveal mt-16 grid grid-cols-4 border-[1.5px] border-ink">
      {DATA.stats.map((s) => (
        <StatCell key={s.label} stat={s} />
      ))}
    </div>
  );
}
