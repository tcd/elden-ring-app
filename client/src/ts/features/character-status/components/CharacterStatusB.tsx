import { ErTallCard, ErTallCardSection } from "@app/features/common"

import { Attack, DefensePlus, Resistance } from "./stats"

const attackSection     = <ErTallCardSection title="Attack Power"         content={<Attack/>} />
const defenseSection    = <ErTallCardSection title="Defense/Dmg Negation" content={<DefensePlus/>} />
const resistanceSection = <ErTallCardSection title="Resistance"           content={<Resistance/>} />

const sections = [
    attackSection,
    defenseSection,
    resistanceSection,
]

export const CharacterStatusB = (_props: unknown): JSX.Element => {
    return (
        <ErTallCard
            title="Character Status"
            icon="CharacterStatus"
            sections={sections}
        />
    )
}

