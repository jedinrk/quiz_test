import React, { Component } from "react";
import Image from "next/image";

import Telegram from "../../../public/telegram.svg";
import Whatsapp from "../../../public/whatsapp.svg";
import AziziLogo from "../../../public/AZIZI.svg";

const NavBar = () => {
  return (
    <nav className="opacity-50 bg-slate-900 w-1440 h-92 flex items-center justify-between px-6">
      <Image src={AziziLogo} alt={""} className="w-100 h-auto" />
      <div className="flex items-center space-x-6">
        <Image src={Telegram} alt="Telegram" className="w-30 h-30" />
        <Image src={Whatsapp} alt="WhatsApp" className="w-30 h-30" />
      </div>
      <button className="bg-blue-500 text-white py-2 px-4 rounded">
        Contact
      </button>
    </nav>
  );
};

export default NavBar;
