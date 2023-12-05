import React, { useState, ChangeEvent, useRef, useEffect } from "react";

const PhoneNumberInput: React.FC = () => {
  const [phoneDigits, setPhoneDigits] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleInputChange = (index: number, e: any): void => {
    console.log("handleInputChange");
    const { value } = e.target;

    if (value.match(/[0-9]/)) {
      const updatedDigits = [...phoneDigits];
      updatedDigits[index] = value;
      setPhoneDigits(updatedDigits);

      if (index < phoneDigits.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    } else if (value === "") {
      const updatedDigits = [...phoneDigits];
      updatedDigits[index] = "";
      setPhoneDigits(updatedDigits);

      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, event: any) => {
    const { value } = event.target;
    console.log("User pressed: ", {
      key: event.key,
      value: event.target.value,
    });

    if (event.key === "Backspace" && value === "") {
      const updatedDigits = [...phoneDigits];
      updatedDigits[index] = "";
      setPhoneDigits(updatedDigits);

      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  return (
    <div className="flex items-center justify-center">
      {phoneDigits.map((digit, index) => (
        <input
          dir={`${digit? 'ltr': 'rtl'}`}
          key={index}
          className={`w-3 m-0.5 text-slate-900 text-base font-medium ${
            digit ? "border-none" : "border-b-2 border-zinc-500"
          } focus:outline-none`}
          type="tel"
          inputMode="numeric"
          maxLength={1}
          value={digit}
          ref={(el) => (inputRefs.current[index] = el)}
          onChange={(e) => handleInputChange(index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
        />
      ))}
    </div>
  );
};

export default PhoneNumberInput;
