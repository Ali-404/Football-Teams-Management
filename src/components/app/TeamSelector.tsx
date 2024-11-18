import { FC } from 'react'
import { Button } from '../ui/button'
import {  ChevronDown } from 'lucide-react'

const TeamSelector:FC = () => {
  return (
    <div className='flex items-center gap-2'>
      <img className='object-center' loading='lazy' src='https://logodownload.org/wp-content/uploads/2016/03/real-madrid-logo-0.png' width={40} />
      <h1 className='text-3xl  '><b>RMA</b> Real Madrid C.F</h1>
      <Button variant={'secondary'} size={'icon'}>
        <ChevronDown />
      </Button>
    </div>
  )
}

export default TeamSelector
