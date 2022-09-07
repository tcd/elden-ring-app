import type {
    EquipmentType,
    EquipmentSlotId,
} from "@app/types"

export interface SetActiveEquipmentSlotPayload {
    type: EquipmentType
    id: EquipmentSlotId
}
