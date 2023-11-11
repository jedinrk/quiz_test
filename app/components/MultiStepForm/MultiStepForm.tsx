"use client";

import { useMultiStepForm } from "@/app/hooks/useMultiStepForm";
import React, { FormEvent, ReactEventHandler, useState } from "react";
import UserFormPhone from "./UserFormPhone";
import UserFormEmail from "./UserFormEmail";
import UserFormTimeSlot from "./UserFormTimeSlot";
import UserFormExperience from "./UserFormExperience";
import UserFormPropertyType from "./UserFormPropertyType";
import UserFormInvestment from "./UserFormInvestment";
import UserFormThankYou from "./UserFormThankYou";

enum PropertyType {
  "Villa",
  "Apartment",
  "Townhouse",
  "Others",
}

enum TimeSlot {
  "A" = "9AM-12PM",
  "B" = "12PM-5PM",
  "C" = "5PM-9PM",
  "D" = "9PM-12AM",
}

type FormData = {
  phoneNumber: string;
  email: string;
  timeSlot: TimeSlot;
  investedBefore: boolean;
  propertyType: PropertyType;
  hasInvestment: boolean;
};

const initialData: FormData = {
  phoneNumber: "",
  email: "",
  timeSlot: TimeSlot.A,
  investedBefore: false,
  propertyType: PropertyType.Villa,
  hasInvestment: false,
};

function MultiStepForm() {
  const [data, setData] = useState(initialData);
  const {
    steps,
    currentStepIndex,
    step,
    isFirstStep,
    isLastStep,
    isCompleted,
    back,
    next,
  } = useMultiStepForm([
    <UserFormPhone key={1} {...data} updateData={updateData} />,
    <UserFormEmail key={2} {...data} updateData={updateData} />,
    <UserFormTimeSlot key={3} {...data} updateData={updateData} />,
    <UserFormExperience key={4} {...data} updateData={updateData} />,
    <UserFormPropertyType key={5} {...data} updateData={updateData} />,
    <UserFormInvestment key={6} {...data} updateData={updateData} />,
    <UserFormThankYou key={7} {...data} updateData={updateData} />,
  ]);

  function updateData(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  function onSubmit(e: FormEvent) {
    console.log("onSubmit");
    e.preventDefault();
    next();
  }

  return (
    <div className="flex flex-col items-center">
      <div className="w-[670px] bg-violet-50 rounded-[20px] border-t-2 border-slate-900">
        <form onSubmit={onSubmit}>
          <div>{step}</div>
          {!isCompleted && (
            <div className="flex justify-between rounded-bl-[18px] rounded-br-[18px]">
              {!isFirstStep && (
                <button
                  type="button"
                  onClick={back}
                  className="flex grow justify-start py-[20px] px-[100px] rounded-bl-[18px] text-white text-sm font-bold uppercase
                bg-violet-700 disabled:text-violet-400
                enabled:hover:bg-violet-500 enabled:active:bg-violet-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M16.8749 9.37494C17.0406 9.37494 17.1996 9.44079 17.3168 9.558C17.434 9.67521 17.4999 9.83418 17.4999 9.99994C17.4999 10.1657 17.434 10.3247 17.3168 10.4419C17.1996 10.5591 17.0406 10.6249 16.8749 10.6249L4.75364 10.6249L9.79239 15.1599C9.91277 15.2714 9.98447 15.4258 9.99202 15.5897C9.99957 15.7536 9.94236 15.9139 9.83274 16.036C9.72312 16.1581 9.56988 16.2322 9.40611 16.2423C9.24234 16.2524 9.08116 16.1977 8.95739 16.0899L2.70739 10.4649C2.64212 10.4063 2.58993 10.3346 2.5542 10.2545C2.51847 10.1744 2.5 10.0877 2.5 9.99994C2.5 9.91222 2.51847 9.82548 2.5542 9.74537C2.58993 9.66525 2.64212 9.59355 2.70739 9.53494L8.95739 3.90994C9.08116 3.80222 9.24233 3.7475 9.40611 3.75759C9.56988 3.76768 9.72312 3.84177 9.83274 3.96386C9.94236 4.08595 9.99957 4.24626 9.99202 4.41017C9.98447 4.57408 9.91277 4.72844 9.79239 4.83994L4.75364 9.37494L16.8749 9.37494Z"
                      fill="#F5F3FF"
                    />
                  </svg>
                  &nbsp;Previous
                </button>
              )}
              <button
                type="submit"
                className={`flex grow justify-end py-[20px] px-[100px] rounded-br-[18px] text-white text-sm font-bold uppercase
               bg-violet-700 disabled:text-violet-400
               enabled:hover:bg-violet-500 enabled:active:bg-violet-800
              ${isFirstStep ? "rounded-bl-[18px]" : ""}`}
              >
                {isLastStep ? "Finish This Quiz" : "Next"}&nbsp;
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M3.12511 9.375C2.95935 9.375 2.80038 9.44085 2.68317 9.55806C2.56596 9.67527 2.50011 9.83424 2.50011 10C2.50011 10.1658 2.56596 10.3247 2.68317 10.4419C2.80038 10.5592 2.95935 10.625 3.12511 10.625L15.2464 10.625L10.2076 15.16C10.0872 15.2715 10.0155 15.4259 10.008 15.5898C10.0004 15.7537 10.0576 15.914 10.1673 16.0361C10.2769 16.1582 10.4301 16.2323 10.5939 16.2424C10.7577 16.2524 10.9188 16.1977 11.0426 16.09L17.2926 10.465C17.3579 10.4064 17.4101 10.3347 17.4458 10.2546C17.4815 10.1745 17.5 10.0877 17.5 10C17.5 9.91228 17.4815 9.82554 17.4458 9.74543C17.4101 9.66531 17.3579 9.59362 17.2926 9.535L11.0426 3.91C10.9188 3.80229 10.7577 3.74756 10.5939 3.75765C10.4301 3.76774 10.2769 3.84183 10.1673 3.96392C10.0576 4.08601 10.0004 4.24632 10.008 4.41023C10.0155 4.57414 10.0872 4.7285 10.2076 4.84L15.2464 9.375L3.12511 9.375Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default MultiStepForm;
