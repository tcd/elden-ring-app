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

// -----------------------------------------------------------------------------
// Base
// -----------------------------------------------------------------------------

export type AttrDmgMap<T> = {
    [key in keyof typeof Attr]: DmgMap<T>
}

export type DmgAttrMap<T> = {
    [key in keyof typeof Dmg]: AttrMap<T>
}

// -----------------------------------------------------------------------------
// Extend / Inherit
// -----------------------------------------------------------------------------

// export type Attr_Dmg_Checklist = {
//     [key in keyof typeof Attr]: DmgMap<boolean>
// }
//
// export type Dmg_Attr_Checklist = {
//     [key in keyof typeof Dmg]: AttrMap<boolean>
// }

// // -----------------------------------------------------------------------------
// // Option #2
// // -----------------------------------------------------------------------------
//
// export interface AttributeDamageTypeChecklist {
//     [Attr.strength]:     DamageTypeChecklist
//     [Attr.dexterity]:    DamageTypeChecklist
//     [Attr.intelligence]: DamageTypeChecklist
//     [Attr.faith]:        DamageTypeChecklist
//     [Attr.arcane]:       DamageTypeChecklist
// }
//
// export interface DamageTypeAttributeChecklist {
//     [Dmg.physical]:  AttributeChecklist
//     [Dmg.magic]:     AttributeChecklist
//     [Dmg.fire]:      AttributeChecklist
//     [Dmg.lightning]: AttributeChecklist
//     [Dmg.holy]:      AttributeChecklist
// }

// -----------------------------------------------------------------------------
// Examples
// -----------------------------------------------------------------------------

// const _attr_dmg_example: IAttributeDamageTypeChecklist = {
//     [Attr.strength]: {
//         [Dmg.physical]:  true,
//         [Dmg.magic]:     true,
//         [Dmg.fire]:      true,
//         [Dmg.lightning]: true,
//         [Dmg.holy]:      true,
//     },
//     [Attr.dexterity]: {
//         [Dmg.physical]:  true,
//         [Dmg.magic]:     true,
//         [Dmg.fire]:      true,
//         [Dmg.lightning]: true,
//         [Dmg.holy]:      true,
//     },
//     [Attr.intelligence]: {
//         [Dmg.physical]:  true,
//         [Dmg.magic]:     true,
//         [Dmg.fire]:      true,
//         [Dmg.lightning]: true,
//         [Dmg.holy]:      true,
//     },
//     [Attr.faith]: {
//         [Dmg.physical]:  true,
//         [Dmg.magic]:     true,
//         [Dmg.fire]:      true,
//         [Dmg.lightning]: true,
//         [Dmg.holy]:      true,
//     },
//     [Attr.arcane]: {
//         [Dmg.physical]:  true,
//         [Dmg.magic]:     true,
//         [Dmg.fire]:      true,
//         [Dmg.lightning]: true,
//         [Dmg.holy]:      true,
//     },
// }

// const _dmg_attr_example: IDamageTypeAttributeChecklist = {
//     [Dmg.physical]: {
//         [Attr.strength]:     false,
//         [Attr.dexterity]:    false,
//         [Attr.intelligence]: false,
//         [Attr.faith]:        false,
//         [Attr.arcane]:       false,
//     },
//     [Dmg.magic]: {
//         [Attr.strength]:     false,
//         [Attr.dexterity]:    false,
//         [Attr.intelligence]: false,
//         [Attr.faith]:        false,
//         [Attr.arcane]:       false,
//     },
//     [Dmg.fire]: {
//         [Attr.strength]:     false,
//         [Attr.dexterity]:    false,
//         [Attr.intelligence]: false,
//         [Attr.faith]:        false,
//         [Attr.arcane]:       false,
//     },
//     [Dmg.lightning]: {
//         [Attr.strength]:     false,
//         [Attr.dexterity]:    false,
//         [Attr.intelligence]: false,
//         [Attr.faith]:        false,
//         [Attr.arcane]:       false,
//     },
//     [Dmg.holy]: {
//         [Attr.strength]:     false,
//         [Attr.dexterity]:    false,
//         [Attr.intelligence]: false,
//         [Attr.faith]:        false,
//         [Attr.arcane]:       false,
//     },
// }

// [Dmg.physical]: {
// },
// [Dmg.magic]: {
// },
// [Dmg.fire]: {
// },
// [Dmg.lightning]: {
// },
// [Dmg.holy]: {
// },
