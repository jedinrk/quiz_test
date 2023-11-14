import React from "react";
import { FormWrapper } from "./FormWrapper";
import PhoneNumberInput from "../PhoneInput/PhoneNumberInput";
import { Archivo } from "next/font/google";

import Image from "next/image";
import phoneSvg from "../../../public/phoneIcon.svg";

const PhoneIcon = () => <Image src={phoneSvg} alt="Phone Icon" />;

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
});

function UserFormPhone({ phoneNumber, updateData }: any) {
  return (
    <FormWrapper step="01" title="Phone number" icon={<PhoneIcon />}>
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
              className={`w-[550px] h-[62px] p-[20px] mt-[32px] flex items-center border-dotted bg-white rounded-[20px] border-2 border-zinc-500 focus:outline-none focus:border-violet-700 text-slate-900 text-base font-medium ${archivo.className}`}
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
