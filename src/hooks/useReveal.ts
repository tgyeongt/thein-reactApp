import { useEffect, useRef } from "react";

/**
 * Attaches an IntersectionObserver to every `.reveal` element inside the
 * returned container ref and toggles `.is-in` once each one enters the
 * viewport (mirrors the original vanilla-JS reveal-on-scroll behavior).
 */
export function useReveal<T extends HTMLElement>() {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const targets = container.classList.contains("reveal")
      ? [container, ...container.querySelectorAll<HTMLElement>(".reveal")]
      : Array.from(container.querySelectorAll<HTMLElement>(".reveal"));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return containerRef;
}
