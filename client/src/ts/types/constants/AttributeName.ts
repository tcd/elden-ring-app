export const AttributeNames = {
    vigor:        "vigor",
    mind:         "mind",
    endurance:    "endurance",
    strength:     "strength",
    dexterity:    "dexterity",
    intelligence: "intelligence",
    faith:        "faith",
    arcane:       "arcane",
} as const

export type AttributeName = keyof typeof AttributeNames

export type AttributeNameType = typeof AttributeNames[AttributeName];
