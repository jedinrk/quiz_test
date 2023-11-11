import React from "react";
import { FormWrapper } from "./FormWrapper";

import Image from "next/image";
import investmentSvg from "../../../public/investment.svg";

const InvestmentIcon = () => (
  <Image src={investmentSvg} alt="Investment Icon" />
);

function UserFormInvestment() {
  return (
    <FormWrapper step="06" title="Investment in UAE" icon={<InvestmentIcon />}>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <div className="flex flex-col mt-[24px] mb-[44px]">
            <div className="w-[400px] text-zinc-500 text-base font-normal mv-[32px]">
              Have you invested in UAE before?
            </div>
            <div className="mt-[32px] flex items-center">
              <input
                type="radio"
                id="yes"
                name="experience"
                value="Yes"
                className="w-6 h-6 accent-slate-900"
              ></input>
              <label
                htmlFor="yes"
                className="ml-[10px] mr-[40px] text-slate-900 text-base font-normal"
              >
                Yes
              </label>
              <input
                type="radio"
                id="no"
                name="experience"
                value="No"
                className="w-6 h-6 accent-slate-900"
              ></input>
              <label
                htmlFor="no"
                className="ml-[10px] text-slate-900 text-base font-normal"
              >
                No
              </label>
            </div>
          </div>
        </div>
      </div>
    </FormWrapper>
  );
}

export default UserFormInvestment;
