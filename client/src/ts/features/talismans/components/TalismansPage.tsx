import { Heading } from "@app/shared"
import { TalismansTable } from "./TalismansTable"

export const TalismansPage = (): JSX.Element => {

    return (
        <div className="container flex-stretch-column">
            <div style={{ height: "20%" }}>
                <Heading title="Talismans" />
            </div>
            <div>
                <TalismansTable />
            </div>
        </div>
    )
}
