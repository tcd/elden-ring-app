// =============================================================================
// Constant Keys for Attributes and Damage Types
// =============================================================================

/** Name of an *Attribute*. */
export enum Attr {
    strength     = "strength",
    dexterity    = "dexterity",
    intelligence = "intelligence",
    faith        = "faith",
    arcane       = "arcane",
}

/** Name of an *Attribute*. */
export type AttrValue = keyof typeof Attr

/** Name of a *Damage Type*. */
export enum Dmg {
    physical  = "physical",
    magic     = "magic",
    fire      = "fire",
    lightning = "lightning",
    holy      = "holy",
}

/** Name of a *Damage Type*. */
export type DmgValue = keyof typeof Dmg

// =============================================================================
// Lowest Level Checklists
// =============================================================================

/**
 * Map of *Attribute* names and values of type `T`.
 *
 * @template {T} ValueType the type of values present in the map.
 */
export interface AttrMap<T> {
    [Attr.strength]:     T
    [Attr.dexterity]:    T
    [Attr.intelligence]: T
    [Attr.faith]:        T
    [Attr.arcane]:       T
}

/**
 * Map of *Damage Type* names and values of type `T`.
 *
 * @template {T} ValueType the type of values present in the map.
 */
export interface DmgMap<T> {
    [Dmg.physical]:  T
    [Dmg.magic]:     T
    [Dmg.fire]:      T
    [Dmg.lightning]: T
    [Dmg.holy]:      T
}

// =============================================================================
// Higher Order Checklists
// =============================================================================

export type AttrDmgMap<T> = {
    [key in keyof typeof Attr]: DmgMap<T>
}

export type DmgAttrMap<T> = {
    [key in keyof typeof Dmg]: AttrMap<T>
}

export const newAttrDmgMap = <T>(): AttrDmgMap<T> => {
    return {
        [Attr.strength]: {
            [Dmg.physical]:  null,
            [Dmg.magic]:     null,
            [Dmg.fire]:      null,
            [Dmg.lightning]: null,
            [Dmg.holy]:      null,
        },
        [Attr.dexterity]: {
            [Dmg.physical]:  null,
            [Dmg.magic]:     null,
            [Dmg.fire]:      null,
            [Dmg.lightning]: null,
            [Dmg.holy]:      null,
        },
        [Attr.intelligence]: {
            [Dmg.physical]:  null,
            [Dmg.magic]:     null,
            [Dmg.fire]:      null,
            [Dmg.lightning]: null,
            [Dmg.holy]:      null,
        },
        [Attr.faith]: {
            [Dmg.physical]:  null,
            [Dmg.magic]:     null,
            [Dmg.fire]:      null,
            [Dmg.lightning]: null,
            [Dmg.holy]:      null,
        },
        [Attr.arcane]: {
            [Dmg.physical]:  null,
            [Dmg.magic]:     null,
            [Dmg.fire]:      null,
            [Dmg.lightning]: null,
            [Dmg.holy]:      null,
        },
    }
}

export const newDmgAttrMap = <T>(): DmgAttrMap<T> => {
    return {
        [Dmg.physical]: {
            [Attr.strength]:     null,
            [Attr.dexterity]:    null,
            [Attr.intelligence]: null,
            [Attr.faith]:        null,
            [Attr.arcane]:       null,
        },
        [Dmg.magic]: {
            [Attr.strength]:     null,
            [Attr.dexterity]:    null,
            [Attr.intelligence]: null,
            [Attr.faith]:        null,
            [Attr.arcane]:       null,
        },
        [Dmg.fire]: {
            [Attr.strength]:     null,
            [Attr.dexterity]:    null,
            [Attr.intelligence]: null,
            [Attr.faith]:        null,
            [Attr.arcane]:       null,
        },
        [Dmg.lightning]: {
            [Attr.strength]:     null,
            [Attr.dexterity]:    null,
            [Attr.intelligence]: null,
            [Attr.faith]:        null,
            [Attr.arcane]:       null,
        },
        [Dmg.holy]: {
            [Attr.strength]:     null,
            [Attr.dexterity]:    null,
            [Attr.intelligence]: null,
            [Attr.faith]:        null,
            [Attr.arcane]:       null,
        },
    }
}

// =============================================================================
// CalcCorrect
// =============================================================================

export type CalcIdString =
    | "0"
    | "1"
    | "2"
    | "4"
    | "7"
    | "8"
    | "12"
    | "14"
    | "15"
    | "16"

// -----------------------------------------------------------------------------

export type ThreeNumbers = [Integer, Integer, Integer]

export type CalcIdLevelRanges = {
    [id in CalcIdString]: ThreeNumbers
}

// -----------------------------------------------------------------------------

export type CalcCorrectFunc = (level: Integer) => Decimal

export type FourFuncs = [CalcCorrectFunc, CalcCorrectFunc, CalcCorrectFunc, CalcCorrectFunc]

export type CalcIdLevelRangeFuncs = {
    [id in CalcIdString]: FourFuncs
}
