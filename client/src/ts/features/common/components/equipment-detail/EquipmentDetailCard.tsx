import Grid from "@mui/material/Unstable_Grid2"

import { ComponentSx } from "@app/theme"
import { ErCard } from "@app/shared"
import type { ErCardProps } from "@app/shared"

export type EquipmentDetailCardProps = Pick<ErCardProps, "title" | "icon" | "children">

export const EquipmentDetailCard = (props: EquipmentDetailCardProps): JSX.Element => {
    return (
        <Grid {...ComponentSx.EquipmentDetail.bodyGrid.itemProps}>
            <ErCard
                title={props?.title}
                icon={props?.icon}
                smallTitle={true}
                sx={ComponentSx.EquipmentDetail.bodyGrid.cardSx}
            >
                {props?.children && props.children}
            </ErCard>
        </Grid>
    )
}

export const EquipmentDetailFullCard = (props: EquipmentDetailCardProps): JSX.Element => {
    return (
        <Grid {...ComponentSx.EquipmentDetail.bodyGrid.fullItemProps}>
            <ErCard
                title={props?.title}
                icon={props?.icon}
                smallTitle={true}
                sx={ComponentSx.EquipmentDetail.bodyGrid.cardSx}
            >
                {props?.children && props.children}
            </ErCard>
        </Grid>
    )
}
