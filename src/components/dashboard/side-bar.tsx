import { useState } from "react"
import { useSideBar } from "../hooks/useSideBar"
import { Icons } from "../icons"
import { cn } from "@/lib/utils"
import { Link, useLocation } from "react-router-dom"

function SideBar() {
    const {isOpen, isToggle} = useSideBar()
    const [status, setStatus] = useState<boolean>(false)
    const handleToggle = () => {
        setStatus(true)
        isToggle()
        setTimeout(() => setStatus(false), 500)
    } 

    const { pathname } = useLocation()
    const path = pathname
    // If data have href attribute, we will be used pathname on location
    const menu = [
        {
          //href: "dashboard", 
          label: "dashboard",
          icon: Icons.health,
        },
        {
          label: "Task",
          icon: Icons.clipBoard,
        },
        {
          label: "Schedule",
          icon: Icons.wifiSquare,
        },
        {
          label: "Dashboard",
          icon: Icons.vector,
        },
      ];

    return (
        <nav className={cn(
          `relative hidden max-h-max min-h-screen bg-slate-950 rounded-lg m-2 md:block px-4 py-6`,
          status && 'duration-500',
          isOpen ? 'w-[19.5rem]' : 'w-[86px]',
        )}>            
        <div className="flex flex-row justify-between items-center ">
                <div className={cn('', !isOpen && 'object-[30%]')}>                
                    <img src={Icons.logo} alt="logo" className="transition-all w-[4.75rem] h-8" />
                </div>
                <img onClick={handleToggle} src={Icons.leftArrow} alt="leftArrow" 
                    className={cn('rounded-[0.75rem] h-3 w-3 bg-gray-600 text-white p-0.5 cursor-pointer',
                    !isOpen && 'rotate-180',)}/>
            </div>
            <div className="h-[1px] w-full justify-center bg-white my-8"></div>
            <nav className="items-center mb-8 space-y-2">
                {menu.map((item, index) => 
                <Link to={item.label}
                className={cn(
                    'flex items-center rounded-lg p-2 hover:bg-[#7ce849]',
                    path === '/' + item.label && 'bg-[#B6F09C]',
                  )}><img src={item.icon} className="h-6 w-6 ml-1 items-center"/>
                {isOpen && (
                    <span
                    className={`${index == 0 ? "text-black": ""}  ml-4 text-sm text-gray-600`}
                    >
                    {item.label}
                    </span>
                )}
                </Link>)}
            </nav>
        </nav>
    )
}
export default SideBar