import { Attr } from "@app/types"

/**
 * Map of `Attribute` names and values of type `T`.
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
