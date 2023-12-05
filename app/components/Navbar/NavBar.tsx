import React, { Component } from "react";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";

import Telegram from "../../../public/telegram.svg";
import Whatsapp from "../../../public/whatsapp.svg";
import Logo from "../../../public/logo.svg"
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="sticky top-0 left-0 w-full flex justify-between items-center pl-[64px] pr-[64px] pt-[20px] pb-[20px] bg-slate-900/50">
      <Image src={Logo} alt="Logo" />
      <ul className="flex items-center m-0">
        <li className="mx-[20px]">
          <Link href="/telegram">
            <div className="p-3 bg-green-600 rounded-[60px] flex-col justify-center items-center">
              <Image src={Telegram} alt="" />
            </div>
          </Link>
        </li>
        <li className="">
          <Link href="/whatsapp">
            <div className="p-3 bg-blue-600 rounded-[60px] justify-center items-center">
              <Image src={Whatsapp} alt="" />
            </div>
          </Link>
        </li>
        <li className="ml-[56px]">
          <button className="px-6 py-4 rounded-[60px] border-2 border-violet-700 text-white text-sm font-bold font-['Public Sans'] uppercase">
            Contact Now
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
