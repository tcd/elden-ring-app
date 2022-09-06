export const SpellSlotIds = <const>{
    "1":   "S1",
    "2":   "S2",
    "3":   "S3",
    "4":   "S4",
    "5":   "S5",
    "6":   "S6",
    "7":   "S7",
    "8":   "S8",
    "9":   "S9",
    "10": "S10",
    "11": "S11",
    "12": "S12",
}

type SpellSlotIdsKey = keyof typeof SpellSlotIds
export type SpellSlotId = typeof SpellSlotIds[SpellSlotIdsKey]
