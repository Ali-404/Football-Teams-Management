import { FC } from 'react'
import { Button } from '../ui/button'
import {  ChevronDown } from 'lucide-react'

const TeamSelector:FC = () => {
  return (
    <div className='flex items-center gap-2'>
      <img className='object-center' loading='lazy' src='https://seeklogo.com/images/R/real-madrid-logo-6382D0C161-seeklogo.com.png' width={40} />
      <h1 className='text-3xl font-semibold '>Real Madrid C.F <i>'RMA'</i></h1>
      <Button variant={'secondary'} size={'icon'}>
        <ChevronDown />
      </Button>
    </div>
  )
}

export default TeamSelector
