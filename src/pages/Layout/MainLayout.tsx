import AnimatedContainer from '@/animated/AnimatedContainer'
import { AppSidebar } from '@/components/app/AppSidebar'
import  { FC } from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout:FC = () => {
  return (
    <div className='flex '>
      
      {/* vertical nav */}
     <AppSidebar />

    <div className='bg-black flex-1 h-dvh '>
        <AnimatedContainer className='overflow-hidden w-full h-full rounded-tl-3xl  rounded-bl-3xl  bg-gradient-to-r  from-cyan-100  to-emerald-100'>
          {/* circle */}
            <div className='pointer-events-none  fixed-center w-[40vw] blur-2xl opacity-50 h-[80vh]  bg-emerald-100 rounded-full rounded-br-sm rounded-bl-sm '>
            </div>
            <div className='w-full h-full overflow-auto'>
                <Outlet />
            </div>
        </AnimatedContainer>

    </div>

      
    </div>
  )
}

export default MainLayout
