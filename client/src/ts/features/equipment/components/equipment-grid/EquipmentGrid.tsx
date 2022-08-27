import { Box } from "@mui/material"

import { ComponentSx } from "@app/theme"
import {
    ArmorSlots,
    WeaponSlots,
    QuickItemSlots,
    TalismanSlots,
} from "./slots"
import { EquipmentGridHeader } from "./EquipmentGridHeader"

export const EquipmentGrid = (_props: unknown): JSX.Element => {
    return (
        <Box id="er__equipmentGrid" sx={ComponentSx.EquipmentGrid.root}>
            <EquipmentGridHeader />
            <Box component="section" className="er__equipmentGrid__grid">
                <WeaponSlots />
                <ArmorSlots />
                <TalismanSlots />
                <QuickItemSlots />
            </Box>
        </Box>
    )
}
