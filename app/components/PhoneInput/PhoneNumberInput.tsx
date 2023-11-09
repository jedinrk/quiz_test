import React, { useState } from "react";
import { Archivo } from "next/font/google";

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
});

const PhoneNumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState("_ _  _ _ _  _ _  _ _"); // Initial underscores with groups

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    // Remove non-digit characters
    const numericValue = inputValue.replace(/\D/g, "");
    // Split the numeric value into groups of 2, then join with underscores
    const formattedValue = numericValue
      .match(/.{1,2}/g)
      ?.join("  ")
      .padEnd(17, "_"); // Ensure a maximum length of 17 characters with underscores

    setPhoneNumber(formattedValue === undefined? " ": formattedValue);
  };

  return (
    <input
      className={`w-[550px] h-[62px] p-[20px] mt-[32px] flex items-center border-dotted bg-white rounded-[20px] border-2 border-zinc-500 text-slate-900 text-base font-medium ${archivo.className}`}
      type="text"
      value={phoneNumber}
      onChange={handleChange}
      maxLength={17} // Limit the input to 17 characters
    />
  );
};

export default PhoneNumberInput;
