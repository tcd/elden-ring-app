import { Attributes, ArmorSet } from "@types"

/**
 * NOTE: do not reorder.
 */
export enum StartingClassName {
    Hero       = "Hero",
    Bandit     = "Bandit",
    Astrologer = "Astrologer",
    Warrior    = "Warrior",
    Prisoner   = "Prisoner",
    Confessor  = "Confessor",
    Wretch     = "Wretch",
    Vagabond   = "Vagabond",
    Prophet    = "Prophet",
    Samurai    = "Samurai",
}

export interface StartingClass {
    name: string
    attributes: StartingClassAttributes
    armor: ArmorSet
    spells: any[]
    items: any[]
    [key: string]: any
}

export interface StartingClassAttributes extends Attributes {
    level: number
    total: number
}
