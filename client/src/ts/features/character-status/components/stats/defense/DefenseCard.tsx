
import { ErCard } from "@app/shared"
import { DefensePlus } from "."

export const DefenseCard = (_props: unknown): JSX.Element => {
    return (
        <ErCard title="Defense/Dmg Negation" icon="DefenseDmgNegation">
            <DefensePlus />
        </ErCard>
    )
}
