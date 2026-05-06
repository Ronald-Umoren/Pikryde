import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";



export default function Layout(){
    return(
        <div className="flex gap-4 h-screen">
            <div className="w-49 bg-[#010101]">
                <Sidebar />
            </div>
            <div className="flex flex-1 bg-gray-100 h-full mr-3 overflow-y-auto">
                <Outlet />
            </div>
        </div>
    )
}