import { CardClasseName } from "@/components/common/Common"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { FormatMoney } from "@/functions/format"
  
  const history = [
    {
      date: "2009/2018",
      clube: "Real Madrid",
      total_matches: 451,
      transfert_value: FormatMoney(5000),
    },
    
    
  ]
  
  export function PlayerViewClubsHistory(props: {className?:string}) {
    return (
        <div className={CardClasseName + "overflow-hidden p-6 " + props.className }>
        <Table>
            <TableCaption>A list of player's  clubes history.</TableCaption>
            <TableHeader>
            <TableRow>
                <TableHead className="w-[100px]">Date</TableHead>
                <TableHead>Clube</TableHead>
                <TableHead>Matches</TableHead>
                <TableHead className="text-right">Transfert Value</TableHead>
            </TableRow>
            </TableHeader>
            <TableBody>
            {history.map((duration,i) => (
                <TableRow key={i}>
                <TableCell className="font-medium">{duration.date}</TableCell>
                <TableCell>{duration.clube}</TableCell>
                <TableCell>{duration.total_matches}</TableCell>
                <TableCell className="text-right">{duration.transfert_value}</TableCell>
                </TableRow>
            ))}
            </TableBody>
           
        </Table>
        </div>
    )
  }
  