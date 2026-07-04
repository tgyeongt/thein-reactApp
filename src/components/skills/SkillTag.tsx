export default function SkillTag({ label }: { label: string }) {
  return (
    <span className="px-[13px] py-2 border border-ink bg-white font-sans font-medium text-[15px] leading-none">
      {label}
    </span>
  );
}
