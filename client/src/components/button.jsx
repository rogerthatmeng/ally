import React from "react";

const Button = ({ title, ...rest }) => {
  return (
    <button
      {...rest}
      className="px-6 py-[10px] bg-[#00867a] font-[600] text-base rounded-[4px] text-center text-[#ffffff] w-full"
    >
      {title}
    </button>
  );
};

export default Button;
