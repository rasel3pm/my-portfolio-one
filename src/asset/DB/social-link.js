import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";

export const socialLinks = [
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
