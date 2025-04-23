"use client"

import * as React from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { DataTable } from "@/components/ui/data-table"
import { ColumnDef } from "@tanstack/react-table"

type WidgetProps<TData extends object> = {
    title: string
    columns: ColumnDef<TData, never>[]
    data: TData[]
    striped?: boolean
}

const Widget = <TData extends object>({
     title,
     columns,
     data,
     striped = false,
}: WidgetProps<TData>) => {
    return (
        <Card className="w-full bg-background text-card-foreground gap-2 py-4">
            <CardHeader className="px-4">
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="px-4">
                <DataTable
                    columns={columns}
                    data={data}
                    striped={striped}
                />
            </CardContent>
        </Card>
    )
}

export default Widget
