"use client"

import { ColumnDef } from "@tanstack/react-table";
import { SummaryRow } from "@/types/types";
import {Badge} from "@/components/ui/badge";
import {ReactNode} from "react";

export const profileSummaryColumns: ColumnDef<SummaryRow>[] = [
    {
        accessorKey: "metric",
        header: "Metric",
        cell: info => info.getValue() as ReactNode,
    },
    { accessorKey: "value",     header: "Value"     },
    { accessorKey: "benchmark", header: "Benchmark" },
]



export const profileSummaryData: SummaryRow[] = [
    {
        metric: <Badge variant="outline" className="bg-navbar-border border-input text-accent font-normal text-sm rounded-4xl">Overall Return (%)</Badge>,
        value: "20.50",
        benchmark: "$316.00"
    },
    {
        metric: <Badge variant="outline" className="bg-navbar-border border-input text-accent font-normal text-sm rounded-4xl">Realized Risk (%)</Badge>,
        value: "26.15",
        benchmark: "$316.00"
    },
    {
        metric: <Badge variant="outline" className="bg-navbar-border border-input text-accent font-normal text-sm rounded-4xl">Sharpe Ratio</Badge>,
        value: "24.50",
        benchmark: "$316.00"
    },
    { metric: "CAGR (%)",                value: "4.92",  benchmark: "$316.00" },
    { metric: "Turnover",                value: "5.80",  benchmark: "$316.00" },
    { metric: "Liquidation Time (days)", value: "26.32", benchmark: "$316.00" },
]