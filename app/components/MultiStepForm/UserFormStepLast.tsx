import React from "react";

import AnimCheck from "../AnimCheck/AnimCheck";
import { useMultiStepContext } from "@/app/contexts/MultiStepFormContext";

function UserFormStepLast() {
  const { currentStepIndex } = useMultiStepContext();

  return (
    <div className="pt-[100px] pb-[110px] flex flex-col items-center">
      <div>{currentStepIndex === 6 && <AnimCheck />}</div>
      <div className="mt-[10px] text-slate-900 text-2xl font-extrabold">
        Thank you for answers!
      </div>
      <div className="mt-[16px] w-[400px] text-center text-slate-900 text-base font-normal leading-snug">
        Happy coding, and let’s your programming prowess shines brighter than a
        well-commented code!
      </div>
    </div>
  );
}

export default UserFormStepLast;
