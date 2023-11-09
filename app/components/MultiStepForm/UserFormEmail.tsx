import React from "react";
import { FormWrapper } from "./FormWrapper";
import { Archivo } from "next/font/google";

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
});

function UserFormEmail() {
  return (
    <FormWrapper
      step="02"
      title="Email"
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M6.75 9.75V9C6.55109 9 6.36032 9.07902 6.21967 9.21967C6.07902 9.36032 6 9.55109 6 9.75H6.75ZM33.75 9.75H34.5C34.5 9.55109 34.421 9.36032 34.2803 9.21967C34.1397 9.07902 33.9489 9 33.75 9V9.75ZM6.75 10.5H33.75V9H6.75V10.5ZM33 9.75V27.75H34.5V9.75H33ZM30.75 30H9.75V31.5H30.75V30ZM7.5 27.75V9.75H6V27.75H7.5ZM9.75 30C9.15326 30 8.58097 29.7629 8.15901 29.341C7.73705 28.919 7.5 28.3467 7.5 27.75H6C6 28.7446 6.39509 29.6984 7.09835 30.4016C7.80161 31.1049 8.75544 31.5 9.75 31.5V30ZM33 27.75C33 28.3467 32.7629 28.919 32.341 29.341C31.919 29.7629 31.3467 30 30.75 30V31.5C31.7446 31.5 32.6984 31.1049 33.4016 30.4016C34.1049 29.6984 34.5 28.7446 34.5 27.75H33Z"
            fill="#71717A"
          />
          <path
            d="M6.74988 9.75015L20.2499 23.2502L33.7499 9.75015"
            stroke="#71717A"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      }
    >
      <div className="flex flex-col">
        <div className="flex flex-col">
          <div className="flex flex-col mt-[24px] mb-[44px]">
            <div className="w-[400px] text-slate-900 text-base font-bold mb-[10px]">
              Confirm if your e-mail is correct
            </div>
            <div className="w-[400px] text-zinc-500 text-base font-normal mv-[32px]">
              Invalid or incorrectly inputted email can not receive useful
              information from AZIZI’s team
            </div>
            <input
              type="email"
              placeholder="e-mail"
              className={`w-[550px] h-[62px] p-[20px] mt-[32px] flex items-center border-dotted bg-white rounded-[20px] border-2 border-zinc-500 text-slate-900 text-base font-medium ${archivo.className}`}
            />
          </div>
        </div>
      </div>
    </FormWrapper>
  );
}

export default UserFormEmail;
