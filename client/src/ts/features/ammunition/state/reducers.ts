import type { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit"

import type { AmmunitionSlotId } from "@app/types"
import { isBlank } from "@app/util"
import { CoreActions } from "@app/features/core"
import { RoutingActions } from "@app/features/routing"
import { EquipmentActions } from "@app/features/equipment"
import { ImportExportActions } from "@app/features/import-export"

import type { AmmunitionState } from "./state"
import { INITIAL_AMMUNITION_STATE as INITIAL_STATE } from "./state"

export const reducers = {
    setActiveSlotId(state: AmmunitionState, { payload: { id } }: PayloadAction<{ id: AmmunitionSlotId }>) {
        state.activeSlotId = id
    },
    clearActiveSlotId(state: AmmunitionState) {
        state.activeSlotId = null
    },
}

export const extraReducers = (builder: ActionReducerMapBuilder<AmmunitionState>) => {
    builder
        .addCase(CoreActions.resetState, () => INITIAL_STATE)
        .addCase(ImportExportActions.importData.fulfilled, (_, { payload: { ammunition = {} } }): AmmunitionState => ({
            ...INITIAL_STATE,
            // @ts-ignore: next-line
            slots: { ...ammunition },
            importComplete: true,
        }))
        .addCase(EquipmentActions.navigate.fulfilled, (state: AmmunitionState, { payload: { id, type } }) => {
            if (type === "Ammunition") {
                state.oldName = state.slots[id]
                // @ts-ignore: next-line
                state.activeSlotId = id
            }
        })
        .addCase(RoutingActions.locationChange, (state, { payload }) => {
            if (payload?.pathParams?.ammunitionSlotId) {
                if (isBlank(state?.activeSlotId)) {
                    state.oldName      = state.slots[payload.pathParams.ammunitionSlotId]
                    state.activeSlotId = payload.pathParams.ammunitionSlotId
                }
            } else {
                if (payload?.location?.pathname != "/") {
                    state.activeSlotId = INITIAL_STATE.activeSlotId
                }
            }

            if (!payload?.location?.pathname?.includes("ammunition")) {
                state.oldName         = INITIAL_STATE.oldName         // null
                state.menuHasScrolled = INITIAL_STATE.menuHasScrolled // false
            }
        })
}
