import SideBar from "@/components/dashboard/side-bar"
import TopBar from "@/components/dashboard/top-bar"
import { Outlet } from "react-router-dom"

function DashboardLayout() {
    return (
        <div className="relative h-full w-full flex flex-row bg-gray-600">
            <SideBar />
            <div className="flex flex-col w-full">
                <TopBar />
                <Outlet />
            </div>
        </div>
    )
}

export default DashboardLayout