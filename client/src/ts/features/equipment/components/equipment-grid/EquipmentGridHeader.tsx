import { useSelector } from "react-redux"
import { Box } from "@mui/material"

import { Selectors } from "@app/state"
import { ComponentSx } from "@app/theme"

export const EquipmentGridHeader = (_props: unknown): JSX.Element => {

    const title       = useSelector(Selectors.Equipment.gridTitle)
    const description = useSelector(Selectors.Equipment.gridDescription)

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
