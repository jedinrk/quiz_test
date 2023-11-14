"use client";

import { useMultiStepForm } from "@/app/hooks/useMultiStepForm";
import React, {
  FormEvent,
  ReactEventHandler,
  useEffect,
  useState,
} from "react";

import { Inter } from "next/font/google";

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

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const NextIcon = () => (
  <Image src={nextSvg} alt="Next Icon" className="ml-[10px]" />
);

const NextDisabledIcon = () => (
  <Image
    src={nextSvg}
    alt="Next Disabled Icon"
    className="ml-[10px] opacity-50"
  />
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
  investedWithAzizi: boolean;
  propertyType: string;
  investedInUAE: boolean;
};

const initialData: FormData = {
  phoneNumber: "",
  email: "",
  timeSlot: "",
  investedWithAzizi: false,
  propertyType: "",
  investedInUAE: false,
};

function MultiStepForm() {
  const [data, setData] = useState(initialData);
  const [nextEnabled, setNextEnabled] = useState(false);
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
    <UserFormThankYou key={7} {...data} />,
  ]);

  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setIsTooltipVisible(false);
  };

  function updateData(fields: Partial<FormData>) {
    console.log("updateData: ", fields);
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  function onSubmit(e: FormEvent) {
    console.log("onSubmit");
    e.preventDefault();
    next();
  }

  function isNextDisabled() {
    console.log("isNextDisabled: ", currentStepIndex);
    switch (currentStepIndex) {
      case 0:
        console.log("data.phoneNumber: ", data.phoneNumber);
        if (data.phoneNumber === "") {
          console.log("data.phoneNumber is empty");
          setNextEnabled(false);
          return;
        }
        break;
      case 1:
        if (data.email === "") {
          setNextEnabled(false);
          return;
        }
        break;
      case 2:
        if (data.timeSlot === "") {
          setNextEnabled(false);
          return;
        }
        break;
      case 4:
        if (data.propertyType === "") {
          setNextEnabled(false);
          return;
        }
        break;
      default:
        setNextEnabled(true);
    }
    console.log("seting NextEnabled: true");
    setNextEnabled(true);
  }

  useEffect(isNextDisabled, [currentStepIndex, data]);

  useEffect(() => {
    console.log("nextEnabled changed : ", nextEnabled);
  }, [nextEnabled]);

  return (
    <div className="flex flex-col items-center">
      <div className="w-[670px] bg-violet-50 rounded-[20px] border-t-2 border-slate-900">
        <form onSubmit={onSubmit}>
          <div>{step}</div>
          {!isCompleted && (
            <div className="relative flex justify-between rounded-bl-[18px] rounded-br-[18px]">
              {!isFirstStep && (
                <button
                  type="button"
                  onClick={back}
                  className="flex grow justify-start py-[20px] px-[100px] rounded-bl-[18px] text-white text-sm font-bold uppercase
                bg-violet-700 disabled:text-violet-400 cursor-pointer
                enabled:hover:bg-violet-500 enabled:active:bg-violet-800"
                >
                  <PrevIcon />
                  Previous
                </button>
              )}
              <button
                type="submit"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`group flex grow justify-end py-[20px] px-[100px] rounded-br-[18px] text-sm font-bold uppercase
               bg-violet-700 ${
                 nextEnabled
                   ? `text-white hover:bg-violet-500 active:bg-violet-800`
                   : `text-violet-400`
               }
                cursor-pointer
              ${isFirstStep ? "rounded-bl-[18px]" : ""}`}
              >
                {isLastStep ? "Finish This Quiz" : "Next"}
                {nextEnabled ? <NextIcon /> : <NextDisabledIcon />}
              </button>
              {!nextEnabled && isTooltipVisible && (
                <label
                  className={`absolute top-0 right-0 -translate-y-1/2 translate-x-2 px-2.5 py-[9px] opacity-80 bg-slate-900 rounded-[20px] flex-col justify-center items-center text-white text-xs font-normal ${inter.className}`}
                >
                  {"Please complete the current step first"}
                </label>
              )}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default MultiStepForm;
