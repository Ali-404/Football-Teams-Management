import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { LayoutDashboard, UserPlus, Volleyball } from "lucide-react"
import { useEffect, useState } from "react"
import Tacticts from "../icons/tacticts"
import { useLocation, useNavigate } from "react-router-dom"

import {motion} from 'motion/react'


// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Formations",
    url: "/formations",
    icon: Tacticts ,
  },
  {
    title: "Transfer Window",
    url: "/transer_window",
    icon: UserPlus,
  },
  {
    title: "Matches",
    url: "/matches",
    icon: Volleyball,
  },
  
]

export function AppSidebar() {

    const navigate = useNavigate()
    const [selectedTab, setSelectedTab] = useState(0)
    const location = useLocation()
    

    const SwitchRoute = (i:number) => {
        
        navigate(items[i].url)
    }


    useEffect(() => {
        const i = items.findIndex(e => e.url == location.pathname)
        setSelectedTab(i)
    }, [location])



  return (
    <div className="bg-slate-900 h-dvh min-w-10 rounded-tr-2xl rounded-br-2xl p-4 flex flex-col gap-5 items-center">
        
        {/* club budge render */}
        <Avatar  className="w-[44px] rounded-full overflow-hidden text-slate-50">
            <AvatarImage src="https://seeklogo.com/images/R/real-madrid-logo-77A97A4A0E-seeklogo.com.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>



        {items.map((tab,i) => (
            <motion.button 
            key={i}
             onClick={() => SwitchRoute(i)} className={`p-2 rounded-full ${selectedTab == i && 'bg-emerald-100 '} `}
             


             >
                {<tab.icon className={ selectedTab == i ? `text-slate-900` : 'text-emerald-300 ' } />}
            </motion.button>
        ))}
    </div>
  )
}


