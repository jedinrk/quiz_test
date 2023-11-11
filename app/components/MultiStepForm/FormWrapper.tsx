import { ReactNode, ReactSVGElement } from "react";

type FormWrapperProps = {
  step: string,
  title: string,
  icon: React.JSX.Element,
  children: ReactNode,
};

export function FormWrapper({ step, title, icon, children }: FormWrapperProps) {
  return (
    <div className="pt-[60px] px-[60px] flex flex-col">
      <div className="flex justify-between border-b-[1px] border-zinc-500">
        <div className="flex">
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
