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

export const selectExportData = (rootState: RootState): BuildData => {
    return {
        startingClassName: StartingClass.selectStartingClassName(rootState),
        armorNames:        Armor.slots(rootState),
        talismanNames:     Talismans.slots(rootState),
        weaponNames:       Weapons.slots(rootState),
        attributes: {
            [AttributeName.vigor]:        Attributes.selectVigor(rootState),
            [AttributeName.mind]:         Attributes.selectMind(rootState),
            [AttributeName.endurance]:    Attributes.selectEndurance(rootState),
            [AttributeName.strength]:     Attributes.selectStrength(rootState),
            [AttributeName.dexterity]:    Attributes.selectDexterity(rootState),
            [AttributeName.intelligence]: Attributes.selectIntelligence(rootState),
            [AttributeName.faith]:        Attributes.selectFaith(rootState),
            [AttributeName.arcane]:       Attributes.selectArcane(rootState),
        },
    }
}
