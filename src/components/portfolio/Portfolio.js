import React from "react";
import { portfolioInfo } from "../../asset/DB/portfolio";
// import { NavLink } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="w-ful md:my-10 md:h-screen bg-gradient">
      <div className="max-w-screen-lg p-10 mx-auto flex flex-col bg-white justify-center w-full rounded shadow-md">
        <div className="pb-3">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-3">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolioInfo.map(({ id, href, liveLink }) => (
            <div key={id} className="shadow-md rounded-lg">
              <img
                src={href}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex justify-center item-center">
                <a
                  target="_blank"
                  href={liveLink}
                  className="w-1/2 px-6 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </a>
                <button className="w-1/2 px-6 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
