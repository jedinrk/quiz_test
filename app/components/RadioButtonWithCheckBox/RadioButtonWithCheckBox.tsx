import React from "react";
import Image from "next/image";
import IconChecked from "../../assets/ic_checked.svg";
import IconUnchecked from "../../assets/ic_unchecked.svg";

type PropsRadioButton = {
  label: string;
  isChecked: boolean;
  setProperty: (property: string) => void;
};
function RadioButtonWithCheckBox({
  label,
  isChecked = false,
  setProperty,
}: PropsRadioButton) {
  return (
    <div
      className={`mb-4 w-[270px] h-[50px] border-dotted pl-6 pr-[50px] py-3.5 ${
        isChecked ? "bg-violet-100" : "bg-white"
      } rounded-[20px] border-2 border-slate-900 justify-start items-center gap-2.5 inline-flex cursor-pointer`}
      onClick={() => setProperty(label)}
    >
      <Image src={isChecked ? IconChecked : IconUnchecked} alt="Icon Checked" />
      <label
        htmlFor="property-type"
        className="text-slate-900 text-base font-normal"
      >
        {label}
      </label>
    </div>
    // <div
    //   className={`w-[270px] h-[50px] px-[50px] py-3.5 ${
    //     isChecked ? "bg-violet-100" : "bg-white"
    //   } rounded-[20px] border-2 border-dotted border-zinc-500 justify-center items-center gap-2.5 inline-flex`}
    // >
    //   <label className="text-slate-900 text-base font-normal">{label}</label>
    // </div>
  );
}

export default RadioButtonWithCheckBox;
