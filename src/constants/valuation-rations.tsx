import { ColumnDef } from "@tanstack/react-table";
import { SummaryRow } from "@/types/types";

export const valuationColumns: ColumnDef<SummaryRow>[] = [
    { accessorKey: "metric",    header: "Metric"    },
    { accessorKey: "value",     header: "Value"     },
    { accessorKey: "benchmark", header: "Benchmark" },
]

export const valuationData: SummaryRow[] = [
    { metric: "Overall Return (%)",      value: "20.50", benchmark: "$316.00" },
    { metric: "Realized Risk (%)",       value: "26.15", benchmark: "$316.00" },
    { metric: "Sharpe Ratio",            value: "24.50", benchmark: "$316.00" },
    { metric: "CAGR (%)",                value: "4.92",  benchmark: "$316.00" },
]