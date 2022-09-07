import { useDispatch, useSelector } from "react-redux"
// import { useHotkeys } from "react-hotkeys-hook"
// import type { HotkeysEvent } from "hotkeys-js"
import useHotkeys from "@reecelucas/react-use-hotkeys"
import { Box } from "@mui/material"

import { ComponentSx } from "@app/theme"
import { Actions, Selectors } from "@app/state"
import { ErGridHeader, ErGridWrapper } from "@app/features/er-grid"

import {
    ArmorSlots,
    WeaponSlots,
    QuickItemSlots,
    TalismanSlots,
} from "./slots"

export const EquipmentSlots = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()

    const title    = useSelector(Selectors.Equipment.gridTitle)
    const subTitle = useSelector(Selectors.Equipment.gridDescription)
    // const activeSlotId = useSelector(Selectors.Equipment.activeSlotId)

    useHotkeys(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"], (keyboardEvent: KeyboardEvent) => {
        // @ts-ignore: next-line
        dispatch(Actions.Equipment.navigate(keyboardEvent.code))
    })

    return (
        <ErGridWrapper>
            <Box sx={ComponentSx.EquipmentSlots.root}>
                <ErGridHeader title={title} subTitle={subTitle} />
                <Box sx={ComponentSx.EquipmentSlots.grid.container}>
                    <WeaponSlots />
                    <ArmorSlots />
                    <TalismanSlots />
                    <QuickItemSlots />
                </Box>
            </Box>
        </ErGridWrapper>
    )
}
