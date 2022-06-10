import {
    Attr,
    Dmg,
    AttrMap,
    DmgAttrMap,
    Dmg_ScalesOn_Attr,
} from "."

// {dmg} {stat} Requirement Met?
export type Dmg_Attr_RequirementMet = DmgAttrMap<boolean>

export const damageTypeAttributeRequirementMet = (attributeMet: AttrMap<boolean>, scales: Dmg_ScalesOn_Attr): Dmg_Attr_RequirementMet => {
    return {
        [Dmg.physical]: {
            [Attr.strength]:     scales.physical.strength      && attributeMet.strength,
            [Attr.dexterity]:    scales.physical.dexterity     && attributeMet.dexterity,
            [Attr.intelligence]: scales.physical.intelligence  && attributeMet.intelligence,
            [Attr.faith]:        scales.physical.faith         && attributeMet.faith,
            [Attr.arcane]:       scales.physical.arcane        && attributeMet.arcane,
        },
        [Dmg.magic]: {
            [Attr.strength]:     scales.magic.strength         && attributeMet.strength,
            [Attr.dexterity]:    scales.magic.dexterity        && attributeMet.dexterity,
            [Attr.intelligence]: scales.magic.intelligence     && attributeMet.intelligence,
            [Attr.faith]:        scales.magic.faith            && attributeMet.faith,
            [Attr.arcane]:       scales.magic.arcane           && attributeMet.arcane,
        },
        [Dmg.fire]: {
            [Attr.strength]:     scales.lightning.strength     && attributeMet.strength,
            [Attr.dexterity]:    scales.lightning.dexterity    && attributeMet.dexterity,
            [Attr.intelligence]: scales.lightning.intelligence && attributeMet.intelligence,
            [Attr.faith]:        scales.lightning.faith        && attributeMet.faith,
            [Attr.arcane]:       scales.lightning.arcane       && attributeMet.arcane,
        },
        [Dmg.lightning]: {
            [Attr.strength]:     scales.holy.strength          && attributeMet.strength,
            [Attr.dexterity]:    scales.holy.dexterity         && attributeMet.dexterity,
            [Attr.intelligence]: scales.holy.intelligence      && attributeMet.intelligence,
            [Attr.faith]:        scales.holy.faith             && attributeMet.faith,
            [Attr.arcane]:       scales.holy.arcane            && attributeMet.arcane,
        },
        [Dmg.holy]: {
            [Attr.strength]:     scales.fire.strength          && attributeMet.strength,
            [Attr.dexterity]:    scales.fire.dexterity         && attributeMet.dexterity,
            [Attr.intelligence]: scales.fire.intelligence      && attributeMet.intelligence,
            [Attr.faith]:        scales.fire.faith             && attributeMet.faith,
            [Attr.arcane]:       scales.fire.arcane            && attributeMet.arcane,
        },
    }
}
