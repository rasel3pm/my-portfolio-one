import React from "react";
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3Full, DiMongodb } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { BsBootstrap } from "react-icons/bs";
import { SiTailwindcss, SiExpress } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandFirebase } from "react-icons/tb";

const Skill = () => {
  const icons = [
    {
      id: 1,
      icon: <AiOutlineHtml5 />,
      title: "html",
      style: "text-orange-500",
    },
    {
      id: 2,
      icon: <DiCss3Full />,
      title: "css",
      style: "text-cyan-500",
    },
    {
      id: 3,
      icon: <IoLogoJavascript />,
      title: "Javascript",
      style: "text-yellow-500",
    },
    {
      id: 4,
      icon: <BsBootstrap />,
      title: "Bootstrap",
      style: "text-blue-500",
    },
    {
      id: 5,
      icon: <SiTailwindcss />,
      title: "Tailwindcss",
      style: "text-sky-500",
    },
    {
      id: 6,
      icon: <GrReactjs />,
      title: "Reactjs",
      style: "text-cyan-400",
    },
    {
      id: 7,
      icon: <FaNodeJs />,
      title: "NodeJs",
      style: "text-green-500",
    },
    {
      id: 8,
      icon: <SiExpress />,
      title: "Express",
      style: "text-orange-500",
    },
    {
      id: 8,
      icon: <DiMongodb />,
      title: "Mongodb",
      style: "text-green-600",
    },
    {
      id: 8,
      icon: <TbBrandFirebase />,
      title: "Firebase",
      style: "text-yellow-400 ",
    },
  ];

  return (
    <div>
      <div className="flex  gap-6 flex-wrap p-6">
        {icons.map(({ style, id, icon, title }) => (
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
