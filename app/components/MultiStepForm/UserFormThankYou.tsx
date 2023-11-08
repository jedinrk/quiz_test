import React from "react";
import { FormWrapper } from "./FormWrapper";

function UserFormThankYou() {
  return (
    <div className="pt-[100px] pb-[110px] flex flex-col items-center">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
        >
          <rect width="60" height="60" rx="30" fill="#3B82F6" />
          <path
            d="M25.4245 35.4002L20.4199 30.1119C20.2891 29.9719 20.1332 29.8608 19.9614 29.7849C19.7896 29.7091 19.6053 29.67 19.419 29.67C19.2328 29.67 19.0485 29.7091 18.8767 29.7849C18.7049 29.8608 18.549 29.9719 18.4181 30.1119C18.2857 30.2502 18.1805 30.4149 18.1087 30.5964C18.037 30.778 18 30.9728 18 31.1695C18 31.3663 18.037 31.5611 18.1087 31.7427C18.1805 31.9242 18.2857 32.0889 18.4181 32.2272L24.4093 38.5581C24.9669 39.1473 25.8677 39.1473 26.4254 38.5581L41.5819 22.5572C41.7143 22.4189 41.8195 22.2542 41.8913 22.0726C41.963 21.8911 42 21.6963 42 21.4995C42 21.3028 41.963 21.108 41.8913 20.9264C41.8195 20.7448 41.7143 20.5801 41.5819 20.4419C41.451 20.3019 41.2951 20.1908 41.1233 20.1149C40.9515 20.0391 40.7672 20 40.581 20C40.3947 20 40.2104 20.0391 40.0386 20.1149C39.8668 20.1908 39.7109 20.3019 39.5801 20.4419L25.4245 35.4002Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="mt-[10px] text-slate-900 text-2xl font-extrabold">
        Thank you for answers!
      </div>
    </div>
  );
}

export default UserFormThankYou;
