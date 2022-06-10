import {
    AttributeChecklist,
    DamageType__ScalesOn__Attribute,
} from "."

// =============================================================================
// {dmg} {stat} Requirement Met?
// =============================================================================

export interface DamageType__Attribute__RequirementMet {
    Physical__Strength:      boolean
    Physical__Dexterity:     boolean
    Physical__Intelligence:  boolean
    Physical__Faith:         boolean
    Physical__Arcane:        boolean
    Magic__Strength:         boolean
    Magic__Dexterity:        boolean
    Magic__Intelligence:     boolean
    Magic__Faith:            boolean
    Magic__Arcane:           boolean
    Fire__Strength:          boolean
    Fire__Dexterity:         boolean
    Fire__Intelligence:      boolean
    Fire__Faith:             boolean
    Fire__Arcane:            boolean
    Lightning__Strength:     boolean
    Lightning__Dexterity:    boolean
    Lightning__Intelligence: boolean
    Lightning__Faith:        boolean
    Lightning__Arcane:       boolean
    Holy__Strength:          boolean
    Holy__Dexterity:         boolean
    Holy__Intelligence:      boolean
    Holy__Faith:             boolean
    Holy__Arcane:            boolean
}

export const damageTypeAttributeRequirementMet = (attributeMet: AttributeChecklist, dmgScalesOnAttr: DamageType__ScalesOn__Attribute): DamageType__Attribute__RequirementMet => {
    return {
        Physical__Strength:      dmgScalesOnAttr.PhysicalScalesOnStrength      && attributeMet.strength,
        Physical__Dexterity:     dmgScalesOnAttr.PhysicalScalesOnDexterity     && attributeMet.dexterity,
        Physical__Intelligence:  dmgScalesOnAttr.PhysicalScalesOnIntelligence  && attributeMet.intelligence,
        Physical__Faith:         dmgScalesOnAttr.PhysicalScalesOnFaith         && attributeMet.faith,
        Physical__Arcane:        dmgScalesOnAttr.PhysicalScalesOnArcane        && attributeMet.arcane,
        Magic__Strength:         dmgScalesOnAttr.MagicScalesOnStrength         && attributeMet.strength,
        Magic__Dexterity:        dmgScalesOnAttr.MagicScalesOnDexterity        && attributeMet.dexterity,
        Magic__Intelligence:     dmgScalesOnAttr.MagicScalesOnIntelligence     && attributeMet.intelligence,
        Magic__Faith:            dmgScalesOnAttr.MagicScalesOnFaith            && attributeMet.faith,
        Magic__Arcane:           dmgScalesOnAttr.MagicScalesOnArcane           && attributeMet.arcane,
        Lightning__Strength:     dmgScalesOnAttr.LightningScalesOnStrength     && attributeMet.strength,
        Lightning__Dexterity:    dmgScalesOnAttr.LightningScalesOnDexterity    && attributeMet.dexterity,
        Lightning__Intelligence: dmgScalesOnAttr.LightningScalesOnIntelligence && attributeMet.intelligence,
        Lightning__Faith:        dmgScalesOnAttr.LightningScalesOnFaith        && attributeMet.faith,
        Lightning__Arcane:       dmgScalesOnAttr.LightningScalesOnArcane       && attributeMet.arcane,
        Holy__Strength:          dmgScalesOnAttr.HolyScalesOnStrength          && attributeMet.strength,
        Holy__Dexterity:         dmgScalesOnAttr.HolyScalesOnDexterity         && attributeMet.dexterity,
        Holy__Intelligence:      dmgScalesOnAttr.HolyScalesOnIntelligence      && attributeMet.intelligence,
        Holy__Faith:             dmgScalesOnAttr.HolyScalesOnFaith             && attributeMet.faith,
        Holy__Arcane:            dmgScalesOnAttr.HolyScalesOnArcane            && attributeMet.arcane,
        Fire__Strength:          dmgScalesOnAttr.FireScalesOnStrength          && attributeMet.strength,
        Fire__Dexterity:         dmgScalesOnAttr.FireScalesOnDexterity         && attributeMet.dexterity,
        Fire__Intelligence:      dmgScalesOnAttr.FireScalesOnIntelligence      && attributeMet.intelligence,
        Fire__Faith:             dmgScalesOnAttr.FireScalesOnFaith             && attributeMet.faith,
        Fire__Arcane:            dmgScalesOnAttr.FireScalesOnArcane            && attributeMet.arcane,
    }
}
