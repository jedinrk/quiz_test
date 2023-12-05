import React, { useState } from "react";
import { FormWrapper } from "./FormWrapper";

import Image from "next/image";
import experienceSvg from "../../../public/experience.svg";
import RadioChecked from "../../assets/ic_radio_checked.svg";
import RadioUnchecked from "../../assets/ic_radio_unchecked.svg";
import { useMultiStepContext } from "@/app/contexts/MultiStepFormContext";

const ExpereinceIcon = () => (
  <Image src={experienceSvg} alt="Expereince Icon" />
);

function UserFormStep04() {
  const { formData, setFormData } = useMultiStepContext();
  return (
    <FormWrapper step="04" title="Check your empathy" icon={<ExpereinceIcon />}>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <div className="flex flex-col mt-[24px] mb-[44px]">
            <div className="w-[400px] text-zinc-500 text-base font-normal mv-[32px]">
              Why did the computer keep its drink on the windowsill? Because it
              had too many Windows?
            </div>
            <div className="mt-[32px] flex items-center">
              <Image
                src={formData.empathy ? RadioChecked : RadioUnchecked}
                alt="Radio Icon Checked"
                onClick={() =>
                  setFormData({ ...formData, empathy: true })
                }
              />

              <label
                htmlFor="yes"
                className="ml-[10px] mr-[40px] text-slate-900 text-base font-normal"
              >
                Yes
              </label>

              <Image
                src={
                  !formData.empathy ? RadioChecked : RadioUnchecked
                }
                alt="Radio Icon UnChecked"
                onClick={() =>
                  setFormData({ ...formData, empathy: false })
                }
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

export default UserFormStep04;
