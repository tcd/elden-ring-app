import type { RootState } from "@app/state"
import type { Armor, AttackElementCorrectParam, Spell, Talisman, Weapon, WeaponSkill, WeaponType } from "@app/types"

import { selectBuilderSlice } from "./select-slice"
import { KITCHEN_SINK_DATA } from "../../../../data/kitchen-sink"

const _selectFetchEverythingRequest       = (rootState: RootState) => selectBuilderSlice(rootState)?.everythingRequest
const _selectFetchEverythingRequestStatus = (rootState: RootState) => _selectFetchEverythingRequest(rootState)?.status
// const _selectFetchEverythingResponse      = (rootState: RootState) => KITCHEN_SINK_DATA

export const selectShouldFetchEverything = (rootState: RootState) => {
    const status = _selectFetchEverythingRequestStatus(rootState)
    if (status === "idle") {
        return true
    }
}

export const selectFetchingEverything = (rootState: RootState) => {
    const status = _selectFetchEverythingRequestStatus(rootState)
    return (status === "pending")
}

export const selectFetchFailed = (rootState: RootState) => {
    const status = _selectFetchEverythingRequestStatus(rootState)
    return (status === "rejected")
}

export const selectFetchSuccessful = (rootState: RootState) => {
    const status = _selectFetchEverythingRequestStatus(rootState)
    return (status === "fulfilled")
}

export const selectArmor                      = (_rootState: RootState): Armor[]                     => KITCHEN_SINK_DATA.armor                         ?? []
export const selectSpells                     = (_rootState: RootState): Spell[]                     => KITCHEN_SINK_DATA.spells                        ?? []
export const selectTalismans                  = (_rootState: RootState): Talisman[]                  => KITCHEN_SINK_DATA.talismans                     ?? []
export const selectWeapons                    = (_rootState: RootState): Weapon[]                    => KITCHEN_SINK_DATA.weapons                       ?? []
export const selectWeaponSkills               = (_rootState: RootState): WeaponSkill[]               => KITCHEN_SINK_DATA.weapon_skills                 ?? []
export const selectWeaponTypes                = (_rootState: RootState): WeaponType[]                => KITCHEN_SINK_DATA.weapon_types                  ?? []
export const selectAttackElementCorrectParams = (_rootState: RootState): AttackElementCorrectParam[] => KITCHEN_SINK_DATA.attack_element_correct_params ?? []
