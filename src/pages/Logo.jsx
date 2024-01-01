import React from "react";
import { Logo } from "../assets";

const LogoMobile = () => {
  return (
    <div className="fixed flex justify-center items-center w-[100%] h-screen -z-10 sm:hidden">
      <img src={Logo} className="opacity-10 fixed" width={300} />
    </div>
  );
};

export default LogoMobile;
