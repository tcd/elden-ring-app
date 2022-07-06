/**
 * NOTE: do not reorder.
 */
export const StartingClassNames = {
    Vagabond:    "Vagabond",
    Warrior:     "Warrior",
    Hero:        "Hero",
    Bandit:      "Bandit",
    Astrologer:  "Astrologer",
    Prophet:     "Prophet",
    Samurai:     "Samurai",
    Prisoner:    "Prisoner",
    Confessor:   "Confessor",
    Wretch:      "Wretch",
} as const

export type StartingClassName = keyof typeof StartingClassNames

export type StartingClassNameType = typeof StartingClassNames[StartingClassName];
