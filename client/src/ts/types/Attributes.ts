export const AttributeNames = {
    vigor:        "vigor",
    mind:         "mind",
    endurance:    "endurance",
    strength:     "strength",
    dexterity:    "dexterity",
    intelligence: "intelligence",
    faith:        "faith",
    arcane:       "arcane",
} as const

export type AttributeName = keyof typeof AttributeNames
export type TAttributeName = typeof AttributeNames[AttributeName];

// export const AttributeNames = Object.keys(AttributeName)

/**
 * Additional attribute points beyond those of a given starting class.
 */
export type Attributes = Record<AttributeName, Integer>

// /**
//  * Additional attribute points beyond those of a given starting class.
//  */
// export type Attributes = {
//     [key in keyof typeof AttributeName]: Integer
// }

// /**
//  * Attributes used in Weapon-related calculations.
//  */
// export const WeaponSpecificAttributes = [
//     AttributeName.strength,
//     AttributeName.dexterity,
//     AttributeName.intelligence,
//     AttributeName.faith,
//     AttributeName.arcane,
// ]

// /**
//  * Attributes used in Spell-related calculations.
//  */
// export const SpellSpecificAttributes = [
//     AttributeName.intelligence,
//     AttributeName.faith,
//     AttributeName.arcane,
// ]
