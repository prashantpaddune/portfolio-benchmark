import Header from "@/components/header"
import Widget from "@/components/widget"
import { profileSummaryColumns, profileSummaryData } from "@/constants/profile-summary";
import { valuationColumns, valuationData } from "@/constants/valuation-rations";
import ReturnsChart from "@/components/returns-chart"
import { generateReturns } from "@/lib/utils";
import { ReturnsPoint } from "@/types/types";
import * as React from "react";

export default function Home() {
    const sampleData: ReturnsPoint[] = generateReturns(new Date("2024-01-01"), new Date("2024-03-31"))

    return (
        <>
            <Header/>
            <div className="flex w-full gap-2 p-4">
                <Widget
                    title="Performance Summary"
                    columns={profileSummaryColumns}
                    data={profileSummaryData}
                    striped
                />
                <Widget
                    title="Valuation / Ratios"
                    columns={valuationColumns}
                    data={valuationData}
                    striped
                />
            </div>
            <div className="flex w-full px-4 pb-4">
                <ReturnsChart data={sampleData} height={400}/>
            </div>
        </>
    )
}
