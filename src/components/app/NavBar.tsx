import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import {  Bell } from 'lucide-react'
import  { FC, ReactNode } from 'react'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'




const NavBar:FC<{children?: ReactNode}> = ({children}) => {
  return (
    <nav className='flex items-center justify-between px-8 py-4 '>

       {/* DYNAMIC CHILDRENS */}

       {children}


        {/* right */}
        <div className='flex gap-2'>
            {/* notifications */}
            <Button variant={'ghost'} size={'icon'}  className='relative rounded-full'>
                <Bell  />
                <Badge variant={"outline"} className='bg-red-500 text-white px-1 border-none absolute left-[-20%] bottom-0  rounded-full' >10</Badge>
            </Button>
            {/* profile */}
            <Avatar>
                <AvatarImage  className='w-[40px] h-[40px] rounded-full object-cover shadow-md' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCAIBuT2o5XLvTXgI0rCp1JC9WqRcXT6bF-Q&s' />
                <AvatarFallback>AA</AvatarFallback>
            </Avatar>

        </div>

    </nav>
  )
}

export default NavBar
