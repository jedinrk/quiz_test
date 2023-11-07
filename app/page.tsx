import Image from "next/image";
import EllipseOne from "../public/ellipselight.svg";
import NavBar from "./components/Navbar/NavBar";
import MultiStepForm from "./components/MultiStepForm/MultiStepForm";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";
import PhoneIcon from "../public/phone_icon.svg";

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clip-path="url(#clip0_1_96)">
              <path
                d="M10 18.75C7.67936 18.75 5.45376 17.8281 3.81282 16.1872C2.17187 14.5462 1.25 12.3206 1.25 10C1.25 7.67936 2.17187 5.45376 3.81282 3.81282C5.45376 2.17187 7.67936 1.25 10 1.25C12.3206 1.25 14.5462 2.17187 16.1872 3.81282C17.8281 5.45376 18.75 7.67936 18.75 10C18.75 12.3206 17.8281 14.5462 16.1872 16.1872C14.5462 17.8281 12.3206 18.75 10 18.75ZM10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0C7.34784 0 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C4.8043 18.9464 7.34784 20 10 20Z"
                fill="#F5F3FF"
              />
              <path
                d="M8.75195 13.7499C8.75195 13.5858 8.78429 13.4232 8.8471 13.2715C8.90992 13.1199 9.002 12.9821 9.11807 12.866C9.23414 12.7499 9.37194 12.6579 9.5236 12.5951C9.67526 12.5322 9.8378 12.4999 10.002 12.4999C10.1661 12.4999 10.3287 12.5322 10.4803 12.5951C10.632 12.6579 10.7698 12.7499 10.8858 12.866C11.0019 12.9821 11.094 13.1199 11.1568 13.2715C11.2196 13.4232 11.252 13.5858 11.252 13.7499C11.252 14.0814 11.1203 14.3994 10.8858 14.6338C10.6514 14.8682 10.3335 14.9999 10.002 14.9999C9.67043 14.9999 9.35249 14.8682 9.11807 14.6338C8.88365 14.3994 8.75195 14.0814 8.75195 13.7499ZM8.87445 6.24365C8.85781 6.08595 8.8745 5.92652 8.92345 5.77569C8.97241 5.62486 9.05252 5.486 9.1586 5.36814C9.26468 5.25027 9.39436 5.15602 9.53922 5.09151C9.68408 5.02699 9.84088 4.99365 9.99945 4.99365C10.158 4.99365 10.3148 5.02699 10.4597 5.09151C10.6045 5.15602 10.7342 5.25027 10.8403 5.36814C10.9464 5.486 11.0265 5.62486 11.0755 5.77569C11.1244 5.92652 11.1411 6.08595 11.1245 6.24365L10.687 10.6274C10.6723 10.7996 10.5935 10.96 10.4661 11.0769C10.3388 11.1939 10.1723 11.2587 9.99945 11.2587C9.82661 11.2587 9.66007 11.1939 9.53276 11.0769C9.40545 10.96 9.32665 10.7996 9.31195 10.6274L8.87445 6.24365Z"
                fill="#F5F3FF"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_96">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
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
