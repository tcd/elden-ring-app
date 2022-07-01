import {
    Attributes,
    Spell,
    Weapon,
} from "@app/types"

export const meetsRequirements = (attributes: Attributes, equipment: Weapon | Spell): boolean => {
    // @ts-ignore:next-line
    if (attributes.strength     < (equipment?.required_strength     ?? 0)) { return false }
    // @ts-ignore:next-line
    if (attributes.dexterity    < (equipment?.required_dexterity    ?? 0)) { return false }
    if (attributes.intelligence < (equipment?.required_intelligence ?? 0)) { return false }
    if (attributes.faith        < (equipment?.required_faith        ?? 0)) { return false }
    if (attributes.arcane       < (equipment?.required_arcane       ?? 0)) { return false }
    return true
}
