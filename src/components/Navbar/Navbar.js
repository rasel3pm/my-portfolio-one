import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineGithub } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="flex px-12 justify-between items-center text-white w-full h-20  bg-slate-900">
      <div>
        <h1 className="text-4xl font-signature text-orange-500 font-bold">
          Rasel
        </h1>
      </div>

      <ul className=" hidden md:flex">
        <li className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 hover:text-gray-300 duration-50">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 hover:text-gray-300 duration-50">
          <NavLink to="/about">about</NavLink>
        </li>
        <li className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 hover:text-gray-300 duration-50">
          <NavLink to="/portfolio">Portfolio</NavLink>
        </li>
        <li className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 hover:text-gray-300 duration-50">
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 hover:text-gray-300 duration-50">
          <NavLink to="/player">Demo Video</NavLink>
        </li>
      </ul>

      {/* Social link */}
      <div className="flex w-36 justify-center items-center">
        <span className="p-3 text-2xl hover:text-pink-500 cursor-pointer text-slate-200">
          <CiLinkedin />
        </span>
        <span className="text-2xl hover:text-pink-500 cursor-pointer text-slate-200">
          <AiOutlineGithub />
        </span>
      </div>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-10 text-gray-400 xl:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-grey-800 text-gray-500">
          <li className="px-4 cursor-pointer capitalize py-5 text-4xl text-white">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="px-4 cursor-pointer capitalize py-5 text-4xl text-white">
            <NavLink to="/about">about</NavLink>
          </li>
          <li className="px-4 cursor-pointer capitalize py-5 text-4xl text-white">
            <NavLink to="/portfolio">Portfolio</NavLink>
          </li>
          <li className="px-4 cursor-pointer capitalize py-5 text-4xl text-white">
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li className="px-4 cursor-pointer capitalize py-5 text-4xl text-white">
            <NavLink to="/player">Contact</NavLink>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
