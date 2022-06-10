import {
    AttackElementCorrectParam,
} from "@app/types"

// =============================================================================
// {dmg} Scales on {stat}?
// =============================================================================

export interface DamageType__ScalesOn__Attribute {
    PhysicalScalesOnStrength: boolean
    PhysicalScalesOnDexterity: boolean
    PhysicalScalesOnIntelligence: boolean
    PhysicalScalesOnFaith: boolean
    PhysicalScalesOnArcane: boolean
    MagicScalesOnStrength: boolean
    MagicScalesOnDexterity: boolean
    MagicScalesOnIntelligence: boolean
    MagicScalesOnFaith: boolean
    MagicScalesOnArcane: boolean
    FireScalesOnStrength: boolean
    FireScalesOnDexterity: boolean
    FireScalesOnIntelligence: boolean
    FireScalesOnFaith: boolean
    FireScalesOnArcane: boolean
    LightningScalesOnStrength: boolean
    LightningScalesOnDexterity: boolean
    LightningScalesOnIntelligence: boolean
    LightningScalesOnFaith: boolean
    LightningScalesOnArcane: boolean
    HolyScalesOnStrength: boolean
    HolyScalesOnDexterity: boolean
    HolyScalesOnIntelligence: boolean
    HolyScalesOnFaith: boolean
    HolyScalesOnArcane: boolean
}

export const damageTypeScalesOnAttribute = (adjustmentParam: AttackElementCorrectParam): DamageType__ScalesOn__Attribute => {
    return {
        PhysicalScalesOnStrength:      adjustmentParam.isStrengthCorrect_byPhysics,
        PhysicalScalesOnDexterity:     adjustmentParam.isDexterityCorrect_byPhysics,
        PhysicalScalesOnIntelligence:  adjustmentParam.isMagicCorrect_byPhysics,
        PhysicalScalesOnFaith:         adjustmentParam.isFaithCorrect_byPhysics,
        PhysicalScalesOnArcane:        adjustmentParam.isLuckCorrect_byPhysics,
        MagicScalesOnStrength:         adjustmentParam.isStrengthCorrect_byMagic,
        MagicScalesOnDexterity:        adjustmentParam.isDexterityCorrect_byMagic,
        MagicScalesOnIntelligence:     adjustmentParam.isMagicCorrect_byMagic,
        MagicScalesOnFaith:            adjustmentParam.isFaithCorrect_byMagic,
        MagicScalesOnArcane:           adjustmentParam.isLuckCorrect_byMagic,
        FireScalesOnStrength:          adjustmentParam.isStrengthCorrect_byFire,
        FireScalesOnDexterity:         adjustmentParam.isDexterityCorrect_byFire,
        FireScalesOnIntelligence:      adjustmentParam.isMagicCorrect_byFire,
        FireScalesOnFaith:             adjustmentParam.isFaithCorrect_byFire,
        FireScalesOnArcane:            adjustmentParam.isLuckCorrect_byFire,
        LightningScalesOnStrength:     adjustmentParam.isStrengthCorrect_byThunder,
        LightningScalesOnDexterity:    adjustmentParam.isDexterityCorrect_byThunder,
        LightningScalesOnIntelligence: adjustmentParam.isMagicCorrect_byThunder,
        LightningScalesOnFaith:        adjustmentParam.isFaithCorrect_byThunder,
        LightningScalesOnArcane:       adjustmentParam.isLuckCorrect_byThunder,
        HolyScalesOnStrength:          adjustmentParam.isStrengthCorrect_byDark,
        HolyScalesOnDexterity:         adjustmentParam.isDexterityCorrect_byDark,
        HolyScalesOnIntelligence:      adjustmentParam.isMagicCorrect_byDark,
        HolyScalesOnFaith:             adjustmentParam.isFaithCorrect_byDark,
        HolyScalesOnArcane:            adjustmentParam.isLuckCorrect_byDark,
    }
}
