"use client"

import { ColumnDef } from "@tanstack/react-table";
import { SummaryRow } from "@/types/types";
import {Badge} from "@/components/ui/badge";
import {ReactNode} from "react";

export const valuationColumns: ColumnDef<SummaryRow>[] = [
    {
        accessorKey: "metric",
        header: "Metric",
        cell: info => info.getValue() as ReactNode,
    },
    { accessorKey: "value",     header: "Value"     },
    { accessorKey: "benchmark", header: "Benchmark" },
]

export const valuationData: SummaryRow[] = [
    {
        metric: <Badge variant="outline" className="text-accent">P / E Ratio</Badge>,
        value: "20.50",
        benchmark: "$316.00"
    },
    {
        metric: <Badge variant="outline" className="text-accent">P / B Ratio</Badge>,
        value: "26.15",
        benchmark: "$316.00"
    },
    {
        metric: <Badge variant="outline" className="text-accent">ROE</Badge>,
        value: "24.50",
        benchmark: "$316.00"
    },
    { metric: "CAGR (%)", value: "4.92",  benchmark: "$316.00" },
]