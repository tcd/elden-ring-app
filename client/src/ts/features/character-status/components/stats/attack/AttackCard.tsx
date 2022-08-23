import { mdiSword } from "@mdi/js"

import { ErCard } from "@app/shared"
import { Attack } from "."

export const AttackCard = (): JSX.Element => {
    return (
        <ErCard title="Attack Power" iconPath={mdiSword}>
            <Attack />
        </ErCard>
    )
}
