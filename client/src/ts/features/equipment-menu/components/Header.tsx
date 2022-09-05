import { Box } from "@mui/material"

import { isBlank } from "@app/util"
import { ComponentSx } from "@app/theme"

import type { EquipmentMenuProps } from "./types"

export const Header = ({ title, subTitle }: EquipmentMenuProps): JSX.Element => {

    subTitle = isBlank(subTitle) ? "-" : subTitle

    return (
        <Box component="header" sx={ComponentSx.EquipmentGrid.header.root}>
            <Box component="span" sx={ComponentSx.EquipmentGrid.header.title}>
                {title}
            </Box>
            <Box component="span" sx={ComponentSx.EquipmentGrid.header.description}>
                {subTitle}
            </Box>
        </Box>
    )
}
