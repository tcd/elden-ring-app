import {
    Attr,
    Dmg,
    AttrMap,
    DmgAttrMap,
} from "."

export const damageTypeAttributeRequirementMet = (attrMet: AttrMap<boolean>, scalesOn: DmgAttrMap<boolean>): DmgAttrMap<boolean> => {
    return {
        [Dmg.physical]: {
            [Attr.strength]:     scalesOn.physical.strength      && attrMet.strength,
            [Attr.dexterity]:    scalesOn.physical.dexterity     && attrMet.dexterity,
            [Attr.intelligence]: scalesOn.physical.intelligence  && attrMet.intelligence,
            [Attr.faith]:        scalesOn.physical.faith         && attrMet.faith,
            [Attr.arcane]:       scalesOn.physical.arcane        && attrMet.arcane,
        },
        [Dmg.magic]: {
            [Attr.strength]:     scalesOn.magic.strength         && attrMet.strength,
            [Attr.dexterity]:    scalesOn.magic.dexterity        && attrMet.dexterity,
            [Attr.intelligence]: scalesOn.magic.intelligence     && attrMet.intelligence,
            [Attr.faith]:        scalesOn.magic.faith            && attrMet.faith,
            [Attr.arcane]:       scalesOn.magic.arcane           && attrMet.arcane,
        },
        [Dmg.fire]: {
            [Attr.strength]:     scalesOn.lightning.strength     && attrMet.strength,
            [Attr.dexterity]:    scalesOn.lightning.dexterity    && attrMet.dexterity,
            [Attr.intelligence]: scalesOn.lightning.intelligence && attrMet.intelligence,
            [Attr.faith]:        scalesOn.lightning.faith        && attrMet.faith,
            [Attr.arcane]:       scalesOn.lightning.arcane       && attrMet.arcane,
        },
        [Dmg.lightning]: {
            [Attr.strength]:     scalesOn.holy.strength          && attrMet.strength,
            [Attr.dexterity]:    scalesOn.holy.dexterity         && attrMet.dexterity,
            [Attr.intelligence]: scalesOn.holy.intelligence      && attrMet.intelligence,
            [Attr.faith]:        scalesOn.holy.faith             && attrMet.faith,
            [Attr.arcane]:       scalesOn.holy.arcane            && attrMet.arcane,
        },
        [Dmg.holy]: {
            [Attr.strength]:     scalesOn.fire.strength          && attrMet.strength,
            [Attr.dexterity]:    scalesOn.fire.dexterity         && attrMet.dexterity,
            [Attr.intelligence]: scalesOn.fire.intelligence      && attrMet.intelligence,
            [Attr.faith]:        scalesOn.fire.faith             && attrMet.faith,
            [Attr.arcane]:       scalesOn.fire.arcane            && attrMet.arcane,
        },
    }
}
