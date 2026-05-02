import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";



export default function Layout(){
    return(
        <div className="flex">
            <div className="w-49 bg-[#010101] h-158 fixed">
                <Sidebar />
            </div>
            <div className="flex flex-1 ml-50 bg-gray-100">
                <Outlet />
            </div>
        </div>
    )
}