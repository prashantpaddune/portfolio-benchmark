"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import DatePicker from "@/components/ui/date-picker"

const Header = () => {
    const [startDate, setStartDate] = useState<Date>(new Date("2025-01-23"))
    const [endDate, setEndDate]   = useState<Date>(new Date("2025-04-17"))

    const handleApply = () => {
        console.log("Apply date range:", { startDate, endDate })
    }

    return (
        <div className="w-full flex items-center justify-between px-6 py-4 border-b border-navbar-border">
            <h1 className="text-2xl font-semibold">Portfolio &amp; Benchmark</h1>

            <div className="flex items-center">
                <div className="h-10 w-px bg-border mx-4" />

                <div className="flex items-center space-x-2">
                    <DatePicker
                        value={startDate}
                        onChange={setStartDate}
                        placeholder="Start Date"
                    />

                    <span className="select-none">–</span>

                    <DatePicker
                        value={endDate}
                        onChange={setEndDate}
                        placeholder="End Date"
                    />

                    <Button size="lg" variant="outline" onClick={handleApply}>
                        Apply
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Header;