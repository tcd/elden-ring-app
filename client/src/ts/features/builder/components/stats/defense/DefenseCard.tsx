import { mdiShield } from "@mdi/js"

import { ErCard } from "@app/shared"
import { Defense, DefensePlus } from "."

export const DefenseCard = (): JSX.Element => {
    return (
        <ErCard title="Defense/Dmg Negation" iconPath={mdiShield}>
            <DefensePlus />
        </ErCard>
    )
}
