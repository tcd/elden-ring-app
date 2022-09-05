import { Box } from "@mui/material"

import { ComponentSx } from "@app/theme"

export const EquipmentSlotPlaceholder = (_props: unknown): JSX.Element => {
    return (
        <Box
            component="li"
            sx={ComponentSx.EquipmentSlots.grid.cellPlaceholder}
        />
    )
}
