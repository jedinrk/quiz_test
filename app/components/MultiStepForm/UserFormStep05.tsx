import React, { useState } from "react";
import { FormWrapper } from "./FormWrapper";
import RadioButtonWithCheckBox from "../RadioButtonWithCheckBox/RadioButtonWithCheckBox";

import Image from "next/image";
import propertySvg from "../../../public/property.svg";
import { useMultiStepContext } from "@/app/contexts/MultiStepFormContext";

const PropertyIcon = () => <Image src={propertySvg} alt="PropertyIcon" />;

function UserFormStep05() {
  const { formData, setFormData } = useMultiStepContext();

  const setAlgoThought = (selection: string) => {
    setFormData({ ...formData, algoThought: selection });
  };

  return (
    <FormWrapper step="05" title="Guess the answer" icon={<PropertyIcon />}>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <div className="flex flex-col mt-[24px] mb-[44px]">
            <div className="w-[400px] text-zinc-500 text-base font-normal">
              What did the algorithm say to the dataset?
            </div>
            <div className="flex flex-col mt-[32px]">
              <div className="flex justify-between">
                <RadioButtonWithCheckBox
                  label="You complete me"
                  isChecked={formData.algoThought === "You complete me"}
                  setProperty={setAlgoThought}
                />
                <RadioButtonWithCheckBox
                  label="Sorry, you're not my type"
                  isChecked={
                    formData.algoThought === "Sorry, you're not my type"
                  }
                  setProperty={setAlgoThought}
                />
              </div>
              <div className="flex justify-between">
                <RadioButtonWithCheckBox
                  label="Let's loop together"
                  isChecked={formData.algoThought === "Let's loop together"}
                  setProperty={setAlgoThought}
                />
                <RadioButtonWithCheckBox
                  label="We need to sort things out"
                  isChecked={
                    formData.algoThought === "We need to sort things out"
                  }
                  setProperty={setAlgoThought}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </FormWrapper>
  );
}

export default UserFormStep05;
