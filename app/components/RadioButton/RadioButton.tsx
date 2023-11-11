import React from "react";

type PropsRadioButton = {
  label: string;
  isChecked: boolean;
};
function RadioButton({ label, isChecked = false }: PropsRadioButton) {
  return (
    <div
      className={`w-[270px] h-[50px] px-[50px] py-3.5 ${
        isChecked ? "bg-violet-100" : "bg-white"
      } rounded-[20px] border-2 border-dotted border-zinc-500 justify-center items-center gap-2.5 inline-flex`}
    >
      <label className="text-slate-900 text-base font-normal">{label}</label>
    </div>
  );
}

export default RadioButton;
