import React from "react";

import SocialLink from "../../components/social-link/SocialLink";

// import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="flex justify-center items-center w-full bg-gradient-to-r from-gray-500 to-gray-900 md:h-screen h-screen">
      <div className="text-center">
        <SocialLink />
        <div>
          <p className="text-slate-200 text-2xl">
            Hi there <span className="text-purple-500 text-2xl">I'am a</span>
          </p>
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-700 text-8xl">
            Full Stack Developer
          </span>
        </div>

        <div className="py-4 px-20">
          <span class="block text-gray-400 text-xl xl:px-60">
            I love to work on web application using technologes like
            React,Tailwind,express,node js,mongodb
          </span>
        </div>

        <div>
          <button class="bg-green-500 hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring  px-5 py-3 rounded-full text-white ring  ring-slate-500">
            See My Work
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
