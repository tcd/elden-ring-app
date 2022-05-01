import { RootState } from "@app/state"
import { isBlank } from "@app/util"

import * as Api from "./api"

export const selectRightWeapon1Name = (state: RootState) => { return state?.Builder?.weapon_names.R1 }
export const selectRightWeapon2Name = (state: RootState) => { return state?.Builder?.weapon_names.R2 }
export const selectRightWeapon3Name = (state: RootState) => { return state?.Builder?.weapon_names.R3 }
export const selectLeftWeapon1Name  = (state: RootState) => { return state?.Builder?.weapon_names.L1 }
export const selectLeftWeapon2Name  = (state: RootState) => { return state?.Builder?.weapon_names.L2 }
export const selectLeftWeapon3Name  = (state: RootState) => { return state?.Builder?.weapon_names.L3 }

const selectWeapon = (state: RootState, name?: string) => {
    const weapons = Api.selectWeapons(state)
    if (isBlank(name)) { return null }
    return weapons.find(x => x.name == name)
}

export const selectRightWeapon1 = (state: RootState) => { return selectWeapon(state, selectRightWeapon1Name(state)) }
export const selectRightWeapon2 = (state: RootState) => { return selectWeapon(state, selectRightWeapon2Name(state)) }
export const selectRightWeapon3 = (state: RootState) => { return selectWeapon(state, selectRightWeapon3Name(state)) }
export const selectLeftWeapon1  = (state: RootState) => { return selectWeapon(state, selectLeftWeapon1Name(state)) }
export const selectLeftWeapon2  = (state: RootState) => { return selectWeapon(state, selectLeftWeapon2Name(state)) }
export const selectLeftWeapon3  = (state: RootState) => { return selectWeapon(state, selectLeftWeapon3Name(state)) }

export const selectWeaponsArray = (state: RootState) => {
    return [
        selectRightWeapon1(state),
        selectRightWeapon2(state),
        selectRightWeapon3(state),
        selectLeftWeapon1(state),
        selectLeftWeapon2(state),
        selectLeftWeapon3(state),
    ]
}

export const selectCompactWeaponsArray = (state: RootState) => {
    return [
        selectRightWeapon1(state),
        selectRightWeapon2(state),
        selectRightWeapon3(state),
        selectLeftWeapon1(state),
        selectLeftWeapon2(state),
        selectLeftWeapon3(state),
    ]
}

export const selectWeaponsObject = (state: RootState) => {
    return {
        rightHand1: selectRightWeapon1(state),
        rightHand2: selectRightWeapon2(state),
        rightHand3: selectRightWeapon3(state),
        leftHand1:  selectLeftWeapon1(state),
        leftHand2:  selectLeftWeapon2(state),
        leftHand3:  selectLeftWeapon3(state),
    }
}

export const selectWeaponModalOpen = (state: RootState) => {
    return state.Builder.weapon.modal_open
}

export const selectActiveWeaponSlotId = (state: RootState) => {
    return state.Builder.weapon.active_slot
}

export const selectActiveWeapon = (state: RootState) => {
    const slotId = selectActiveWeaponSlotId(state)
    switch (slotId) {
        case "R1":
            return selectRightWeapon1(state)
        case "R2":
            return selectRightWeapon2(state)
        case "R3":
            return selectRightWeapon3(state)
        case "L1":
            return selectLeftWeapon1(state)
        case "L2":
            return selectLeftWeapon2(state)
        case "L3":
            return selectLeftWeapon3(state)
        default:
            return null
    }
}
