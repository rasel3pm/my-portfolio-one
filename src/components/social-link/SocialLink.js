import React from "react";
import { socialLinks } from "../../asset/DB/social-link";

const SocialLink = () => {
  return (
    <div className="hidden lg:flex flex-col fixed top-[35%] left-0">
      <ul>
        {socialLinks.map(({ id, chield, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-12 px-4 bg-slate-600  ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px]"
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
            >
              <>{chield}</>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLink;
