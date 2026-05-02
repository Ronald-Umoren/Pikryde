import { NavLink } from "react-router-dom";
import Logo from "../Images/Logo.png";
import dashlogo from "../Images/Component 2.png";
import drlogo from "../Images/mdi_steering.png"
import users from "../Images/man.png"
import dispatch from "../Images/dispatch.png"
import Locay from "../Images/Locay.png"
import dollar from "../Images/dollar.png"
import wallet from "../Images/Wallet.png"
import support from "../Images/support.png"
import car from "../Images/car.png"
import star from "../Images/shuriken.png"
import crown from "../Images/crown.png"
import settings from "../Images/settings.png"

export default function Sidebar() {
  return (
    <div className="flex flex-col ">
      <div className="mt-5 ml-10">
        <img src={Logo} alt="" className="w-22.5" />
      </div>

      <nav>
        <NavLink to="" className="flex items-center mt-10 ml-8">
          <img src={dashlogo} alt="" className="w-4.5 h-5" />
          <p className=" text-white text-[14px] ml-2 font-medium font-[satoshi]">
            Dashboard
          </p>
        </NavLink>

        <NavLink to="/" className="flex items-center mt-5 ml-7.5 w-30 bg-amber-950 p-1.5 rounded font-[satoshi]">
          <img src={drlogo} alt="" className="h-5.5" />
          <p className="text-[14px] ml-1 font-bold">
            Drivers
          </p>
        </NavLink>

        <NavLink to="" className="flex items-center mt-5 ml-8 font-[satoshi]">
          <img src={users} alt="" className="h-5" />
          <p className=" text-white text-[14px] ml-2 font-medium">
            Users
          </p>
        </NavLink>

        <NavLink to="" className="flex items-center mt-5 ml-8 font-[satoshi]">
          <img src={dispatch} alt="" className="h-5" />
          <p className=" text-white text-[14px] ml-2 font-medium">
            Dispatch
          </p>
        </NavLink>

        <NavLink to="" className="flex items-center mt-5 ml-8 font-[satoshi]">
          <img src={Locay} alt="" className="h-5" />
          <p className=" text-white text-[14px] ml-2 font-medium">
            Trips
          </p>
        </NavLink>

        <NavLink to="" className="flex items-center mt-5 ml-8 font-[satoshi]">
          <img src={dollar} alt="" className="h-5" />
          <p className=" text-white text-[14px] ml-2 font-medium">
            Transactions
          </p>
        </NavLink>

        <NavLink to="" className="flex items-center mt-5 ml-8 font-[satoshi]">
          <img src={wallet} alt="" className="h-5" />
          <p className=" text-white text-[14px] ml-2 font-medium">
            Wallet
          </p>
        </NavLink>

        <NavLink to="" className="flex items-center mt-5 ml-8 font-[satoshi]">
          <img src={support} alt="" className="h-5" />
          <p className=" text-white text-[14px] ml-2 font-medium">
            Support
          </p>
        </NavLink>

        <NavLink to="" className="flex items-center mt-5 ml-8 font-[satoshi]">
          <img src={car} alt="" className="h-5" />
          <p className=" text-white text-[14px] ml-2 font-medium">
            Vehicles
          </p>
        </NavLink>

        <NavLink to="" className="flex items-center mt-5 ml-8 font-[satoshi]">
          <img src={star} alt="" className="h-5" />
          <p className=" text-white text-[14px] ml-2 font-medium">
            Promotions
          </p>
        </NavLink>

        <NavLink to="" className="flex items-center mt-5 ml-8 font-[satoshi]">
          <img src={crown} alt="" className="h-5" />
          <p className=" text-white text-[14px] ml-2 font-medium">
            Admins
          </p>
        </NavLink>

        <NavLink to="" className="flex items-center mt-5 ml-8 font-[satoshi]">
          <img src={settings} alt="" className="h-5" />
          <p className=" text-white text-[14px] ml-2 font-medium">
            Settings
          </p>
        </NavLink>
      </nav>
    </div>
  );
}
