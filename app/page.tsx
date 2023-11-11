import Image from "next/image";
import EllipseOne from "../public/ellipselight.svg";
import NavBar from "./components/Navbar/NavBar";
import MultiStepForm from "./components/MultiStepForm/MultiStepForm";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";
import PhoneIcon from "../public/phoneVioletIcon.svg";

import warningSvg from "../public/warning.svg";

const WarningIcon = () => <Image src={warningSvg} alt="Warning Icon" />;

export default function Home() {
  return (
    <main>
      {/* <Image className="absolute container m-0 p-0" src={EllipseOne} alt="" /> */}
      <NavBar />
      <Breadcrumb />
      <div className="flex flex-col items-center my-[64px]">
        <div className="text-center text-white text-[40px] font-medium">
          Congrats!
        </div>
        <div className="text-center text-white text-7xl font-extrabold">
          Your request for a call accepted!
        </div>
        <div className="mt-[48px] mb-[64px] text-center text-white text-base font-normal">
          Thank you Ali Konan for your trust and interest
        </div>
        <Image src={PhoneIcon} alt="" />
        <div className="w-[232px] mt-[10px] text-center text-white text-base font-normal">
          Our consultant will call you back within 5 minutes
        </div>
        <div className="mt-[64px] mb-[32px] flex justify-center items-center">
          <WarningIcon />
          <div className="mx-[8px] text-center text-violet-50 text-base font-bold">
            Please do the following before your call:
          </div>
        </div>
      </div>
      <MultiStepForm />
      <div className="mt-[34px] flex flex-col items-center ">
        <div className="max-w-[420px] text-center text-gray-300 text-[13px] font-normal">
          We value your privacy at AZIZI. Your contact information is never
          shared with any third party and will remain internal where you can opt
          out at any time.
        </div>
      </div>
    </main>
  );
}
