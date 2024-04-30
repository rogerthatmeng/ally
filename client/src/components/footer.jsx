import React from "react";

const Footer = () => {
  return (
    <div className="my-4 md:my-8 mt-14 mx-auto text-sm [&>*]:text-[#666666] w-full py-6 border-t border-t-[#666666] b px-[15px] max-w-[1177px] max-lg:max-w-[991px] max-md:max-w-[578px]">
      <div className="flex items-center flex-wrap justify-center gap-3 mb-5">
        <a
          href="#"
          className="text-[#0071c4] font-[600]"
        >
          Ally Community
        </a>
        <a
          href="#"
          className="text-[#0071c4] font-[600]"
        >
          Security
        </a>
        <a
          href="#"
          className="text-[#0071c4] font-[600]"
        >
          Privacy
        </a>
        <a
          href="#"
          className="text-[#0071c4] font-[600]"
        >
          Legal
        </a>
        <a
          href="#"
          className="text-[#0071c4] font-[600]"
        >
          Targeted Advertising Preferences
        </a>
      </div>
      <p className="mb-2">A FEW THINGS YOU SHOULD KNOW</p>
      <p className="mb-2">
        Securities products and services are offered through Ally Invest
        Securities LLC, member{" "}
        <a
          href="#"
          className="font-[600] text-[#0071c4]"
        >
          FINRA / SIPC
        </a>{" "}
        . For background on Ally Invest Securities go to{" "}
        <a
          href="#"
          className="font-[600] text-[#0071c4]"
        >
          FINRA’s BrokerCheck
        </a>
        . Advisory services are offered through Ally Invest Advisors Inc., a
        registered investment adviser. Ally Bank, Ally Invest Advisors, and Ally
        Invest Securities are wholly owned subsidiaries of Ally Financial Inc.
        <a
          href="#"
          className="font-[600] text-[#0071c4]"
        >
          View disclosures
        </a>
        . Securities products are{" "}
        <span className="font-[600]">
          NOT FDIC INSURED, NOT BANK GUARANTEED, and MAY LOSE VALUE.
        </span>
      </p>
      <p className="mb-2">
        Options involve risk and are not suitable for all investors. Review the{" "}
        <a
          href="#"
          className="font-[600] text-[#0071c4]"
        >
          Characteristics and Risks of Standardized Options brochure
        </a>{" "}
        before you begin trading options. Options investors may lose the entire
        amount of their investment or more in a relatively short period of time.
      </p>
      <p className="mb-2">
        Trading on margin involves risk. You can lose more funds than you
        deposit in a margin account. Please review{" "}
        <a
          href="#"
          className="font-[600] text-[#0071c4]"
        >
          Margin Account Agreement and Disclosure
        </a>{" "}
        (PDF) for more information regarding margin trading.
      </p>
      <p className="mb-2">
        Deposit and mortgage products are provided by Ally Bank, a Member FDIC
        and Equal Housing Lender , NMLS ID 181005.
      </p>
      <p className="mb-3">
        Ally Auto accounts serviced by Ally Servicing LLC,{" "}
        <a
          href="#"
          className="font-[600] text-[#0071c4]"
        >
          NMLS ID 212403
        </a>
        .
      </p>
      <p>©2009 – {new Date().getFullYear()} Ally Financial, Inc.</p>
    </div>
  );
};

export default Footer;
