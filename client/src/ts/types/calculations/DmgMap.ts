import { Dmg } from "@types"

/**
 * Map of `Damage Type` names and values of type `T`.
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
