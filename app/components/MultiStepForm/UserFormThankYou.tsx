import React, { useState } from "react";

import AnimCheck from "../AnimCheck/AnimCheck";

function UserFormThankYou() {
  const [update, setUpdate] = useState(false);

  return (
    <div className="pt-[100px] pb-[110px] flex flex-col items-center">
      <div>
        {/* <AnimCheck/>
        <CompletedIcon /> */}
        {update && <AnimCheck />}
      </div>
      <div className="mt-[10px] text-slate-900 text-2xl font-extrabold" >
        Thank you for answers!
      </div>
    </div>
  );
}

export default UserFormThankYou;
