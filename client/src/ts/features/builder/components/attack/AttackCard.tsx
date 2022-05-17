import { mdiSword } from "@mdi/js"

import { ECard } from "@app/shared"
import { Attack } from "."

export const AttackCard = (): JSX.Element => {
    return (
        <ECard title="Attack Power" iconPath={mdiSword}>
            <Attack />
        </ECard>
    )
}
