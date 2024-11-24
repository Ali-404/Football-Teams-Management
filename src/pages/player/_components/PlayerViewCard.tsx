import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import { FC } from 'react'

const PlayerViewCard:FC = () => {
  return (
    <div className='flex-[0.4] flex gap-2 p-2'>
      <img loading='lazy' src='https://www.freeiconspng.com/thumbs/cristiano-ronaldo-png/cristiano-ronaldo-png-hd-14.png' className='w-[200px] h-[200px] object-contain ' />
      <div className=''>
        <h4>First Name</h4>
        <h1>Last Name</h1>
        {/* nationality */}
        <small>🇲🇦</small>
        <h1 className='text-7xl font-mono'>#7</h1>
        <Button size={"icon"} >
            <ChevronDown />
        </Button>
      </div>
    </div>
  )
}

export default PlayerViewCard
