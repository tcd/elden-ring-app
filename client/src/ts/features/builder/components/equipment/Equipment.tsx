import { mdiShieldSwordOutline } from "@mdi/js"

import { ErCard } from "@app/shared"
import {
    Armor,
    QuickItems,
    Talismans,
    Weapons,
} from "."

export const Equipment = (): JSX.Element => {

    return (
        <ErCard title="Equipment" iconPath={mdiShieldSwordOutline}>
            <br/>
            <Weapons />
            <Armor />
            <Talismans />
            {/* <QuickItems /> */}
        </ErCard>
    )
}
