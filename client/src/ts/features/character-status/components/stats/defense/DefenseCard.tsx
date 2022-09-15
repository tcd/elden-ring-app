
import { ErCard } from "@app/features/common"
import { DefensePlus } from "."

export const DefenseCard = (_props: unknown): JSX.Element => {
    return (
        <ErCard title="Defense/Dmg Negation" icon="DefenseDmgNegation">
            <DefensePlus />
        </ErCard>
    )
}
