import { PayloadAction } from "@reduxjs/toolkit"

import { ArmorType } from "@app/types"
import { isBlank } from "@app/util"
import { ArmorState } from "./state"

export const reducers = {
    openArmorMenu(state: ArmorState, action: PayloadAction<{ type: ArmorType }>) {
        state.activeType = action.payload.type
        state.oldName = state.armorNames[action.payload.type]
    },
    closeArmorMenu(state: ArmorState) {
        state.activeType = null
        state.oldName = null
    },
    setActiveType(state: ArmorState, action: PayloadAction<{ type: "all" | ArmorType }>) {
        state.activeType = action.payload.type
    },
    equipArmor(state: ArmorState, action: PayloadAction<{ name: string }>) {
        state.armorNames[state.activeType] = action.payload.name
    },
    removeArmor(state: ArmorState) {
        if (!isBlank(state.activeType)) {
            state.armorNames[state.activeType] = null
        }
    },
    // equipArmor(state: ArmorState, action: PayloadAction<{ type: ArmorType, name: string }>) {
    //     state.armorNames[action.payload.type] = action.payload.name
    // },
    // removeArmorByType(state: ArmorState, action: PayloadAction<{ type: ArmorType }>) {
    //     state.armorNames[action.payload.type] = null
    // },
}
