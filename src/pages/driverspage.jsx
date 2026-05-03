import dp from "../Images/dog.svg";
import logout from "../Images/logout-circle.svg";
import Search from "../Images/Search.png";
import dot from "../Images/Vector.svg";
import filter from "../Images/filter.svg";
import sarrow from "../Images/Icon.svg";
import ellipse from "../Images/Ellipse.svg";
import star from "../Images/Star.png";
import point from "../Images/Dot.svg";
import option from "../Images/if.png";
import point2 from "../Images/point.svg";
import breach from "../Images/chevron-down.png"
import left from "../Images/Left-arrow.png"
import right from "../Images/Right-arrow.png"


export default function drivers() {
  return (
    <div className="w-full">
      <div className="mt-8 ml-10 flex w-250 justify-between">
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

      <div className="mt-6 w-250 ml-10 flex gap-x-4">
        <div className="w-50 h-19 flex flex-col justify-center items-center rounded-xl bg-white">
          <p className="text-[13px] text-[#8181A5] font-[lato]">
            Total Drivers
          </p>
          <p className="font-semibold text-[19px] font-[lato]">2,482</p>
        </div>

        <div className="w-50 h-19 flex flex-col justify-center items-center rounded-xl bg-white">
          <p className="text-[13px] text-[#E55A0F] font-[lato]">
            Pending Verifications
          </p>
          <p className="font-semibold text-[#E55A0F] text-[19px] font-[lato]">
            58
          </p>
        </div>

        <div className="w-50 h-19 flex flex-col justify-center items-center rounded-xl bg-white">
          <p className="text-[13px] text-[#8181A5] font-[lato]">Mini Drivers</p>
          <p className="font-semibold text-[19px] font-[lato]">812</p>
        </div>

        <div className="w-50 h-19 flex flex-col justify-center items-center rounded-xl bg-white">
          <p className="text-[13px] text-[#8181A5] font-[lato]">
            Regular Drivers
          </p>
          <p className="font-semibold text-[19px] font-[lato]">1,120</p>
        </div>

        <div className="w-50 h-19 flex flex-col justify-center items-center rounded-xl bg-white">
          <p className="text-[13px] text-[#8181A5] font-[lato]">
            Super Drivers
          </p>
          <p className="font-semibold text-[19px] font-[lato]">55</p>
        </div>
      </div>

      <div className="w-250 ml-10 mt-5 flex justify-between items-center">
        <div className="flex h-13 items-center justify-between bg-white rounded-lg w-125">
          <div className="bg-[#F4F4F4]  h-9 flex items-center w-55 rounded-lg ml-2">
            <img src={Search} alt="" className="h-4 w-4 ml-2" />
            <input
              type="text"
              placeholder="Search..."
              className="text-[#727070] font-medium ml-3 text-[15px] font-[satoshi]"
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

        <div className="flex h-11.5 items-center bg-white rounded-lg w-101 justify-center">
          <div className="h-9.5 bg-[#EDEDED] rounded-lg w-98 flex items-center justify-between">
            <div className="bg-white h-7.5 w-18 flex justify-center items-center ml-1.5 rounded-lg">
              <p className="text-[12px] font-medium font-[satoshi]">
                All Drivers
              </p>
            </div>
            <p className="text-[#7D7D91] text-[12px] font-medium font-[satoshi]">
              Pending Verification
            </p>
            <p className="text-[#7D7D91] text-[12px] font-medium font-[satoshi]">
              Mini
            </p>
            <p className="text-[#7D7D91] text-[12px] font-medium font-[satoshi]">
              Regular
            </p>
            <p className="text-[#7D7D91] text-[12px] mr-2 font-medium font-[satoshi]">
              Super
            </p>
          </div>
        </div>
      </div>

      <div className="w-250 ml-10 mt-5 bg-white rounded font-[Inter]">
        <div className="flex justify-between items-center h-20">
          <div className="ml-4">
            <p className="text-[#101828] text-[15px] mb-1.5 font-medium">
              Driver Management
            </p>
            <p className="text-[13px] text-[#667085] font-normal">
              Manage all drivers by tier and verification state
            </p>
          </div>
          <div className="flex">
            <img src={filter} alt="" className="h-5 w-5" />
            <p className="text-[#344054] mr-10 text-[15px] ml-2 font-medium ">Filters</p>
          </div>
        </div>

        <hr className="border-t border-[#EAECF0]" />

        <div className="bg-[#FCFCFD] text-[9px] h-8 flex items-center ml-4 text-[#667085] font-medium">
          <p className="mr-12 font-[Inter]">Driver ID</p>
          <p className="mr-11 font-[Inter]">Image</p>

          <div className="flex items-center mr-14">
            <p>Name</p>
            <img src={sarrow} alt="" className="ml-1" />
          </div>

          <div className="flex items-center mr-11.5">
            <p>Phone</p>
            <img src={sarrow} alt="" className="ml-1" />
          </div>

          <div className="flex items-center mr-10.5">
            <p>Tier</p>
            <img src={sarrow} alt="" className="ml-1" />
          </div>

          <div className="flex items-center mr-12">
            <p>Vehicle</p>
            <img src={sarrow} alt="" className="ml-1" />
          </div>

          <div className="flex items-center mr-10">
            <p>Wallet Balance</p>
            <img src={sarrow} alt="" className="ml-1" />
          </div>

          <div className="flex items-center mr-8">
            <p>Rating</p>
            <img src={sarrow} alt="" className="ml-1" />
          </div>

          <div className="flex items-center mr-13">
            <p>Trips</p>
            <img src={sarrow} alt="" className="ml-1" />
          </div>

          <div className="flex items-center mr-13">
            <p>Reports</p>
            <img src={sarrow} alt="" className="ml-1" />
          </div>

          <div className="flex items-center mr-15">
            <p>Status</p>
            <img src={sarrow} alt="" className="ml-1" />
          </div>
        </div>

        <hr className="border-t border-[#EAECF0]" />

        <div className="h-8 flex items-center ml-3 text-[10px]">
          <div className="mr-11">
            <p className="text-[11.64px] font-medium">DR1023</p>
          </div>

          <div className="mr-10">
            <img src={ellipse} alt="" className="h-7 w-7" />
          </div>

          <div className="mr-2">
            <p className="text-[#163068] font-medium">Pedro Macejkovic</p>
          </div>

          <div>
            <p className="text-[#163068] font-medium">+234 812 334 2211</p>
          </div>

          <div className="mr-8">
            <p className="font-bold">Regular</p>
          </div>

          <div className="mr-9">
            <p className="text-[#667085] font-medium">Camry 2020</p>
          </div>

          <div className="mr-19">
            <p className="text-[#667085] font-medium">₦45,000</p>
          </div>

          <div className="flex items-center mr-11">
            <p className="text-[#667085] font-medium mr-1">4.5</p>
            <img src={star} alt="" className="w-2.5 h-2.5" />
          </div>

          <div className="mr-17">
            <p className="text-[#667085] font-medium">840</p>
          </div>

          <div className="mr-20">
            <p className="text-[#667085] font-medium">2</p>
          </div>

          <div className="bg-[#ECFDF3] h-5 flex items-center w-15 rounded-xl mr-8">
            <img src={point} alt="" className="mr-2 ml-1 h-1.5 w-1.5" />
            <p className="text-[10px] text-[#037847] font-medium">Active</p>
          </div>

          <div>
            <img src={option} alt="" />
          </div>
        </div>

        <hr className="border-t border-[#EAECF0]" />

        <div className="h-8 flex items-center ml-3 text-[10px]">
          <div className="mr-11">
            <p className="text-[11.64px] font-medium">DR1023</p>
          </div>

          <div className="mr-10">
            <img src={ellipse} alt="" className="h-7 w-7" />
          </div>

          <div className="mr-4">
            <p className="text-[#163068] font-medium">Darla Schroeder</p>
          </div>

          <div>
            <p className="text-[#163068] font-medium">+234 812 334 2211</p>
          </div>

          <div className="mr-10">
            <p className="font-bold text-[#0775FA]">Super</p>
          </div>

          <div className="mr-9">
            <p className="text-[#667085] font-medium">Camry 2020</p>
          </div>

          <div className="mr-19">
            <p className="text-[#667085] font-medium">₦45,000</p>
          </div>

          <div className="flex items-center mr-11">
            <p className="text-[#667085] font-medium mr-1">4.5</p>
            <img src={star} alt="" className="w-2.5 h-2.5" />
          </div>

          <div className="mr-17">
            <p className="text-[#667085] font-medium">840</p>
          </div>

          <div className="mr-20">
            <p className="text-[#667085] font-medium">2</p>
          </div>

          <div className="bg-[#ECFDF3] h-5 flex items-center w-15 rounded-xl mr-8">
            <img src={point} alt="" className="mr-2 ml-1 h-1.5 w-1.5" />
            <p className="text-[10px] text-[#037847] font-medium">Active</p>
          </div>

          <div>
            <img src={option} alt="" />
          </div>
        </div>

        <hr className="border-t border-[#EAECF0]" />

        <div className="h-8 flex items-center ml-3 text-[10px]">
          <div className="mr-11">
            <p className="text-[11.64px] font-medium">DR1023</p>
          </div>

          <div className="mr-10">
            <img src={ellipse} alt="" className="h-7 w-7" />
          </div>

          <div className="mr-9">
            <p className="text-[#163068] font-medium">Ryan Russel</p>
          </div>

          <div>
            <p className="text-[#163068] font-medium">+234 812 334 2211</p>
          </div>

          <div className="mr-12 text-[#08A755]">
            <p className="font-bold">Mini</p>
          </div>

          <div className="mr-9">
            <p className="text-[#667085] font-medium">Camry 2020</p>
          </div>

          <div className="mr-19">
            <p className="text-[#667085] font-medium">₦45,000</p>
          </div>

          <div className="flex items-center mr-11">
            <p className="text-[#667085] font-medium mr-1">4.5</p>
            <img src={star} alt="" className="w-2.5 h-2.5" />
          </div>

          <div className="mr-17">
            <p className="text-[#667085] font-medium">840</p>
          </div>

          <div className="mr-19.5">
            <p className="text-[#667085] font-medium">2</p>
          </div>

          <div className="bg-[#FFF5C1] h-5 flex items-center w-16 rounded-xl mr-8">
            <img src={point2} alt="" className="mr-2 ml-1.5 h-1.5 w-1.5" />
            <p className="text-[10px] text-[#037847] font-medium">Inactive</p>
          </div>

          <div>
            <img src={option} alt="" />
          </div>
        </div>

        <hr className="border-t border-[#EAECF0]" />

        <div className="h-8 flex items-center ml-3 text-[10px]">
          <div className="mr-11">
            <p className="text-[11.64px] font-medium">DR1023</p>
          </div>

          <div className="mr-10">
            <img src={ellipse} alt="" className="h-7 w-7" />
          </div>

          <div className="mr-6.5">
            <p className="text-[#163068] font-medium">Lynn Kuhlman</p>
          </div>

          <div>
            <p className="text-[#163068] font-medium">+234 812 334 2211</p>
          </div>

          <div className="mr-8">
            <p className="font-bold">Regular</p>
          </div>

          <div className="mr-9">
            <p className="text-[#667085] font-medium">Camry 2020</p>
          </div>

          <div className="mr-19">
            <p className="text-[#667085] font-medium">₦45,000</p>
          </div>

          <div className="flex items-center mr-11">
            <p className="text-[#667085] font-medium mr-1">4.5</p>
            <img src={star} alt="" className="w-2.5 h-2.5" />
          </div>

          <div className="mr-17">
            <p className="text-[#667085] font-medium">840</p>
          </div>

          <div className="mr-20">
            <p className="text-[#667085] font-medium">2</p>
          </div>

          <div className="bg-[#ECFDF3] h-5 flex items-center w-15 rounded-xl mr-8">
            <img src={point} alt="" className="mr-2 ml-1 h-1.5 w-1.5" />
            <p className="text-[10px] text-[#037847] font-medium">Active</p>
          </div>

          <div>
            <img src={option} alt="" />
          </div>
        </div>

        <hr className="border-t border-[#EAECF0]" />

        <div className="h-8 flex items-center ml-3 text-[10px]">
          <div className="mr-11">
            <p className="text-[11.64px] font-medium">DR1023</p>
          </div>

          <div className="mr-10">
            <img src={ellipse} alt="" className="h-7 w-7" />
          </div>

          <div className="mr-9">
            <p className="text-[#163068] font-medium">Phil Steuber</p>
          </div>

          <div>
            <p className="text-[#163068] font-medium">+234 812 334 2211</p>
          </div>

          <div className="mr-12">
            <p className="font-bold text-[#08A755]">Mini</p>
          </div>

          <div className="mr-9">
            <p className="text-[#667085] font-medium">Camry 2020</p>
          </div>

          <div className="mr-19">
            <p className="text-[#667085] font-medium">₦45,000</p>
          </div>

          <div className="flex items-center mr-11">
            <p className="text-[#667085] font-medium mr-1">4.5</p>
            <img src={star} alt="" className="w-2.5 h-2.5" />
          </div>

          <div className="mr-17">
            <p className="text-[#667085] font-medium">840</p>
          </div>

          <div className="mr-20">
            <p className="text-[#667085] font-medium">2</p>
          </div>

          <div className="bg-[#ECFDF3] h-5 flex items-center w-15 rounded-xl mr-8">
            <img src={point} alt="" className="mr-2 ml-1 h-1.5 w-1.5" />
            <p className="text-[10px] text-[#037847] font-medium">Active</p>
          </div>

          <div>
            <img src={option} alt="" />
          </div>
        </div>

        <hr className="border-t border-[#EAECF0]" />

        <div className="h-8 flex items-center ml-3 text-[10px]">
          <div className="mr-11">
            <p className="text-[11.64px] font-medium">DR1023</p>
          </div>

          <div className="mr-10">
            <img src={ellipse} alt="" className="h-7 w-7" />
          </div>

          <div className="mr-3">
            <p className="text-[#163068] font-medium">Muriel Gulgowski</p>
          </div>

          <div>
            <p className="text-[#163068] font-medium">+234 812 334 2211</p>
          </div>

          <div className="mr-10 text-[#0775FA]">
            <p className="font-bold">Super</p>
          </div>

          <div className="mr-9">
            <p className="text-[#667085] font-medium">Camry 2020</p>
          </div>

          <div className="mr-19">
            <p className="text-[#667085] font-medium">₦45,000</p>
          </div>

          <div className="flex items-center mr-11">
            <p className="text-[#667085] font-medium mr-1">4.5</p>
            <img src={star} alt="" className="w-2.5 h-2.5" />
          </div>

          <div className="mr-17">
            <p className="text-[#667085] font-medium">840</p>
          </div>

          <div className="mr-20">
            <p className="text-[#667085] font-medium">2</p>
          </div>

          <div className="bg-[#ECFDF3] h-5 flex items-center w-15 rounded-xl mr-8">
            <img src={point} alt="" className="mr-2 ml-1 h-1.5 w-1.5" />
            <p className="text-[10px] text-[#037847] font-medium">Active</p>
          </div>

          <div>
            <img src={option} alt="" />
          </div>
        </div>

        <hr className="border-t border-[#EAECF0]" />

        <div className="h-8 flex items-center ml-3 text-[10px]">
          <div className="mr-11">
            <p className="text-[11.64px] font-medium">DR1023</p>
          </div>

          <div className="mr-10">
            <img src={ellipse} alt="" className="h-7 w-7" />
          </div>

          <div className="mr-7">
            <p className="text-[#163068] font-medium">Andrew Boyer</p>
          </div>

          <div>
            <p className="text-[#163068] font-medium">+234 812 334 2211</p>
          </div>

          <div className="mr-11.5 text-[#08A755]">
            <p className="font-bold">Mini</p>
          </div>

          <div className="mr-9">
            <p className="text-[#667085] font-medium">Camry 2020</p>
          </div>

          <div className="mr-19">
            <p className="text-[#667085] font-medium">₦45,000</p>
          </div>

          <div className="flex items-center mr-11">
            <p className="text-[#667085] font-medium mr-1">4.5</p>
            <img src={star} alt="" className="w-2.5 h-2.5" />
          </div>

          <div className="mr-17">
            <p className="text-[#667085] font-medium">840</p>
          </div>

          <div className="mr-20">
            <p className="text-[#667085] font-medium">2</p>
          </div>

          <div className="bg-[#ECFDF3] h-5 flex items-center w-15 rounded-xl mr-8">
            <img src={point} alt="" className="mr-2 ml-1 h-1.5 w-1.5" />
            <p className="text-[10px] text-[#037847] font-medium">Active</p>
          </div>

          <div>
            <img src={option} alt="" />
          </div>
        </div>

        <hr className="border-t border-[#EAECF0]" />

        <div className="h-8 flex items-center ml-3 text-[10px]">
          <div className="mr-11">
            <p className="text-[11.64px] font-medium">DR1023</p>
          </div>

          <div className="mr-10">
            <img src={ellipse} alt="" className="h-7 w-7" />
          </div>

          <div className="mr-6">
            <p className="text-[#163068] font-medium">Heidi Weissnat</p>
          </div>

          <div>
            <p className="text-[#163068] font-medium">+234 812 334 2211</p>
          </div>

          <div className="mr-9.5">
            <p className="font-bold text-[#0775FA]">Super</p>
          </div>

          <div className="mr-9">
            <p className="text-[#667085] font-medium">Camry 2020</p>
          </div>

          <div className="mr-19">
            <p className="text-[#667085] font-medium">₦45,000</p>
          </div>

          <div className="flex items-center mr-11">
            <p className="text-[#667085] font-medium mr-1">4.5</p>
            <img src={star} alt="" className="w-2.5 h-2.5" />
          </div>

          <div className="mr-17">
            <p className="text-[#667085] font-medium">840</p>
          </div>

          <div className="mr-20">
            <p className="text-[#667085] font-medium">2</p>
          </div>

          <div className="bg-[#ECFDF3] h-5 flex items-center w-15 rounded-xl mr-8">
            <img src={point} alt="" className="mr-2 ml-1 h-1.5 w-1.5" />
            <p className="text-[10px] text-[#037847] font-medium">Active</p>
          </div>

          <div>
            <img src={option} alt="" />
          </div>
        </div>

        <hr className="border-t border-[#EAECF0]" />

        <div className="h-8 flex items-center ml-3 text-[10px]">
          <div className="mr-11">
            <p className="text-[11.64px] font-medium">DR1023</p>
          </div>

          <div className="mr-10">
            <img src={ellipse} alt="" className="h-7 w-7" />
          </div>

          <div className="mr-1.5">
            <p className="text-[#163068] font-medium text-[9.5px]">
              Gabriel Nader-Blick
            </p>
          </div>

          <div>
            <p className="text-[#163068] font-medium">+234 812 334 2211</p>
          </div>

          <div className="mr-9.5">
            <p className="font-bold text-[#0775FA]">Super</p>
          </div>

          <div className="mr-9">
            <p className="text-[#667085] font-medium">Camry 2020</p>
          </div>

          <div className="mr-19">
            <p className="text-[#667085] font-medium">₦45,000</p>
          </div>

          <div className="flex items-center mr-11">
            <p className="text-[#667085] font-medium mr-1">4.5</p>
            <img src={star} alt="" className="w-2.5 h-2.5" />
          </div>

          <div className="mr-17">
            <p className="text-[#667085] font-medium">840</p>
          </div>

          <div className="mr-20">
            <p className="text-[#667085] font-medium">2</p>
          </div>

          <div className="bg-[#ECFDF3] h-5 flex items-center w-15 rounded-xl mr-8">
            <img src={point} alt="" className="mr-2 ml-1 h-1.5 w-1.5" />
            <p className="text-[10px] text-[#037847] font-medium">Active</p>
          </div>

          <div>
            <img src={option} alt="" />
          </div>
        </div>

        <hr className="border-t border-[#EAECF0]" />

        <div className="h-8 flex items-center ml-3 text-[10px]">
          <div className="mr-11">
            <p className="text-[11.64px] font-medium">DR1023</p>
          </div>

          <div className="mr-10">
            <img src={ellipse} alt="" className="h-7 w-7" />
          </div>

          <div className="mr-4">
            <p className="text-[#163068] font-medium">Madeline Kuphal</p>
          </div>

          <div>
            <p className="text-[#163068] font-medium">+234 812 334 2211</p>
          </div>

          <div className="mr-9.5">
            <p className="font-bold text-[#0775FA]">Super</p>
          </div>

          <div className="mr-9">
            <p className="text-[#667085] font-medium">Camry 2020</p>
          </div>

          <div className="mr-19">
            <p className="text-[#667085] font-medium">₦45,000</p>
          </div>

          <div className="flex items-center mr-11">
            <p className="text-[#667085] font-medium mr-1">4.5</p>
            <img src={star} alt="" className="w-2.5 h-2.5" />
          </div>

          <div className="mr-17">
            <p className="text-[#667085] font-medium">840</p>
          </div>

          <div className="mr-20">
            <p className="text-[#667085] font-medium">2</p>
          </div>

          <div className="bg-[#ECFDF3] h-5 flex items-center w-15 rounded-xl mr-8">
            <img src={point} alt="" className="mr-2 ml-1 h-1.5 w-1.5" />
            <p className="text-[10px] text-[#037847] font-medium">Active</p>
          </div>

          <div>
            <img src={option} alt="" />
          </div>
        </div>

        <hr className="border-t border-[#EAECF0]" />

        <div className="h-8 flex items-center ml-3 text-[10px]">
          <div className="mr-11">
            <p className="text-[11.64px] font-medium">DR1023</p>
          </div>

          <div className="mr-10">
            <img src={ellipse} alt="" className="h-7 w-7" />
          </div>

          <div className="mr-5">
            <p className="text-[#163068] font-medium">Isaac Hartmann</p>
          </div>

          <div>
            <p className="text-[#163068] font-medium">+234 812 334 2211</p>
          </div>

          <div className="mr-9.5">
            <p className="font-bold text-[#0775FA]">Super</p>
          </div>

          <div className="mr-9">
            <p className="text-[#667085] font-medium">Camry 2020</p>
          </div>

          <div className="mr-19">
            <p className="text-[#667085] font-medium">₦45,000</p>
          </div>

          <div className="flex items-center mr-11">
            <p className="text-[#667085] font-medium mr-1">4.5</p>
            <img src={star} alt="" className="w-2.5 h-2.5" />
          </div>

          <div className="mr-17">
            <p className="text-[#667085] font-medium">840</p>
          </div>

          <div className="mr-20">
            <p className="text-[#667085] font-medium">2</p>
          </div>

          <div className="bg-[#ECFDF3] h-5 flex items-center w-15 rounded-xl mr-8">
            <img src={point} alt="" className="mr-2 ml-1 h-1.5 w-1.5" />
            <p className="text-[10px] text-[#037847] font-medium">Active</p>
          </div>

          <div>
            <img src={option} alt="" />
          </div>
        </div>

        <hr className="border-t border-[#EAECF0]" />

        <div className="h-8 flex items-center ml-3 text-[10px]">
          <div className="mr-11">
            <p className="text-[11.64px] font-medium">DR1023</p>
          </div>

          <div className="mr-10">
            <img src={ellipse} alt="" className="h-7 w-7" />
          </div>

          <div className="mr-3.5">
            <p className="text-[#163068] font-medium">Angelina Wyman</p>
          </div>

          <div>
            <p className="text-[#163068] font-medium">+234 812 334 2211</p>
          </div>

          <div className="mr-9.5">
            <p className="font-bold text-[#0775FA]">Super</p>
          </div>

          <div className="mr-9">
            <p className="text-[#667085] font-medium">Camry 2020</p>
          </div>

          <div className="mr-19">
            <p className="text-[#667085] font-medium">₦45,000</p>
          </div>

          <div className="flex items-center mr-11">
            <p className="text-[#667085] font-medium mr-1">4.5</p>
            <img src={star} alt="" className="w-2.5 h-2.5" />
          </div>

          <div className="mr-17">
            <p className="text-[#667085] font-medium">840</p>
          </div>

          <div className="mr-20">
            <p className="text-[#667085] font-medium">2</p>
          </div>

          <div className="bg-[#ECFDF3] h-5 flex items-center w-15 rounded-xl mr-8">
            <img src={point} alt="" className="mr-2 ml-1 h-1.5 w-1.5" />
            <p className="text-[10px] text-[#037847] font-medium">Active</p>
          </div>

          <div>
            <img src={option} alt="" />
          </div>
        </div>

        <hr className="border-t border-[#EAECF0]" />

        <div className="h-8 flex items-center ml-3 text-[10px]">
          <div className="mr-11">
            <p className="text-[11.64px] font-medium">DR1023</p>
          </div>

          <div className="mr-10">
            <img src={ellipse} alt="" className="h-7 w-7" />
          </div>

          <div className="mr-7.5">
            <p className="text-[#163068] font-medium">Courtney Von</p>
          </div>

          <div>
            <p className="text-[#163068] font-medium">+234 812 334 2211</p>
          </div>

          <div className="mr-9.5">
            <p className="font-bold text-[#0775FA]">Super</p>
          </div>

          <div className="mr-9">
            <p className="text-[#667085] font-medium">Camry 2020</p>
          </div>

          <div className="mr-19">
            <p className="text-[#667085] font-medium">₦45,000</p>
          </div>

          <div className="flex items-center mr-11">
            <p className="text-[#667085] font-medium mr-1">4.5</p>
            <img src={star} alt="" className="w-2.5 h-2.5" />
          </div>

          <div className="mr-17">
            <p className="text-[#667085] font-medium">840</p>
          </div>

          <div className="mr-20">
            <p className="text-[#667085] font-medium">2</p>
          </div>

          <div className="bg-[#ECFDF3] h-5 flex items-center w-15 rounded-xl mr-8">
            <img src={point} alt="" className="mr-2 ml-1 h-1.5 w-1.5" />
            <p className="text-[10px] text-[#037847] font-medium">Active</p>
          </div>

          <div>
            <img src={option} alt="" />
          </div>
        </div>

        <hr className="border-t border-[#EAECF0]" />

        <div className="h-8 flex items-center ml-3 text-[10px]">
          <div className="mr-11">
            <p className="text-[11.64px] font-medium">DR1023</p>
          </div>

          <div className="mr-10">
            <img src={ellipse} alt="" className="h-7 w-7" />
          </div>

          <div className="mr-12.5">
            <p className="text-[#163068] font-medium">Kayla Will</p>
          </div>

          <div>
            <p className="text-[#163068] font-medium">+234 812 334 2211</p>
          </div>

          <div className="mr-9.5">
            <p className="font-bold text-[#0775FA]">Super</p>
          </div>

          <div className="mr-9">
            <p className="text-[#667085] font-medium">Camry 2020</p>
          </div>

          <div className="mr-19">
            <p className="text-[#667085] font-medium">₦45,000</p>
          </div>

          <div className="flex items-center mr-11">
            <p className="text-[#667085] font-medium mr-1">4.5</p>
            <img src={star} alt="" className="w-2.5 h-2.5" />
          </div>

          <div className="mr-17">
            <p className="text-[#667085] font-medium">840</p>
          </div>

          <div className="mr-20">
            <p className="text-[#667085] font-medium">2</p>
          </div>

          <div className="bg-[#ECFDF3] h-5 flex items-center w-15 rounded-xl mr-8">
            <img src={point} alt="" className="mr-2 ml-1 h-1.5 w-1.5" />
            <p className="text-[10px] text-[#037847] font-medium">Active</p>
          </div>

          <div>
            <img src={option} alt="" />
          </div>
        </div>

        <hr className="border-t border-[#EAECF0]" />

        <div className="mb-15 flex justify-between">
          <div className="flex items-center">
          <div className="h-20 flex items-center ml-3 mr-4">
            <p className="text-[#727376] text-[14px] font-[Inter]">
              Number Of Items displayed per page
            </p>
          </div>

          <div className="bg-[#2664ED] w-13 flex justify-center items-center rounded-lg h-5 mr-2.5">
            <p className="text-white text-[12px] mr-2 font-[Inter]">14</p>
            <img src={breach} alt="" className="w-3 h-3" />
          </div>

          <div>
            <p className="text-[#727376] text-[14px] font-[Inter]">1-14 of 12,400 items</p>
          </div>
          </div>


          <div className="flex items-center font-[Inter] text-[14px]">
            <div>
              <img src={left} alt="" className=""/>
            </div>
            <div className="h-5 w-4 bg-[#2664ED] ml-4 flex items-center justify-center">
              <p className="text-white font-bold">1</p>
            </div>

            <div className="ml-4 text-[#666666]">
              <p>2</p>
            </div>

            <div className="ml-4 text-[#666666]">
              <p>3</p>
            </div>

            <div className="ml-4 text-[#666666]">
              <p>4</p>
            </div>

            <div className="ml-4 text-[#666666]">
              <p>...</p>
            </div>

            <div className="ml-4 text-[#666666]">
              <p>25</p>
            </div>

            <div className="ml-4 mr-7">
              <img src={right} alt="" />
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
}
