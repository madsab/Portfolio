import React from "react";

const Button = ({ ...props }) => {
  return (
    <button className=" relative overflow-hidden border-2 p-2 rounded-3xl transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-theme-blue before:transition-transform before:duration-300 before:content-[''] before:hover:scale-x-100 before:rounded-3xl">
      {props.children}
    </button>
  );
};

export default Button;
