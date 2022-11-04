import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className=" flex fixed justify-between items-center text-white w-full px-20 h-20  bg-slate-900 ">
      <div>
        <h1 className="text-4xl font-signature text-orange-500 font-bold">
          Rasel
        </h1>
      </div>

      <ul className=" hidden md:flex">
        <li className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 hover:text-gray-300 duration-50">
          home
        </li>
        <li className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 hover:text-gray-300 duration-50">
          about
        </li>
        <li className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 hover:text-gray-300 duration-50">
          contact
        </li>{" "}
        <li className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 hover:text-gray-300 duration-50">
          Portfolio
        </li>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-10 text-gray-400 xl:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-grey-800 text-gray-500">
          <li className="px-4 cursor-pointer capitalize py-5 text-4xl text-white">
            about
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
