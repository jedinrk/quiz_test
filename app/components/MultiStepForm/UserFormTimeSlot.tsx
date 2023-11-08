import React from "react";
import { FormWrapper } from "./FormWrapper";

function UserFormTimeSlot() {
  return (
    <FormWrapper
      step="03"
      title="Best time to be contacted"
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M20 34.8C17.0728 34.8 14.2114 33.932 11.7776 32.3057C9.34372 30.6795 7.44677 28.3681 6.32659 25.6637C5.20641 22.9594 4.91332 19.9836 5.48438 17.1127C6.05545 14.2417 7.46501 11.6046 9.53482 9.53482C11.6046 7.46501 14.2417 6.05545 17.1127 5.48438C19.9836 4.91332 22.9594 5.20641 25.6637 6.32659C28.3681 7.44677 30.6795 9.34372 32.3057 11.7776C33.932 14.2114 34.8 17.0728 34.8 20C34.8 23.9252 33.2407 27.6896 30.4652 30.4652C27.6896 33.2407 23.9252 34.8 20 34.8ZM20 6.94286C17.4175 6.94286 14.8931 7.70865 12.7458 9.14339C10.5986 10.5781 8.92504 12.6174 7.93678 15.0033C6.94852 17.3891 6.68994 20.0145 7.19375 22.5473C7.69757 25.0802 8.94114 27.4067 10.7672 29.2328C12.5933 31.0589 14.9198 32.3024 17.4527 32.8063C19.9855 33.3101 22.6109 33.0515 24.9968 32.0632C27.3826 31.075 29.4219 29.4014 30.8566 27.2542C32.2914 25.1069 33.0571 22.5825 33.0571 20C33.0571 16.537 31.6815 13.2159 29.2328 10.7672C26.7841 8.31852 23.463 6.94286 20 6.94286Z"
            fill="#71717A"
            stroke="#F5F3FF"
            stroke-width="0.4"
          />
          <path
            d="M19.2 19.9582V10.2H20.8V19.152V19.231L20.854 19.2886L25.726 24.4959L24.59 25.7076L19.2 19.9582Z"
            fill="#71717A"
            stroke="#F5F3FF"
            stroke-width="0.4"
          />
        </svg>
      }
    >
      <div className="flex flex-col">
        <div className="flex flex-col">
          <div className="flex flex-col mt-[24px] mb-[44px]">
            <div className="w-[400px] text-zinc-500 text-base font-normal mv-[32px]">
              We will only contact you at your selected time range in GST
            </div>
            <div className="mt-[32px] flex flex-col">
              <div className="mb-[10px] flex justify-between">
                <div className="w-[270px] h-[50px] px-[50px] py-3.5 bg-white rounded-[20px] border-2 border-dotted border-zinc-500 justify-center items-center gap-2.5 inline-flex">
                  <div className="text-slate-900 text-base font-normal font-['Public Sans'] leading-snug">
                    9 am – 12 pm
                  </div>
                </div>
                <div className="w-[270px] h-[50px] px-[50px] py-3.5 bg-white rounded-[20px] border-2 border-dotted border-zinc-500 justify-center items-center gap-2.5 inline-flex">
                  <div className="text-slate-900 text-base font-normal font-['Public Sans'] leading-snug">
                    12 pm – 5 pm
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="w-[270px] h-[50px] px-[50px] py-3.5 bg-white rounded-[20px] border-2 border-dotted border-zinc-500 justify-center items-center gap-2.5 inline-flex">
                  <div className="text-slate-900 text-base font-normal font-['Public Sans'] leading-snug">
                    5 pm – 9 pm
                  </div>
                </div>
                <div className="w-[270px] h-[50px] px-[50px] py-3.5 bg-white rounded-[20px] border-2 border-dotted border-zinc-500 justify-center items-center gap-2.5 inline-flex">
                  <div className="text-slate-900 text-base font-normal font-['Public Sans'] leading-snug">
                    9 pm – 12 am
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FormWrapper>
  );
}

export default UserFormTimeSlot;
