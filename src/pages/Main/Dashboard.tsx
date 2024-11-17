import NavBar from '@/components/app/NavBar'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import  { FC } from 'react'

const Dashboard:FC = () => {
  


  return (
    <>
    <NavBar >
      <div>
        <div className='border rounded-lg px-2  bg-cyan-50 shadow-md'>
          <Input className=' shadow-none border-none p-0 focus-visible:ring-0' type='search' placeholder='Search' icon={<Search />} />
        </div>
      </div>
      <div></div>
    </NavBar>
    <div className='container p-8'>

        {/* current team popup */}




    </div>
    </>
  )
}

export default Dashboard
