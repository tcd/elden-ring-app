import type { AttrMap } from "elden-ring-calculator"

import type { Weapon } from "@app/types"

export const getRequirements = (weapon: Weapon): AttrMap<Integer> => {
    return {
        strength: weapon.required_strength,
        dexterity: weapon.required_dexterity,
        intelligence: weapon.required_intelligence,
        faith: weapon.required_faith,
        arcane: weapon.required_arcane,
    }
}
