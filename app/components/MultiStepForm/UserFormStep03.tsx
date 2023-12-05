import React, { useEffect, useState } from "react";
import { FormWrapper } from "./FormWrapper";
import RadioButton from "../RadioButton/RadioButton";

import Image from "next/image";
import clockSvg from "../../../public/clock.svg";
import { useMultiStepContext } from "@/app/contexts/MultiStepFormContext";

const ClockIcon = () => <Image src={clockSvg} alt="Clock Icon" />;

function UserFormStep03() {
  const { formData, setFormData } = useMultiStepContext();

  const setProgrammerType = (selection: string) => {
    setFormData({ ...formData, programmerType: selection });
  };
 
  return (
    <FormWrapper step="03" title="Name it" icon={<ClockIcon />}>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <div className="flex flex-col mt-[24px] mb-[44px]">
            <div className="w-[400px] text-zinc-500 text-base font-normal mv-[32px]">
              What do you call a programmer who doesn't like to share?
            </div>
            <div className="mt-[32px] flex flex-col">
              <div className="mb-[10px] flex justify-between">
                <RadioButton
                  label={"Selfish Coder"}
                  isChecked={formData.programmerType === "Selfish Coder"}
                  setSelectedTimeSlot={setProgrammerType}
                />
                <RadioButton
                  label={"Code Hoarder"}
                  isChecked={formData.programmerType === "Code Hoarder"}
                  setSelectedTimeSlot={setProgrammerType}
                />
              </div>
              <div className="flex justify-between">
                <RadioButton
                  label={"Program Scrooge"}
                  isChecked={formData.programmerType === "Program Scrooge"}
                  setSelectedTimeSlot={setProgrammerType}
                />
                <RadioButton
                  label={"Shareware Genius"}
                  isChecked={formData.programmerType === "Shareware Genius"}
                  setSelectedTimeSlot={setProgrammerType}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </FormWrapper>
  );
}

export default UserFormStep03;
