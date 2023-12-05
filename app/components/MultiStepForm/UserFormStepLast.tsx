import React, { useState } from "react";

import AnimCheck from "../AnimCheck/AnimCheck";
import { useMultiStepContext } from "@/app/contexts/MultiStepFormContext";

function UserFormThankYou() {
  const { currentStepIndex } = useMultiStepContext();

  return (
    <div className="pt-[100px] pb-[110px] flex flex-col items-center">
      <div>{currentStepIndex === 6 && <AnimCheck />}</div>
      <div className="mt-[10px] text-slate-900 text-2xl font-extrabold">
        Thank you for answers!
      </div>
    </div>
  );
}

export default UserFormThankYou;
