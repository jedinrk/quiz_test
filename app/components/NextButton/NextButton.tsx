import React, { useState } from "react";
import Image from "next/image";
import nextSvg from "../../../public/next.svg";

const NextIcon = () => (
  <Image src={nextSvg} alt="Next Icon" className="ml-[10px]" />
);

function NextButton({ nextEnabled, isFirstStep, isLastStep }: any) {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setIsTooltipVisible(false);
  };

  return (
    <div className="relative inline-block">
      <button
        type="submit"
        disabled={!nextEnabled}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`py-[20px] px-[100px] rounded-br-[18px] text-white text-sm font-bold uppercase
               bg-violet-700 disabled:text-violet-400
               enabled:hover:bg-violet-500 enabled:active:bg-violet-800 cursor-pointer
              ${isFirstStep ? "rounded-bl-[18px]" : ""}`}
      >
        {isLastStep ? "Finish This Quiz" : "Next"}
        <NextIcon />
      </button>
      <div className="absolute top-full left-1/2 translate-x-2/4 bg-slate-700 text-cyan-400 p-[8px] rounded hidden">
        {"Please complete the current step first"}
      </div>
    </div>
  );
}

export default NextButton;
