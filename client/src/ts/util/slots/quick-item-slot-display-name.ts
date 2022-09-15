import type { QuickItemSlotId } from "@app/types"

const DISPLAY_NAMES: Record<QuickItemSlotId, string> = {
    "Q1":  "Quick Item 1",
    "Q2":  "Quick Item 2",
    "Q3":  "Quick Item 3",
    "Q4":  "Quick Item 4",
    "Q5":  "Quick Item 5",
    "Q6":  "Quick Item 6",
    "Q7":  "Quick Item 7",
    "Q8":  "Quick Item 8",
    "Q9":  "Quick Item 9",
    "Q10": "Quick Item 10",
}

export const quickItemSlotDisplayName = (slotId: QuickItemSlotId): string => {
    return DISPLAY_NAMES?.[slotId] ?? ""
}
