import React from "react";
import { FormWrapper } from "./FormWrapper";

import Image from "next/image";
import investmentSvg from "../../../public/investment.svg";
import RadioChecked from "../../assets/ic_radio_checked.svg";
import RadioUnchecked from "../../assets/ic_radio_unchecked.svg";

const InvestmentIcon = () => (
  <Image src={investmentSvg} alt="Investment Icon" />
);

function UserFormInvestment({ investedInUAE, updateData }: any) {
  return (
    <FormWrapper step="06" title="Investment in UAE" icon={<InvestmentIcon />}>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <div className="flex flex-col mt-[24px] mb-[44px]">
            <div className="w-[400px] text-zinc-500 text-base font-normal mv-[32px]">
              Have you invested in UAE before?
            </div>
            <div className="mt-[32px] flex items-center">
              <Image
                src={investedInUAE ? RadioChecked : RadioUnchecked}
                alt="Radio Icon Checked"
                onClick={() => updateData({ investedInUAE: true })}
              />
              <label
                htmlFor="yes"
                className="ml-[10px] mr-[40px] text-slate-900 text-base font-normal"
              >
                Yes
              </label>
              <Image
                src={!investedInUAE ? RadioChecked : RadioUnchecked}
                alt="Radio Icon UnChecked"
                onClick={() => updateData({ investedInUAE: false })}
              />
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
