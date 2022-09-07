import type { RootState } from "@app/state"
import type { BuildData } from "@app/types"
import {
    ArmorSelectors,
    TalismansSelectors,
    WeaponsSelectors,
    StartingClassSelectors,
    LevelUpSelectors,
    AmmunitionSelectors,
    SpellsSelectors,
} from "@app/features"

export const selectBuildData = (rootState: RootState): BuildData => {
    return {
        ammunition:    AmmunitionSelectors.slots(rootState),
        armor:         ArmorSelectors.slots(rootState),
        attributes:    LevelUpSelectors.allAddedAttributes(rootState),
        spells:        SpellsSelectors.slots(rootState),
        startingClass: StartingClassSelectors.startingClassName(rootState),
        talismans:     TalismansSelectors.slots(rootState),
        weapons:       WeaponsSelectors.slots(rootState),
    }
}

export const ExportSelectors = {
    build: selectBuildData,
}
