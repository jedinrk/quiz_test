import React from "react";
import { FormWrapper } from "./FormWrapper";
import RadioButton from "../RadioButton/RadioButton";

import { useMultiStepContext } from "@/app/contexts/MultiStepFormContext";

//const ClockIcon = () => <Image src={clockSvg} alt="Clock Icon" />;
const SyntaxIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path
      d="M10.4001 14.2297L3.47664 20L10.4001 25.7703C10.4986 25.8526 10.5693 25.9632 10.6028 26.087C10.6363 26.2109 10.6308 26.3421 10.5871 26.4628C10.5434 26.5834 10.4636 26.6877 10.3586 26.7615C10.2536 26.8352 10.1284 26.8749 10.0001 26.875C9.85371 26.8757 9.7119 26.8241 9.60008 26.7297L2.10008 20.4797C2.02985 20.421 1.97335 20.3477 1.93459 20.2648C1.89582 20.1819 1.87573 20.0915 1.87573 20C1.87573 19.9085 1.89582 19.8181 1.93459 19.7352C1.97335 19.6523 2.02985 19.579 2.10008 19.5203L9.60008 13.2703C9.72805 13.1713 9.88943 13.1258 10.0503 13.1434C10.2111 13.1609 10.3589 13.2401 10.4625 13.3644C10.5661 13.4887 10.6175 13.6483 10.6059 13.8096C10.5942 13.971 10.5205 14.1216 10.4001 14.2297ZM37.9001 19.5203L30.4001 13.2703C30.3376 13.2142 30.2644 13.1712 30.1849 13.144C30.1054 13.1168 30.0213 13.1059 29.9375 13.1119C29.8537 13.118 29.772 13.1409 29.6973 13.1792C29.6225 13.2175 29.5563 13.2705 29.5025 13.3351C29.4487 13.3996 29.4084 13.4743 29.3842 13.5547C29.3599 13.6351 29.3521 13.7196 29.3612 13.8031C29.3703 13.8866 29.3961 13.9674 29.4372 14.0407C29.4782 14.114 29.5336 14.1783 29.6001 14.2297L36.5235 20L29.6001 25.7703C29.5336 25.8217 29.4782 25.886 29.4372 25.9593C29.3961 26.0326 29.3703 26.1134 29.3612 26.1969C29.3521 26.2804 29.3599 26.3649 29.3842 26.4453C29.4084 26.5257 29.4487 26.6004 29.5025 26.6649C29.5563 26.7295 29.6225 26.7825 29.6973 26.8208C29.772 26.8591 29.8537 26.882 29.9375 26.8881C30.0213 26.8941 30.1054 26.8832 30.1849 26.856C30.2644 26.8288 30.3376 26.7858 30.4001 26.7297L37.9001 20.4797C37.9703 20.421 38.0268 20.3477 38.0656 20.2648C38.1043 20.1819 38.1244 20.0915 38.1244 20C38.1244 19.9085 38.1043 19.8181 38.0656 19.7352C38.0268 19.6523 37.9703 19.579 37.9001 19.5203ZM25.2141 5.6625C25.137 5.63435 25.055 5.62168 24.973 5.62521C24.891 5.62875 24.8104 5.64842 24.736 5.6831C24.6615 5.71778 24.5946 5.76679 24.5392 5.82733C24.4837 5.88788 24.4407 5.95876 24.4126 6.03593L14.4126 33.5359C14.3844 33.6131 14.3718 33.695 14.3753 33.7771C14.3788 33.8591 14.3985 33.9397 14.4332 34.0141C14.4679 34.0885 14.5169 34.1554 14.5774 34.2109C14.638 34.2664 14.7088 34.3094 14.786 34.3375C14.8547 34.362 14.9271 34.3747 15.0001 34.375C15.1283 34.3751 15.2535 34.3357 15.3586 34.2621C15.4637 34.1886 15.5436 34.0846 15.5876 33.9641L25.5876 6.46406C25.6157 6.38691 25.6284 6.30497 25.6249 6.22292C25.6213 6.14087 25.6017 6.06033 25.567 5.98589C25.5323 5.91145 25.4833 5.84457 25.4227 5.78908C25.3622 5.73359 25.2913 5.69058 25.2141 5.6625Z"
      fill="#71717A"
    />
  </svg>
);

function UserFormStep03() {
  const { formData, setFormData } = useMultiStepContext();

  const setProgrammerType = (selection: string) => {
    setFormData({ ...formData, programmerType: selection });
  };

  return (
    <FormWrapper step="03" title="Name it" icon={<SyntaxIcon />}>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <div className="flex flex-col mt-[24px] mb-[44px]">
            <div className="w-[400px] text-zinc-500 text-base font-normal mv-[32px]">
              What do you call a programmer who doesn't like to share?
            </div>
            <div className="mt-[32px] flex flex-col">
              <div className="mb-[10px] flex justify-between">
                <RadioButton
                  label={"Selfish Coder"}
                  isChecked={formData.programmerType === "Selfish Coder"}
                  setSelectedTimeSlot={setProgrammerType}
                />
                <RadioButton
                  label={"Code Hoarder"}
                  isChecked={formData.programmerType === "Code Hoarder"}
                  setSelectedTimeSlot={setProgrammerType}
                />
              </div>
              <div className="flex justify-between">
                <RadioButton
                  label={"Program Scrooge"}
                  isChecked={formData.programmerType === "Program Scrooge"}
                  setSelectedTimeSlot={setProgrammerType}
                />
                <RadioButton
                  label={"Shareware Genius"}
                  isChecked={formData.programmerType === "Shareware Genius"}
                  setSelectedTimeSlot={setProgrammerType}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </FormWrapper>
  );
}

export default UserFormStep03;
