import { BaseEntity, Stat } from "@types"

/** Math for the effect */
export enum EquipmentEffectMethod {
    flat = "flat",
    percentage = "percentage",
}

export enum EquipmentEffectType {
    increase = "increase",
    decrease = "decrease",
}

export interface EquipmentEffect extends BaseEntity {
    effect_method: EquipmentEffectMethod
    effect_type: EquipmentEffectType
    affected_stat: Stat
    value: number
}
