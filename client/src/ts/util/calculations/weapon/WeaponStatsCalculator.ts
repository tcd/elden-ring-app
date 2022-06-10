import {
    CalculatedWeaponStats,
    Weapon,
    SlimWeaponStatData,
    AttackElementCorrectParam,
    Attributes,
} from "@app/types"

import {
    AttrMap,
} from "./sheets"

export interface WeaponStatsCalculatorOptions {
    weapon: Weapon
    slimData: SlimWeaponStatData
    adjustmentParams: AttackElementCorrectParam
    attributes: Attributes
}

// https://www.reddit.com/r/Eldenring/comments/tbco46/comment/i0e7xg7/?utm_source=share&utm_medium=web2x&context=3
export class WeaponStatsCalculator {

    private weapon: Weapon
    private slimData: SlimWeaponStatData
    private adjustmentParams: AttackElementCorrectParam
    private attributes: Attributes

    private attributeRequirementsMet: AttrMap<boolean>

    public stats: CalculatedWeaponStats

    constructor(options: WeaponStatsCalculatorOptions) {
        this.stats = {
            attack: {
                base: {},
                scaled: {},
            },
            defense: {},
            scaling: {},
        } as CalculatedWeaponStats

        this.weapon           = options.weapon
        this.slimData         = options.slimData
        this.adjustmentParams = options.adjustmentParams
        this.attributes       = options.attributes

        this.attributeRequirementsMet = {
            strength:     this.attributes.strength     >= this.weapon.required_strength,
            dexterity:    this.attributes.dexterity    >= this.weapon.required_dexterity,
            intelligence: this.attributes.intelligence >= this.weapon.required_intelligence,
            faith:        this.attributes.faith        >= this.weapon.required_faith,
            arcane:       this.attributes.arcane       >= this.weapon.required_arcane,
        }
    }

    public calculate(): void {
        return null
    }
}
