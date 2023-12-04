"use client";

import Image from "next/image";
import NavBar from "./components/Navbar/NavBar";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";
import PhoneIcon from "../public/phoneVioletIcon.svg";

import warningSvg from "../public/warning.svg";
import BackgroundComponent from "./components/Background/BackgroundComponent";

import MultiStepForm from "./components/MultiStepForm/MultiStepForm";
import UserFormEmail from "./components/MultiStepForm/UserFormEmail";
import UserFormExperience from "./components/MultiStepForm/UserFormExperience";
import UserFormTimeSlot from "./components/MultiStepForm/UserFormTimeSlot";
import { MultiStepFormProvider } from "./contexts/MultiStepFormContext";
import UserFormPhone from "./components/MultiStepForm/UserFormPhone";
import UserFormInvestment from "./components/MultiStepForm/UserFormInvestment";
import UserFormPropertyType from "./components/MultiStepForm/UserFormPropertyType";
import UserFormThankYou from "./components/MultiStepForm/UserFormThankYou";

// const UserFormEmail: React.FC = () => <div>UserFormEmail</div>;
// const UserFormTimeSlot: React.FC = () => <div>UserFormTimeSlot</div>;
// const UserFormExperience: React.FC = () => <div>UserFormExperience</div>;

const WarningIcon = () => <Image src={warningSvg} alt="Warning Icon" />;

export default function Home() {
  return (
    <main className="relative">
      <BackgroundComponent />
      <NavBar />
      <Breadcrumb />
      <div className="flex flex-col items-center my-[64px]">
        <h2 className="text-center text-white text-[40px] font-medium">
          Congrats!
        </h2>
        <h1 className="mt-[40px] w-[1018px] text-center text-white text-7xl font-extrabold">
          Your request for a call accepted!
        </h1>
        <h6 className="mt-[48px] mb-[64px] text-center text-white text-base font-normal">
          Thank you Ali Konan for your trust and interest
        </h6>
        <Image src={PhoneIcon} alt="" />
        <label className="w-[232px] mt-[10px] text-center text-white text-base font-normal">
          Our consultant will call you back within 5 minutes
        </label>
        <div className="mt-[64px] mb-[32px] flex justify-center items-center">
          <WarningIcon />
          <label className="mx-[8px] text-center text-violet-50 text-base font-bold">
            Please do the following before your call:
          </label>
        </div>
      </div>
      <MultiStepFormProvider>
        <MultiStepForm>
          <UserFormPhone/>
          <UserFormEmail />
          <UserFormTimeSlot />
          <UserFormExperience />
          <UserFormPropertyType/>
          <UserFormInvestment/>
          <UserFormThankYou/>
        </MultiStepForm>
      </MultiStepFormProvider>
      <div className="mt-[34px] flex flex-col items-center ">
        <label className="max-w-[420px] text-center text-gray-300 text-[13px] font-normal">
          We value your privacy at AZIZI. Your contact information is never
          shared with any third party and will remain internal where you can opt
          out at any time.
        </label>
      </div>
    </main>
  );
}
