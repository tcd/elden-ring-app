import { Talisman } from "@types"
import { RootState } from "@app/state"
import { isBlank, compactArray } from "@app/util"
import * as Api from "./api"

const selectTalisman = (state: RootState, name?: string) => {
    if (isBlank(name)) { return null }
    const talismans = Api.selectTalismans(state)
    if (isBlank(talismans)) { return null }
    return talismans.find(x => x.name == name)
}

export const selectTalisman1Name = (state: RootState) => { return state?.Builder?.talisman_names["1"] }
export const selectTalisman2Name = (state: RootState) => { return state?.Builder?.talisman_names["2"] }
export const selectTalisman3Name = (state: RootState) => { return state?.Builder?.talisman_names["3"] }
export const selectTalisman4Name = (state: RootState) => { return state?.Builder?.talisman_names["4"] }

export const selectTalisman1 = (state: RootState) => { return selectTalisman(state, selectTalisman1Name(state)) }
export const selectTalisman2 = (state: RootState) => { return selectTalisman(state, selectTalisman2Name(state)) }
export const selectTalisman3 = (state: RootState) => { return selectTalisman(state, selectTalisman3Name(state)) }
export const selectTalisman4 = (state: RootState) => { return selectTalisman(state, selectTalisman4Name(state)) }

export const selectTalismansArray = (state: RootState) => {
    return [
        selectTalisman1(state),
        selectTalisman2(state),
        selectTalisman3(state),
        selectTalisman4(state),
    ]
}

export const selectCompactTalismans = (state: RootState) => {
    return compactArray(selectTalismansArray(state))
}

export const selectTalismanModalOpen = (state: RootState) => {
    return state.Builder.talisman.modal_open
}

export const selectActiveTalismanNumber = (state: RootState) => {
    return state.Builder.talisman.active_number
}

export const selectActiveTalismanName = (state: RootState): string => {
    const activeNumber = selectActiveTalismanNumber(state)
    if (isBlank(activeNumber)) {
        return null
    }
    const activeTalisman = state.Builder.talisman_names[activeNumber?.toString()]
    return activeTalisman
}

export const selectActiveTalisman = (state: RootState): Talisman => {
    const activeName = selectActiveTalismanName(state)
    if (isBlank(activeName)) {
        return null
    }
    const talismans = Api.selectTalismans(state)
    if (isBlank(talismans)) {
        return null
    }
    const activeTalisman = talismans.find(x => x.name == activeName)
    return activeTalisman
}

export const selectTalismanOptions = (state: RootState) => {
    let equipped = selectTalismansArray(state)
    equipped = compactArray(equipped)
    const talismans = Api.selectTalismans(state)
    if (isBlank(talismans)) {
        return []
    }
    if (equipped.length == 0) {
        return talismans
    }
    const currentlySelected = selectActiveTalisman(state)
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
