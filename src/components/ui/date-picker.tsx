"use client"

import { useState } from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"

type DatePickerProps = {
    value: Date
    placeholder?: string
    onChange: (date: Date) => void
    buttonWidth?: string
}

const DatePicker = ({
   value,
   placeholder = "Select Date",
   onChange,
   buttonWidth = "w-44",
}: DatePickerProps) => {
    const [open, setOpen] = useState(false)
    const label = value ? format(value, "do MMM, yyyy") : placeholder

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    size="lg"
                    variant="outline"
                    className={`${buttonWidth} justify-between text-left font-normal`}
                >
                    {label}
                    <CalendarIcon className="h-4 w-4" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="bg-background" align="start">
                <Calendar
                    initialFocus
                    mode="single"
                    className="bg-background"
                    selected={value}
                    onSelect={(dateValue) => {
                        if (dateValue) {
                            onChange(dateValue)
                            setOpen(false)
                        }
                    }}
                />
            </PopoverContent>
        </Popover>
    )
}

export default DatePicker;