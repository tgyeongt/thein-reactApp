import type { ProjectShot } from "../../data";

export default function Shot({ shot }: { shot: ProjectShot }) {
  return (
    <div>
      <div className="img-slot w-full [aspect-ratio:410/720]" data-img={shot.id}>
        {shot.cap}
      </div>
      <div className="mt-[7px] font-mono text-[11px] text-[#9a9a9a]">{shot.cap} · 410×720</div>
    </div>
  );
}
