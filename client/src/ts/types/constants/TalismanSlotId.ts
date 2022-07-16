export const TalismanSlotIds = {
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4",
}

type TalismanSlotIdsKey = keyof typeof TalismanSlotIds
export type TalismanSlotId = typeof TalismanSlotIds[TalismanSlotIdsKey]
