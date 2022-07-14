export const ResistanceStatNames = {
    "immunity":   "immunity",
    "robustness": "robustness",
    "focus":      "focus",
    "vitality":   "vitality",
} as const

export type ResistanceStatName = keyof typeof ResistanceStatNames

export type ResistanceStatNames = typeof ResistanceStatNames[ResistanceStatName];
