import { useState } from "react";
import { DATA } from "../../data";
import ProjectRow from "./ProjectRow";

export default function Projects() {
  const [openIds, setOpenIds] = useState<Set<string>>(() => new Set());

  const toggle = (id: string) => {
    setOpenIds((cur) => {
      const next = new Set(cur);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <>
      <p className="reveal mb-10 font-sans text-[15.5px] leading-[1.6] text-[#8a8a8a]">
        행을 클릭하면 상세 내용과 스크린샷이 펼쳐집니다.{" "}
        <span className="font-mono">— 총 {DATA.projects.length}건</span>
      </p>
      <div className="border-t-[1.5px] border-ink">
        {DATA.projects.map((p) => (
          <ProjectRow
            key={p.id}
            project={p}
            open={openIds.has(p.id)}
            onToggle={() => toggle(p.id)}
          />
        ))}
      </div>
    </>
  );
}
