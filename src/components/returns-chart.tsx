"use client"

import * as React from "react"
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
} from "recharts"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    ChartLegend,
    ChartLegendContent,
    ChartConfig,
} from "@/components/ui/chart"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReturnsChartProps } from "@/types/types";

const ReturnsChart = ({
     data,
     height = 300,
}: ReturnsChartProps) => {
    const tickInterval = Math.max(1, Math.floor(data.length / 6))

    const config: ChartConfig = {
        green: { label: "Green", color: "#3FB57A" },
        blue:  { label: "Blue",  color: "#4B8BC7" },
        red:   { label: "Red",   color: "#E05361" },
    }

    return (
        <Card className="w-full bg-background border-navbar-border rounded-sm text-card-foreground gap-2 py-4">
            <CardHeader className="px-4">
                <CardTitle className="text-white text-xl font-medium">Returns (%)</CardTitle>
            </CardHeader>
            <CardContent className="px-4">
                <ChartContainer
                    id="returns"
                    className="w-full -ml-8 mb-0"
                    style={{ height }}
                    config={config}
                >
                    <LineChart
                        data={data}
                        margin={{ top: 16, right: 24, left: 24, bottom: 48 }}
                    >
                        <CartesianGrid stroke="#222" />

                        <XAxis
                            dataKey="date"
                            stroke="#555"
                            tick={{ fill: "#888", fontSize: 12 }}
                            interval={tickInterval}
                            tickMargin={12}
                        />
                        <YAxis
                            stroke="#555"
                            tick={{ fill: "#888", fontSize: 12 }}
                        />

                        <ChartTooltip content={<ChartTooltipContent />}/>

                        <ChartLegend
                            verticalAlign="bottom"
                            content={
                                <ChartLegendContent className="gap-6 [&>div>div]:h-3.5 [&>div>div]:w-3.5 text-muted" />
                            }
                        />

                        <Line
                            type="monotone"
                            dataKey="green"
                            stroke="var(--color-green)"
                            strokeWidth={2}
                            dot={false}
                        />
                        <Line
                            type="monotone"
                            dataKey="blue"
                            stroke="var(--color-blue)"
                            strokeWidth={2}
                            dot={false}
                        />
                        <Line
                            type="monotone"
                            dataKey="red"
                            stroke="var(--color-red)"
                            strokeWidth={2}
                            dot={false}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}

export default ReturnsChart;