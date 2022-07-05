import { BaseEntity, Stat } from "@app/types"

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
    /** Flat or Percentage */
    effect_method: EquipmentEffectMethod
    /** Increase or Decrease */
    effect_type: EquipmentEffectType
    affected_stat: Stat
    value: number
}
