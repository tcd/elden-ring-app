import { RootState } from "@app/state"
import { EquipmentState } from "../state"

export const _selectSlice = (rootState: RootState): EquipmentState => {
    return rootState?.Equipment
}

