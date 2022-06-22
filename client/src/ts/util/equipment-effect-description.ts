import { EquipmentEffect } from "@app/types"
import { isBlank } from "@app/util"

export const equipmentEffectDescription = (effect: EquipmentEffect): string => {
    if (isBlank(effect)) {
        return ""
    }

    const suffix = (effect.effect_method == "percentage") ? "%" : ""
    return [
        effect.effect_type.replace(/^\w/, (c) => c.toUpperCase()),
        effect.affected_stat,
        "by",
        `${effect.value}${suffix}`,
    ].join(" ")
}
