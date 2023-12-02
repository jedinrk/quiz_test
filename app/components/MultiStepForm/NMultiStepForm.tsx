import React, {
  Children,
  FormEvent,
  ReactNode,
  useEffect,
  useState,
} from "react";
import {
  MultiStepFormProvider,
  useMultiStepContext,
} from "../../contexts/MultiStepFormContext";
import { gsap } from "gsap";

import Image from "next/image";
import nextSvg from "../../../public/next.svg";
import prevSvg from "../../../public/previous.svg";
import { Inter } from "next/font/google";

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

const MultiStepForm = ({ children }: { children: ReactNode }) => {
  const { currentStepIndex, next, back, formData } = useMultiStepContext();
  const [nextEnabled, setNextEnabled] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const totalSteps = React.Children.count(children);
  const isFirstStep = currentStepIndex === 0;
  const isLastStep = currentStepIndex === totalSteps - 2;
  const isCompleted = currentStepIndex === totalSteps - 1;


  const handleMouseEnter = () => {
    setIsTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setIsTooltipVisible(false);
  };

  function onPreviousButton() {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    const currentStep = `#step-${currentStepIndex}`;
    const prevStep = `#step-${currentStepIndex - 1}`;
    console.log(`currentStep: `, currentStep);
    console.log(`prevStep: `, prevStep);

    tl.to(currentStep, { y: `0%` }, 0).to(
      prevStep,
      {
        y: `${currentStepIndex == 1 ? "0%" : "-100%"}`,
      },
      0
    );

    back();
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (nextEnabled) {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      const currentStep = `#step-${currentStepIndex}`;
      const nextStep = `#step-${currentStepIndex + 1}`;

      tl.to(currentStep, { y: `${-100 * (currentStepIndex + 1)}%` }, 0).to(
        nextStep,
        { y: "-100%" },
        0
      );
      next();
    }
  }

  function isNextDisabled() {
    console.log("isNextDisabled: ", currentStepIndex);
    switch (currentStepIndex) {
      case 0:
        console.log("formData.phoneNumber: ", formData.phoneNumber);
        if (formData.phoneNumber === "") {
          console.log("formData.phoneNumber is empty");
          setNextEnabled(false);
          return;
        }
        break;
      case 1:
        if (formData.email === "") {
          setNextEnabled(false);
          return;
        }
        break;
      case 2:
        if (formData.timeSlot === "") {
          setNextEnabled(false);
          return;
        }
        break;
      case 4:
        if (formData.propertyType === "") {
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

  useEffect(isNextDisabled, [currentStepIndex, formData]);

  useEffect(() => {
    console.log("nextEnabled changed : ", nextEnabled);
  }, [nextEnabled]);

  const renderStep = () => {
    const stepArray = React.Children.toArray(children);
    return stepArray[currentStepIndex] || null;
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-[670px] bg-violet-50 rounded-[20px] border-t-2 border-slate-900 overflow-hidden">
        <form onSubmit={onSubmit}>
          <div className="relative">
            {Children.map(children, (child, index) => (
              <div
                id={`step-${index}`}
                key={index}
                className={`${
                  index === 0 ? "relative" : "absolute"
                } w-full h-full`}
              >
                {child}
              </div>
            ))}
          </div>
          {/* <div id="container-step">{step}</div> */}
          {!isCompleted && (
            <div className="relative flex justify-between rounded-bl-[18px] rounded-br-[18px]">
              {!isFirstStep && (
                <button
                  type="button"
                  onClick={onPreviousButton}
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
};

export default MultiStepForm;
