import React from "react";
import { FormWrapper } from "./FormWrapper";

import Image from "next/image";
import RadioChecked from "../../assets/ic_radio_checked.svg";
import RadioUnchecked from "../../assets/ic_radio_unchecked.svg";
import { useMultiStepContext } from "@/app/contexts/MultiStepFormContext";

const EmpathyIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path
      d="M33.75 6.875H6.25C5.75272 6.875 5.27581 7.07254 4.92417 7.42417C4.57254 7.77581 4.375 8.25272 4.375 8.75V31.25C4.375 31.7473 4.57254 32.2242 4.92417 32.5758C5.27581 32.9275 5.75272 33.125 6.25 33.125H33.75C34.2473 33.125 34.7242 32.9275 35.0758 32.5758C35.4275 32.2242 35.625 31.7473 35.625 31.25V8.75C35.625 8.25272 35.4275 7.77581 35.0758 7.42417C34.7242 7.07254 34.2473 6.875 33.75 6.875ZM34.375 31.25C34.375 31.4158 34.3092 31.5747 34.1919 31.6919C34.0747 31.8092 33.9158 31.875 33.75 31.875H6.25C6.08424 31.875 5.92527 31.8092 5.80806 31.6919C5.69085 31.5747 5.625 31.4158 5.625 31.25V8.75C5.625 8.58424 5.69085 8.42527 5.80806 8.30806C5.92527 8.19085 6.08424 8.125 6.25 8.125H33.75C33.9158 8.125 34.0747 8.19085 34.1919 8.30806C34.3092 8.42527 34.375 8.58424 34.375 8.75V31.25ZM11.875 13.125C11.875 13.3722 11.8017 13.6139 11.6643 13.8195C11.527 14.025 11.3318 14.1852 11.1034 14.2798C10.8749 14.3745 10.6236 14.3992 10.3811 14.351C10.1387 14.3028 9.91593 14.1837 9.74112 14.0089C9.5663 13.8341 9.44725 13.6113 9.39902 13.3689C9.35079 13.1264 9.37554 12.8751 9.47015 12.6466C9.56476 12.4182 9.72498 12.223 9.93054 12.0857C10.1361 11.9483 10.3778 11.875 10.625 11.875C10.9565 11.875 11.2745 12.0067 11.5089 12.2411C11.7433 12.4755 11.875 12.7935 11.875 13.125ZM18.125 13.125C18.125 13.3722 18.0517 13.6139 17.9143 13.8195C17.777 14.025 17.5818 14.1852 17.3534 14.2798C17.1249 14.3745 16.8736 14.3992 16.6311 14.351C16.3887 14.3028 16.1659 14.1837 15.9911 14.0089C15.8163 13.8341 15.6972 13.6113 15.649 13.3689C15.6008 13.1264 15.6255 12.8751 15.7201 12.6466C15.8148 12.4182 15.975 12.223 16.1805 12.0857C16.3861 11.9483 16.6278 11.875 16.875 11.875C17.2065 11.875 17.5245 12.0067 17.7589 12.2411C17.9933 12.4755 18.125 12.7935 18.125 13.125Z"
      fill="#71717A"
    />
  </svg>
);

function UserFormStep04() {
  const { formData, setFormData } = useMultiStepContext();
  return (
    <FormWrapper step="04" title="Check your empathy" icon={<EmpathyIcon />}>
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
                onClick={() => setFormData({ ...formData, empathy: true })}
              />

              <label
                htmlFor="yes"
                className="ml-[10px] mr-[40px] text-slate-900 text-base font-normal"
              >
                Yes
              </label>

              <Image
                src={!formData.empathy ? RadioChecked : RadioUnchecked}
                alt="Radio Icon UnChecked"
                onClick={() => setFormData({ ...formData, empathy: false })}
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
