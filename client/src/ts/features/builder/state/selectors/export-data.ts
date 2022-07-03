import { RootState } from "@app/state"
import {
    BuildData,
    AttributeName,
} from "@app/types"

import { ArmorSelectors     as Armor     } from "@app/features/armor"
import { TalismansSelectors as Talismans } from "@app/features/talismans"
import { WeaponsSelectors   as Weapons   } from "@app/features/weapons"

import * as StartingClass from "./starting-class"
import * as Attributes from "./attributes"

export const selectExportData = (state: RootState): BuildData => {
    return {
        startingClassName: StartingClass.selectStartingClassName(state),
        armorNames:        Armor.slots(state),
        talismanNames:     Talismans.slots(state),
        weaponNames:       Weapons.slots(state),
        attributes: {
            [AttributeName.vigor]:        Attributes.selectVigor(state),
            [AttributeName.mind]:         Attributes.selectMind(state),
            [AttributeName.endurance]:    Attributes.selectEndurance(state),
            [AttributeName.strength]:     Attributes.selectStrength(state),
            [AttributeName.dexterity]:    Attributes.selectDexterity(state),
            [AttributeName.intelligence]: Attributes.selectIntelligence(state),
            [AttributeName.faith]:        Attributes.selectFaith(state),
            [AttributeName.arcane]:       Attributes.selectArcane(state),
        },
    }
}
