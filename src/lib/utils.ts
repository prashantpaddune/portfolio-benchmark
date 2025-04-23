import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { addDays, format } from "date-fns";
import { ReturnsPoint } from "@/types/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateReturns(
    start: Date,
    end: Date
): ReturnsPoint[] {
  const data: ReturnsPoint[] = []
  let g = 2
  let b = 1.8
  let r = 1.5

  for (let dt = new Date(start); dt <= end; dt = addDays(dt, 1)) {
    g += g * 0.0012 + (Math.random() - 0.5) * 0.8
    b += b * 0.0010 + (Math.random() - 0.5) * 0.7
    r += r * 0.0008 + (Math.random() - 0.5) * 0.9

    data.push({
      date: format(dt, "MMM,d,yyyy"),
      green:  Number(g.toFixed(2)),
      blue:   Number(b.toFixed(2)),
      red:    Number(r.toFixed(2)),
    })
  }

  return data
}