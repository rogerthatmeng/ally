import React from "react";

const Input = ({ title, children, ...rest }) => {
  return (
    <div className="w-full relative cursor-pointer mb-5">
      <label className="text-xs mb-1 block">{title}</label>
      <input
        type="text"
        className={`p-3 text-sm bg-[#f8f8f8] rounded-t-[4px] w-full border-b-[1px] border-[#959595] focus:border-[#0071c4]`}
        required
        {...rest}
      />
      {children ? children : null}
    </div>
  );
};

export default Input;
