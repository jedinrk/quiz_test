import React from "react";
import { FormWrapper } from "./FormWrapper";
import RadioButtonWithCheckBox from "../RadioButtonWithCheckBox/RadioButtonWithCheckBox";

import { useMultiStepContext } from "@/app/contexts/MultiStepFormContext";

const AlgoIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <g clip-path="url(#clip0_5_1626)">
      <path
        d="M18.9786 32.6881C20.1911 33.9007 21.6337 34.5 23.3333 34.5H26.1667V32.1667H23.3339H23.3333V31.6667L18.9786 32.6881ZM18.9786 32.6881C17.766 31.4756 17.1667 30.033 17.1667 28.3333C17.1667 26.6337 17.766 25.1911 18.9786 23.9786C20.1911 22.766 21.6337 22.1667 23.3333 22.1667H26.1667M18.9786 32.6881L26.1667 22.1667M26.1667 22.1667V24.5H23.3333C22.2829 24.5 21.371 24.8802 20.6248 25.6265C19.8785 26.3727 19.4987 27.2842 19.5 28.334M26.1667 22.1667L19.5 28.334M19.5 28.334C19.5 28.3337 19.5 28.3335 19.5 28.3333H20L19.5 28.334ZM5.5 30.0006V30V6.66668C5.5 5.8838 5.77315 5.22564 6.33356 4.66523C6.89394 4.10485 7.55136 3.8324 8.33273 3.83335H8.33334H31.6667C32.4495 3.83335 33.1077 4.1065 33.6681 4.6669C34.2285 5.22729 34.501 5.8847 34.5 6.66607V6.66668V17.9092C34.4124 17.8973 34.3254 17.8868 34.2389 17.8777C33.9548 17.8479 33.6528 17.8333 33.3333 17.8333H32.1667V6.66668V6.16668H31.6667H8.33334H7.83334V6.66668V28.3333V30V30.5H8.33334H13.0887C13.191 30.9847 13.3156 31.4531 13.463 31.905C13.5666 32.2229 13.6892 32.5324 13.8308 32.8333H8.33334C7.55046 32.8333 6.89229 32.5602 6.33189 31.9998C5.7715 31.4394 5.49905 30.782 5.5 30.0006ZM14.5392 22.6224C13.8289 23.7147 13.3434 24.8971 13.0836 26.1667H12.1667V20.5H16.3651C15.6634 21.1225 15.0544 21.8301 14.5392 22.6224ZM17.8333 10.5V16.1667H12.1667V10.5H17.8333ZM27.8333 10.5V16.1667H22.1667V10.5H27.8333ZM23.8333 27.1667H32.8333V29.5H23.8333V27.1667ZM30.5 34.5V32.1667L36.6667 28.3333C36.6667 27.4167 36.34 26.6317 35.6867 25.9783C35.0333 25.325 34.2489 24.9989 33.3333 25V24.5H33.3327H30.5V22.1667H33.3333C35.0347 22.1667 36.4778 22.7606 37.6899 23.9604C38.8993 25.1574 39.5 26.605 39.5 28.3333C39.5 30.033 38.9007 31.4756 37.6881 32.6881C36.4756 33.9007 35.033 34.5 33.3333 34.5H30.5Z"
        fill="#71717A"
        stroke="#F5F3FF"
      />
    </g>
    <defs>
      <clipPath id="clip0_5_1626">
        <rect width="40" height="40" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

function UserFormStep05() {
  const { formData, setFormData } = useMultiStepContext();

  const setAlgoThought = (selection: string) => {
    setFormData({ ...formData, algoThought: selection });
  };

  return (
    <FormWrapper step="05" title="Guess the answer" icon={<AlgoIcon />}>
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
