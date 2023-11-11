import React from "react";
import { FormWrapper } from "./FormWrapper";
import RadioButton from "../RadioButton/RadioButton";

import Image from "next/image";
import clockSvg from "../../../public/clock.svg";

const ClockIcon = () => <Image src={clockSvg} alt="Clock Icon" />;

function UserFormTimeSlot({ timeSlot, updateData }: any) {
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
                <RadioButton label={"9 am – 12 pm"} isChecked={true} />
                <RadioButton label={"12 pm – 5 pm"} isChecked={false} />
              </div>
              <div className="flex justify-between">
                <RadioButton label={"5 pm – 9 pm"} isChecked={false} />
                <RadioButton label={"9 pm – 12 am"} isChecked={false} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </FormWrapper>
  );
}

export default UserFormTimeSlot;
