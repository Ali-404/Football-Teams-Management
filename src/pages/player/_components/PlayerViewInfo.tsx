import { CapitalizeString, FormatDate, FormatMoney } from '@/functions/format'
import { Footprints } from 'lucide-react'
import  { FC } from 'react'



const PlayerData = {
    date_of_birth: FormatDate(new Date()),
    place_of_birth: "Morocco",
    main_position: "ST",
    secondary_positions: "LW, RW",
    total_goals: 100,
    total_clean_sheets: 0,
    market_value:FormatMoney(1000),
    phone_number: "0614929124",
    email: "player@gmail.com",
    height: 180,
    weight: 70,
    foot: <div className='flex gap-1 items-center'> <Footprints/>LEFT</div>,
    highest_match_rating: <p>10.0</p>

}

const PlayerViewInfo:FC = () => {
  return (
    <div className='flex items-center justify-center gap-4 flex-wrap'>
      {Object.keys(PlayerData).map((data, i) => {
        
        return (
            <div className='flex flex-col flex-wrap'>
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
