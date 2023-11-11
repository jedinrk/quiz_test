import React from "react";
import { FormWrapper } from "./FormWrapper";
import { Archivo } from "next/font/google";

import Image from "next/image";
import emailSvg from "../../../public/emailIcon.svg";

const EmailIcon = () => <Image src={emailSvg} alt="EmailIcon" />;

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
});

function UserFormEmail({ email, updateData }: any) {
  return (
    <FormWrapper step="02" title="Email" icon={<EmailIcon />}>
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
              value={email}
              onChange={(e) => updateData({ email: e.target.value })}
              className={`w-[550px] h-[62px] p-[20px] mt-[32px] flex items-center border-dotted bg-white rounded-[20px] border-2 border-zinc-500 text-slate-900 text-base font-medium ${archivo.className}`}
            />
          </div>
        </div>
      </div>
    </FormWrapper>
  );
}

export default UserFormEmail;
