import AnimatedContainer from '@/animated/AnimatedContainer'
import { AppSidebar } from '@/components/app/AppSidebar'
import  { FC } from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout:FC = () => {
  return (
    <div className='flex '>
      
      {/* vertical nav */}
     <AppSidebar />

     <AnimatedContainer className='flex-1'>
        <Outlet />
     </AnimatedContainer>

      
    </div>
  )
}

export default MainLayout
