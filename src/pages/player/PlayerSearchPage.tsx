import AnimatedContainer from '@/animated/AnimatedContainer'
import { FC } from 'react'




  import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
  } from "@/components/ui/command"
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { CardClasseName } from '@/components/common/Common'
import { User } from 'lucide-react'
  


const PlayerSearchPage:FC = () => {
  
 

  return (
    <AnimatedContainer className='h-screen flex items-center justify-center flex-col'>
      <h1 className='text-4xl text-start md:w-[80%] w-[95%] p-3 font-medium flex gap-2 items-center'> <User size={40} /> Real Madrid C.F Players Database</h1>
      <SearchPlayersSelect />
    </AnimatedContainer>
  )
}


function SearchPlayersSelect() {
    return (
      <Command className={"rounded-lg border shadow-md md:w-[80%] md:h-[80%] w-[95%] h-[95%] " + CardClasseName} style={{background: "rgba(255,255,255,0.8)"}}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList className='h-full'>
          <CommandEmpty>No players found.</CommandEmpty>
          
          {/* goalkeepers */}
          <CommandGroup heading="Goalkeepers">
            {/* item */}
            <CommandItem >
              <Avatar className='rounded-full bg-emerald-200  overflow-hidden w-[40px] h-[40px] flex items-center justify-center'>
                <AvatarImage src='' loading='lazy' className='  object-contain'  />
                <AvatarFallback >TC</AvatarFallback>
              </Avatar>
              <span>T.Courtois</span>
            </CommandItem>
          </CommandGroup>

          <CommandGroup heading="Defanders">
            {/* item */}
            <CommandItem >
              <Avatar className='rounded-full bg-emerald-200  overflow-hidden w-[40px] h-[40px] flex items-center justify-center'>
                <AvatarImage src='' loading='lazy' className='  object-contain'  />
                <AvatarFallback >TC</AvatarFallback>
              </Avatar>
              <span>T.Courtois</span>
            </CommandItem>
          </CommandGroup>


        <CommandGroup heading="Midfilders">
        {/* item */}
        <CommandItem >
            <Avatar className='rounded-full bg-emerald-200  overflow-hidden w-[40px] h-[40px] flex items-center justify-center'>
            <AvatarImage src='' loading='lazy' className='  object-contain'  />
            <AvatarFallback >TC</AvatarFallback>
            </Avatar>
            <span>T.Courtois</span>
        </CommandItem>
        </CommandGroup>

        <CommandGroup heading="Forwards">
            {/* item */}
            <CommandItem >
              <Avatar className='rounded-full bg-emerald-200  overflow-hidden w-[40px] h-[40px] flex items-center justify-center'>
                <AvatarImage src='' loading='lazy' className='  object-contain'  />
                <AvatarFallback >TC</AvatarFallback>
              </Avatar>
              <span>T.Courtois</span>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />
        </CommandList>
      </Command>
    )
  }
  


export default PlayerSearchPage
