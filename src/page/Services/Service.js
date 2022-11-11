import React from "react";
import { BiMerge } from "react-icons/bi";
import { BsLayersFill } from "react-icons/bs";
import { IoIosTimer } from "react-icons/io";
import { MdWeb } from "react-icons/md";
import { BsDisplay } from "react-icons/bs";
import { GrReactjs } from "react-icons/gr";

// MdWebAsset
// MdWebStories
//

const Service = () => {
  const Service = [
    {
      id: 1,
      icon: <BiMerge />,
      name: "Mern Project",
      title: "Simple paran ruru ry8rb jbur uuri ru",
    },
    {
      id: 2,
      icon: <BsLayersFill />,
      name: "Landing Page",
      title: "Simple paran ruru ry8rb jbur uuri ru",
    },
    {
      id: 3,
      icon: <IoIosTimer />,
      name: "Speed Optimize",
      title: "Simple paran ruru ry8rb jbur uuri ru",
    },
    {
      id: 4,
      icon: <MdWeb />,
      name: "Responsive Design",
      title: "Simple paran ruru ry8rb jbur uuri ru",
    },
    {
      id: 5,
      icon: <BsDisplay />,
      name: "Seo Friendly",
      title: "Simple paran ruru ry8rb jbur uuri ru",
    },
    {
      id: 6,
      icon: <GrReactjs />,
      name: "React",
      title: "Simple paran ruru ry8rb jbur uuri ru",
    },
  ];
  return (
    <div className="w-full  text-white md:h-screen bg-gradient-to-r from-indigo-500 via-indigo-400 to-indigo-700">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Service
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {Service.map(({ id, icon, name, title }) => (
            <div
              key={id}
              className="border border-slate-400 hover:border-orange-300 transition duration-150 rounded-lg p-7 text-center"
            >
              <div className="flex justify-center">
                <span className="text-slate-100 p-5 text-3xl bg-orange-300 rounded-full">
                  {icon}
                </span>
              </div>
              <div>
                <span className="text-2xl font-bold">{name}</span>
              </div>
              <div>
                <span className="text-xs">{title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
