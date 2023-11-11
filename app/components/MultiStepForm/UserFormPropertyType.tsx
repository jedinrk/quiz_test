import React, { useState } from "react";
import { FormWrapper } from "./FormWrapper";
import RadioButtonWithCheckBox from "../RadioButtonWithCheckBox/RadioButtonWithCheckBox";

import Image from "next/image";
import propertySvg from "../../../public/property.svg";

const PropertyIcon = () => <Image src={propertySvg} alt="PropertyIcon" />;

function UserFormPropertyType() {
  const [selectedProperty, setSelectedProperty] = useState("");

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
