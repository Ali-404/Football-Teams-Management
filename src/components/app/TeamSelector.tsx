import { FC, useState } from 'react'
import { Button } from '../ui/button'
import {  ChevronDown } from 'lucide-react'
import { ClubeSelectPop } from '../popup/ClubeSelectPop'

const TeamSelector:FC = () => {
  
  const openState = useState<boolean>(false)
  const valueState = useState<string>("real_madrid")

  return (
    <div className='flex items-center gap-2'>
      <img className='object-center' loading='lazy' src='https://logodownload.org/wp-content/uploads/2016/03/real-madrid-logo-0.png' width={40} />
      <h1 className='text-3xl  '><b>RMA</b> Real Madrid C.F</h1>

      <ClubeSelectPop openState={openState} valueState={valueState}  >
        <Button variant={'secondary'} size={'icon'}>
          <ChevronDown />
        </Button>
      </ClubeSelectPop>
    </div>
  )
}

export default TeamSelector
