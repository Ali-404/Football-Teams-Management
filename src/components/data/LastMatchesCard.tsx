import { FC } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { CardClasseName, CardScrollViewClassName } from '../common/Common'
import { ScrollArea } from '@radix-ui/react-scroll-area'
import { TableBody,Table, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Link } from 'react-router-dom'
import { FormatDate } from '@/functions/format'

const LastMatchesCard:FC<{className?: string}> = ({className}) => {
  return (
    <ScrollArea className={CardScrollViewClassName + " " + className} >

        <Card className={CardClasseName} style={{backgroundColor: "rgba(255,255,255,0.7)"}}>
        <CardHeader>
            <CardTitle>Last Played Matches</CardTitle>
        </CardHeader>
        <CardContent>
            <LastMatchesTable />
        </CardContent>
        </Card>
    </ScrollArea>
  )
}




const LastMatchesTable:FC = () => {
    return <Table className='w-full h-full'>
    <TableCaption>
        <Link className='text-emerald-600 underline' to={"/matches"} >Explore More</Link>
    </TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead>Match</TableHead>
        <TableHead >Type</TableHead>
        <TableHead >Date</TableHead>
        <TableHead>Res</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
        {/* rows */}
      <TableRow>
        <TableCell className='flex items-center'>

          <img loading='lazy' src='https://logodownload.org/wp-content/uploads/2016/03/real-madrid-logo-0.png' className='w-[20px] h-[20px] object-contain'/>
          
            <p>5-1</p>
          
          <img loading='lazy' src='https://static.cdnlogo.com/logos/f/29/fc-barcelona.png' className='w-[20px] h-[20px] object-contain'/>
        
        </TableCell>
        <TableCell >Home</TableCell>
        <TableCell >{FormatDate(new Date())}</TableCell>
        <TableCell className='text-red-500 font-bold'>L</TableCell>
      </TableRow>
    </TableBody>
  </Table>
}


export default LastMatchesCard
