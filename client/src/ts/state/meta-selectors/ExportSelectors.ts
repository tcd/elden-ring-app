import { RootState } from "@app/state"
import { BuildData } from "@app/types"
import {
    ArmorSelectors         as Armor,
    TalismansSelectors     as Talismans,
    WeaponsSelectors       as Weapons,
    StartingClassSelectors as StartingClass,
    LevelUpSelectors       as LevelUp,
} from "@app/features"

export const selectBuildData = (rootState: RootState): BuildData => {
    return {
        startingClassName: StartingClass.startingClassName(rootState),
        armorNames:        Armor.slots(rootState),
        talismanNames:     Talismans.slots(rootState),
        weaponNames:       Weapons.slots(rootState),
        attributes:        LevelUp.allAddedAttributes(rootState),
    }
}

export const ExportSelectors = {
    build: selectBuildData,
}
