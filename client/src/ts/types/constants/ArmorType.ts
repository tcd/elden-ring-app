export const ArmorTypes = {
    "Head":  "Head",
    "Chest": "Chest",
    "Arms":  "Arms",
    "Legs":  "Legs",
} as const

type ArmorTypesKey = keyof typeof ArmorTypes

export type ArmorType = typeof ArmorTypes[ArmorTypesKey];
