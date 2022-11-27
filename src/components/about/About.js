import React from "react";
import me2 from "../../asset/picture/me2.png";
import Skill from "../skill/Skill";
import "./about.css";
const About = () => {
  return (
    <section className="w-full pt-16">
      <div className="max-w-screen-lg p-10 mx-auto md:flex justify-center items-center bg-white shadow rounded">
        <div className="p-4">
          <h1 className="text-4xl text-slate-700 font-bold inline border-b-4 border-gray-500">
            About Me
          </h1>
          <div className="py-5">
            <span className=" text-xl">
              <p>
                {" "}
                I am Rasel Kibria,a hard working motivated learner. 2 years of
                experience building and desgining web.I love to work on web
                application using technologes like HTML CSS Boostrup Tailwindcss
                JavaScript React,Tailwind,express,node js,mongodb.
              </p>
              <br />
              <p>I Expect want to high level web Developer.</p>
            </span>
          </div>
          <div className="py-5 text-center md:text-left">
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
