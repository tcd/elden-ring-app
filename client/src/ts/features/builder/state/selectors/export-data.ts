import { RootState } from "@app/state"
import {
    BuildData,
    AttributeNames,
} from "@app/types"

import { ArmorSelectors     as Armor     } from "@app/features/armor"
import { TalismansSelectors as Talismans } from "@app/features/talismans"
import { WeaponsSelectors   as Weapons   } from "@app/features/weapons"

import * as StartingClass from "./starting-class"
import * as Level from "./level"

export const selectExportData = (rootState: RootState): BuildData => {
    return {
        startingClassName: StartingClass.selectStartingClassName(rootState),
        armorNames:        Armor.slots(rootState),
        talismanNames:     Talismans.slots(rootState),
        weaponNames:       Weapons.slots(rootState),
        attributes: {
            [AttributeNames.vigor]:        Level.selectAddedVigor(rootState),
            [AttributeNames.mind]:         Level.selectAddedMind(rootState),
            [AttributeNames.endurance]:    Level.selectAddedEndurance(rootState),
            [AttributeNames.strength]:     Level.selectAddedStrength(rootState),
            [AttributeNames.dexterity]:    Level.selectAddedDexterity(rootState),
            [AttributeNames.intelligence]: Level.selectAddedIntelligence(rootState),
            [AttributeNames.faith]:        Level.selectAddedFaith(rootState),
            [AttributeNames.arcane]:       Level.selectAddedArcane(rootState),
        },
    }
}
