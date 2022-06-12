export const BLOOD_LOSS   = "Blood Loss"
export const FROST        = "Frost"
export const MADNESS      = "Madness"
export const POISON       = "Poison"
export const SLEEP        = "Sleep"
export const DEATH_BLIGHT = "Death Blight"
export const SCARLET_ROT  = "Scarlet Rot"

export type StatusEffect =
    | typeof BLOOD_LOSS
    | typeof FROST
    | typeof MADNESS
    | typeof POISON
    | typeof SLEEP
    | typeof DEATH_BLIGHT
    | typeof SCARLET_ROT

export const PHYSICAL_DAMAGE  = "Physical"
// export const STRIKE_DAMAGE    = "Strike"
// export const SLASH_DAMAGE     = "Slash"
// export const PIERCE_DAMAGE    = "Pierce"
export const MAGIC_DAMAGE     = "Magic"
export const FIRE_DAMAGE      = "Fire"
export const LIGHTNING_DAMAGE = "Lightning"
export const HOLY_DAMAGE      = "Holy"

export type DamageType =
    | typeof PHYSICAL_DAMAGE
    // | typeof STRIKE_DAMAGE
    // | typeof SLASH_DAMAGE
    // | typeof PIERCE_DAMAGE
    | typeof MAGIC_DAMAGE
    | typeof FIRE_DAMAGE
    | typeof LIGHTNING_DAMAGE
    | typeof HOLY_DAMAGE

export type DamageTypePlus =
    | StatusEffect
    | DamageType
