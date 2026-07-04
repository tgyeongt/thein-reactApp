import { DATA } from "../../data";
import SkillGroupRow from "./SkillGroupRow";

export default function Skills() {
  return (
    <div className="border-t-[1.5px] border-ink">
      {DATA.skills.map((g) => (
        <SkillGroupRow key={g.label} group={g} />
      ))}
    </div>
  );
}
