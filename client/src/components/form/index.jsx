import React from "react";
import "./index.css";

const Form = ({ id, label, type, handleChange }) => {
  return (
    <div className="relative ring-[1px] ring-purple-500 rounded-lg">
      <input
        type={type}
        autoComplete="false"
        id={id}
        required
        name={label}
        onChange={handleChange}
        className=" outline-none w-full text-sm rounded-lg  px-3 py-2 pt-4 "
      />

      <label
        htmlFor={id}
        className="absolute left-2 transition-all duration-500 text-purple-500 capitalize min-w-[100px] translate-y-[-50%] top-[50%]"
      >
        {label}
      </label>
    </div>
  );
};

export default Form;
