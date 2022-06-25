import { PayloadAction } from "@reduxjs/toolkit"

import { TalismanSlotId } from "@app/types"
import { isBlank } from "@app/util"
import { TalismansState } from "./state"

export const reducers = {
    openTalismansMenu(state: TalismansState, action: PayloadAction<{ id: TalismanSlotId }>) {
        state.oldTalismanName = state.talismanNames[action.payload.id]
        state.activeSlotId = action.payload.id
    },
    closeTalismansMenu(state: TalismansState) {
        state.oldTalismanName = null
        state.activeSlotId = null
    },
    removeTalisman(state: TalismansState) {
        state.talismanNames[state.activeSlotId] = null
    },
    setActiveName(state: TalismansState, action: PayloadAction<{ name: string }>) {
        const activeSlotId = state.activeSlotId
        if (isBlank(activeSlotId)) {
            return
        }
        state.oldTalismanName = null
        state.talismanNames[activeSlotId] = action.payload.name
    },
}
