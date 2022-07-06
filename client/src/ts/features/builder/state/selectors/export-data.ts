import { RootState } from "@app/state"
import {
    BuildData,
    AttributeNames,
} from "@app/types"

import { ArmorSelectors     as Armor     } from "@app/features/armor"
import { TalismansSelectors as Talismans } from "@app/features/talismans"
import { WeaponsSelectors   as Weapons   } from "@app/features/weapons"

import * as StartingClass from "./starting-class"
import * as Attributes from "./attributes"

export const selectExportData = (rootState: RootState): BuildData => {
    return {
        startingClassName: StartingClass.selectStartingClassName(rootState),
        armorNames:        Armor.slots(rootState),
        talismanNames:     Talismans.slots(rootState),
        weaponNames:       Weapons.slots(rootState),
        attributes: {
            [AttributeNames.vigor]:        Attributes.selectVigor(rootState),
            [AttributeNames.mind]:         Attributes.selectMind(rootState),
            [AttributeNames.endurance]:    Attributes.selectEndurance(rootState),
            [AttributeNames.strength]:     Attributes.selectStrength(rootState),
            [AttributeNames.dexterity]:    Attributes.selectDexterity(rootState),
            [AttributeNames.intelligence]: Attributes.selectIntelligence(rootState),
            [AttributeNames.faith]:        Attributes.selectFaith(rootState),
            [AttributeNames.arcane]:       Attributes.selectArcane(rootState),
        },
    }
}
