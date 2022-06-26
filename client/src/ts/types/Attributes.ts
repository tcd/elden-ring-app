export enum AttributeName {
    vigor        = "vigor",
    mind         = "mind",
    endurance    = "endurance",
    strength     = "strength",
    dexterity    = "dexterity",
    intelligence = "intelligence",
    faith        = "faith",
    arcane       = "arcane",
}

export const AttributeNames = Object.keys(AttributeName)

/**
 * Additional attribute points beyond those of a given starting class.
 */
export interface Attributes {
    [AttributeName.vigor]:        Integer
    [AttributeName.mind]:         Integer
    [AttributeName.endurance]:    Integer
    [AttributeName.strength]:     Integer
    [AttributeName.dexterity]:    Integer
    [AttributeName.intelligence]: Integer
    [AttributeName.faith]:        Integer
    [AttributeName.arcane]:       Integer
}

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
