import { createSlice } from "@reduxjs/toolkit"

import { FeatureKeys } from "@app/constants"
import {
    WeaponSlotId,
    WeaponSlots,
    DEFAULT_WEAPON_SETTINGS,
    WeaponSettings,
} from "@app/types"

import { reducers, extraReducers } from "./reducers"

export interface WeaponsState {
    slots: WeaponSlots
    activeSlotId: WeaponSlotId
    oldWeapon: WeaponSettings
    customizingWeapon: boolean
    choosingAffinity: boolean
    menuHasScrolled: boolean
}

const DEFAULT_WEAPON_SLOTS: WeaponSlots = {
    R1: { ...DEFAULT_WEAPON_SETTINGS },
    R2: { ...DEFAULT_WEAPON_SETTINGS },
    R3: { ...DEFAULT_WEAPON_SETTINGS },
    L1: { ...DEFAULT_WEAPON_SETTINGS },
    L2: { ...DEFAULT_WEAPON_SETTINGS },
    L3: { ...DEFAULT_WEAPON_SETTINGS },
}

export const INITIAL_WEAPONS_STATE: WeaponsState = {
    slots: { ...DEFAULT_WEAPON_SLOTS },
    oldWeapon: null,
    activeSlotId: "R1",
    customizingWeapon: false,
    choosingAffinity:  false,
    menuHasScrolled:   false,
}

const devState: WeaponsState = {
    ...INITIAL_WEAPONS_STATE,
    slots: {
        ...INITIAL_WEAPONS_STATE.slots,
        R1: { weapon_name: "Blasphemous Blade", level: 10, affinity_name: "Standard" },
        R2: { weapon_name: "Claymore",          level: 0,  affinity_name: "Heavy", weapon_skill_name: "Lion's Claw" },
        L1: { weapon_name: "Rotten Greataxe",   level: 25, affinity_name: "Cold"     },
        L2: { weapon_name: "Claymore",          level: 20, affinity_name: "Standard" },
    },
    // slots: {
    //     R1: { ...DEFAULT_WEAPON_SETTINGS, weapon_name: "Maliketh's Black Blade"   },
    //     R2: { ...DEFAULT_WEAPON_SETTINGS, weapon_name: "Blasphemous Blade"        },
    //     R3: { ...DEFAULT_WEAPON_SETTINGS, weapon_name: "Erdtree Seal"             },
    //     L1: { ...DEFAULT_WEAPON_SETTINGS, weapon_name: "Fingerprint Stone Shield" },
    //     L2: { ...DEFAULT_WEAPON_SETTINGS, weapon_name: ""                      },
    //     L3: { ...DEFAULT_WEAPON_SETTINGS, weapon_name: "Erdtree Seal"             },
    // },
    // oldWeapon: { weapon_name: "Dagger", level: 1, affinity_name: "Standard" },
}

export const WeaponsSlice = createSlice({
    name: FeatureKeys.Weapons,
    initialState: INITIAL_WEAPONS_STATE,
    reducers: reducers,
    extraReducers: extraReducers,
})
