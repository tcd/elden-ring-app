import { StartingClass, Weapon, WeaponSkill } from "@app/types"

import { STARTING_CLASSES } from "./starting-classes"
import { KITCHEN_SINK_DATA } from "./kitchen-sink"

export const startingClassByName = (name: string): StartingClass => {
    return STARTING_CLASSES.find(x => x.name == name) ?? null
}

export const weaponByName = (name: string): Weapon => {
    return KITCHEN_SINK_DATA.weapons.find(x => x.name == name) ?? null
}

export const weaponSkillByName = (name: string): WeaponSkill => {
    return KITCHEN_SINK_DATA.weapon_skills.find(x => x.name == name) ?? null
}
