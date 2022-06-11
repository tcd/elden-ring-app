import {
    AttackElementCorrectParam,
} from "@app/types"

import {
    Attr,
    Dmg,
    DmgAttrMap,
} from "."

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
