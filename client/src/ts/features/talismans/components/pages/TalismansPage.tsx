import { Heading } from "@app/shared"
import { TalismansTable } from "@app/features/talismans"

export const TalismansTablePage = (): JSX.Element => {

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
