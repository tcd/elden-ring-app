import { useSelector } from "react-redux"
import { Box } from "@mui/material"

import { ComponentSx } from "@app/theme"
import { Selectors } from "@app/state"
import { ErGridHeader } from "@app/features/er-grid"

import {
    ArmorSlots,
    WeaponSlots,
    QuickItemSlots,
    TalismanSlots,
} from "./slots"

export const EquipmentGrid = (_props: unknown): JSX.Element => {

    const title    = useSelector(Selectors.Equipment.gridTitle)
    const subTitle = useSelector(Selectors.Equipment.gridDescription)

    return (
        <Box sx={ComponentSx.EquipmentGrid.root}>
            <ErGridHeader title={title} subTitle={subTitle} />
            <Box sx={ComponentSx.EquipmentGrid.grid.container}>
                <WeaponSlots />
                <ArmorSlots />
                <TalismanSlots />
                <QuickItemSlots />
            </Box>
        </Box>
    )
}
