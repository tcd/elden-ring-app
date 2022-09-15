import { Box } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"

import { ComponentSx } from "@app/theme"

import { MainSection } from "./MainSection"
import { PassiveEffects } from "./PassiveEffects"
import type { EquipmentDetailProps } from "./types"

const defaultProps: Partial<EquipmentDetailProps> = {
    children: null,
    title: "-",
    includeSecondaryImage: false,
    includePassiveEffects: false,
    primaryImage: {},
    secondaryImage: {},
    passiveEffects: [],
}

export const EquipmentDetail = (props: EquipmentDetailProps): JSX.Element => {

    props = { ...defaultProps, ...props }

    return (
        <Box sx={ComponentSx.EquipmentDetail.root}>

            <MainSection {...props} />

            <Grid {...ComponentSx.EquipmentDetail.bodyGrid.rootProps}>
                {props.children}
                <PassiveEffects {...props} />
            </Grid>

        </Box>
    )
}
