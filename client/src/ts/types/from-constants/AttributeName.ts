import { AttributeNames } from "@app/constants"

export type AttributeName = keyof typeof AttributeNames
// type TAttributeName = typeof AttributeNames[AttributeName];

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
