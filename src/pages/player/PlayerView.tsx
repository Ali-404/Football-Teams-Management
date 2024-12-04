import AnimatedContainer from '@/animated/AnimatedContainer'
import { FC } from 'react'
import PlayerViewCard from './_components/PlayerViewCard'
import PlayerViewInfo from './_components/PlayerViewInfo'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { PlayerMarketValueChart } from '@/components/charts/Player/PlayerMarketValueChart'
import { PlayerViewClubsHistory } from './_components/PlayerViewClubsHistory'
import { GoalsChart } from '@/components/charts/GoalsChart'

const PlayerView:FC = () => {
  return (
    <AnimatedContainer className='w-full h-full gap-2 p-4 flex flex-col'>
      
      <section className='relative flex items-center justify-between p-5 flex-col md:flex-row   bg-emerald-600  bg-opacity-50 backdrop-blur-xl rounded-2xl'>
        <Button size={'icon'} className='absolute top-2 start-2'><ArrowLeft/></Button>
        <PlayerViewCard  />
        <div className='flex-1'>
            <PlayerViewInfo />
        </div>
      </section>

      {/* section 2 */}
      <section className='flex flex-col md:flex-row items-center md:items-start  gap-2 flex-wrap'>
        <PlayerMarketValueChart  />
        <PlayerViewClubsHistory className="flex-1 md:max-w-none"  />
        <GoalsChart isPlayer={true}  />
      </section>

    </AnimatedContainer>
  )
}

export default PlayerView
