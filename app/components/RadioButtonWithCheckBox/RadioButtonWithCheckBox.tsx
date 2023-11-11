import React from "react";

type PropsRadioButton = {
  label: string;
  isChecked: boolean;
  setSelectedProperty: (property: string) => void;
};
function RadioButtonWithCheckBox({
  label,
  isChecked = false,
  setSelectedProperty,
}: PropsRadioButton) {
  return (
    <div
      className={`mb-4 w-[270px] h-[50px] border-dotted pl-6 pr-[50px] py-3.5 ${
        isChecked ? "bg-violet-100" : "bg-white"
      } rounded-[20px] border-2 border-slate-900 justify-start items-center gap-2.5 inline-flex`}
    >
      <input
        id="property-type"
        type="checkbox"
        value="Villa"
        checked={isChecked}
        onChange={(e) => setSelectedProperty(label)}
        className="w-4 h-4 left-[2px] top-[2px] accent-violet-700 rounded-sm"
      ></input>
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
