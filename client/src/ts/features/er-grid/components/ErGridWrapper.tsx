import { Box } from "@mui/material"

import { ComponentSx } from "@app/theme"

/**
 * The following components need this as a parent:
 * - `EquipmentMenu`
 * - `EquipmentSlots`
 *
 * They aren't always used inside of an `ErGrid`, so this makes sure they behave elsewhere.
 */
export const ErGridWrapper = ({ children }: { children: React.ReactNode }): JSX.Element => {
    return (
        <Box sx={ComponentSx.ErGrid.gridWrapper}>
            {children && children}
        </Box>
    )
}
