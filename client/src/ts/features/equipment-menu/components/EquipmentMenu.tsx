import { forwardRef } from "react"
import { Box } from "@mui/material"

import { ComponentSx } from "@app/theme"
import { ErGridHeader } from "@app/features/er-grid"

export interface EquipmentMenuProps {
    id?: string
    title: string
    subTitle: string
    children?: React.ReactNode
}

export const EquipmentMenu = forwardRef(function EquipmentMenu(props: EquipmentMenuProps, ref) {

    const {
        id = undefined,
        children = null,
        title,
        subTitle,
    } = props

    // FIXME: may need to move id to the grid component.
    return (
        <Box sx={ComponentSx.EquipmentMenu.root} id={id}>
            <ErGridHeader title={title} subTitle={subTitle} />
            <Box sx={ComponentSx.EquipmentMenu.grid.root} ref={ref}>
                {children && children}
            </Box>
        </Box>
    )
})
