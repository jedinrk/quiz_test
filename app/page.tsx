import Image from "next/image";
import EllipseOne from "../public/ellipselight.svg";
import NavBar from "./components/Navbar/NavBar";
import Card from "./components/Card/Card";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";
import PhoneIcon from "../public/phone_icon.svg";

export default function Home() {
  return (
    <main>
      <Image className="absolute container m-0 p-0" src={EllipseOne} alt="" />
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
      </div>
      <Card/>
    </main>
  );
}
