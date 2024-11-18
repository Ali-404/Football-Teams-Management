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
        <TableHead >Type</TableHead>
        <TableHead >Date</TableHead>
        <TableHead>Opposition</TableHead>
        <TableHead>Score</TableHead>
        <TableHead>Res</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
        {/* rows */}
      <TableRow>
        <TableCell >Home</TableCell>
        <TableCell >{FormatDate(new Date())}</TableCell>
        <TableCell>Barcelona</TableCell>
        <TableCell>0-4</TableCell>
        <TableCell className='text-red-500 font-bold'>L</TableCell>
      </TableRow>
    </TableBody>
  </Table>
}


export default LastMatchesCard
