import { CapitalizeString, FormatDate } from '@/functions/format'
import  { FC } from 'react'



const PlayerData = {
    date_of_birth: FormatDate(new Date()),
    place_of_birth: "Morocco",
    position: "ST",
    secondary_positions: "LW, RW",
}

const PlayerViewInfo:FC = () => {
  return (
    <div className='flex items-center justify-center gap-4 flex-wrap'>
      {Object.keys(PlayerData).map((data, i) => {
        
        return (
            <div className='flex flex-col'>
                <span>{CapitalizeString(data)}</span>
                <div className='rounded-sm p-2 px-8 border-2 border-emerald-400 '>
                    {Object.values(PlayerData)[i]}
                </div>
            </div>
        )
    })}
    </div>
  )
}

export default PlayerViewInfo
