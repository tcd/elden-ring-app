import { ErCard } from "@app/shared"
import { Attack } from "."

export const AttackCard = (_props: unknown): JSX.Element => {
    return (
        <ErCard title="Attack Power" icon="AttackPower">
            <Attack />
        </ErCard>
    )
}
