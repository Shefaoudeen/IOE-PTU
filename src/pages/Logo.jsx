import React from "react";
import { Logo } from "../assets";

const LogoMobile = () => {
  return (
    <div className="fixed flex justify-center items-center w-full h-screen -z-10 sm:hidden">
      <img src={Logo} className="opacity-10 w-full" />
    </div>
  );
};

export default LogoMobile;
