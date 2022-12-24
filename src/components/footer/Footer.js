import React from "react";
import Brand from "../../asset/picture/brand.png";

const Footer = () => {
  return (
    <div className="bg-slate-600 p-4 text-slate-300 flex justify-around items-center">
      <div className="w-28">
        <img src={Brand} />
      </div>

      <div>
        <ul className="flex">
          <li className="mr-4 cursor-pointer hover:text-slate-400">
            <a href="https://www.facebook.com/Raselkibria11/" target="_blank">
              Facebook
            </a>
          </li>
          <li className="mr-4 cursor-pointer hover:text-slate-400">
            <a
              href="https://www.linkedin.com/in/rasel-kibria-4a6330255/"
              target="_blank"
            >
              Linkedin
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
