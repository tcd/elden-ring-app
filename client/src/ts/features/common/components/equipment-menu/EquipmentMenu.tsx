import { forwardRef } from "react"
import { Box } from "@mui/material"

import { ComponentSx } from "@app/theme"
import { EquipmentMenuProps } from "./types"
import { EquipmentMenuHeader } from "./EquipmentMenuHeader"

export const EquipmentMenu = forwardRef(function EquipmentMenu(props: EquipmentMenuProps, ref) {

    const { children } = props

    return (
        <Box sx={ComponentSx.EquipmentMenu.root} id={props?.id || undefined}>
            <EquipmentMenuHeader {...props}/>
            <Box sx={ComponentSx.EquipmentMenu.grid.root} ref={ref}>
                {children && children}
            </Box>
        </Box>
    )
})
