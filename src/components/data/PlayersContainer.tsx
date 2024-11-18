import { FC } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import SearchBar from '../app/SearchBar'
import { ScrollArea } from '../ui/scroll-area'
import { Button } from '../ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { FormatMoney } from '@/functions/format'


const Sections = [
    {
        title: "Goalkeepers",
        playersState: [],

    },
    {
        title: "Center-backs",
        playersState: [],

    },
    {
        title: "Left-backs",
        playersState: [],

    },
    {
        title: "Right-backs",
        playersState: [],

    },
    {
        title: "Def Midfielders",
        playersState: [],

    },
    {
        title: "Center Midfielders",
        playersState: [],

    },
    {
        title: "Att Midfielders",
        playersState: [],

    },
    {
        title: "Right Forwards",
        playersState: [],

    },
    {
        title: "Left Forwards",
        playersState: [],

    },
    {
        title: "Strikers",
        playersState: [],

    },
    
]


const PlayersContainer:FC<{className?: string}> = ({className}) => {
  return (
    <ScrollArea className={'max-h-[80vh] min-w-[300px] rounded-xl overflow-hidden ' +  className}>

    <Card className={' backdrop-blur-xl rounded-2xl shadow-none border-none ' }  style={{background: 'rgba(255,255,255,0.6)'}} >
        <CardHeader className='gap-4'>
            <CardTitle>Players</CardTitle>
            <CardDescription>
                <SearchBar  />
            </CardDescription>
        </CardHeader>
        <CardContent>

            {/* players listing */}

            {Sections.map((s,i) => {
                if (s.playersState.length <= 0) return <span>There is no {s.title}<br /> </span> ;
                return (
                    <div key={i}>
                    <small className='text-slate-400 '>{s.title}</small>
                    <ScrollArea  className=' h-[200px] px-1'>
                        {s.playersState.map((p,pi) => <Tab key={pi} /> )}
                    </ScrollArea>
                    </div>
                )
            })}
            

        </CardContent>
        {/* <CardFooter>
            <p>test</p>
        </CardFooter> */}
    </Card>
    </ScrollArea>
  )
}

const Tab:FC = () => {
    return <Button variant={'ghost'} className='px-1 w-full justify-start '>
        <Avatar  >
            <AvatarImage className='py-1  w-10 h-10 rounded-full object-contain'  src='https://b.fssta.com/uploads/application/soccer/headshots/1097.png' loading='lazy' />
            <AvatarFallback>TC</AvatarFallback>
        </Avatar>
        <h1>T.Courtois</h1>
        <div className='flex-1'></div>
        <h2>{FormatMoney(100)}</h2>
    </Button>
}

export default PlayersContainer
