import React from "react";
import { FormWrapper } from "./FormWrapper";

import Image from "next/image";
import investmentSvg from "../../../public/investment.svg";
import RadioChecked from "../../assets/ic_radio_checked.svg";
import RadioUnchecked from "../../assets/ic_radio_unchecked.svg";
import { useMultiStepContext } from "@/app/contexts/MultiStepFormContext";

const InvestmentIcon = () => (
  <Image src={investmentSvg} alt="Investment Icon" />
);

function UserFormStep06() {
  const { formData, setFormData } = useMultiStepContext();
  return (
    <FormWrapper step="06" title="Be honest" icon={<InvestmentIcon />}>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <div className="flex flex-col mt-[24px] mb-[44px]">
            <div className="w-[400px] text-zinc-500 text-base font-normal mv-[32px]">
              Is debugging like being the detective in a crime movie where
              you're also the murderer, and you have to find clues that you left
              for yourself? Yes or no?
            </div>
            <div className="mt-[32px] flex items-center">
              <Image
                src={formData.honesty ? RadioChecked : RadioUnchecked}
                alt="Radio Icon Checked"
                onClick={() => setFormData({ ...formData, honesty: true })}
              />
              <label
                htmlFor="yes"
                className="ml-[10px] mr-[40px] text-slate-900 text-base font-normal"
              >
                Yes
              </label>
              <Image
                src={!formData.honesty ? RadioChecked : RadioUnchecked}
                alt="Radio Icon UnChecked"
                onClick={() => setFormData({ ...formData, honesty: false })}
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

export default UserFormStep06;
