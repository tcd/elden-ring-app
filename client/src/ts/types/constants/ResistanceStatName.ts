export const ResistanceStatNames = {
    "immunity":   "immunity",
    "robustness": "robustness",
    "focus":      "focus",
    "vitality":   "vitality",
} as const

type ResistanceStatNamesKey = keyof typeof ResistanceStatNames

export type ResistanceStatName = typeof ResistanceStatNames[ResistanceStatNamesKey];
