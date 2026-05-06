import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";



export default function Layout(){
    return(
        <div className="flex h-screen">
            <div className="w-49 bg-[#010101] h-full">
                <Sidebar />
            </div>
            <div className="flex flex-1 bg-gray-100 h-full mr-3">
                <Outlet />
            </div>
        </div>
    )
}