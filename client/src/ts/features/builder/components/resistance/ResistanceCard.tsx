import { useSelector } from "react-redux"
import { mdiHeartPulse } from "@mdi/js"

import { Selectors } from "@app/state"
import { ECard } from "@app/shared"
import { Resistance } from "."

export const ResistanceCard = (): JSX.Element => {

    return (
        <ECard title="Resistance" iconPath={mdiHeartPulse}>
            <ul>
                <Resistance />
            </ul>
        </ECard>
    )
}
