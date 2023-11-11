import React, { useState } from "react";
import { FormWrapper } from "./FormWrapper";
import RadioButtonWithCheckBox from "../RadioButtonWithCheckBox/RadioButtonWithCheckBox";

function UserFormPropertyType() {
  const [selectedProperty, setSelectedProperty] = useState("");

  return (
    <FormWrapper
      step="05"
      title="Property type"
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M37.5 33.1251H34.375V18.0532C34.3749 17.7942 34.3211 17.538 34.217 17.3008C34.1129 17.0636 33.9608 16.8506 33.7703 16.6751L21.2609 4.86416C20.9143 4.54901 20.4623 4.37503 19.9938 4.37647C19.5253 4.37792 19.0744 4.55469 18.7297 4.87197L6.23906 16.6673C6.04587 16.8428 5.89147 17.0568 5.78573 17.2954C5.67999 17.5341 5.62524 17.7922 5.625 18.0532V33.1251H2.5C2.33424 33.1251 2.17527 33.1909 2.05806 33.3082C1.94085 33.4254 1.875 33.5843 1.875 33.7501C1.875 33.9159 1.94085 34.0748 2.05806 34.192C2.17527 34.3093 2.33424 34.3751 2.5 34.3751H37.5C37.6658 34.3751 37.8247 34.3093 37.9419 34.192C38.0592 34.0748 38.125 33.9159 38.125 33.7501C38.125 33.5843 38.0592 33.4254 37.9419 33.3082C37.8247 33.1909 37.6658 33.1251 37.5 33.1251ZM6.875 18.0532C6.87599 17.9646 6.89539 17.8772 6.93198 17.7965C6.96856 17.7158 7.02152 17.6436 7.0875 17.5845L19.5781 5.78916C19.6927 5.68682 19.8409 5.63024 19.9945 5.63024C20.1481 5.63024 20.2964 5.68682 20.4109 5.78916L32.9203 17.5985C32.9856 17.6578 33.0375 17.7302 33.0728 17.811C33.1081 17.8918 33.1259 17.9791 33.125 18.0673V33.1251H24.375V25.0001C24.375 24.5028 24.1775 24.0259 23.8258 23.6743C23.4742 23.3226 22.9973 23.1251 22.5 23.1251H17.5C17.0027 23.1251 16.5258 23.3226 16.1742 23.6743C15.8225 24.0259 15.625 24.5028 15.625 25.0001V33.1251H6.875V18.0532ZM23.125 33.1251H16.875V25.0001C16.875 24.8343 16.9408 24.6754 17.0581 24.5582C17.1753 24.4409 17.3342 24.3751 17.5 24.3751H22.5C22.6658 24.3751 22.8247 24.4409 22.9419 24.5582C23.0592 24.6754 23.125 24.8343 23.125 25.0001V33.1251Z"
            fill="#71717A"
          />
        </svg>
      }
    >
      <div className="flex flex-col">
        <div className="flex flex-col">
          <div className="flex flex-col mt-[24px] mb-[44px]">
            <div className="w-[400px] text-zinc-500 text-base font-normal">
              What are you looking for? Choose as many options as you feel
            </div>
            <div className="flex flex-col mt-[32px]">
              <div className="flex justify-between">
                <RadioButtonWithCheckBox
                  label="Villa"
                  isChecked={selectedProperty === "Villa"}
                  setSelectedProperty={setSelectedProperty}
                />
                <RadioButtonWithCheckBox
                  label="Apartment"
                  isChecked={selectedProperty === "Apartment"}
                  setSelectedProperty={setSelectedProperty}
                />
              </div>
              <div className="flex justify-between">
                <RadioButtonWithCheckBox
                  label="Townhouse"
                  isChecked={selectedProperty === "Townhouse"}
                  setSelectedProperty={setSelectedProperty}
                />
                <RadioButtonWithCheckBox
                  label="Other"
                  isChecked={selectedProperty === "Other"}
                  setSelectedProperty={setSelectedProperty}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </FormWrapper>
  );
}

export default UserFormPropertyType;
