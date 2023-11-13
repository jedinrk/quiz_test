import React, { useState } from "react";
import { FormWrapper } from "./FormWrapper";
import RadioButtonWithCheckBox from "../RadioButtonWithCheckBox/RadioButtonWithCheckBox";

import Image from "next/image";
import propertySvg from "../../../public/property.svg";

const PropertyIcon = () => <Image src={propertySvg} alt="PropertyIcon" />;

function UserFormPropertyType({ propertyType, updateData }: any) {
  const setSelectedProperty = (selection: string) => {
    updateData({ propertyType: selection });
  };

  return (
    <FormWrapper step="05" title="Property type" icon={<PropertyIcon />}>
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
                  isChecked={propertyType === "Villa"}
                  setProperty={setSelectedProperty}
                />
                <RadioButtonWithCheckBox
                  label="Apartment"
                  isChecked={propertyType === "Apartment"}
                  setProperty={setSelectedProperty}
                />
              </div>
              <div className="flex justify-between">
                <RadioButtonWithCheckBox
                  label="Townhouse"
                  isChecked={propertyType === "Townhouse"}
                  setProperty={setSelectedProperty}
                />
                <RadioButtonWithCheckBox
                  label="Other"
                  isChecked={propertyType === "Other"}
                  setProperty={setSelectedProperty}
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
