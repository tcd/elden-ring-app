import { ErCard2 } from "@app/shared"
import { Attack } from "."

export const AttackCard = (_props: unknown): JSX.Element => {
    return (
        <ErCard2 title="Attack Power" icon="AttackPower">
            <Attack />
        </ErCard2>
    )
}
