import React from "react";
import Input from "./atoms/Input";
import Button from "./atoms/Button";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full min-h-screen flex justify-center items-center "
    >
      <div className="flex flex-col h-fit bg-theme-lightgray rounded-lg justify-center items-center border-2 shadow-3xl">
        <p className="text-theme-blue  ">Have a question?</p>
        <p className="text-2xl p-2">
          Send me a message and i&apos;ll answer as best i can!
        </p>
        <div className="flex w-[90%] ">
          <div>
            <p>Name:</p>
            <Input type="text" placeholder="Your full name" />
          </div>
          <div>
            <p>Email:</p>
            <Input type="email" placeholder="Your Email" />
          </div>
        </div>
        <textarea
          className="bg-slate-950 rounded-lg w-[90%] my-2 p-2"
          placeholder="Your message..."
        ></textarea>
        <Button>Send</Button>
      </div>
    </div>
  );
};

export default Contact;
