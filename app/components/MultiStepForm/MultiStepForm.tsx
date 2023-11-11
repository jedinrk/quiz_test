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

import Image from "next/image";
import nextSvg from "../../../public/next.svg";
import prevSvg from "../../../public/previous.svg";

const NextIcon = () => (
  <Image src={nextSvg} alt="Next Icon" className="ml-[10px]" />
);
const PrevIcon = () => (
  <Image src={prevSvg} alt="Previous Icon" className="mr-[10px]" />
);

// enum PropertyType {
//   "Villa",
//   "Apartment",
//   "Townhouse",
//   "Others",
// }

// enum TimeSlot {
//   "None" = "",
//   "A" = "9AM-12PM",
//   "B" = "12PM-5PM",
//   "C" = "5PM-9PM",
//   "D" = "9PM-12AM",
// }

type FormData = {
  phoneNumber: string;
  email: string;
  timeSlot: string;
  investedBefore: boolean;
  propertyType: string;
  hasInvestment: boolean;
};

const initialData: FormData = {
  phoneNumber: "",
  email: "",
  timeSlot: "",
  investedBefore: false,
  propertyType: "",
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
                  <PrevIcon />
                  Previous
                </button>
              )}
              <button
                type="submit"
                className={`flex grow justify-end py-[20px] px-[100px] rounded-br-[18px] text-white text-sm font-bold uppercase
               bg-violet-700 disabled:text-violet-400
               enabled:hover:bg-violet-500 enabled:active:bg-violet-800
              ${isFirstStep ? "rounded-bl-[18px]" : ""}`}
              >
                {isLastStep ? "Finish This Quiz" : "Next"}
                <NextIcon />
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default MultiStepForm;
