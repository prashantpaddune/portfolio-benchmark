import { ColumnDef } from "@tanstack/react-table";
import { SummaryRow } from "@/types/types";

export const profileSummaryColumns: ColumnDef<SummaryRow>[] = [
    { accessorKey: "metric",    header: "Metric"    },
    { accessorKey: "value",     header: "Value"     },
    { accessorKey: "benchmark", header: "Benchmark" },
]

export const profileSummaryData: SummaryRow[] = [
    { metric: "Overall Return (%)",      value: "20.50", benchmark: "$316.00" },
    { metric: "Realized Risk (%)",       value: "26.15", benchmark: "$316.00" },
    { metric: "Sharpe Ratio",            value: "24.50", benchmark: "$316.00" },
    { metric: "CAGR (%)",                value: "4.92",  benchmark: "$316.00" },
    { metric: "Turnover",                value: "5.80",  benchmark: "$316.00" },
    { metric: "Liquidation Time (days)", value: "26.32", benchmark: "$316.00" },
]