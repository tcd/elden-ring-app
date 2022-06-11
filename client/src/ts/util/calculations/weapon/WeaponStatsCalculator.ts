import {
    multiply,
} from "@app/util"

import {
    CalculatedWeaponStats,
    Weapon,
    SlimWeaponStatData,
    AttackElementCorrectParam,
    Attributes,
} from "@app/types"

import {
    Attr,
    Dmg,
    AttrValue,
    DmgValue,
    AttrMap,
    DmgAttrMap,
    calcCorrect,
    damageTypeScalesOnAttribute,
    damageTypeAttributeRequirementMet,
    DmgMap,
    newDmgAttrMap,
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

    private attr_requirementsMet: AttrMap<boolean>
    private dmg_requirementsMet: DmgMap<boolean>
    private dmg_scalesOn_attr: DmgAttrMap<boolean>
    private dmg_attr_requirementMet: DmgAttrMap<boolean>
    private dmg_attr_calcCorrect: DmgAttrMap<Decimal>
    private dmg_attr_damage: DmgAttrMap<Decimal>

    public stats: CalculatedWeaponStats

    constructor(options: WeaponStatsCalculatorOptions) {
        this.stats = {
            // TODO: these aren't valid if requirements aren't met.
            attack: {
                base: {
                    physical:  this.slimData.attack.physical,
                    magic:     this.slimData.attack.magic,
                    fire:      this.slimData.attack.fire,
                    lightning: this.slimData.attack.lightning,
                    holy:      this.slimData.attack.holy,
                },
                scaled: {},
                total: {},
            },
            defense: {},
            scaling: {},
        } as CalculatedWeaponStats

        this.weapon           = options.weapon
        this.slimData         = options.slimData
        this.adjustmentParams = options.adjustmentParams
        this.attributes       = options.attributes

        this.dmg_attr_damage      = newDmgAttrMap<Decimal>()
        this.dmg_attr_calcCorrect = newDmgAttrMap<Decimal>()

        this.dmg_requirementsMet = {
            physical:  false,
            magic:     false,
            fire:      false,
            lightning: false,
            holy:      false,
        }

        this.attr_requirementsMet = {
            strength:     this.attributes.strength     >= this.weapon.required_strength,
            dexterity:    this.attributes.dexterity    >= this.weapon.required_dexterity,
            intelligence: this.attributes.intelligence >= this.weapon.required_intelligence,
            faith:        this.attributes.faith        >= this.weapon.required_faith,
            arcane:       this.attributes.arcane       >= this.weapon.required_arcane,
        }
    }

    public calculate(): void {
        this.set_dmg_scalesOn_attr()
        this.set_dmg_attr_requirementMet()
        this.set_dmg_attr_calcCorrect()
        this.set_dmg_requirementsMet()
        this.set_dmg_attr_damage()
        return null
    }

    private set_dmg_scalesOn_attr(): void {
        this.dmg_scalesOn_attr = damageTypeScalesOnAttribute(this.adjustmentParams)
    }

    private set_dmg_attr_requirementMet(): void {
        this.dmg_attr_requirementMet = damageTypeAttributeRequirementMet(this.attr_requirementsMet, this.dmg_scalesOn_attr)
    }

    private set_dmg_attr_calcCorrect(): void {
        // this.dmg_attr_calcCorrect = newDmgAttrMap<Decimal>()
        for (const dmg in Object.values(Dmg)) {
            for (const attr in Object.values(Attr)) {
                if (!this.dmg_scalesOn_attr[dmg][attr]) {
                    this.dmg_attr_calcCorrect[dmg][attr] = 0
                }
                const level         = this.attributes[attr]
                const calcCorrectId = this.slimData.calc_correct[dmg]
                this.dmg_attr_calcCorrect[dmg][attr] = calcCorrect(level, calcCorrectId)
            }
        }
    }

    private set_dmg_requirementsMet(): void {
        for (const [key, value] of Object.entries(this.dmg_attr_requirementMet)) {
            this.dmg_requirementsMet[key] = Object.values(value).every(x => x == true)
        }
    }

    private set_dmg_attr_damage(): void {
        // this.dmg_attr_damage = newDmgAttrMap<Decimal>()
        for (const dmg in Object.values(Dmg)) {
            for (const attr in Object.values(Attr)) {
                const calcCorrect = this.dmg_attr_calcCorrect?.[dmg]?.[attr] ?? 0
                if (calcCorrect > 0) {
                    const base = this.slimData.attack[dmg]
                    const scaling = this.slimData.scaling[dmg]
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
}

class InitialWeaponStatsCalculatorPropertyValues {

    public static dmg_requirementsMet(): DmgMap<boolean> {
        return {
            physical:  false,
            magic:     false,
            fire:      false,
            lightning: false,
            holy:      false,
        }
    }

    public static dmg_attr_damage(): DmgAttrMap<Decimal> {
        return {
            [Dmg.physical]: {
                [Attr.strength]:     0,
                [Attr.dexterity]:    0,
                [Attr.intelligence]: 0,
                [Attr.faith]:        0,
                [Attr.arcane]:       0,
            },
            [Dmg.magic]: {
                [Attr.strength]:     0,
                [Attr.dexterity]:    0,
                [Attr.intelligence]: 0,
                [Attr.faith]:        0,
                [Attr.arcane]:       0,
            },
            [Dmg.fire]: {
                [Attr.strength]:     0,
                [Attr.dexterity]:    0,
                [Attr.intelligence]: 0,
                [Attr.faith]:        0,
                [Attr.arcane]:       0,
            },
            [Dmg.lightning]: {
                [Attr.strength]:     0,
                [Attr.dexterity]:    0,
                [Attr.intelligence]: 0,
                [Attr.faith]:        0,
                [Attr.arcane]:       0,
            },
            [Dmg.holy]: {
                [Attr.strength]:     0,
                [Attr.dexterity]:    0,
                [Attr.intelligence]: 0,
                [Attr.faith]:        0,
                [Attr.arcane]:       0,
            },
        }
    }

    public static dmg_attr_calcCorrect(): DmgAttrMap<Decimal> {
        return {
            [Dmg.physical]: {
                [Attr.strength]:     0,
                [Attr.dexterity]:    0,
                [Attr.intelligence]: 0,
                [Attr.faith]:        0,
                [Attr.arcane]:       0,
            },
            [Dmg.magic]: {
                [Attr.strength]:     0,
                [Attr.dexterity]:    0,
                [Attr.intelligence]: 0,
                [Attr.faith]:        0,
                [Attr.arcane]:       0,
            },
            [Dmg.fire]: {
                [Attr.strength]:     0,
                [Attr.dexterity]:    0,
                [Attr.intelligence]: 0,
                [Attr.faith]:        0,
                [Attr.arcane]:       0,
            },
            [Dmg.lightning]: {
                [Attr.strength]:     0,
                [Attr.dexterity]:    0,
                [Attr.intelligence]: 0,
                [Attr.faith]:        0,
                [Attr.arcane]:       0,
            },
            [Dmg.holy]: {
                [Attr.strength]:     0,
                [Attr.dexterity]:    0,
                [Attr.intelligence]: 0,
                [Attr.faith]:        0,
                [Attr.arcane]:       0,
            },
        }
    }
}
