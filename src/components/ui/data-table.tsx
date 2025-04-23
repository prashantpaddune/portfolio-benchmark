"use client"

import * as React from "react"
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table"

import {
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableHead,
    TableCell,
} from "@/components/ui/table"

type DataTableProps<TData, TValue> = {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
    striped?: boolean
}

export function DataTable<TData, TValue>({
   columns,
   data,
   striped = false,
}: DataTableProps<TData, TValue>) {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <Table className="w-full">
            <TableHeader>
                {table.getHeaderGroups().map((hg) => (
                    <TableRow key={hg.id}>
                        {hg.headers.map((header, idx) => {
                            const isFirst = idx === 0
                            const isLast = idx === hg.headers.length - 1
                            return (
                                <TableHead
                                    key={header.id}
                                    className={[
                                        "bg-black text-white",
                                        isFirst && "rounded-tl-lg",
                                        isLast  && "rounded-tr-lg",
                                    ]
                                        .filter(Boolean)
                                        .join(" ")}
                                >
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                </TableHead>
                            )
                        })}
                    </TableRow>
                ))}
            </TableHeader>

            <TableBody>
                {table.getRowModel().rows.map((row, rowIndex) => (
                    <TableRow
                        key={row.id}
                        className={striped && rowIndex % 2 === 0 ? "bg-input" : ""}
                    >
                        {row.getVisibleCells().map((cell) => (
                            <TableCell key={cell.id}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
