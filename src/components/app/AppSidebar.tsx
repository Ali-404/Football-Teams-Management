import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { LayoutDashboard, User, UserPlus, Volleyball } from "lucide-react"
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
    title: "Players",
    url: "/players",
    icon: User ,
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
        // player/:player_name exeptation
        if (location.pathname.startsWith("/players/") && !location.pathname.endsWith("/players/"))
          return setSelectedTab(1) 

          const i = items.findIndex(e => e.url == location.pathname)
        setSelectedTab(i)
    }, [location])



  return (
    <div className="z-20 relative bg-slate-900 min-w-10 md:min-w-[16vw] max-w-[250px]  p-2  ">
        <div className="fixed start-0 top-0  flex flex-col gap-5 items-center md:items-start md:p-4">
          {/* club budge render */}
          <Avatar  className="w-[44px] rounded-full overflow-hidden text-slate-50 cursor-pointer hover:scale-105  transition-transform">
              <AvatarImage src="https://seeklogo.com/images/R/real-madrid-logo-77A97A4A0E-seeklogo.com.png" />
              <AvatarFallback>CN</AvatarFallback>
          </Avatar>



          {items.map((tab,i) => (
              <motion.button 
              key={i}
              onClick={() => SwitchRoute(i)} 
              className={`cursor-pointer p-1 rounded-full md:rounded-md ${selectedTab == i && 'bg-emerald-100 '} md:flex md:w-full md:items-center md:gap-1 md:p-2`}
              
              whileTap={{scale:1.3, transition: {duration: 2}}}
              whileFocus={{outlineColor: "Background"}}
              whileHover={{scale:1.1, transition: {duration: 0.5}}}

              >
                  {<tab.icon className={ ` w-5 h-5  ${selectedTab == i ? 'text-slate-900  ' : 'text-emerald-300 fill-emerald-300'}`  } />}

                  <h1 className={`hidden md:block ${selectedTab == i ? 'text-slate-900  ' : 'text-emerald-300 fill-emerald-300'} `}>{tab.title}</h1>

              </motion.button>
          ))}
        </div>
        
    </div>
  )
}


