export const QuickItemSlotIds = {
    "1":   "1",
    "2":   "2",
    "3":   "3",
    "4":   "4",
    "5":   "5",
    "6":   "6",
    "7":   "7",
    "8":   "8",
    "9":   "9",
    "10": "10",
}

type QuickItemSlotIdsKey = keyof typeof QuickItemSlotIds
// eslint-disable-next-line @typescript-eslint/ban-types
export type QuickItemSlotId = typeof QuickItemSlotIds[QuickItemSlotIdsKey] & {}
