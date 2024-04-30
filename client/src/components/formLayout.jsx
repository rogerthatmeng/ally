import React from "react";

const FormLayout = ({ children, handleSubmit, title, subTitle }) => {
  return (
    <div className="mx-auto my-4 sm:my-14 w-full px-[15px] max-w-[1177px] max-lg:max-w-[991px] max-md:max-w-[578px]">
      <form
        className="w-[300px] mb-8 max-sm:w-full"
        onSubmit={handleSubmit}
      >
        <h1 className="mb-5 font-[600] text-3xl">{title}</h1>
        {subTitle && <p className="mb-4 text-sm">{subTitle}</p>}
        <div>{children}</div>
      </form>

      <h3 className="text-2xl mb-3 font-[600]">More to do</h3>
      <span className="text-sm">
        Go to{" "}
        <a
          href="https://customercare.ally.com"
          className="text-[#0071c4] text-sm"
        >
          Ally Lending
        </a>
      </span>
    </div>
  );
};

export default FormLayout;
