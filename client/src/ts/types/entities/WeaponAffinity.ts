import { BaseEntity } from "@app/types"

const STANDARD  = "Standard"
const HEAVY     = "Heavy"
const KEEN      = "Keen"
const QUALITY   = "Quality"
const FIRE      = "Fire"
const FLAME_ART = "Flame Art"
const Lightning = "Lightning"
const SACRED    = "Sacred"
const MAGIC     = "Magic"
const COLD      = "Cold"
const POISON    = "Poison"
const BLOOD     = "Blood"
const OCCULT    = "Occult"

export type WeaponAffinityName =
    | typeof STANDARD
    | typeof HEAVY
    | typeof KEEN
    | typeof QUALITY
    | typeof FIRE
    | typeof FLAME_ART
    | typeof Lightning
    | typeof SACRED
    | typeof MAGIC
    | typeof COLD
    | typeof POISON
    | typeof BLOOD
    | typeof OCCULT

export const WeaponAffinityNames = {
    STANDARD:  STANDARD,
    HEAVY:     HEAVY,
    KEEN:      KEEN,
    QUALITY:   QUALITY,
    FIRE:      FIRE,
    FLAME_ART: FLAME_ART,
    Lightning: Lightning,
    SACRED:    SACRED,
    MAGIC:     MAGIC,
    COLD:      COLD,
    POISON:    POISON,
    BLOOD:     BLOOD,
    OCCULT:    OCCULT,
}

export interface WeaponAffinity extends BaseEntity {
    name: WeaponAffinityName
}
