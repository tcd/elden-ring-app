import { mdiShieldSwordOutline } from "@mdi/js"

import { ECard } from "@app/shared"
import {
    Armor,
    QuickItems,
    Talismans,
    Weapons,
} from "."

export const Equipment = (): JSX.Element => {

    return (
        <ECard title="Equipment" iconPath={mdiShieldSwordOutline}>
            <br/>
            <Weapons />
            <Armor />
            <Talismans />
            {/* <QuickItems /> */}
        </ECard>
    )
}
