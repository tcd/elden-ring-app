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

    /** *Attr* requirements met */
    private attr_requirementsMet: AttrMap<boolean>
    /** *Damage Type* requirements met */
    private dmg_requirementsMet: DmgMap<boolean>
    /** *Damage Type* scales on *Attribute* */
    private dmg_scalesOn_attr: DmgAttrMap<boolean>
    /** *Damage Type* *Attribute* requirement met */
    private dmg_attr_requirementMet: DmgAttrMap<boolean>
    /** *Damage Type* *Attribute* *CalcCorrect* */
    private dmg_attr_calcCorrect: DmgAttrMap<Decimal>

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

        this.attr_requirementsMet = {
            strength:     this.attributes.strength     >= this.weapon.required_strength,
            dexterity:    this.attributes.dexterity    >= this.weapon.required_dexterity,
            intelligence: this.attributes.intelligence >= this.weapon.required_intelligence,
            faith:        this.attributes.faith        >= this.weapon.required_faith,
            arcane:       this.attributes.arcane       >= this.weapon.required_arcane,
        }
    }

    public calculate(): void {
        this.dmg_scalesOn_attr       = damageTypeScalesOnAttribute(this.adjustmentParams)
        this.dmg_attr_requirementMet = damageTypeAttributeRequirementMet(this.attr_requirementsMet, this.dmg_scalesOn_attr)
        this.calculateCalcCorrect()
        return null
    }

    private areDmgRequirementsMet(dmg: DmgValue): boolean {
        return Object.values(this.dmg_attr_requirementMet[dmg]).every(x => x == true)
    }

    private calcCorrect = (dmg: DmgValue, attr: AttrValue): Decimal => {
        if (!this.dmg_scalesOn_attr[dmg][attr]) {
            return 0
        }

        const level         = this.attributes[attr]
        const calcCorrectId = this.slimData.calc_correct[dmg]

        return calcCorrect(level, calcCorrectId)
    }

    private calculateCalcCorrect(): void {
        this.dmg_attr_calcCorrect = newDmgAttrMap<Decimal>()
        for (const dmg in Object.values(Dmg)) {
            for (const attr in Object.values(Attr)) {
                this.dmg_attr_calcCorrect[dmg][attr] = this.calcCorrect(dmg as Dmg, attr as Attr)
            }
        }
        return null
        // this.dmg_attr_calcCorrect = {
        //     [Dmg.physical]: {
        //         [Attr.strength]:     this.calcCorrect(Dmg.physical, Attr.strength),
        //         [Attr.dexterity]:    this.calcCorrect(Dmg.physical, Attr.dexterity),
        //         [Attr.intelligence]: this.calcCorrect(Dmg.physical, Attr.intelligence),
        //         [Attr.faith]:        this.calcCorrect(Dmg.physical, Attr.faith),
        //         [Attr.arcane]:       this.calcCorrect(Dmg.physical, Attr.arcane),
        //     },
        //     [Dmg.magic]: {
        //         [Attr.strength]:     null,
        //         [Attr.dexterity]:    null,
        //         [Attr.intelligence]: null,
        //         [Attr.faith]:        null,
        //         [Attr.arcane]:       null,
        //     },
        //     [Dmg.fire]: {
        //         [Attr.strength]:     null,
        //         [Attr.dexterity]:    null,
        //         [Attr.intelligence]: null,
        //         [Attr.faith]:        null,
        //         [Attr.arcane]:       null,
        //     },
        //     [Dmg.lightning]: {
        //         [Attr.strength]:     null,
        //         [Attr.dexterity]:    null,
        //         [Attr.intelligence]: null,
        //         [Attr.faith]:        null,
        //         [Attr.arcane]:       null,
        //     },
        //     [Dmg.holy]: {
        //         [Attr.strength]:     null,
        //         [Attr.dexterity]:    null,
        //         [Attr.intelligence]: null,
        //         [Attr.faith]:        null,
        //         [Attr.arcane]:       null,
        //     },
        // }
    }
}
