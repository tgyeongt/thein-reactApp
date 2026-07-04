import type { ReactNode } from "react";
import SectionHead from "../common/SectionHead";
import { useReveal } from "../../hooks/useReveal";

// Single source of truth for the page's shared horizontal margin.
// Nav also reads this so the whole page's side margin can be tuned in
// one place.
export const PAGE_PADDING_X = "px-[15vw]";

interface SectionHeadProps {
  no: string;
  kicker: string;
  title: string;
}

interface SectionProps {
  as?: "section" | "header" | "footer";
  id: string;
  dataSec: string;
  padding: string;
  bg?: string;
  textClass?: string;
  border?: boolean;
  head?: SectionHeadProps;
  children: ReactNode;
}

/**
 * Shared page-section shell: every section/header/footer on the page
 * goes through here so the overall layout (side margin, scroll offset,
 * divider, numbered heading) AND the reveal-on-scroll observer are each
 * declared once instead of every section/child component wiring its own
 * useReveal call. Descendants just need className="reveal" — this single
 * observer finds and fades in every one of them independently.
 */
export default function Section({
  as: Tag = "section",
  id,
  dataSec,
  padding,
  bg = "",
  textClass = "",
  border = true,
  head,
  children,
}: SectionProps) {
  const revealRef = useReveal<HTMLElement>();

  const className = [
    padding,
    PAGE_PADDING_X,
    "scroll-mt-[58px]",
    border ? "border-b-2 border-ink" : "",
    bg,
    textClass,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag ref={revealRef} id={id} data-sec={dataSec} className={className}>
      {head && <SectionHead no={head.no} kicker={head.kicker} title={head.title} />}
      {children}
    </Tag>
  );
}
