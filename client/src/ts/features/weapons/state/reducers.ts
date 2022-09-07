import type { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit"

import {
    startingClassByName,
    WEAPON_SKILL_DEFAULT_AFFINITIES,
} from "@app/data"
import {
    WeaponSlotId,
    WeaponAffinityName,
    // FIXME: move out of `@app/types`
    DEFAULT_WEAPON_SETTINGS,
} from "@app/types"
import { isBlank } from "@app/util"
import { CoreActions } from "@app/features/core"
import { RoutingActions } from "@app/features/routing"
import { StartingClassActions } from "@app/features/starting-class"
import { EquipmentActions } from "@app/features/equipment"

import {
    WeaponsState,
    INITIAL_WEAPONS_STATE as INITIAL_STATE,
} from "./state"
import { noWeaponsSelected } from "./helpers"

export const reducers = {
    setActiveSlotId(state: WeaponsState, { payload: { id } }: PayloadAction<{ id: WeaponSlotId }>) {
        state.oldWeapon = {
            ...state.slots[id],
        }
        state.activeSlotId = id
        state.menuHasScrolled = false
    },
    clearActiveSlotId(state: WeaponsState) {
        state.activeSlotId = null
        state.oldWeapon = null
        state.customizingWeapon = false
        state.menuHasScrolled = true
        state.choosingAffinity = false
    },
    startCustomizingWeapon(state: WeaponsState) {
        state.customizingWeapon = true
        state.menuHasScrolled   = false
    },
    stopCustomizingWeapon(state: WeaponsState) {
        state.customizingWeapon = false
        state.choosingAffinity  = false
        state.menuHasScrolled   = false
    },
    startChoosingAffinity(state: WeaponsState) {
        state.choosingAffinity = true
    },
    stopChoosingAffinity(state: WeaponsState) {
        state.choosingAffinity = false
    },
    scrollMenu(state: WeaponsState) {
        state.menuHasScrolled = true
    },
    openWeaponsMenu(state: WeaponsState, { payload: { id } }: PayloadAction<{ id: WeaponSlotId }>) {
        state.oldWeapon = {
            ...state.slots[id],
        }
        state.activeSlotId = id
        state.menuHasScrolled = false
    },
    closeWeaponsMenu(state: WeaponsState) {
        state.activeSlotId = null
        state.oldWeapon = null
        state.menuHasScrolled = true
    },
    removeWeapon(state: WeaponsState) {
        state.slots[state.activeSlotId] = {
            ...DEFAULT_WEAPON_SETTINGS,
        }
    },
    unequipWeaponBySlotId(state: WeaponsState, { payload: { id } }: PayloadAction<{ id: WeaponSlotId }>) {
        state.slots[id] = {
            ...DEFAULT_WEAPON_SETTINGS,
        }
    },
    setActiveName(state: WeaponsState, { payload: { name } }: PayloadAction<{ name: string }>) {
        const activeSlotId = state.activeSlotId
        if (isBlank(activeSlotId)) {
            return
        }
        state.oldWeapon = {
            ...state.slots[activeSlotId],
        }
        state.slots[activeSlotId] = {
            ...DEFAULT_WEAPON_SETTINGS,
            weapon_name: name,
        }
    },
    setWeaponSkill(state: WeaponsState, { payload: { name } }: PayloadAction<{ name: string }>) {
        const activeSlotId = state.activeSlotId
        if (isBlank(activeSlotId)) {
            return
        }
        state.oldWeapon = {
            ...state.slots[activeSlotId],
        }
        if (state.slots[activeSlotId].weapon_skill_name == name) {
            state.choosingAffinity = true
            return
        }
        state.slots[activeSlotId].weapon_skill_name = name
        if (isBlank(name)) {
            return
        }
        const affinityName = WEAPON_SKILL_DEFAULT_AFFINITIES[name]
        if (!isBlank(affinityName)) {
            state.slots[activeSlotId].affinity_name = affinityName
        }
        state.choosingAffinity = true
    },
    setAffinity(state: WeaponsState, { payload: { name } }: PayloadAction<{ name: string }>) {
        const activeSlotId = state.activeSlotId
        if (isBlank(activeSlotId)) {
            return
        }
        state.oldWeapon = {
            ...state.slots[activeSlotId],
        }
        state.slots[activeSlotId].affinity_name = name as WeaponAffinityName
        state.choosingAffinity = false
    },
    unequip(state: WeaponsState) {
        state.oldWeapon = {
            ...state.slots[state.activeSlotId],
        }
        state.slots[state.activeSlotId] = {
            ...DEFAULT_WEAPON_SETTINGS,
        }
        // state.customizingWeapon = false
        // state.menuHasScrolled = true
        // state.choosingAffinity = false
    },
    removeWeaponSkill(state: WeaponsState) {
        const activeSlotId = state.activeSlotId
        if (isBlank(activeSlotId)) {
            return
        }
        state.oldWeapon = {
            ...state.slots[activeSlotId],
        }
        state.slots[activeSlotId].weapon_skill_name = null
        state.slots[activeSlotId].affinity_name = null
    },
    removeAffinity(state: WeaponsState) {
        const activeSlotId = state.activeSlotId
        if (isBlank(activeSlotId)) {
            return
        }
        state.oldWeapon = {
            ...state.slots[activeSlotId],
        }
        state.slots[activeSlotId].affinity_name = null
        state.choosingAffinity = false
    },
}

export const extraReducers = (builder: ActionReducerMapBuilder<WeaponsState>) => {
    builder
        .addCase(CoreActions.resetState, () => INITIAL_STATE)
        .addCase(StartingClassActions.confirmStartingClassName, (state: WeaponsState, { payload: { name } }) => {
            if (noWeaponsSelected(state)) {
                const sClass = startingClassByName(name)
                state.slots.R1.weapon_name = sClass?.R1 ?? null
                state.slots.R2.weapon_name = sClass?.R2 ?? null
                state.slots.L1.weapon_name = sClass?.L1 ?? null
                state.slots.L2.weapon_name = sClass?.L2 ?? null
                return state
            }
        })
        .addCase(EquipmentActions.navigate.fulfilled, (state: WeaponsState, { payload: { id, type } }) => {
            if (type === "Weapon") {
                state.oldWeapon = { ...state.slots[id] }
                // @ts-ignore: next-line
                state.activeSlotId = id
            }
        })
        .addCase(RoutingActions.locationChange, (state: WeaponsState, { payload }) => {
            if (payload?.pathParams?.weaponSlotId) {
                if (isBlank(state.activeSlotId)) {
                    state.oldWeapon = { ...state.slots[payload.pathParams.weaponSlotId] }
                    state.activeSlotId = payload.pathParams.weaponSlotId
                    // state.menuHasScrolled = false
                }
                state.activeSlotId = payload?.pathParams?.weaponSlotId
            } else {
                if (payload?.location?.pathname != "/") {
                    state.activeSlotId = INITIAL_STATE.activeSlotId
                }
            }

            if (payload?.location?.pathname?.includes("ashes-of-war")) {
                state.customizingWeapon = true
            } else {
                state.customizingWeapon = false
            }

            if (!payload?.location?.pathname?.includes("weapon")) {
                // FIXME: should we be using an empty object?
                state.oldWeapon = { ...INITIAL_STATE.oldWeapon }
                state.menuHasScrolled = INITIAL_STATE.menuHasScrolled // false
            }
        })

}
