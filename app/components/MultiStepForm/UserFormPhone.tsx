import React, { useState } from "react";
import Select from "react-select";

import { FormWrapper } from "./FormWrapper";
import { Archivo } from "next/font/google";

import Image from "next/image";
import phoneSvg from "../../../public/phoneIcon.svg";
import uaeFlag from "../../assets/flag_uae.svg";

const PhoneIcon = () => <Image src={phoneSvg} alt="Phone Icon" />;
const UaeFlag = () => <Image src={uaeFlag} alt="UAE Flag" />;

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
});

function UserFormPhone({ phoneNumber, updateData }: any) {
  const [selectedCountryCode, setSelectedCountryCode] = useState({
    value: "+971",
    label: "+971",
  });

  const countryCodes = [
    { value: "+1", label: "+1" },
    { value: "+971", label: "+971" },
    // Add more country codes as needed
  ];

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

  const handleCountryCodeChange = (selectedOption: any) => {
    setSelectedCountryCode(selectedOption);
  };

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
            <div
              className={`w-[550px] h-[62px] p-[20px] mt-[32px] flex items-center border-dotted bg-white rounded-[20px] border-2 border-zinc-500 focus:outline-none focus:border-violet-700`}
            >
              <UaeFlag />
              <Select
                inputId="react-select"
                className={`ml-[8px] mr-[10px] text-slate-900 text-base font-bold`}
                options={countryCodes}
                value={selectedCountryCode}
                onChange={handleCountryCodeChange}
                unstyled
              />
              <input
                className={`text-slate-900 text-base font-medium ${archivo.className}`}
                type="tel"
                inputMode="numeric"
                value={phoneNumber}
                onChange={(e) => updateData({ phoneNumber: e.target.value })}
                maxLength={10} // Limit the input to 17 characters
              />
              {/* <div className="relative">
                <input
                  className={`absolute top-0 left-0 opacity-0	w-full h-full cursor-text z-0`}
                  id="phoneNumber"
                  type="tel"
                  inputMode="numeric"
                  value={phoneInput}
                  onChange={handlePhoneNumberChange}
                  maxLength={10} // Limit the input to 17 characters
                />
                <div
                  className={`relative z-1 text-slate-900 text-base font-medium  ${archivo.className} leading-snug tracking-widest`}
                >
                  {displayedPhoneNumber}
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </FormWrapper>
  );
}

export default UserFormPhone;
