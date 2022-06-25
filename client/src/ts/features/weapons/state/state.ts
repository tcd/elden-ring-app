import { createSlice } from "@reduxjs/toolkit"

import {
    WeaponSlots,
    DEFAULT_WEAPON_SETTINGS,
    WeaponSlotId,
    WeaponSettings,
} from "@app/types"
import { FEATURE_KEYS } from "@app/util"
import { reducers } from "./reducers"

export interface WeaponsState {
    slots: WeaponSlots
    activeSlotId: WeaponSlotId
    oldWeapon: WeaponSettings
    customizingWeapon: boolean
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

const initialState: WeaponsState = {
    slots: { ...DEFAULT_WEAPON_SLOTS },
    activeSlotId: null,
    oldWeapon: null,
    customizingWeapon: false,
    menuHasScrolled: false,
}

const devState: WeaponsState = {
    ...initialState,
    activeSlotId: "R1",
    slots: {
        ...initialState.slots,
        R1: { weapon_name: "Blasphemous Blade", level: 10, affinity_name: "Standard" },
        L1: { weapon_name: "Rotten Greataxe",   level: 25, affinity_name: "Cold"     },
    },
    // slots: {
    //     R1: { ...DEFAULT_WEAPON_SETTINGS, weapon_name: "Maliketh's Black Blade"   },
    //     R2: { ...DEFAULT_WEAPON_SETTINGS, weapon_name: "Blasphemous Blade"        },
    //     R3: { ...DEFAULT_WEAPON_SETTINGS, weapon_name: "Erdtree Seal"             },
    //     L1: { ...DEFAULT_WEAPON_SETTINGS, weapon_name: "Fingerprint Stone Shield" },
    //     L2: { ...DEFAULT_WEAPON_SETTINGS, weapon_name: ""                      },
    //     L3: { ...DEFAULT_WEAPON_SETTINGS, weapon_name: "Erdtree Seal"             },
    // },
    oldWeapon: { weapon_name: "Dagger", level: 1, affinity_name: "Standard" },
}

export const WeaponsSlice = createSlice({
    name: FEATURE_KEYS.Weapons,
    initialState: devState,
    reducers: reducers,
})
