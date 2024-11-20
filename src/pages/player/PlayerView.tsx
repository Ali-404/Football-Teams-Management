import AnimatedContainer from '@/animated/AnimatedContainer'
import { FC } from 'react'
import PlayerViewCard from './_components/PlayerViewCard'
import PlayerViewInfo from './_components/PlayerViewInfo'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

const PlayerView:FC = () => {
  return (
    <AnimatedContainer className='w-full h-full gap-4 p-4'>
      <section className='relative flex items-center justify-between p-5 flex-col md:flex-row   bg-emerald-600  bg-opacity-50 backdrop-blur-xl rounded-2xl'>
        <Button size={'icon'} className='absolute top-2 start-2'><ArrowLeft/></Button>
        <PlayerViewCard  />
        <div className='flex-1'>
            <PlayerViewInfo />
        </div>

      </section>
    </AnimatedContainer>
  )
}

export default PlayerView
