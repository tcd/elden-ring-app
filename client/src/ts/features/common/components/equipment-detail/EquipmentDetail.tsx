import { Box } from "@mui/material"

import { ComponentSx } from "@app/theme"
import {
    EquipmentDetailProps,
    MainSection,
    PassiveEffects,
} from "./_index"

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

            {props.children}

            <PassiveEffects {...props} />

        </Box>
    )
}
