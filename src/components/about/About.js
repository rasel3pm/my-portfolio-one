import React from "react";
import me2 from "../../asset/picture/me2.png";
import Skill from "../skill/Skill";
import "./about.css";
const About = () => {
  return (
    <section className="w-full text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="max-w-screen-lg p-4 md:h-screen mx-auto md:flex justify-center items-center">
        <div className="p-4">
          <h1 className="text-4xl text-white font-bold inline border-b-4 border-gray-500">
            About Me
          </h1>
          <div className="py-5">
            <span className="text-slate-200 text-xl">
              I have 4 years of experience building and desgining web.I love to
              work on web application using technologes like
              React,Tailwind,express,node js,mongodb
            </span>
          </div>
          <div className="py-5">
            <button class="bg-sky-500 hover:bg-sky-700 rounded-full px-3 p-2 text-slate-100">
              Download Cv
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <img
            src={me2}
            className="w-80 h-auto rounded-2xl shadow-xl md:w-96"
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Skill />
      </div>
    </section>
  );
};

export default About;
