import Grid from "@mui/material/Unstable_Grid2"

import { ComponentSx } from "@app/theme"
import { ErCard } from "@app/shared"
import type { ErCardProps } from "@app/shared"

export type EquipmentDetailCardProps = Pick<ErCardProps, "title" | "icon" | "children">

export const EquipmentDetailCard = (props: EquipmentDetailCardProps): JSX.Element => {

    const {
        title,
        icon,
        children,
    } = props

    return (
        <Grid {...ComponentSx.EquipmentDetail.bodyGrid.itemProps}>
            <ErCard title={title} icon={icon} smallTitle={true}>
                {children && children}
            </ErCard>
        </Grid>
    )
}
