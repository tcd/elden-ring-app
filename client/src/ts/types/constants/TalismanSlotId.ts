export const TalismanSlotIds = <const>{
    "1": "T1",
    "2": "T2",
    "3": "T3",
    "4": "T4",
}

type TalismanSlotIdsKey = keyof typeof TalismanSlotIds
export type TalismanSlotId = typeof TalismanSlotIds[TalismanSlotIdsKey]
