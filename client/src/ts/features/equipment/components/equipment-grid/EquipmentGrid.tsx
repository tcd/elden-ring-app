import { Box } from "@mui/material"

import { ComponentSx } from "@app/theme"
import { EquipmentGridHeader } from "./EquipmentGridHeader"
import {
    ArmorSlots,
    WeaponSlots,
    QuickItemSlots,
    TalismanSlots,
} from "./slots"

export const EquipmentGrid = (_props: unknown): JSX.Element => {
    return (
        <Box sx={ComponentSx.EquipmentGrid.root}>
            <EquipmentGridHeader />
            <Box>
                <WeaponSlots />
                <ArmorSlots />
                <TalismanSlots />
                <QuickItemSlots />
            </Box>
        </Box>
    )
}
