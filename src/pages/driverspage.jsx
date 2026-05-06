import dp from "../Images/dog.svg";
import logout from "../Images/logout-circle.svg";
import Search from "../Images/Search.png";
import dot from "../Images/Vector.svg";
import filter from "../Images/filter.svg";
import sarrow from "../Images/Icon.svg";
import ellipse from "../Images/Ellipse.svg";
import star from "../Images/Star.svg";
import point from "../Images/Dot.svg";
import option from "../Images/if.svg";
import point2 from "../Images/point.svg";
import breach from "../Images/chevron-down.svg";
import left from "../Images/Left-arrow.svg";
import right from "../Images/Right-arrow.svg";
import { useState } from "react";

export default function drivers() {


    const [activeTab, setActiveTab] = useState("All Drivers");

  const columns = [
    "Driver ID",
    "Image",
    "Name",
    "Phone",
    "Tier",
    "Vehicle",
    "Wallet Balance",
    "Rating",
    "Trips",
    "Reports",
    "Status",
    "",
  ];


const tabs = [
  "All Drivers",
  "Pending Verification",
  "Mini",
  "Regular",
  "Super",
];


  const drivers = [
    {
      id: "DR1023",
      image: ellipse,
      name: "Pedro Macejkovic",
      phone: "+234 812 334 2211",
      tier: "Regular",
      vehicle: "Camry 2020",
      wallet: "₦45,000",
      rating: 4.5,
      trips: 840,
      reports: 2,
      status: "Active",
    },
    {
      id: "DR1024",
      image: ellipse,
      name: "Darla Schroeder",
      phone: "+234 812 334 2211",
      tier: "Super",
      vehicle: "Camry 2020",
      wallet: "₦45,000",
      rating: 4.5,
      trips: 840,
      reports: 2,
      status: "Active",
    },
    {
      id: "DR1025",
      image: ellipse,
      name: "Ryan Russel",
      phone: "+234 812 334 2211",
      tier: "Mini",
      vehicle: "Camry 2020",
      wallet: "₦45,000",
      rating: 4.5,
      trips: 840,
      reports: 2,
      status: "Inactive",
    },
    {
      id: "DR1026",
      image: ellipse,
      name: "Lynn Kuhlman",
      phone: "+234 812 334 2211",
      tier: "Regular",
      vehicle: "Camry 2020",
      wallet: "₦45,000",
      rating: 4.5,
      trips: 840,
      reports: 2,
      status: "Active",
    },
    {
      id: "DR1027",
      image: ellipse,
      name: "Phil Steuber",
      phone: "+234 812 334 2211",
      tier: "Mini",
      vehicle: "Camry 2020",
      wallet: "₦45,000",
      rating: 4.5,
      trips: 840,
      reports: 2,
      status: "Active",
    },
    {
      id: "DR1028",
      image: ellipse,
      name: "Muriel Gulgowski",
      phone: "+234 812 334 2211",
      tier: "Super",
      vehicle: "Camry 2020",
      wallet: "₦45,000",
      rating: 4.5,
      trips: 840,
      reports: 2,
      status: "Active",
    },
    {
      id: "DR1029",
      image: ellipse,
      name: "Andrew Boyer",
      phone: "+234 812 334 2211",
      tier: "Mini",
      vehicle: "Camry 2020",
      wallet: "₦45,000",
      rating: 4.5,
      trips: 840,
      reports: 2,
      status: "Active",
    },
    {
      id: "DR1030",
      image: ellipse,
      name: "Heidi Weissnat",
      phone: "+234 812 334 2211",
      tier: "Super",
      vehicle: "Camry 2020",
      wallet: "₦45,000",
      rating: 4.5,
      trips: 840,
      reports: 2,
      status: "Active",
    },
    {
      id: "DR1031",
      image: ellipse,
      name: "Gabriel Nader-Blick",
      phone: "+234 812 334 2211",
      tier: "Super",
      vehicle: "Camry 2020",
      wallet: "₦45,000",
      rating: 4.5,
      trips: 840,
      reports: 2,
      status: "Active",
    },
    {
      id: "DR1032",
      image: ellipse,
      name: "Madeline Kuphal",
      phone: "+234 812 334 2211",
      tier: "Super",
      vehicle: "Camry 2020",
      wallet: "₦45,000",
      rating: 4.5,
      trips: 840,
      reports: 2,
      status: "Active",
    },
    {
      id: "DR1033",
      image: ellipse,
      name: "Isaac Hartmann",
      phone: "+234 812 334 2211",
      tier: "Super",
      vehicle: "Camry 2020",
      wallet: "₦45,000",
      rating: 4.5,
      trips: 840,
      reports: 2,
      status: "Active",
    },
    {
      id: "DR1034",
      image: ellipse,
      name: "Angelina Wyman",
      phone: "+234 812 334 2211",
      tier: "Super",
      vehicle: "Camry 2020",
      wallet: "₦45,000",
      rating: 4.5,
      trips: 840,
      reports: 2,
      status: "Active",
    },
    {
      id: "DR1035",
      image: ellipse,
      name: "Courtney Von",
      phone: "+234 812 334 2211",
      tier: "Super",
      vehicle: "Camry 2020",
      wallet: "₦45,000",
      rating: 4.5,
      trips: 840,
      reports: 2,
      status: "Active",
    },
    {
      id: "DR1036",
      image: ellipse,
      name: "Kayla Will",
      phone: "+234 812 334 2211",
      tier: "Super",
      vehicle: "Camry 2020",
      wallet: "₦45,000",
      rating: 4.5,
      trips: 840,
      reports: 2,
      status: "Active",
    },
  ];

  const DriverRow = ({ driver }) => (
    <div className="grid grid-cols-12 items-center px-4 py-2 text-sm border-t border-gray-200">
      <p>{driver.id}</p>

      <img src={driver.image} className="h-7 w-7 rounded-full" />

      <p className="text-[#163068] font-medium truncate">{driver.name}</p>

      <p>{driver.phone}</p>

      <p className="font-bold">{driver.tier}</p>

      <p className="text-[#667085]">{driver.vehicle}</p>

      <p className="text-[#667085]">{driver.wallet}</p>

      <div className="flex items-center gap-1">
        <span>{driver.rating}</span>
        <img src={star} className="h-3 w-3" />
      </div>

      <p>{driver.trips}</p>

      <p>{driver.reports}</p>

      <div
        className={`flex items-center gap-2 px-2 py-1 rounded-xl w-fit text-xs ${
          driver.status === "Active"
            ? "bg-[#ECFDF3] text-[#037847]"
            : "bg-[#FFF5C1] text-yellow-700"
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
        {driver.status}
      </div>

      <img src={option} />
    </div>
  );

  return (
    <div className="w-full p-2">
      <div className="mt-8 flex justify-between">
        <h1 className="text-[#3D3D3D] font-semibold text-[26px] font-[satoshi]">
          Drivers
        </h1>

        <div className="flex items-center w-[19%] justify-between">
          <img src={dp} alt="dp" className="w-8 h-8" />
          <p className="font-bold text-[13px] mr-7 font-[satoshi]">
            Xoren Adujoh
          </p>
          <img src={logout} alt="" className="w-6 h-6" />
        </div>
      </div>

      <div className="mt-6  flex gap-x-4">
        <div className="flex-1 h-19 flex flex-col justify-center items-center rounded-xl bg-white">
          <p className="text-[13px] text-[#8181A5] font-[lato]">
            Total Drivers
          </p>
          <p className="font-semibold text-[19px] font-[lato]">2,482</p>
        </div>

        <div className="flex-1 h-19 flex flex-col justify-center items-center rounded-xl bg-white">
          <p className="text-[13px] text-[#E55A0F] font-[lato]">
            Pending Verifications
          </p>
          <p className="font-semibold text-[#E55A0F] text-[19px] font-[lato]">
            58
          </p>
        </div>

        <div className="flex-1 h-19 flex flex-col justify-center items-center rounded-xl bg-white">
          <p className="text-[13px] text-[#8181A5] font-[lato]">Mini Drivers</p>
          <p className="font-semibold text-[19px] font-[lato]">812</p>
        </div>

        <div className="flex-1 h-19 flex flex-col justify-center items-center rounded-xl bg-white">
          <p className="text-[13px] text-[#8181A5] font-[lato]">
            Regular Drivers
          </p>
          <p className="font-semibold text-[19px] font-[lato]">1,120</p>
        </div>

        <div className="flex-1 h-19 flex flex-col justify-center items-center rounded-xl bg-white">
          <p className="text-[13px] text-[#8181A5] font-[lato]">
            Super Drivers
          </p>
          <p className="font-semibold text-[19px] font-[lato]">55</p>
        </div>
      </div>

      <div className=" mt-5 flex justify-between items-center mb-2 ">
        <div className="flex h-13 items-center justify-between bg-white gap-2 rounded-lg w-[40%]">
          <div className="bg-[#F4F4F4]  h-9 flex items-center flex-1 rounded-lg ml-2">
            <img src={Search} alt="" className="h-4 w-4 ml-2" />
            <input
              type="text"
              placeholder="Search..."
              className="font-medium ml-3 text-[15px] font-[satoshi] border-none outline-none focus:outline-none focus:ring-0"
            />
          </div>
          <hr className="h-4.25 w-[1.5px] bg-[#A1A1A1]" />
          <p className="text-[13px] font-bold font-[satoshi]">Sorting</p>
          <div className=" border-t- w-40 mr-5 flex justify-between items-center h-8 rounded-lg border border-[#E2E2E2]">
            <p className="ml-2 text-[13px] text-[#727070] font-[satoshi]">
              Show all
            </p>
            <img src={dot} alt="" className="h-2.5 w-2.5 mr-2" />
          </div>
        </div>

        <div className="flex h-11.5 items-center bg-white rounded-lg w-[40%] justify-center px-1">
          <div className="h-9.5 bg-[#EDEDED] rounded-lg w-full flex items-center justify-between px-1.5 gap-1">
            {tabs.map((tab) => {
              const isActive = activeTab === tab;

              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`h-7.5 px-3 flex items-center justify-center rounded-lg text-[12px] font-medium font-[satoshi] transition-all
                ${
                  isActive
                    ? "bg-white text-black"
                    : "text-[#7D7D91] hover:text-black"
                }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="overflow-scroll">
        <div className="grid grid-cols-12 px-4 py-2 bg-[#FCFCFD] text-xs text-[#667085] font-medium">
          {columns.map((col, i) => (
            <div key={i} className="flex items-center gap-1">
              {col}
              {col && <img src={sarrow} alt="" />}
            </div>
          ))}
        </div>

        {drivers.map((driver) => (
          <DriverRow key={driver.id} driver={driver} />
        ))}
      </div>
    </div>
  );
}
