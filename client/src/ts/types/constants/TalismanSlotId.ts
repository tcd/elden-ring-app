export const TalismanSlotIds = {
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4",
}

type TalismanSlotIdsKey = keyof typeof TalismanSlotIds
// eslint-disable-next-line @typescript-eslint/ban-types
export type TalismanSlotId = typeof TalismanSlotIds[TalismanSlotIdsKey] & {}
