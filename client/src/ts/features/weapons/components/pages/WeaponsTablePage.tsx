import { Heading } from "@app/shared"
// import { WeaponsTable } from "./WeaponsTable"
import { WeaponsTable } from "@app/features/weapons"

export const WeaponsTablePage = (): JSX.Element => {

    return (
        <div className="container flex-stretch-column">
            <div style={{ height: "20%" }}>
                <Heading title="Weapons" />
            </div>
            <div>
                <WeaponsTable />
            </div>
        </div>
    )
}
