import NavBar from '@/components/app/NavBar'
import SearchBar from '@/components/app/SearchBar'
import TeamSelector from '@/components/app/TeamSelector'
import ClubInformationContainer from '@/components/data/ClubInformationContainer'
import PlayersContainer from '@/components/data/PlayersContainer'
import { FormatMoney } from '@/functions/format'
import { Landmark } from 'lucide-react'
import  { FC } from 'react'

const Dashboard:FC = () => {
  


  return (
    <>
    <NavBar >
      <div>
        <SearchBar />
      </div>
      <div></div>
    </NavBar>
    <div className='container px-4 md:px-20  py-8 flex flex-col gap-4'>

      {/* top sectin */}
      <section className='flex items-center justify-between'>
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
      <section className='flex gap-2 flex-wrap md:flex-nowrap'>
        <PlayersContainer  />
        <ClubInformationContainer className='flex-1' />
      </section>

    </div>
    </>
  )
}

export default Dashboard
