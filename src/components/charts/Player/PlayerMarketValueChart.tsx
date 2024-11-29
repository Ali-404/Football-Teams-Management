"use client"

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

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
import { CardClasseName } from "@/components/common/Common"
const chartData = [
  { month: "2000", market_value: 186, mobile: 80 },
  { month: "2005", market_value: 186, mobile: 80 },
  { month: "2007", market_value: 305, mobile: 200 },
  { month: "2015", market_value: 237, mobile: 120 },
  { month: "Now", market_value: 214, mobile: 140 },
]

const chartConfig = {
  market_value: {
    label: "$F",
    color: "hsl(var(--chart-1))",
  }
} satisfies ChartConfig

export function PlayerMarketValueChart() {
  return (
    <Card className={CardClasseName + "h-auto "}>
      <CardHeader>
        <CardTitle>Market Value (F$)</CardTitle>
        <CardDescription>
          Showing player's marker value history
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 5,
              right: 5,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot"  />}
            />
          
            <Area
              dataKey="market_value"
              type="natural"
              fill="var(--color-market_value)"
              fillOpacity={0.4}
              stroke="var(--color-market_value)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
