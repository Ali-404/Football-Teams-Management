import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { LayoutDashboard, UserPlus, Volleyball } from "lucide-react"
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import {motion} from 'motion/react'
import Tacticts from "../icons/Tacticts"


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
    <div className="bg-slate-900 h-dvh min-w-10  p-2 flex flex-col gap-5 items-center ">
        
        {/* club budge render */}
        <Avatar  className="w-[44px] rounded-full overflow-hidden text-slate-50 cursor-pointer hover:scale-105  transition-transform">
            <AvatarImage src="https://seeklogo.com/images/R/real-madrid-logo-77A97A4A0E-seeklogo.com.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>



        {items.map((tab,i) => (
            <motion.button 
            key={i}
             onClick={() => SwitchRoute(i)} 
             className={`cursor-pointer p-1 rounded-full ${selectedTab == i && 'bg-emerald-100 '} `}
             
             whileTap={{scale:1.5, transition: {duration: 2}}}
             whileFocus={{outlineColor: "Background"}}
             whileHover={{scale:1.2, transition: {duration: 0.5}}}

             >
                {<tab.icon className={ ` w-5 h-5  ${selectedTab == i ? 'text-slate-900  ' : 'text-emerald-300 fill-emerald-300'}`  } />}
            </motion.button>
        ))}
    </div>
  )
}


