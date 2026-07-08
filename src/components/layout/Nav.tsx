import { useEffect, useState } from "react";
import { profile } from "../../data/profile";

const LINKS: Array<[string, string]> = [
  ["about", "소개"],
  ["record", "이력"],
  ["skills", "기술"],
  ["projects", "프로젝트"],
  ["contact", "연락"],
];

export default function Nav() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-sec]"),
    );

    const updateActive = () => {
      const line = window.innerHeight / 2;
      let current = targets[0]?.dataset.sec ?? "about";
      for (const el of targets) {
        if (el.getBoundingClientRect().top - line <= 0) {
          current = el.dataset.sec ?? current;
        }
      }
      setActive(current);
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        updateActive();
        ticking = false;
      });
    };

    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[90] h-[58px] border-b border-ink bg-white/[.86] backdrop-blur-[10px]">
      <div className="max-w-[1140px] mx-auto h-full flex items-center justify-between px-6 sm:px-10 lg:px-12">
        <a
          href="#top"
          className="flex items-center gap-2.5 no-underline text-ink"
        >
          <span className="w-[11px] h-[11px] bg-accent inline-block shrink-0" />
          <span className="font-sans font-bold text-[15px] leading-none tracking-[-0.01em]">
            {profile.name}
          </span>
          <span className="hidden sm:inline font-mono font-medium text-[11px] text-[#9a9a9a] tracking-[0.02em]">
            FE · FULLSTACK
          </span>
        </a>
        <div className="flex gap-3 sm:gap-[26px] items-center">
          {LINKS.map(([id, ko]) => (
            <a
              key={id}
              href={`#${id}`}
              className={`font-mono font-medium text-[11px] sm:text-[12.5px] no-underline tracking-[0.03em] ${
                active === id ? "text-ink" : "text-[#9a9a9a]"
              }`}
            >
              {ko}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
