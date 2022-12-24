import React from "react";

const ContactFill = ({ placeholder, name, type, label }) => {
  return (
    <div>
      <div className="mb-5">
        <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          {label}
        </span>
        <input
          type={type}
          name={name}
          className="md:w-[500px] w-full mt-1 px-3 py-3 border focus:text-slate-700 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default ContactFill;
