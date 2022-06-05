import { RootState } from "@app/state"
import {
    BuildData,
    ArmorType,
    AttributeName,
} from "@app/types"

import { WeaponsSelectors as Weapons } from "@app/features/weapons"
import * as Talismans from "./talismans"
import * as Armor from "./armor"
import * as StartingClass from "./starting-class"
import * as Attributes from "./attributes"

export const selectExportData = (state: RootState): BuildData => {
    return {
        startingClassName: StartingClass.selectStartingClassName(state),
        armor_names: {
            [ArmorType.Head]: Armor.selectHeadName(state),
            [ArmorType.Chest]: Armor.selectChestName(state),
            [ArmorType.Arms]: Armor.selectArmsName(state),
            [ArmorType.Legs]: Armor.selectLegsName(state),
        },
        talisman_names: {
            "1": Talismans.selectTalisman1Name(state),
            "2": Talismans.selectTalisman2Name(state),
            "3": Talismans.selectTalisman3Name(state),
            "4": Talismans.selectTalisman4Name(state),
        },
        weapon_names: {
            R1: Weapons.bySlot.R1(state).name,
            R2: Weapons.bySlot.R2(state).name,
            R3: Weapons.bySlot.R3(state).name,
            L1: Weapons.bySlot.L1(state).name,
            L2: Weapons.bySlot.L2(state).name,
            L3: Weapons.bySlot.L3(state).name,
        },
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
