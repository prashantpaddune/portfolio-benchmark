import {ReactNode} from "react";

export type SummaryRow = {
    metric:   ReactNode
    value:    string
    benchmark:string
}

export type ReturnsPoint = {
    date: string
    green: number
    blue:  number
    red:   number
}

export type ReturnsChartProps = {
    data: ReturnsPoint[]
    height?: number
}
