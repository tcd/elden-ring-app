import { Box } from "@mui/material"

import { isBlank } from "@app/util"
import { ComponentSx } from "@app/theme"
import type { EquipmentMenuProps } from "./types"

export const Header = ({ title, description }: EquipmentMenuProps): JSX.Element => {

    description = isBlank(description) ? "-" : description

    return (
        <Box component="header" sx={ComponentSx.EquipmentGrid.header.root}>
            <Box component="span" sx={ComponentSx.EquipmentGrid.header.title}>
                {title}
            </Box>
            <Box component="span" sx={ComponentSx.EquipmentGrid.header.description}>
                {description}
            </Box>
        </Box>
    )
}
