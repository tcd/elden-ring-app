import { ActionReducerMapBuilder, AnyAction, PayloadAction } from "@reduxjs/toolkit"
import { RouterActions, LOCATION_CHANGE } from "redux-first-history"

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
import { CoreActions } from "@app/features/core"
import { StartingClassActions } from "@app/features/starting-class"
import { WeaponsState, INITIAL_WEAPONS_STATE } from "../state"
// import { history } from "@app/state"
import { isLocationChange, noWeaponsSelected, handleLocationChange } from "./helpers"


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

const WEAPON_PATH_PATTERN = /^\/weapons\/(?<slotId>(R1|R2|R3|L1|L2|L3))(?<aow>\/ashes-of-war)?(?<tab>#(grid|detail|status)?)?$/
// const WEAPON_PATH_PATTERN = /^\/weapons\/(?<slotId>(R1|R2|R3|L1|L2|L3)(?<tab>#(grid|detail|status))?$)/
// const ASH_OF_WAR_PATH_PATTERN = /^\/weapons\/(?<slotId>(R1|R2|R3|L1|L2|L3)\/ashes-of-war$)/
// const ASH_OF_WAR_PATH_PATTERN = /^\/weapons\/(?<slotId>(R1|R2|R3|L1|L2|L3)\/ashes-of-war(?<tab>#(grid|detail|status))?$)/

interface WeaponPathParams {
    slotId: WeaponSlotId
    tab: "grid" | "detail" | "status"
    ashesOfWar: boolean
}

const matchWeaponPath = (path: string): WeaponPathParams => {
    if (!path.startsWith("/weapon")) {
        return null
    }
    const match = WEAPON_PATH_PATTERN.exec(path)
    console.log(match?.groups)
    const result = { slotId: null, tab: null, ashesOfWar: null }
    if (match?.groups) {
        if (match?.groups?.slotId) {
            result.slotId = match.groups.slotId as WeaponSlotId
        }
        if (match?.groups?.ashesOfWar) {
            result.ashesOfWar = true
        }
        if (match?.groups?.tab) {
            result.tab = match.groups.tab as "grid" | "detail" | "status"
        }
        return result
    } else {
        return null
    }
    // if (path.includes("ashes-of-war")) {
    //     const match = ASH_OF_WAR_PATH_PATTERN.exec(path)
    //     if (match?.groups?.slotId) {
    //         return match.groups.slotId as WeaponSlotId
    //     }
    // } else {
    //     const match = WEAPON_PATH_PATTERN.exec(path)
    //     if (match?.groups?.slotId) {
    //         return match.groups.slotId as WeaponSlotId
    //     }
    // }
}

export const extraReducers = (builder: ActionReducerMapBuilder<WeaponsState>) => {
    builder
        .addCase(CoreActions.resetState, () => INITIAL_WEAPONS_STATE)
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
        .addCase(LOCATION_CHANGE, (state: WeaponsState, action) => handleLocationChange(state, action))
}
