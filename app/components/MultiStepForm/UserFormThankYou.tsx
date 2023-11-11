import React from "react";

import Image from "next/image";
import completedSvg from "../../../public/completed.svg";

const CompletedIcon = () => <Image src={completedSvg} alt="Completed Icon" />;

function UserFormThankYou() {
  return (
    <div className="pt-[100px] pb-[110px] flex flex-col items-center">
      <div>
        <CompletedIcon />
      </div>
      <div className="mt-[10px] text-slate-900 text-2xl font-extrabold">
        Thank you for answers!
      </div>
    </div>
  );
}

export default UserFormThankYou;
