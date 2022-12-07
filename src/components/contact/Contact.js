import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";
import ContactFill from "./ContactFill";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q3okkzm",
        "template_g1w235j",
        form.current,
        "KGgbn12kOE69yHXmQ"
      )
      .then(
        () => {
          swal("Good job!", "Message Sent Successfully", "success");
          e.target.reset();
        },
        () => {
          swal("Message Failed", "Try Again ");
        }
      );
  };
  return (
    <div>
      <div className="max-w-screen-lg bg-white mx-auto m-5 p-0 md:my-10 rounded shadow-md flex md:flex h-screen justify-center items-center ">
        <div className="">
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-5">
              <h1 className="text-4xl text-slate-600 font-bold inline border-b-4 border-gray-500">
                Contact
              </h1>
            </div>

            <ContactFill />

            <div className="mb-5">
              <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Email
              </span>
              <input
                type="email"
                name="user_email"
                className="md:w-[500px] mt-1 px-3 py-3 border focus:text-slate-700 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-96 rounded-md sm:text-sm focus:ring-1"
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
                name="message"
                className="md:w-[500px] mt-1 px-3 py-3 border focus:text-slate-700 border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-96 rounded-md sm:text-sm focus:ring-1"
                placeholder="Type Your Message..."
              />
            </div>

            <div className="mb-5">
              <button
                type="submit"
                value="Send"
                className="md:w-1/4 mt-1 px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-96 rounded-md sm:text-sm focus:ring-1"
              >
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
