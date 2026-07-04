export default function StackTag({ label }: { label: string }) {
  return (
    <span className="px-[11px] py-1.5 border border-[#cfcfca] font-mono font-medium text-xs text-[#4a4a4a]">
      {label}
    </span>
  );
}
