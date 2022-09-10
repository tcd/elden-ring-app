import type { TalismanSlotId } from "@app/types"

const DISPLAY_NAMES: Record<TalismanSlotId, string> = {
    "T1": "Talisman 1",
    "T2": "Talisman 2",
    "T3": "Talisman 3",
    "T4": "Talisman 4",
}

export const talismanSlotDisplayName = (slotId: TalismanSlotId): string => {
    return DISPLAY_NAMES?.[slotId] ?? ""
}
