import {
    AttackElementCorrectParam,
    Attr,
    AttrMap,
    CalculatedWeaponStats,
    Dmg,
    DmgAttrMap,
    DmgMap,
    SlimWeaponStatData,
} from "@types"

import {
    buildDmgMap,
    buildDmgAttrMap,
    calcCorrect,
    multiply,
    buildAttrMap,
    sum,
    scalingTier,
} from "@app/util"

export interface WeaponStatsCalculatorOptions {
    attributes: AttrMap<Integer>
    slimData: SlimWeaponStatData
    adjustmentParams: AttackElementCorrectParam
    requirements: AttrMap<Integer>
}

export interface ICalculations {
    attr_requirementsMet: AttrMap<boolean>
    dmg_requirementsMet: DmgMap<boolean>
    dmg_scalesOn_attr: DmgAttrMap<boolean>
    dmg_attr_requirementMet: DmgAttrMap<boolean>
    dmg_attr_calcCorrect: DmgAttrMap<Decimal>
    dmg_attr_damage: DmgAttrMap<Decimal>
    scaled_damage: DmgMap<Decimal>
    stats: CalculatedWeaponStats
}

// https://www.reddit.com/r/Eldenring/comments/tbco46/comment/i0e7xg7/?utm_source=share&utm_medium=web2x&context=3
export class WeaponStatsCalculator {

    private slimData: SlimWeaponStatData
    private adjustmentParams: AttackElementCorrectParam
    private attributes: AttrMap<Integer>
    private requirements: AttrMap<Integer>

    public attr_requirementsMet: AttrMap<boolean>
    public dmg_requirementsMet: DmgMap<boolean>
    public dmg_scalesOn_attr: DmgAttrMap<boolean>
    public dmg_attr_requirementMet: DmgAttrMap<boolean>
    public dmg_attr_damage: DmgAttrMap<Decimal>
    public dmg_attr_calcCorrect: DmgAttrMap<Decimal>
    public scaled_damage: DmgMap<Decimal>

    public stats: CalculatedWeaponStats

    constructor(options: WeaponStatsCalculatorOptions) {
        this.attributes       = options.attributes
        this.slimData         = options.slimData
        this.adjustmentParams = options.adjustmentParams
        this.requirements     = options.requirements

        this.attr_requirementsMet    = buildAttrMap(false)
        this.dmg_requirementsMet     = buildDmgMap(false)
        this.dmg_scalesOn_attr       = buildDmgAttrMap(false)
        this.dmg_attr_requirementMet = buildDmgAttrMap(false)
        this.dmg_attr_damage         = buildDmgAttrMap(0)
        this.dmg_attr_calcCorrect    = buildDmgAttrMap(0)
        this.scaled_damage           = buildDmgMap(0)
        this.stats                   = this._initialStats()
    }

    public calculate(): CalculatedWeaponStats {
        this.attr_requirementsMet    = attributeRequirementsMet(this.attributes, this.requirements)
        this.dmg_scalesOn_attr       = damageTypeScalesOnAttribute(this.adjustmentParams)
        this.dmg_attr_requirementMet = damageTypeAttributeRequirementsMet(this.attr_requirementsMet, this.dmg_scalesOn_attr)
        this.set_dmg_attr_calcCorrect()
        this.set_dmg_requirementsMet()
        this.set_dmg_attr_damage()
        this.set_scaled_damage()
        this.set_stats()
        return this.stats
    }

    private _initialStats(): CalculatedWeaponStats {
        return {
            attack: {
                base: {},
                scaled: {},
                total: {},
            },
            scaling: {},
        } as CalculatedWeaponStats
    }

    private set_dmg_attr_calcCorrect(): void {
        for (const dmg of Object.values(Dmg)) {
            for (const attr of Object.values(Attr)) {
                if (!this.dmg_scalesOn_attr[dmg][attr]) {
                    this.dmg_attr_calcCorrect[dmg][attr] = 0
                } else {
                    const level         = this.attributes[attr]
                    const calcCorrectId = this.slimData.calc_correct[dmg]
                    this.dmg_attr_calcCorrect[dmg][attr] = calcCorrect(level, calcCorrectId)
                }
            }
        }
    }

    public set_dmg_requirementsMet(): void {
        for (const [key, value] of Object.entries(this.dmg_attr_requirementMet)) {
            this.dmg_requirementsMet[key] = Object.values(value).every(x => x == true)
        }
    }

    private set_dmg_attr_damage(): void {
        for (const dmg of Object.values(Dmg)) {
            for (const attr of Object.values(Attr)) {
                const calcCorrect = this.dmg_attr_calcCorrect?.[dmg]?.[attr] ?? 0
                if (calcCorrect > 0) {
                    const base = this.slimData.attack[dmg]
                    const scaling = this.slimData.scaling[attr]
                    if (scaling == undefined) {
                        throw new Error(`no ${attr} scaling data found`)
                    }
                    const damage = multiply([
                        base,
                        scaling,
                        (calcCorrect / 100),
                    ])
                    this.dmg_attr_damage[dmg][attr] = damage
                } else {
                    this.dmg_attr_damage[dmg][attr] = 0
                }
            }
        }
    }

    private set_scaled_damage(): void {
        for (const dmg of Object.values(Dmg)) {
            if (!this.dmg_requirementsMet[dmg]) {
                this.scaled_damage[dmg] = 0
            } else {
                this.scaled_damage[dmg] = sum(Object.values(this.dmg_attr_damage[dmg]))
            }
        }
    }

    private set_stats(): void {
        for (const dmg of Object.values(Dmg)) {
            const baseDamage   = this.slimData.attack[dmg]
            const scaledDamage = this.scaled_damage[dmg]

            this.stats.attack.base  [dmg] = baseDamage
            this.stats.attack.scaled[dmg] = scaledDamage
            this.stats.attack.total [dmg] = (baseDamage + scaledDamage)
        }
        for (const attr of Object.values(Attr)) {
            this.stats.scaling[attr] = scalingTier(this.slimData.scaling[attr])
        }
    }

}

export const attributeRequirementsMet = (attributes: AttrMap<Integer>, requirements: AttrMap<Integer>): AttrMap<boolean> => {
    return Object.values(Attr).reduce((result, attr) => ({
        ...result,
        [attr]: (attributes[attr] >= requirements[attr]),
    }), {} as AttrMap<boolean>)
}

export const damageTypeAttributeRequirementsMet = (attrMet: AttrMap<boolean>, scalesOn: DmgAttrMap<boolean>): DmgAttrMap<boolean> => {
    return Object.values(Dmg).reduce((dmgResult, dmg) => ({
        ...dmgResult,
        [dmg]: Object.values(Attr).reduce((attrResult, attr) => ({
            ...attrResult,
            [attr]: !(scalesOn[dmg][attr] == true && attrMet[attr] == false),
        }), {} as AttrMap<boolean>),
    }), {} as DmgAttrMap<boolean>)
}

export const damageTypeScalesOnAttribute = (adjustmentParam: AttackElementCorrectParam): DmgAttrMap<boolean> => {
    return {
        [Dmg.physical]: {
            [Attr.strength]:     adjustmentParam.isStrengthCorrect_byPhysics,
            [Attr.dexterity]:    adjustmentParam.isDexterityCorrect_byPhysics,
            [Attr.intelligence]: adjustmentParam.isMagicCorrect_byPhysics,
            [Attr.faith]:        adjustmentParam.isFaithCorrect_byPhysics,
            [Attr.arcane]:       adjustmentParam.isLuckCorrect_byPhysics,
        },
        [Dmg.magic]: {
            [Attr.strength]:     adjustmentParam.isStrengthCorrect_byMagic,
            [Attr.dexterity]:    adjustmentParam.isDexterityCorrect_byMagic,
            [Attr.intelligence]: adjustmentParam.isMagicCorrect_byMagic,
            [Attr.faith]:        adjustmentParam.isFaithCorrect_byMagic,
            [Attr.arcane]:       adjustmentParam.isLuckCorrect_byMagic,
        },
        [Dmg.fire]: {
            [Attr.strength]:     adjustmentParam.isStrengthCorrect_byFire,
            [Attr.dexterity]:    adjustmentParam.isDexterityCorrect_byFire,
            [Attr.intelligence]: adjustmentParam.isMagicCorrect_byFire,
            [Attr.faith]:        adjustmentParam.isFaithCorrect_byFire,
            [Attr.arcane]:       adjustmentParam.isLuckCorrect_byFire,
        },
        [Dmg.lightning]: {
            [Attr.strength]:     adjustmentParam.isStrengthCorrect_byThunder,
            [Attr.dexterity]:    adjustmentParam.isDexterityCorrect_byThunder,
            [Attr.intelligence]: adjustmentParam.isMagicCorrect_byThunder,
            [Attr.faith]:        adjustmentParam.isFaithCorrect_byThunder,
            [Attr.arcane]:       adjustmentParam.isLuckCorrect_byThunder,
        },
        [Dmg.holy]: {
            [Attr.strength]:     adjustmentParam.isStrengthCorrect_byDark,
            [Attr.dexterity]:    adjustmentParam.isDexterityCorrect_byDark,
            [Attr.intelligence]: adjustmentParam.isMagicCorrect_byDark,
            [Attr.faith]:        adjustmentParam.isFaithCorrect_byDark,
            [Attr.arcane]:       adjustmentParam.isLuckCorrect_byDark,
        },
    }
}
