import Header from "@/components/header"
import Widget from "@/components/widget"
import { profileSummaryColumns, profileSummaryData } from "@/constants/profile-summary";
import { valuationColumns, valuationData } from "@/constants/valuation-rations";

export default function Home() {
    return (
        <>
            <Header />
            <div className="flex w-full gap-4 p-4">
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
        </>
    )
}
