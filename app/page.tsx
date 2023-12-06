"use client";

import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import BackgroundComponent from "./components/Background/BackgroundComponent";
import NavBar from "./components/Navbar/NavBar";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";

import PhoneIcon from "../public/phoneVioletIcon.svg";
import warningSvg from "../public/warning.svg";

import MultiStepForm from "./components/MultiStepForm/MultiStepForm";
import UserFormStep01 from "./components/MultiStepForm/UserFormStep01";
import UserFormStep02 from "./components/MultiStepForm/UserFormStep02";
import UserFormStep03 from "./components/MultiStepForm/UserFormStep03";
import UserFormStep04 from "./components/MultiStepForm/UserFormStep04";
import UserFormStep05 from "./components/MultiStepForm/UserFormStep05";
import UserFormStep06 from "./components/MultiStepForm/UserFormStep06";
import UserFormStepLast from "./components/MultiStepForm/UserFormStepLast";
import { MultiStepFormProvider } from "./contexts/MultiStepFormContext";
import { useEffect } from "react";

const WarningIcon = () => <Image src={warningSvg} alt="Warning Icon" />;

function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: "#multiStepContainer",
      start: "top 25%",
      end: "bottom 75%",
      pin: "#multiStepContainer",
    });
  }, []);

  return (
    <main className="relative">
      <div className="sticky top-0 left-0 -z-50">
        <BackgroundComponent />
      </div>
      <section>
        <NavBar />
        <Breadcrumb />
      </section>
      <section className="flex flex-col items-center mt-[64px]">
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
      </section>
      <section id="multiStepContainer" className="mt-[64px] mb-[34px]">
        <MultiStepFormProvider>
          <div id="multiStep">
            <MultiStepForm>
              <UserFormStep01 />
              <UserFormStep02 />
              <UserFormStep03 />
              <UserFormStep04 />
              <UserFormStep05 />
              <UserFormStep06 />
              <UserFormStepLast />
            </MultiStepForm>
          </div>
        </MultiStepFormProvider>
      </section>
      <section>
        <div className="mb-[164px] flex flex-col items-center ">
          <label className="max-w-[420px] text-center text-gray-300 text-[13px] font-normal">
            We value your privacy at AZIZI. Your contact information is never
            shared with any third party and will remain internal where you can
            opt out at any time.
          </label>
        </div>
      </section>
    </main>
  );
}

export default Home;
