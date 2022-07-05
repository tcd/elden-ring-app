import { mdiHeartPulse } from "@mdi/js"

import { ErCard } from "@app/shared"
import { Resistance } from "."

export const ResistanceCard = (): JSX.Element => {

    return (
        <ErCard title="Resistance" iconPath={mdiHeartPulse}>
            <ul>
                <Resistance />
            </ul>
        </ErCard>
    )
}
