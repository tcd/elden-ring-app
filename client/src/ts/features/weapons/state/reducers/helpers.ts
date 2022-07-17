import { ActionReducerMapBuilder, AnyAction, PayloadAction } from "@reduxjs/toolkit"
import { RouterActions, LOCATION_CHANGE } from "redux-first-history"
import { locationChangeAction } from "redux-first-history/build/es6/actions"

import {
    startingClassByName,
    WEAPON_SKILL_DEFAULT_AFFINITIES,
} from "@app/data"
import { WeaponSlotId } from "@app/constants"
import {
    DEFAULT_WEAPON_SETTINGS,
} from "@app/types"
import { isBlank } from "@app/util"
import { WeaponsState, INITIAL_WEAPONS_STATE } from "../state"
// import { history } from "@app/state"

type TLocationChangeAction = typeof locationChangeAction

// @ts-ignore: next-line
export const isLocationChange = (action: AnyAction): action is TLocationChangeAction   => {
    return action.type == LOCATION_CHANGE
}

export const noWeaponsSelected = (slice: WeaponsState): boolean => {
    const slots = slice?.slots
    if (slots?.R1?.weapon_name != null) { return false }
    if (slots?.R2?.weapon_name != null) { return false }
    if (slots?.R3?.weapon_name != null) { return false }
    if (slots?.L1?.weapon_name != null) { return false }
    if (slots?.L2?.weapon_name != null) { return false }
    if (slots?.L3?.weapon_name != null) { return false }
    return true
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
    // console.log(match?.groups)
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

export const handleLocationChange =  (state: WeaponsState, action): WeaponsState => {
    console.log(action)
    // @ts-ignore: next-line
    const pathname: string = action?.payload?.location?.pathname
    // @ts-ignore: next-line
    const hash: string = action?.payload?.location?.hash

    if (!pathname?.startsWith("/weapons")) {
        return state
    }
    if (!isBlank(hash)) {
        state.mobileTab = hash.replaceAll("#", "") as ("grid" | "detail" | "status")
    }

    const pathParams = matchWeaponPath(pathname)
    if (pathParams == null) {
        return state
    }
    const { slotId, tab, ashesOfWar } = pathParams
    if (tab != null) {
        state.mobileTab = tab
    }
    if (isBlank(state.activeSlotId)) {
        if (slotId != null) {
            state.oldWeapon = { ...state.slots[slotId] }
            state.activeSlotId = slotId
            state.menuHasScrolled = false
        } else {
            state.activeSlotId = null
            state.oldWeapon = null
            state.menuHasScrolled = true
        }
    }
    return state
}