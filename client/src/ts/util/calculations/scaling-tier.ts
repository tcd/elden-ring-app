import { ScalingTierString } from "@app/types"

export const scalingTier = (scaling: Decimal): ScalingTierString => {
    if (scaling >  1.75) { return "S" }
    if (scaling >= 1.40) { return "A" }
    if (scaling >= 0.90) { return "B" }
    if (scaling >= 0.60) { return "C" }
    if (scaling >= 0.25) { return "D" }
    if (scaling >= 0.00) { return "E" }
    return "-"
}
