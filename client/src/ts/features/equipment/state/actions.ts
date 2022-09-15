import { EquipmentSlice } from "./state"
import { navigate } from "./thunks"

export const EquipmentActions = {
    ...EquipmentSlice.actions,
    navigate,
}
