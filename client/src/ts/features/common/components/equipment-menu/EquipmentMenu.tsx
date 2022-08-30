import { Box } from "@mui/material"

import { ComponentSx } from "@app/theme"
import { EquipmentMenuProps } from "./types"
import { EquipmentMenuHeader } from "./EquipmentMenuHeader"

export const EquipmentMenu = (props: EquipmentMenuProps): JSX.Element => {

    const { children } = props

    return (
        <Box sx={ComponentSx.EquipmentMenu.root}>
            <EquipmentMenuHeader {...props}/>
            <Box sx={ComponentSx.EquipmentMenu.grid.root}>
                {children && children}
            </Box>
        </Box>
    )
}
