
import { ErCard2 } from "@app/shared"
import { DefensePlus } from "."

export const DefenseCard = (_props: unknown): JSX.Element => {
    return (
        <ErCard2 title="Defense/Dmg Negation" icon="DefenseDmgNegation">
            <DefensePlus />
        </ErCard2>
    )
}
