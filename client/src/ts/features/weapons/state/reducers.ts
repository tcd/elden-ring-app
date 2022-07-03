import { PayloadAction } from "@reduxjs/toolkit"

import {
    WeaponSlotId,
    WeaponAffinityName,
    DEFAULT_WEAPON_SETTINGS,
} from "@app/types"
import { isBlank } from "@app/util"
import { WeaponsState } from "./state"
import { WEAPON_SKILL_DEFAULT_AFFINITIES } from "@app/data"

export const reducers = {
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
    openWeaponsMenu(state: WeaponsState, action: PayloadAction<{ id: WeaponSlotId }>) {
        state.oldWeapon = {
            ...state.slots[action.payload.id],
        }
        state.activeSlotId = action.payload.id
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
    setActiveName(state: WeaponsState, action: PayloadAction<{ name: string }>) {
        const activeSlotId = state.activeSlotId
        if (isBlank(activeSlotId)) {
            return
        }
        state.oldWeapon = {
            ...state.slots[activeSlotId],
        }
        state.slots[activeSlotId] = {
            ...DEFAULT_WEAPON_SETTINGS,
            weapon_name: action.payload.name,
        }
    },
    setWeaponSkill(state: WeaponsState, { payload: { name }}: PayloadAction<{ name: string }>) {
        const activeSlotId = state.activeSlotId
        if (isBlank(activeSlotId)) {
            return
        }
        state.oldWeapon = {
            ...state.slots[activeSlotId],
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
    setAffinity(state: WeaponsState, action: PayloadAction<{ name: string }>) {
        const activeSlotId = state.activeSlotId
        if (isBlank(activeSlotId)) {
            return
        }
        state.oldWeapon = {
            ...state.slots[activeSlotId],
        }
        state.slots[activeSlotId].affinity_name = action.payload.name as WeaponAffinityName
        state.choosingAffinity = false
    },
}
