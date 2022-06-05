import { createSlice } from "@reduxjs/toolkit"

import {
    WeaponSlots,
    DEFAULT_WEAPON_SETTINGS,
    WeaponSlotId,
} from "@app/types"
import { FEATURE_KEYS } from "@app/util"
import {
    reducers,
    extraReducers,
} from "./reducers"

export interface WeaponsState {
    activeSlotId: WeaponSlotId
    customizingWeapon: boolean
    slots: WeaponSlots
}

const initialState: WeaponsState = {
    activeSlotId: null,
    customizingWeapon: false,
    slots: {
        R1: { ...DEFAULT_WEAPON_SETTINGS },
        R2: { ...DEFAULT_WEAPON_SETTINGS },
        R3: { ...DEFAULT_WEAPON_SETTINGS },
        L1: { ...DEFAULT_WEAPON_SETTINGS },
        L2: { ...DEFAULT_WEAPON_SETTINGS },
        L3: { ...DEFAULT_WEAPON_SETTINGS },
    },
}

const devState: WeaponsState = {
    ...initialState,
    activeSlotId: "R1",
    slots: {
        ...initialState.slots,
        R1: { ...DEFAULT_WEAPON_SETTINGS, weapon_name: "Maliketh's Black Blade"   },
        R3: { ...DEFAULT_WEAPON_SETTINGS, weapon_name: "Erdtree Seal"             },
        L1: { ...DEFAULT_WEAPON_SETTINGS, weapon_name: "Fingerprint Stone Shield" },
        L3: { ...DEFAULT_WEAPON_SETTINGS, weapon_name: "Erdtree Seal"             },
    },
}

export const WeaponsSlice = createSlice({
    name: FEATURE_KEYS.Weapons,
    initialState: devState,
    reducers: reducers,
    extraReducers: extraReducers,
})
