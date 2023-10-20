import React from "react";
import Image from "next/image";
import Telegram from "../../../public/telegram.svg";
import Whatsapp from "../../../public/whatsapp.svg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className="mx-auto h-[96px] px-2 sm:px-6 lg:px-8 opacity-50 bg-slate-900">
      <div className="relative flex h-16 items-center justify-between">
        <div className="w-[154px] h-[52px] left-[1158px] top-[14px] absolute rounded-[60px] border-2 border-violet-700 justify-center items-center gap-2.5 inline-flex">
          <div className={`${styles.contactNow} font-publicsans`}>
            Contact now
          </div>
        </div>
        <div className="w-[108px] h-11 left-[994px] top-[16px] absolute justify-start items-center gap-5 inline-flex">
          <div className="self-stretch p-3 bg-green-600 rounded-[60px] flex-col justify-center items-center gap-2.5 inline-flex">
            <div className="w-5 h-5 relative">
              <Image src={Telegram} alt={""} />
            </div>
          </div>
          <div className="self-stretch p-3 bg-blue-600 rounded-[60px] justify-center items-center gap-2.5 flex">
            <div className="w-5 h-5 relative">
              <Image src={Whatsapp} alt={""} />
            </div>
          </div>
        </div>
        <div className={`${styles.logo} font-playfair`}>AZIZI</div>
      </div>
    </div>
  );
};

export default Header;
