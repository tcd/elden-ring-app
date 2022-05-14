import { RootState } from "@app/state"
import {
    BuildData,
    ArmorType,
    AttributeName,
} from "@app/types"

import * as Weapons from "./weapons"
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
            R1: Weapons.selectRightWeapon1Name(state),
            R2: Weapons.selectRightWeapon2Name(state),
            R3: Weapons.selectRightWeapon3Name(state),
            L1: Weapons.selectLeftWeapon1Name(state),
            L2: Weapons.selectLeftWeapon2Name(state),
            L3: Weapons.selectLeftWeapon3Name(state),
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
