import {
    Attributes,
    Spell,
    Weapon,
} from "@app/types"

export const meetsRequirements = (stats: Attributes, equipment: Weapon | Spell): boolean => {
    // @ts-ignore:next-line
    if (stats.strength     < (equipment?.required_strength ?? 0)) { return false }
    // @ts-ignore:next-line
    if (stats.dexterity    < (equipment?.required_dexterity ?? 0)) { return false }
    if (stats.intelligence < (equipment?.required_intelligence ?? 0)) { return false }
    if (stats.faith        < (equipment?.required_faith ?? 0)) { return false }
    if (stats.arcane       < (equipment?.required_arcane ?? 0)) { return false }
    return true
}
