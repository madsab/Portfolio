import React from "react";

const Input = ({ ...props }) => {
  return (
    <input
      className="bg-slate-950 rounded-md p-2"
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
    ></input>
  );
};

export default Input;
