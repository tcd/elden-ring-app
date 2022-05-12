import { mdiShield } from "@mdi/js"

import { ECard } from "@app/shared"
import { Defense, DefensePlus } from "."

export const DefenseCard = (): JSX.Element => {
    return (
        <ECard title="Defense/Dmg Negation" iconPath={mdiShield}>
            <DefensePlus />
        </ECard>
    )
}
