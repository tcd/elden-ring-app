/**
 * ### Examples:
 *
 * - Spell with Tick damage (*Surge, Oh Flame!*)
 *   - `base ( tick)`
 * - Spell with charged version
 *   - `base ( charge)`
 * - Weapon skill with a stance & light/heavy attacks (*Sword of Night and Flame*)
 *   - `-(light heavy)`
 * - Weapon skill you can tap to continue (*Rivers of Blood*)
 *   - `base(- chain)`
 */
export interface IFpCost {
    base?: number
    light?: number
    heavy?: number
    tick?: number
    chain?: number
    charge?: number
}

export type FpCostType = "weapon" | "spell"
