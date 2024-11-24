import AnimatedContainer from '@/animated/AnimatedContainer'
import { AppSidebar } from '@/components/app/AppSidebar'
import  { FC } from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout:FC = () => {
  return (
    <div className='flex overflow-hidden'>
      
      {/* vertical nav */}
     <AppSidebar />

     {/* bg-gradient-to-r  from-cyan-100  to-emerald-100 md: */}
    <div className='bg-black flex-1 min-h-screen'>
        <AnimatedContainer className='overflow-hidden w-full h-full rounded-tl-3xl  rounded-bl-3xl  bg-[url(/backgrounds/bg1.jpg)]
        
        bg-center bg-cover bg-no-repeat
        '>
          {/* circle */}
            {/* <div className='pointer-events-none  fixed-center w-[40vw] blur-2xl opacity-20 h-[80vh]  bg-emerald-100 rounded-full rounded-br-sm rounded-bl-sm z-0  '>
            </div> */}
            <div className='w-full h-full overflow-auto z-10 text-slate-100 bg-emerald-500 bg-opacity-20'>
                <Outlet />
            </div>
        </AnimatedContainer>

    </div>

      
    </div>
  )
}

export default MainLayout
