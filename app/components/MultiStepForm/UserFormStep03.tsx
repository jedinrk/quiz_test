import React, { useEffect, useState } from "react";
import { FormWrapper } from "./FormWrapper";
import RadioButton from "../RadioButton/RadioButton";

import Image from "next/image";
import clockSvg from "../../../public/clock.svg";
import { useMultiStepContext } from "@/app/contexts/MultiStepFormContext";

const ClockIcon = () => <Image src={clockSvg} alt="Clock Icon" />;

function UserFormTimeSlot() {
  const { formData, setFormData } = useMultiStepContext();

  const updateTimeSlot = (timeslot: string) => {
    setFormData({ ...formData, timeSlot: timeslot });
  };

  return (
    <FormWrapper
      step="03"
      title="Best time to be contacted"
      icon={<ClockIcon />}
    >
      <div className="flex flex-col">
        <div className="flex flex-col">
          <div className="flex flex-col mt-[24px] mb-[44px]">
            <div className="w-[400px] text-zinc-500 text-base font-normal mv-[32px]">
              We will only contact you at your selected time range in GST
            </div>
            <div className="mt-[32px] flex flex-col">
              <div className="mb-[10px] flex justify-between">
                <RadioButton
                  label={"9 am – 12 pm"}
                  isChecked={formData.timeSlot === "9 am – 12 pm"}
                  setSelectedTimeSlot={updateTimeSlot}
                />
                <RadioButton
                  label={"12 pm – 5 pm"}
                  isChecked={formData.timeSlot === "12 pm – 5 pm"}
                  setSelectedTimeSlot={updateTimeSlot}
                />
              </div>
              <div className="flex justify-between">
                <RadioButton
                  label={"5 pm – 9 pm"}
                  isChecked={formData.timeSlot === "5 pm – 9 pm"}
                  setSelectedTimeSlot={updateTimeSlot}
                />
                <RadioButton
                  label={"9 pm – 12 am"}
                  isChecked={formData.timeSlot === "9 pm – 12 am"}
                  setSelectedTimeSlot={updateTimeSlot}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </FormWrapper>
  );
}

export default UserFormTimeSlot;
