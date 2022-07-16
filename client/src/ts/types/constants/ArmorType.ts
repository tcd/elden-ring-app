export const ArmorTypes = {
    "Head":  "Head",
    "Chest": "Chest",
    "Arms":  "Arms",
    "Legs":  "Legs",
} as const

type ArmorTypeKey = keyof typeof ArmorTypes

export type ArmorType = typeof ArmorTypes[ArmorTypeKey];
