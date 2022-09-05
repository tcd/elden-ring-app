import { ErCard } from "@app/features/common"
import { Attack } from "."

export const AttackCard = (_props: unknown): JSX.Element => {
    return (
        <ErCard title="Attack Power" icon="AttackPower">
            <Attack />
        </ErCard>
    )
}
