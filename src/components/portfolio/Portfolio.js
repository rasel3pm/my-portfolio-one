import React from "react";
import dashboard from "../../asset/picture/1.PNG";
import blogSite from "../../asset/picture/2.PNG";
import foodApp from "../../asset/picture/3.PNG";
import search from "../../asset/picture/searc.PNG";

const Portfolio = () => {
  const Portfolio = [
    {
      id: 1,
      href: dashboard,
      liveLink: "https://admin-react-dashboard-rsl.netlify.app",
    },
    {
      id: 2,
      href: blogSite,
      liveLink: "https://assignment-7-react-blog-website.netlify.app",
    },
    {
      id: 3,
      href: foodApp,
      liveLink: "https://ass-6-dev-react-app.netlify.app",
    },
    {
      id: 3,
      href: search,
      liveLink: "https://filter-data-react-app.netlify.app",
    },
    {
      id: 3,
      href: foodApp,
    },
    {
      id: 3,
      href: foodApp,
    },
  ];
  return (
    <div className="w-full  text-white md:h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {Portfolio.map(({ id, href, liveLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={href}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex justify-center item-center">
                <a
                  target="_blank"
                  href={liveLink}
                  className="w-1/2 px-6 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </a>
                <a
                  target="_blank"
                  href={liveLink}
                  className="w-1/2 px-6 m-4 duration-200 hover:scale-105"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;