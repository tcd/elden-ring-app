import type { RootState } from "@app/state"
import type {
    BuildData,
    CompactBuildData,
} from "@app/types"
import {
    // AmmunitionSelectors,
    ArmorSelectors,
    LevelUpSelectors,
    // SpellsSelectors,
    StartingClassSelectors,
    TalismansSelectors,
    WeaponsSelectors,
} from "@app/features"
import { compact, minifyBuildData } from "@app/util"

const selectRawBuildData = (rootState: RootState): BuildData => {
    return {
        // ammunition:    AmmunitionSelectors.slots(rootState),
        armor:         ArmorSelectors.slots(rootState),
        attributes:    LevelUpSelectors.allAddedAttributes(rootState),
        // spells:        SpellsSelectors.slots(rootState),
        startingClass: StartingClassSelectors.startingClassName(rootState),
        talismans:     TalismansSelectors.slots(rootState),
        weapons:       WeaponsSelectors.slots(rootState),
    }
}

const selectCompact = (rootState: RootState): Partial<BuildData> => {
    return compact(selectRawBuildData(rootState))
}

const selectMinified = (rootState: RootState): Partial<CompactBuildData.CompactBuildData> => {
    return minifyBuildData(selectRawBuildData(rootState))
}

const selectMinifiedCompact = (rootState: RootState): Partial<CompactBuildData.CompactBuildData> => {
    return compact(minifyBuildData(selectRawBuildData(rootState)))
}

export const BuildDataSelectors = {
    raw: selectRawBuildData,
    compact: selectCompact,
    minified: selectMinified,
    minifiedCompact: selectMinifiedCompact,
}
