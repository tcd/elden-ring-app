import {
    CalculatedWeaponStats,
    Weapon,
    SlimWeaponStatData,
    AttackElementCorrectParam,
    Attributes,
} from "@app/types"

export interface WeaponStatsCalculatorOptions {
    weapon: Weapon
    slimData: SlimWeaponStatData
    adjustmentParams: AttackElementCorrectParam
    attributes: Attributes
}

export class WeaponStatsCalculator {

    private weapon: Weapon
    private slimData: SlimWeaponStatData
    private adjustmentParams: AttackElementCorrectParam
    private attributes: Attributes

    private attributeRequirementsMet: AttributeRequirementsMet

    public stats: CalculatedWeaponStats

    constructor(options: WeaponStatsCalculatorOptions) {
        this.stats = {} as CalculatedWeaponStats

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

// =============================================================================
// Requirements
// =============================================================================

export interface AttributeRequirementsMet {
    strength:     boolean
    dexterity:    boolean
    intelligence: boolean
    faith:        boolean
    arcane:       boolean
}

// =============================================================================
// {dmg} Scales on {stat}?
// =============================================================================

export interface DamageType__ScalesOn__Attribute {
    FireScalesOnArcane: boolean
    FireScalesOnDexterity: boolean
    FireScalesOnFaith: boolean
    FireScalesOnIntelligence: boolean
    FireScalesOnStrength: boolean
    HolyScalesOnArcane: boolean
    HolyScalesOnDexterity: boolean
    HolyScalesOnFaith: boolean
    HolyScalesOnIntelligence: boolean
    HolyScalesOnStrength: boolean
    LightningScalesOnArcane: boolean
    LightningScalesOnDexterity: boolean
    LightningScalesOnFaith: boolean
    LightningScalesOnIntelligence: boolean
    LightningScalesOnStrength: boolean
    MagicScalesOnArcane: boolean
    MagicScalesOnDexterity: boolean
    MagicScalesOnFaith: boolean
    MagicScalesOnIntelligence: boolean
    MagicScalesOnStrength: boolean
    PhysicalScalesOnArcane: boolean
    PhysicalScalesOnDexterity: boolean
    PhysicalScalesOnFaith: boolean
    PhysicalScalesOnIntelligence: boolean
    PhysicalScalesOnStrength: boolean
}

const whatScalesWithWhat = (adjustmentParam: AttackElementCorrectParam): DamageType__ScalesOn__Attribute => {
    return {
        FireScalesOnArcane:            adjustmentParam.isLuckCorrect_byFire,
        FireScalesOnDexterity:         adjustmentParam.isDexterityCorrect_byFire,
        FireScalesOnFaith:             adjustmentParam.isFaithCorrect_byFire,
        FireScalesOnIntelligence:      adjustmentParam.isMagicCorrect_byFire,
        FireScalesOnStrength:          adjustmentParam.isStrengthCorrect_byFire,
        HolyScalesOnArcane:            adjustmentParam.isLuckCorrect_byDark,
        HolyScalesOnDexterity:         adjustmentParam.isDexterityCorrect_byDark,
        HolyScalesOnFaith:             adjustmentParam.isFaithCorrect_byDark,
        HolyScalesOnIntelligence:      adjustmentParam.isMagicCorrect_byDark,
        HolyScalesOnStrength:          adjustmentParam.isStrengthCorrect_byDark,
        LightningScalesOnArcane:       adjustmentParam.isLuckCorrect_byThunder,
        LightningScalesOnDexterity:    adjustmentParam.isDexterityCorrect_byThunder,
        LightningScalesOnFaith:        adjustmentParam.isFaithCorrect_byThunder,
        LightningScalesOnIntelligence: adjustmentParam.isMagicCorrect_byThunder,
        LightningScalesOnStrength:     adjustmentParam.isStrengthCorrect_byThunder,
        MagicScalesOnArcane:           adjustmentParam.isLuckCorrect_byMagic,
        MagicScalesOnDexterity:        adjustmentParam.isDexterityCorrect_byMagic,
        MagicScalesOnFaith:            adjustmentParam.isFaithCorrect_byMagic,
        MagicScalesOnIntelligence:     adjustmentParam.isMagicCorrect_byMagic,
        MagicScalesOnStrength:         adjustmentParam.isStrengthCorrect_byMagic,
        PhysicalScalesOnArcane:        adjustmentParam.isLuckCorrect_byPhysics,
        PhysicalScalesOnDexterity:     adjustmentParam.isDexterityCorrect_byPhysics,
        PhysicalScalesOnFaith:         adjustmentParam.isFaithCorrect_byPhysics,
        PhysicalScalesOnIntelligence:  adjustmentParam.isMagicCorrect_byPhysics,
        PhysicalScalesOnStrength:      adjustmentParam.isStrengthCorrect_byPhysics,
    }
}

// =============================================================================
// {dmg} {stat} Requirement Met?
// =============================================================================

export interface DamageType__Attribute__RequirementMet {
    Fire__Arcane:            boolean
    Fire__Dexterity:         boolean
    Fire__Faith:             boolean
    Fire__Intelligence:      boolean
    Fire__Strength:          boolean
    Holy__Arcane:            boolean
    Holy__Dexterity:         boolean
    Holy__Faith:             boolean
    Holy__Intelligence:      boolean
    Holy__Strength:          boolean
    Lightning__Arcane:       boolean
    Lightning__Dexterity:    boolean
    Lightning__Faith:        boolean
    Lightning__Intelligence: boolean
    Lightning__Strength:     boolean
    Magic__Arcane:           boolean
    Magic__Dexterity:        boolean
    Magic__Faith:            boolean
    Magic__Intelligence:     boolean
    Magic__Strength:         boolean
    Physical__Arcane:        boolean
    Physical__Dexterity:     boolean
    Physical__Faith:         boolean
    Physical__Intelligence:  boolean
    Physical__Strength:      boolean
}

const isEverythingMet = (attributeMet: AttributeRequirementsMet, dmgScalesOnAttr: DamageType__ScalesOn__Attribute): DamageType__Attribute__RequirementMet => {
    return {
        Fire__Arcane:            dmgScalesOnAttr.FireScalesOnArcane            && attributeMet.arcane,
        Fire__Dexterity:         dmgScalesOnAttr.FireScalesOnDexterity         && attributeMet.dexterity,
        Fire__Faith:             dmgScalesOnAttr.FireScalesOnFaith             && attributeMet.faith,
        Fire__Intelligence:      dmgScalesOnAttr.FireScalesOnIntelligence      && attributeMet.intelligence,
        Fire__Strength:          dmgScalesOnAttr.FireScalesOnStrength          && attributeMet.strength,
        Holy__Arcane:            dmgScalesOnAttr.HolyScalesOnArcane            && attributeMet.arcane,
        Holy__Dexterity:         dmgScalesOnAttr.HolyScalesOnDexterity         && attributeMet.dexterity,
        Holy__Faith:             dmgScalesOnAttr.HolyScalesOnFaith             && attributeMet.faith,
        Holy__Intelligence:      dmgScalesOnAttr.HolyScalesOnIntelligence      && attributeMet.intelligence,
        Holy__Strength:          dmgScalesOnAttr.HolyScalesOnStrength          && attributeMet.strength,
        Lightning__Arcane:       dmgScalesOnAttr.LightningScalesOnArcane       && attributeMet.arcane,
        Lightning__Dexterity:    dmgScalesOnAttr.LightningScalesOnDexterity    && attributeMet.dexterity,
        Lightning__Faith:        dmgScalesOnAttr.LightningScalesOnFaith        && attributeMet.faith,
        Lightning__Intelligence: dmgScalesOnAttr.LightningScalesOnIntelligence && attributeMet.intelligence,
        Lightning__Strength:     dmgScalesOnAttr.LightningScalesOnStrength     && attributeMet.strength,
        Magic__Arcane:           dmgScalesOnAttr.MagicScalesOnArcane           && attributeMet.arcane,
        Magic__Dexterity:        dmgScalesOnAttr.MagicScalesOnDexterity        && attributeMet.dexterity,
        Magic__Faith:            dmgScalesOnAttr.MagicScalesOnFaith            && attributeMet.faith,
        Magic__Intelligence:     dmgScalesOnAttr.MagicScalesOnIntelligence     && attributeMet.intelligence,
        Magic__Strength:         dmgScalesOnAttr.MagicScalesOnStrength         && attributeMet.strength,
        Physical__Arcane:        dmgScalesOnAttr.PhysicalScalesOnArcane        && attributeMet.arcane,
        Physical__Dexterity:     dmgScalesOnAttr.PhysicalScalesOnDexterity     && attributeMet.dexterity,
        Physical__Faith:         dmgScalesOnAttr.PhysicalScalesOnFaith         && attributeMet.faith,
        Physical__Intelligence:  dmgScalesOnAttr.PhysicalScalesOnIntelligence  && attributeMet.intelligence,
        Physical__Strength:      dmgScalesOnAttr.PhysicalScalesOnStrength      && attributeMet.strength,
    }
}

// =============================================================================
//
// =============================================================================
