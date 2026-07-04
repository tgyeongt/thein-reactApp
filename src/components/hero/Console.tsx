import { useEffect, useRef, useState } from "react";
import { DATA } from "../../data";

function formatUptime(totalSeconds: number) {
  const hh = String(Math.floor(totalSeconds / 3600) % 1000).padStart(3, "0");
  const mm = String(Math.floor(totalSeconds / 60) % 60).padStart(2, "0");
  const ss = String(totalSeconds % 60).padStart(2, "0");
  return `${hh}:${mm}:${ss}`;
}

export default function Console() {
  const c = DATA.console;
  const upRef = useRef(847213);
  const [uptime, setUptime] = useState(() => formatUptime(upRef.current));
  const [latency, setLatency] = useState("11ms");
  const [tps, setTps] = useState("1204/s");
  const [cacheHit, setCacheHit] = useState("94.2%");
  const [log, setLog] = useState(c.logs[0]);

  useEffect(() => {
    const id = setInterval(() => {
      upRef.current += 1;
      const up = upRef.current;
      setUptime(formatUptime(up));
      setLatency(`${8 + Math.floor(Math.random() * 7)}ms`);
      setTps(`${1180 + Math.floor(Math.random() * 90)}/s`);
      setCacheHit(`${(93 + Math.random() * 2).toFixed(1)}%`);
      setLog(c.logs[up % c.logs.length]);
    }, 1000);
    return () => clearInterval(id);
  }, [c.logs]);

  return (
    <div className="reveal flex-[0_1_420px] min-w-[320px] border-[1.5px] border-ink bg-ink text-[#eaeaea]">
      <div className="flex items-center justify-between px-[14px] py-[11px] border-b border-[#2a2a2a]">
        <div className="flex gap-1.5 items-center">
          <span className="w-[9px] h-[9px] bg-accent" />
          <span className="w-[9px] h-[9px] bg-[#3a3a3a]" />
          <span className="w-[9px] h-[9px] bg-[#3a3a3a]" />
        </div>
        <span className="font-mono font-medium text-[11px] text-[#8a8a8a] tracking-[0.08em]">
          {c.title}
        </span>
      </div>
      <div className="px-4 pt-4 pb-1.5">
        <div className="grid grid-cols-[auto_1fr] gap-x-[18px] gap-y-[9px] font-mono font-medium text-[12.5px]">
          <span className="text-[#7a7a7a]">STATUS</span>
          <span className="text-[#4d86ff] text-right">● OPERATIONAL</span>
          <span className="text-[#7a7a7a]">UPTIME</span>
          <span className="text-right">{uptime}</span>
          <span className="text-[#7a7a7a]">CACHE HIT</span>
          <span className="text-right">{cacheHit}</span>
          <span className="text-[#7a7a7a]">API LATENCY</span>
          <span className="text-right">{latency}</span>
          <span className="text-[#7a7a7a]">REQUESTS</span>
          <span className="text-right">{tps}</span>
        </div>
      </div>
      <div className="px-4 pt-[10px] pb-[14px] border-t border-[#2a2a2a] mt-2 font-mono text-[11.5px] text-[#8a8a8a]">
        <span className="text-[#4d86ff]">›</span> <span>{log}</span>
        <span className="inline-block w-[7px] h-[13px] bg-[#eaeaea] ml-1 align-middle [animation:blink_1.1s_step-end_infinite]" />
      </div>
    </div>
  );
}
