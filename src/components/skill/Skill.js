import React from "react";
import { skillIcons } from "../../asset/DB/skill-icon";

const Skill = () => {
  return (
    <div>
      <div className="flex  gap-6 flex-wrap p-6">
        {skillIcons.map(({ style, id, icon, title }) => (
          <div className={"" + " " + style} key={id}>
            <div>
              <ul>
                <li className={"text-3xl" + " " + style}>{icon}</li>
              </ul>
            </div>
            <div>
              <span className="text-slate-600">{title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
