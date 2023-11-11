import React from "react";
import { FormWrapper } from "./FormWrapper";
import PhoneNumberInput from "../PhoneInput/PhoneNumberInput";
import { Archivo } from "next/font/google";

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
});

function UserFormPhone({ phoneNumber, updateData }: any) {
  return (
    <FormWrapper
      step="01"
      title="Phone number"
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M31.7875 26.6669H31.9883L31.9585 26.8931C31.7731 28.2983 31.0821 29.5878 30.0147 30.5204C28.9475 31.4529 27.5771 31.9646 26.1599 31.96C26.1598 31.96 26.1596 31.96 26.1595 31.96L26.1602 31.76L31.7875 26.6669ZM31.7875 26.6669L25.2465 23.7374L25.1311 23.6857L25.0349 23.7677L21.6321 26.6709C21.632 26.6709 21.632 26.671 21.632 26.671C21.6046 26.6942 21.576 26.7158 21.5462 26.7359C21.2528 26.9315 20.9136 27.0478 20.5618 27.0732C20.2101 27.0987 19.8577 27.0325 19.5392 26.8812C16.9573 25.6335 14.3767 23.0719 13.1281 20.5186C12.9753 20.2023 12.9067 19.8519 12.9291 19.5014C12.9514 19.1507 13.064 18.8117 13.2558 18.5172L13.2559 18.5173L13.2578 18.5141C13.276 18.485 13.2965 18.4573 13.319 18.4314L13.3191 18.4315L13.3215 18.4285L16.2154 14.9648L16.2954 14.869L16.2445 14.755L13.3248 8.22036L13.3457 8.00801L13.0953 8.0415C11.6921 8.2292 10.4052 8.92125 9.47491 9.9884C8.54467 11.0555 8.03463 12.4247 8.04003 13.8404M31.7875 26.6669L8.04003 13.8404M8.04003 13.8404C8.04003 13.8402 8.04003 13.8401 8.04003 13.84L8.24003 13.8398L8.04003 13.8406C8.04003 13.8405 8.04003 13.8404 8.04003 13.8404ZM32.5702 25.0068L32.5724 25.0078C32.976 25.183 33.3121 25.484 33.5306 25.8659C33.749 26.2475 33.8382 26.6895 33.785 27.126C33.5415 28.9745 32.6336 30.6712 31.2307 31.8994C29.8276 33.1277 28.0253 33.8033 26.1605 33.8H26.1602C15.1545 33.8 6.20001 24.8454 6.20001 13.8398L6.20001 13.8394C6.19667 11.9746 6.87226 10.1723 8.10062 8.76921C9.32876 7.36634 11.0255 6.45841 12.874 6.21493C13.3106 6.16182 13.7527 6.25123 14.1343 6.46984C14.5162 6.6886 14.8172 7.02501 14.9922 7.42885L14.9922 7.42886L14.9932 7.43119L17.9395 13.9988V14.0138L17.9556 14.0515C18.088 14.3607 18.1419 14.6977 18.1126 15.0327C18.0832 15.3675 17.9717 15.6898 17.7878 15.971C17.7675 16.0013 17.7455 16.0306 17.7202 16.0622L14.8126 19.5197L14.7286 19.6196L14.7862 19.7368C15.8547 21.9079 18.1161 24.1519 20.3145 25.2198L20.4322 25.2769L20.5317 25.1921L23.9382 22.288C23.9384 22.2878 23.9386 22.2877 23.9387 22.2875C23.9662 22.2645 23.9949 22.2431 24.0248 22.2234L24.0255 22.2229C24.3077 22.0347 24.6323 21.9198 24.97 21.8886C25.3068 21.8575 25.646 21.9107 25.9571 22.0433L25.9727 22.0505L25.9748 22.0514L32.5702 25.0068Z"
            fill="#71717A"
            stroke="#F5F3FF"
            stroke-width="0.4"
          />
        </svg>
      }
    >
      <div className="flex flex-col">
        <div className="flex flex-col bg-violet-50 rounded-[20px] border-slate-900">
          <div className="flex flex-col mt-[24px] mb-[44px]">
            <div className="w-[400px] text-slate-900 text-base font-bold mb-[10px]">
              Confirm if your phone number is correct
            </div>
            <div className="w-[400px] text-zinc-500 text-base font-normal mv-[32px]">
              Invalid or incorrectly inputted phone numbers can not be notified
              of available units
            </div>
            <input
              className={`w-[550px] h-[62px] p-[20px] mt-[32px] flex items-center border-dotted bg-white rounded-[20px] border-2 border-zinc-500 text-slate-900 text-base font-medium ${archivo.className}`}
              type="number"
              value={phoneNumber}
              onChange={(e) => updateData({ phoneNumber: e.target.value })}
              maxLength={10} // Limit the input to 17 characters
            />
          </div>
        </div>
      </div>
    </FormWrapper>
  );
}

export default UserFormPhone;
