import React, { Component } from "react";
import Image from "next/image";

import Telegram from "../../../public/telegram.svg";
import Whatsapp from "../../../public/whatsapp.svg";
import AziziLogo from "../../../public/AZIZI.svg";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="w-full h-[92px] bg-slate-900 box-border">
      <div className="container mx-auto py-[20px] px-[64px] h-full">
        <div className="flex justify-between items-center h-full">
          <div className="text-violet-50 text-4xl font-bold">AZIZI</div>
          <ul className="flex justify-center items-center">
            <li>
              <Link href="/telegram">
                <div className="p-3 bg-green-600 rounded-[60px] flex-col">
                  <Image src={Telegram} alt="Telegram" className="w-30 h-30" />
                </div>
              </Link>
            </li>
            <li>
              <Link href="/whatsapp">
                <div className="ml-[20px] mr-[56px] p-3 bg-blue-600 rounded-[60px]">
                  <Image src={Whatsapp} alt="WhatsApp" className="w-30 h-30" />
                </div>
              </Link>
            </li>
            <li className="flex justify-center items-center">
              <Link href="/contact_now">
                <div className="px-6 py-4 rounded-[60px] border-2 border-violet-700 justify-start items-start">
                  <div className="text-white text-sm font-bold font-['Public Sans'] uppercase leading-tight">
                    Contact now
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
