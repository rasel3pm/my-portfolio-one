import React from "react";

const Contact = () => {
  return (
    <div className=" backIma">
      <div className="max-w-screen-lg mx-auto p-6 flex md:flex h-screen justify-center items-center ">
        <div>
          <form>
            <div className="mb-5">
              <h1 className="text-4xl text-white font-bold inline border-b-4 border-gray-500">
                Contact
              </h1>
            </div>
            <div className="mb-5">
              <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Name
              </span>
              <input
                type="text"
                name="name"
                className="md:w-[500px] mt-1 px-3 py-2 bg-slate-700 md:border-none focus:text-slate-200 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-96 rounded-md sm:text-sm focus:ring-1"
                placeholder="Example : Jone"
              />
            </div>

            <div className="mb-5">
              <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Email
              </span>
              <input
                type="email"
                name="email"
                className="md:w-[500px] mt-1 px-3 py-2 bg-slate-700 md:border-none focus:text-slate-200 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-96 rounded-md sm:text-sm focus:ring-1"
                placeholder="you@example.com"
              />
            </div>
            <div className="mb-5">
              <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Message
              </span>
              <textarea
                rows="6"
                type="textarea"
                name="email"
                className="md:w-[500px] mt-1 px-3 py-2 bg-slate-700 md:border-none focus:text-slate-200 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-96 rounded-md sm:text-sm focus:ring-1"
                placeholder="jknlkjij"
              />
            </div>

            <div className="mb-5">
              <button className="md:w-1/4 mt-1 px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-96 rounded-md sm:text-sm focus:ring-1">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
