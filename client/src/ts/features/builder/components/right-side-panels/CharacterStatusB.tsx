import { mdiAccount } from "@mdi/js"

import { ErTallCard, ErTallCardSection } from "@app/shared"
import { Attack, DefensePlus, Resistance } from "@app/features/builder/components/stats"

const attackSection     = <ErTallCardSection title="Attack Power"         content={<Attack/>} />
const defenseSection    = <ErTallCardSection title="Defense/Dmg Negation" content={<DefensePlus/>} />
const resistanceSection = <ErTallCardSection title="Resistance"           content={<Resistance/>} />

const sections = [
    attackSection,
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

