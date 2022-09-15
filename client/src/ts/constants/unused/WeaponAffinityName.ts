export const WeaponAffinityNames = {
    STANDARD:   "Standard",
    HEAVY:      "Heavy",
    KEEN:       "Keen",
    QUALITY:    "Quality",
    FIRE:       "Fire",
    FLAME_ART:  "Flame Art",
    Lightning:  "Lightning",
    SACRED:     "Sacred",
    MAGIC:      "Magic",
    COLD:       "Cold",
    POISON:     "Poison",
    BLOOD:      "Blood",
    OCCULT:     "Occult",
} as const

export type WeaponAffinityName = keyof typeof WeaponAffinityNames

export type WeaponAffinityNameType = typeof WeaponAffinityNames[WeaponAffinityName];
