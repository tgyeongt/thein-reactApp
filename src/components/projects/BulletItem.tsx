export default function BulletItem({ text }: { text: string }) {
  return (
    <li className="flex gap-3 py-[7px] font-sans text-[16.5px] leading-[1.65] text-[#2a2a2a]">
      <span className="flex-none w-1.5 h-1.5 bg-accent mt-[9px]" />
      <span>{text}</span>
    </li>
  );
}
