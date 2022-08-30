import { Box } from "@mui/material"

import { ComponentSx } from "@app/theme"

export const EquipmentMenuDivider = (_props: unknown): JSX.Element => {
    return <Box component="hr" sx={ComponentSx.EquipmentMenu.grid.divider} />
}
