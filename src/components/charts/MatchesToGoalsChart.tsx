
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { CardClasseName } from "../common/Common"
const chartData = [
  { week: 1, goal: 10, match: 3 },
  { week: 2, goal: 5, match: 2 },
  { week: 3, goal: 7, match: 1 },
  { week: 4, goal: 5, match: 3 },
  
]

const chartConfig = {
  goal: {
    label: "Goal",
    color: "hsl(var(--chart-1))",
  },
  match: {
    label: "Match",
    color: "#197bbd",
  }
} satisfies ChartConfig




export function MatchesToGoalsChart() {
  return (
    <Card className={ CardClasseName +  ' min-w-[350px] h-auto ' }   >
      <CardHeader>
        <CardTitle>Matches/Goals This Month</CardTitle>
        <CardDescription>January - February 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart 
            
            accessibilityLayer
            data={chartData}
            
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="week"
              tickLine={true}
              axisLine={{stroke: "#ffffff"}}
              tick={{stroke: "#ffffff", fontSize: 10}}
              tickMargin={8}
              
            //   tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
            width={5}
            axisLine={{stroke: "#ffffff"}}
              tick={{stroke: "#ffffff", fontSize: 10}}
            />
            <ChartTooltip
              cursor={true}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="goal"
              type="natural"
              stroke="var(--color-goal)"
              strokeWidth={2}
              dot={false}
            />
             <Line
              dataKey="match"
              type="natural"
              stroke="var(--color-match)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      
    </Card>
  )
}
