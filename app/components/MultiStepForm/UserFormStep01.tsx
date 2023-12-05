import React, { useState } from "react";

import { FormWrapper } from "./FormWrapper";
import { Archivo } from "next/font/google";

import PhoneIcon from "../../../public/phoneIcon.svg";
import ArrowDown from "../../../public/arrowDown.svg";
import Image from "next/image";

import uaeFlag from "../../assets/flag_uae.svg";
import { useMultiStepContext } from "@/app/contexts/MultiStepFormContext";
import PhoneNumberInput from "../PhoneInput/PhoneNumberInput";

const UaeFlag = () => <Image src={uaeFlag} alt="UAE Flag" />;

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
});

function UserFormPhone() {
  const { formData, setFormData } = useMultiStepContext();

  // const [selectedCountryCode, setSelectedCountryCode] = useState({
  //   value: "+971",
  //   label: "+971",
  // });

  // const countryCodes = [
  //   { value: "+1", label: "+1" },
  //   { value: "+971", label: "+971" },
  //   // Add more country codes as needed
  // ];

  // const [phoneInput, setPhoneInput] = useState("");
  // const [displayedPhoneNumber, setDisplayedPhoneNumber] =
  //   useState("__ ___ __ __"); // Initial format

  // const formatPhoneNumber = (number: string) => {
  //   let formattedNumber = "__ ___ __ __";

  //   for (let i = 0; i < number.length; i++) {
  //     formattedNumber = formattedNumber.replace("_", number.charAt(i));
  //   }

  //   setDisplayedPhoneNumber(formattedNumber);
  // };

  // const handlePhoneNumberChange = (e: any) => {
  //   const input = e.target.value.replace(/\D/g, "").slice(0, 10); // Allowing only 10 digits
  //   setPhoneInput(input);
  //   updateData({ phoneNumber: input });
  //   formatPhoneNumber(input);
  // };

  // const handleCountryCodeChange = (selectedOption: any) => {
  //   setSelectedCountryCode(selectedOption);
  // };

  return (
    <FormWrapper
      step="01"
      title="Phone number"
      icon={<Image src={PhoneIcon} alt="Phone" />}
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
            <div
              className={`w-[550px] h-[62px] p-[20px] mt-[32px] flex items-center border-dotted bg-white rounded-[20px] border-2 border-zinc-500 focus:outline-none focus:border-violet-700`}
            >
              <UaeFlag />
              <label className="ml-[8px] text-slate-900 text-base font-bold font-['Public Sans'] leading-snug">
                +971
              </label>
              <Image className="ml-[4px] mr-[10px]" src={ArrowDown} alt="Arrow Down" />
              <PhoneNumberInput />
              {/* <input
                className={`border-b-2 text-slate-900 text-base font-medium ${archivo.className}`}
                type="tel"
                inputMode="numeric"
                value={formData.phoneNumber}
                onChange={(e) =>
                  setFormData({ ...formData, phoneNumber: e.target.value })
                }
                maxLength={10} // Limit the input to 17 characters
              /> */}
            </div>
          </div>
        </div>
      </div>
    </FormWrapper>
  );
}

export default UserFormPhone;
