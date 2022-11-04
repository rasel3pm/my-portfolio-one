import React from "react";
import me2 from "../../asset/picture/me2.png";
import "./about.css";
const About = () => {
  return (
    <div className="w-full py-10 text-white md:h-screen h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className=" grid justify-center items-center sm:grid-cols-2 md:grid-cols-2 gap-8 sm:px-0">
        <div className="px-10">
          <h1 className=" text-4xl text-slate-300">About Me_</h1>
          <span className="text-slate-400 text-xl">
            I have 4 years of experience building and desgining web.I love to
            work on web application using technologes like
            React,Tailwind,express,node js,mongodb
          </span>
          <div className="py-5">
            <button class="bg-sky-500 hover:bg-sky-700 rounded-full px-3 p-2 text-slate-100">
              Download Cv
            </button>
          </div>
        </div>

        <div className="picture">
          <img src={me2} />
        </div>
      </div>
    </div>
  );
};

export default About;
