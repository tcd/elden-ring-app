import { Box } from "@mui/material"

import { ComponentSx } from "@app/theme"

export const EquipmentGridRow = ({ children }: { children?: React.ReactNode }): JSX.Element => {
    return (
        <Box sx={ComponentSx.EquipmentGrid.grid.row}>
            {children && children}
        </Box>
    )
}
