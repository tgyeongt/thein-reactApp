import type { ReactNode } from "react";
import SectionHead from "../common/SectionHead";
import { useReveal } from "../../hooks/useReveal";

interface SectionHeadProps {
  no: string;
  kicker: string;
  title: string;
}

const DEFAULT_PADDING = "py-12 sm:py-16 lg:py-[80px]";

interface SectionProps {
  id: string;
  dataSec: string;
  padding?: string;
  bg?: string;
  textClass?: string;
  border?: boolean;
  head?: SectionHeadProps;
  children: ReactNode;
}

export default function Section({
  id,
  dataSec,
  padding = DEFAULT_PADDING,
  bg = "",
  textClass = "",
  border = true,
  head,
  children,
}: SectionProps) {
  const revealRef = useReveal<HTMLElement>();

  return (
    <section
      ref={revealRef}
      id={id}
      data-sec={head ? undefined : dataSec}
      className={`${padding} scroll-mt-[40px] ${border ? "border-b-2 border-ink" : ""} ${bg} ${textClass}`}
    >
      <div className="max-w-[1140px] mx-auto px-6 sm:px-10 lg:px-12">
        {head && (
          <SectionHead
            no={head.no}
            kicker={head.kicker}
            title={head.title}
            dataSec={dataSec}
          />
        )}
        {children}
      </div>
    </section>
  );
}
