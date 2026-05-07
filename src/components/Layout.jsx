import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";



export default function Layout(){
    return(
        <div className="flex gap-4 h-screen bg-gray-100">
            <div className="w-[17%] bg-[#010101] overflow-y-auto no-scrollbar">
                <Sidebar />
            </div>
            <div className="flex flex-1 mr-3 overflow-auto no-scrollbar h-screen">
                <Outlet />
            </div>
        </div>
    )
}