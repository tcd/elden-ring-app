export const StartingClassNames = {
    "Vagabond":    "Vagabond",
    "Warrior":     "Warrior",
    "Hero":        "Hero",
    "Bandit":      "Bandit",
    "Astrologer":  "Astrologer",
    "Prophet":     "Prophet",
    "Samurai":     "Samurai",
    "Prisoner":    "Prisoner",
    "Confessor":   "Confessor",
    "Wretch":      "Wretch",
} as const

type StartingClassNamesKey = keyof typeof StartingClassNames

export type StartingClassName = typeof StartingClassNames[StartingClassNamesKey];
