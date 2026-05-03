import { NavLink } from "react-router-dom";
import Logo from "../Images/Logo.svg";
import dashlogo from "../Images/Component 2.svg";
import dashlogo2 from "../Images/Component 2.1.svg";
import drlogo from "../Images/mdi_steering.svg";
import drlogo2 from "../Images/mdi_steeringActive.svg";
import users from "../Images/man.svg";
import users2 from "../Images/man 2.1.svg";
import dispatch from "../Images/dispatch.svg";
import Locay from "../Images/Locay.svg";
import dollar from "../Images/dollar.svg";
import wallet from "../Images/Wallet.svg";
import support from "../Images/support.svg";
import car from "../Images/car.svg";
import star from "../Images/shuriken.svg";
import crown from "../Images/crown.svg";
import settings from "../Images/settings.svg";

export default function Sidebar() {
  return (
    <div className="flex flex-col ">
      <div className="mt-[36.31px] ml-[43.01px]">
        <img src={Logo} alt="" className="w-[109.98px] h-[31.36px]" />
      </div>

      <nav className="h-158.5 flex flex-col gap-y-3.5 ml-5.5 font-[satoshi] font-medium  mt-10">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-2.75 w-38 h-10 pt-2 pr-2.5 pb-2 pl-2.5 
                  ${isActive ? "bg-[#F5C710] rounded-lg" : ""}`}>
          {({ isActive }) => (
            <>
              <img src={isActive ? dashlogo2 : dashlogo} alt="" className="w-4.5 h-5"/>
              <p className={`text-[16px] ${isActive ? "text-black" : "text-white"}`}>
                Dashboard
              </p>
            </>
          )}
        </NavLink>

        <NavLink
          to="/"
          className= {({ isActive }) =>  
            `flex items-center w-38 h-10 pt-2 pr-2.5 pb-2 pl-2.5 gap-2.75
          ${isActive ? "bg-[#F5C710] rounded-lg" : ""}`}>
            {({ isActive }) => (
          <>
            <img src={isActive ? drlogo2 : drlogo} alt="" className="w-5 h-5" />
            <p className={`text-[16px] ${isActive ? "text-black}" : "text-white"}`}>
              Drivers
            </p>
          </>
            )}
        </NavLink>

        <NavLink
          to="/users"
          className= {({ isActive })=>
          `flex items-center w-38 h-10 pt-2 pr-2.5 pb-2 pl-2.5 gap-2.75
          ${isActive ? "bg-[#F5C710] rounded-lg" : ""}`}>
            {({ isActive })=> (
              <>
                <img src={isActive ? users2 : users} alt="" className="w-4.5 h-4.5" />
                <p className={`text-[16px] ${isActive ? "text-black" : "text-white"}`}>
                  Users
                </p>
              </>
            )}
        </NavLink>

        <NavLink
          to="/"
          className="flex items-center w-38 h-10 pt-2 pr-2.5 pb-2 pl-2.5 gap-2.75"
        >
          <img src={dispatch} alt="" className="w-5 h-[19.9px]" />
          <p className="text-[16px] text-white">Dispatch</p>
        </NavLink>

        <NavLink
          to="/"
          className="flex items-center w-38 h-10 pt-2 pr-2.5 pb-2 pl-2.5 gap-2.75"
        >
          <img src={Locay} alt="" className="w-5 h-5" />
          <p className="text-[16px] text-white">Trips</p>
        </NavLink>

        <NavLink
          to="/"
          className="flex items-center w-38 h-10 pt-2 pr-2.5 pb-2 pl-2.5 gap-2.75 ml-0.5"
        >
          <img src={dollar} alt="" className="w-4 h-4" />
          <p className="text-[16px] text-white">Transactions</p>
        </NavLink>

        <NavLink
          to="/"
          className="flex items-center w-38 h-10 pt-2 pr-2.5 pb-2 pl-2.5 gap-2.75"
        >
          <img src={wallet} alt="" className="w-5 h-5" />
          <p className="text-[16px] text-white">Wallet</p>
        </NavLink>

        <NavLink
          to="/"
          className="flex items-center w-38 h-10 pt-2 pr-2.5 pb-2 pl-2.5 gap-2.75"
        >
          <img src={support} alt="" className="w-5 h-5" />
          <p className="text-[16px] text-white">Support</p>
        </NavLink>

        <NavLink
          to="/"
          className="flex items-center w-38 h-10 pt-2 pr-2.5 pb-2 pl-2.5 gap-2.75"
        >
          <img src={car} alt="" className="w-6 h-6" />
          <p className="text-[16px] text-white">Vehicles</p>
        </NavLink>

        <NavLink
          to="/"
          className="flex items-center w-38 h-10 pt-2 pr-2.5 pb-2 pl-2.5 gap-2.75"
        >
          <img src={star} alt="" className="w-5 h-5" />
          <p className="text-[16px] text-white">Promotions</p>
        </NavLink>

        <NavLink
          to="/"
          className="flex items-center w-38 h-10 pt-2 pr-2.5 pb-2 pl-2.5 gap-2.75"
        >
          <img src={crown} alt="" className="w-5 h-5" />
          <p className="text-[16px] text-white">Admins</p>
        </NavLink>

        <NavLink
          to="/"
          className="flex items-center w-38 h-10 pt-2 pr-2.5 pb-2 pl-2.5 gap-2.75"
        >
          <img src={settings} alt="" className="w-4.5 h-4.5" />
          <p className="text-[16px] text-white">Settings</p>
        </NavLink>
      </nav>
    </div>
  );
}
