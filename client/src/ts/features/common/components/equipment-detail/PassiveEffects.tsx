import Grid from "@mui/material/Unstable_Grid2"

import { ComponentSx } from "@app/theme"
import { ErCard } from "@app/shared"
import { EquipmentDetailProps } from "./types"

export const PassiveEffects = (props: EquipmentDetailProps): JSX.Element => {

    if (props.includePassiveEffects !== true) {
        return null
    }

    const rows = props.passiveEffects

    while (rows.length < 3) {
        rows.push(<li key={`passive-effect-${rows.length + 1}`}> - </li>)
    }

    return (
        <Grid {...ComponentSx.EquipmentDetail.bodyGrid.itemProps}>
            <ErCard title="Passive Effects" icon="PassiveEffects" smallTitle={true}>
                <ul>
                    {rows}
                </ul>
            </ErCard>
        </Grid>
    )
}
