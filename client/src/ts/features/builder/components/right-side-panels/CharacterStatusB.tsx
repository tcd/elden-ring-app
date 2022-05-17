import { mdiAccount } from "@mdi/js"

import {
    ErTallCard,
    ErTallCardSection,
} from "@app/shared"
import { Resistance } from "@app/features/builder/components/resistance"
import { DefensePlus } from "@app/features/builder/components/defense"

const defenseSection    = <ErTallCardSection title="Defense/Dmg Negation" content={<DefensePlus/>} />
const resistanceSection = <ErTallCardSection title="Resistance" content={<Resistance/>} />

const sections = [
    defenseSection,
    resistanceSection,
]

export const CharacterStatusB = (): JSX.Element => {
    return (
        <ErTallCard
            title="Character Status"
            iconPath={mdiAccount}
            sections={sections}
        />
    )
}

