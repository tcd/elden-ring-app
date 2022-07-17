import { Talisman, TalismanSlotId, TalismanSet } from "@app/types"
import { compactArray, isBlank } from "@app/util"
import { RootState } from "@app/state"
import { selectTalismans } from "@app/features/builder/state/selectors/api"

const selectTalismansSlice = (rootState: RootState) => {
    return rootState?.Talismans
}

const _selectTalisman = (rootState: RootState, name?: string) => {
    if (isBlank(name)) { return null }
    return selectTalismans(rootState).find(x => x.name == name)
}

const selectActiveSlotId    = (rootState: RootState): TalismanSlotId => selectTalismansSlice(rootState).activeSlotId
const selectTalismanNames   = (rootState: RootState): TalismanSet => selectTalismansSlice(rootState).talismanNames
const selectHasMenuScrolled = (rootState: RootState): boolean => selectTalismansSlice(rootState).menuHasScrolled
const selectMobileTab       = (rootState: RootState) => selectTalismansSlice(rootState).mobileTab

const _selectTalismanNameBySlotId = (rootState: RootState, slotId: TalismanSlotId) => {
    return selectTalismanNames(rootState)?.[slotId]
}

const selectTalisman1Name = (rootState: RootState): string => _selectTalismanNameBySlotId(rootState, "1")
const selectTalisman2Name = (rootState: RootState): string => _selectTalismanNameBySlotId(rootState, "2")
const selectTalisman3Name = (rootState: RootState): string => _selectTalismanNameBySlotId(rootState, "3")
const selectTalisman4Name = (rootState: RootState): string => _selectTalismanNameBySlotId(rootState, "4")

const selectTalisman1 = (rootState: RootState): Talisman => { return _selectTalisman(rootState, selectTalisman1Name(rootState)) }
const selectTalisman2 = (rootState: RootState): Talisman => { return _selectTalisman(rootState, selectTalisman2Name(rootState)) }
const selectTalisman3 = (rootState: RootState): Talisman => { return _selectTalisman(rootState, selectTalisman3Name(rootState)) }
const selectTalisman4 = (rootState: RootState): Talisman => { return _selectTalisman(rootState, selectTalisman4Name(rootState)) }

const selectArray = (rootState: RootState): Talisman[] => {
    return [
        selectTalisman1(rootState),
        selectTalisman2(rootState),
        selectTalisman3(rootState),
        selectTalisman4(rootState),
    ]
}

const selectCompactArray = (rootState: RootState): Talisman[] => {
    return compactArray(selectArray(rootState))
}

const selectActiveTalismanName = (rootState: RootState) => {
    const activeSlotId = selectActiveSlotId(rootState)
    if (isBlank(activeSlotId)) {
        return null
    }
    return _selectTalismanNameBySlotId(rootState, activeSlotId)
}

const selectActiveTalisman = (rootState: RootState) => {
    const activeName = selectActiveTalismanName(rootState)
    if (isBlank(activeName)) {
        return null
    }
    const talismans = selectTalismans(rootState)
    return talismans.find(x => x.name == activeName)
}

/**
 * Can't wear two of the same talisman.
 * Some talismans restrict the use of others.
 *
 * This returns talismans available to equip in the active talisman slot.
 */
export const selectTalismanOptions = (rootState: RootState): Talisman[] => {
    const talismans = selectTalismans(rootState)
    if (isBlank(talismans)) {
        return []
    }
    let equipped = selectCompactArray(rootState)
    if (equipped.length == 0) {
        return talismans
    }
    const currentlySelected = selectActiveTalisman(rootState)
    if (currentlySelected) {
        equipped = equipped.filter(x => x.name != currentlySelected.name)
    }
    const unavailable = equipped.map(x => [x?.name, x?.restricts].flat()).flat()
    if (unavailable.length == 0) {
        return talismans
    }
    const available = talismans.filter(x => !unavailable.includes(x.name))
    if (currentlySelected) {
        equipped.push(currentlySelected)
    }
    return available
}

// =============================================================================
// Export
// =============================================================================

export const TalismansSelectors = {
    slots: selectTalismanNames,
    all: selectTalismans,
    active: selectActiveTalisman,
    activeSlotId: selectActiveSlotId,
    activeName: selectActiveTalismanName,
    array: selectArray,
    compactArray: selectCompactArray,
    /**
     * Can't wear two of the same talisman.
     * Some talismans restrict the use of others.
     *
     * This returns talismans available to equip in the active talisman slot.
     */
    options: selectTalismanOptions,
    menuHasScrolled: selectHasMenuScrolled,
    mobileTab: selectMobileTab,
}
