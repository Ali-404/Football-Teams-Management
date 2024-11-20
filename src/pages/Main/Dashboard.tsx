import AnimatedContainer from '@/animated/AnimatedContainer'
import NavBar from '@/components/app/NavBar'
import SearchBar from '@/components/app/SearchBar'
import TeamSelector from '@/components/app/TeamSelector'
import { GoalsChart } from '@/components/charts/GoalsChart'
import { MatchesToGoalsChart } from '@/components/charts/MatchesToGoalsChart'
import ClubInformationContainer from '@/components/data/ClubInformationContainer'
import LastMatchesCard from '@/components/data/LastMatchesCard'
import PlayersContainer from '@/components/data/PlayersContainer'
import { FormatMoney } from '@/functions/format'
import { Landmark } from 'lucide-react'
import  { FC } from 'react'

const Dashboard:FC = () => {
  


  return (
    <AnimatedContainer>
    <NavBar >
      <SearchBar className='text-black'  />
      <div></div>
    </NavBar>
    <div className='container px-4 md:px-20  py-8 flex flex-col gap-4'>

      {/* top sectin */}
      <section className='flex items-center justify-between flex-wrap gap-4'>
        {/* current team popup */}
        <TeamSelector/>


        {/* Team Money */}

        <div className='flex items-center gap-2'>
          <div className='w-9 h-9 rounded-full bg-primary flex items-center justify-center p-2 shadow'>
            <Landmark />
          </div>
          <h1 className='text-3xl font-semibold'>{FormatMoney(1000)}</h1>
        </div>

      </section>


      {/* cards */}
      <section className='flex gap-2 justify-center items-center flex-wrap'>
        <PlayersContainer className='flex-1' />
        <ClubInformationContainer className='flex-1' />
        <LastMatchesCard className='flex-1'  />
      </section>
        
      {/* charts */}
      <section className='flex items-center gap-2'>
        <MatchesToGoalsChart/>
        <GoalsChart />
      </section>

    </div>
    </AnimatedContainer>
  )
}

export default Dashboard
