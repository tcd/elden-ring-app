/* eslint-disable indent */
import type { RootState } from "@app/state"

const selectDone = (rootState: RootState): boolean => {
    return (
           rootState.ImportExport.requests.importData.status === "fulfilled"
        && rootState.Ammunition.importComplete
        && rootState.Armor.importComplete
        && rootState.Checklist.importComplete
        && rootState.LevelUp.importComplete
        && rootState.QuickItems.importComplete
        && rootState.Spells.importComplete
        && rootState.StartingClass.importComplete
        && rootState.Talismans.importComplete
        && rootState.Weapons.importComplete
    )
}

const selectFailed = (rootState: RootState): boolean => {
    return rootState.ImportExport.requests.importData.status === "rejected"
}

export const ImportDataSelectors = {
    done: selectDone,
    failed: selectFailed,
}
