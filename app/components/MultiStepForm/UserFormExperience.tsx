import React from "react";
import { FormWrapper } from "./FormWrapper";

function UserFormExperience() {
  return (
    <FormWrapper
      step="04"
      title="Experience"
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M10.1833 9.3667L3.75 15.7167V24.4L10 30.6334H36.25V9.3667H10.1833ZM8.025 18.125C8.3451 18.1234 8.65848 18.2168 8.92543 18.3934C9.19238 18.5701 9.40089 18.822 9.52453 19.1172C9.64817 19.4125 9.68138 19.7378 9.61995 20.052C9.55851 20.3661 9.4052 20.6549 9.17944 20.8819C8.95368 21.1088 8.66563 21.2636 8.35181 21.3267C8.03798 21.3897 7.71249 21.3582 7.4166 21.2361C7.12071 21.114 6.86773 20.9068 6.68971 20.6407C6.5117 20.3747 6.41667 20.0618 6.41667 19.7417C6.41557 19.5298 6.45636 19.3198 6.53669 19.1237C6.61703 18.9276 6.73532 18.7493 6.88478 18.599C7.03424 18.4488 7.21191 18.3296 7.40759 18.2483C7.60326 18.1669 7.81309 18.125 8.025 18.125Z"
            stroke="#71717A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      }
    >
      <div className="flex flex-col">
        <div className="flex flex-col">
          <div className="flex flex-col mt-[24px] mb-[44px]">
            <div className="w-[400px] text-zinc-500 text-base font-normal mv-[32px]">
              Have you invested with AZIZI before?
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

export default UserFormExperience;
