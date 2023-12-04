import { ReactNode, ReactSVGElement, useEffect, useState } from "react";
import { gsap } from "gsap";
import { useMultiStepContext } from "@/app/contexts/MultiStepFormContext";

type FormWrapperProps = {
  step: string;
  title: string;
  icon: React.JSX.Element;
  children: ReactNode;
};

export function FormWrapper({ step, title, icon, children }: FormWrapperProps) {
  const { currentStepIndex } = useMultiStepContext();

  useEffect(() => {
    const tl = gsap.timeline({});

    tl.fromTo(
      "#line span",
      {
        y: 100,
        ease: "power4.out",
        skewY: 10,
        stagger: {
          amount: 0.3,
        },
      },
      {
        duration: 1.2,
        y: 0,
        skewY: 0,
      }
    );
  }, [currentStepIndex]);
  return (
    <div className="pt-[60px] px-[60px] flex flex-col">
      <div className="flex justify-between border-b-[1px] border-zinc-500">
        <div
          id="line"
          className="relative overflow-hidden w-fullh-[31px] justify-start items-start gap-2 inline-flex"
        >
          <span className="text-slate-900 text-2xl font-normal">{step} –</span>
          <span className="text-slate-900 text-2xl font-extrabold mx-[6px]">
            {title}
          </span>
        </div>
        {icon}
      </div>
      <div>{children}</div>
    </div>
  );
}
