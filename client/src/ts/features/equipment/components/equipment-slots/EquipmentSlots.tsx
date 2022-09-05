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

export const EquipmentSlots = (_props: unknown): JSX.Element => {

    const title    = useSelector(Selectors.Equipment.gridTitle)
    const subTitle = useSelector(Selectors.Equipment.gridDescription)

    return (
        <Box sx={ComponentSx.EquipmentSlots.root}>
            <ErGridHeader title={title} subTitle={subTitle} />
            <Box sx={ComponentSx.EquipmentSlots.grid.container}>
                <WeaponSlots />
                <ArmorSlots />
                <TalismanSlots />
                <QuickItemSlots />
            </Box>
        </Box>
    )
}
