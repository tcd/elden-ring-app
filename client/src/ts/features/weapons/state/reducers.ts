import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit"

import {
    startingClassByName,
    WEAPON_SKILL_DEFAULT_AFFINITIES,
} from "@app/data"
import {
    WeaponSlotId,
    WeaponAffinityName,
    DEFAULT_WEAPON_SETTINGS,
} from "@app/types"
import { isBlank } from "@app/util"
import { BuilderActions } from "@app/features/builder"
import { WeaponsState } from "./state"

export const reducers = {
    setActiveSlotId(state: WeaponsState, action: PayloadAction<{ id: WeaponSlotId }>) {
        state.oldWeapon = {
            ...state.slots[action.payload.id],
        }
        state.activeSlotId = action.payload.id
        state.menuHasScrolled = false
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
    unequipWeaponBySlotId(state: WeaponsState, { payload: { id } }: PayloadAction<{ id: WeaponSlotId }>) {
        state.slots[id] = {
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
        state.choosingAffinity = false
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

const noWeaponsSelected = (slice: WeaponsState): boolean => {
    const slots = slice?.slots
    if (slots?.R1?.weapon_name != null) { return false }
    if (slots?.R2?.weapon_name != null) { return false }
    if (slots?.R3?.weapon_name != null) { return false }
    if (slots?.L1?.weapon_name != null) { return false }
    if (slots?.L2?.weapon_name != null) { return false }
    if (slots?.L3?.weapon_name != null) { return false }
    return true
}

export const extraReducers = (builder: ActionReducerMapBuilder<WeaponsState>) => {
    builder
        .addCase(BuilderActions.confirmStartingClassName, (state: WeaponsState, { payload: { name } }) => {
            if (noWeaponsSelected(state)) {
                const sClass = startingClassByName(name)
                state.slots.R1.weapon_name = sClass?.R1 ?? null
                state.slots.R2.weapon_name = sClass?.R2 ?? null
                state.slots.L1.weapon_name = sClass?.L1 ?? null
                state.slots.L2.weapon_name = sClass?.L2 ?? null
                return state
            }
        })
}
