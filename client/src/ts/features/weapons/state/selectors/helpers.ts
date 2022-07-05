import { SlimWeaponData } from "elden-ring-calculator"

import { ABNORMAL_WEAPON_NAMES, WEAPON_AFFINITIES } from "@app/data"
import { Weapon, WeaponSettings } from "@app/types"
import { isBlank, getSlimWeaponStatData } from "@app/util"

export const _selectWeaponDisplayName = (settings: WeaponSettings): string => {
    const weaponName   = settings?.weapon_name
    const affinityName = settings?.affinity_name
    if (isBlank(weaponName)) {
        return null
    }
    if (affinityName == "Standard") {
        return weaponName
    }
    if (isBlank(affinityName)) {
        return weaponName
    }
    const abnormalName = ABNORMAL_WEAPON_NAMES.find(x => x.weapon == weaponName && x.affinity == affinityName)
    if (abnormalName) {
        return abnormalName.name
    } else {
        return `${affinityName} ${weaponName}`
    }
}

export const _selectSlimWeaponData = (weapon: Weapon, weaponSettings: WeaponSettings): SlimWeaponData => {
    const affinityId = WEAPON_AFFINITIES.find(x => x.name == weaponSettings.affinity_name)?.id
    const stat = weapon?.stats.find(x => x.weapon_affinity_id == affinityId)
    if (isBlank(stat)) {
        return null
    }
    const result = getSlimWeaponStatData(stat, weaponSettings?.level)
    return result
}
