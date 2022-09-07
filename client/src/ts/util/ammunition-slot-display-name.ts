import { AmmunitionSlotId } from "@app/types"

const DISPLAY_NAMES: Record<AmmunitionSlotId, string> = {
    A1: "Arrows 1",
    A2: "Arrows 2",
    B1: "Bolts 1",
    B2: "Bolts 2",
}

export const ammunitionSlotDisplayName = (slotId: AmmunitionSlotId): string => {
    return DISPLAY_NAMES?.[slotId] ?? ""
}
