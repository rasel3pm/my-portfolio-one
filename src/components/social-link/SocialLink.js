import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";

const SocialLink = () => {
  const links = [
    {
      id: 1,
      chield: (
        <>
          Linkedin <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/rasel-kibria-4a6330255/",
    },
    {
      id: 2,
      chield: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/rasel3pm",
    },
    {
      id: 3,
      chield: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:raselkibriamuhid@gmail.com",
    },
    {
      id: 3,
      chield: (
        <>
          Resume <BsFillPersonFill size={30} />
        </>
      ),
      href: "/resune.pdf",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col fixed top-[35%] left-0">
      <ul>
        {links.map(({ id, chield, href, style, download }) => (
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
