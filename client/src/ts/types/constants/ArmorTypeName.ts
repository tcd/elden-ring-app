export const ArmorTypeNames = {
    Head:  "Head",
    Chest: "Chest",
    Arms:  "Arms",
    Legs:  "Legs",
} as const

export type ArmorTypeName = keyof typeof ArmorTypeNames

export type ArmorTypeNameType = typeof ArmorTypeNames[ArmorTypeName];
