import { FC } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { ScrollArea } from '../ui/scroll-area'
import { CapitalizeString, FormatDate } from '@/functions/format'

type ClubeDataType =  {
    logo: string,
    full_name: string,
    short_name: string,
    founded: Date,
    total_players:number,
    total_matches: number,
    total_goals: number,
    owner: string

}

const ClubeData:ClubeDataType = {
    logo: "https://logodownload.org/wp-content/uploads/2016/03/real-madrid-logo-0.png",
    full_name: "Real Madrid C.F",
    short_name: "RMA",
    founded: new Date("2022-05-01"),
    total_players: 36,
    total_matches: 100,
    total_goals: 1000,
    owner: "ali",

}


const ClubInformationContainer:FC<{className?: string}> = ({className}) => {
  return (
    <ScrollArea className={'max-h-[50vh] min-w-[300px] rounded-xl overflow-hidden ' +  className}>

    <Card style={{backgroundColor: "rgba(255,255,255,0.7)"}} className={' backdrop-blur-xl  rounded-2xl shadow-none border-none ' } >
        <CardHeader className='gap-4'>
            <CardTitle>Clube Information</CardTitle>
            <CardDescription>
            </CardDescription>
        </CardHeader>
        <CardContent>

            {/* players listing */}
            
            {(Object.keys(ClubeData) as (keyof ClubeDataType)[]).map((key, i) => (
                <div key={i} className='flex items-center justify-between'>
                    <h1>{CapitalizeString(key)} </h1>
                    
                    {/* check if key is the logo to load the logo as image */}
                    {key == 'logo' ? (
                        // load logo as img
                        <img src={ClubeData[key]} className='w-[50px] h-[50px] object-contain' loading='lazy' />                        
                    ) :
                        
                    key == "founded" ? 
                    (
                        // load a correct date format 
                        <h3>{FormatDate(ClubeData[key])}</h3>
                    )
                    :
                    (
                        <h3>{ClubeData[key].toString()}</h3>
                    )  }
                </div>
            ))}
            
            
            

        </CardContent>
        {/* <CardFooter>
            <p>test</p>
        </CardFooter> */}
    </Card>
    </ScrollArea>
  )
}


export default ClubInformationContainer
