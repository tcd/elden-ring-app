import { BaseEntity } from "@app/types"

export type SpellType = "Sorcery" | "Incantation"

export type SpellCategory =
    // Incantations
    | "Bestial Incantations"
    | "Blood Incantations"
    | "Dragon Communion Incantations"
    | "Dragon Cult Incantations"
    | "Erdtree Incantations"
    | "Fire Giant Incantations"
    | "Fire Monk Incantations"
    | "Frenzied Flame Incantations"
    | "Godskin Apostle Incantations"
    | "Golden Order Incantations"
    | "Servants OF Rot Incantations"
    | "Two Fingers Incantations"
    // Sorceries
    | "Aberrant Sorceries"
    | "Carian Sorceries"
    | "Claymen Sorceries"
    | "Cold Sorceries"
    | "Crystalian Sorceries"
    | "Death Sorceries"
    | "Full Moon Sorceries"
    | "Glintstone Sorceries"
    | "Gravity Sorceries"
    | "Loretta's Sorceries"
    | "Magma Sorceries"
    | "Night Sorceries"
    | "Primeval Sorceries"

export interface Spell extends BaseEntity {
    name: string
    image_url: string
    spell_type: SpellType
    description: string

    slots_required: number
    stamina_cost: number
    fp_cost: number
    fp_cost_alt?: number
    fp_cost_alt_description?: string

    required_intelligence: number
    required_faith: number
    required_arcane: number

    is_chargeable?: boolean
    is_usable_while_jumping?: boolean
    is_usable_on_horse?: boolean

    bonus_category?: string

    // damage_blood_loss?: number
    // damage_frost?: number
    // damage_madness?: number
    // damage_poison?: number
    // damage_sleep?: number
    // damage_death_blight?: number
    // damage_scarlet_rot?: number

    inflicts_physical?: boolean
    inflicts_magic?: boolean
    inflicts_fire?: boolean
    inflicts_lightning?: boolean
    inflicts_holy?: boolean
    inflicts_blood_loss?: boolean
    inflicts_frost?: boolean
    inflicts_madness?: boolean
    inflicts_poison?: boolean
    inflicts_sleep?: boolean
    inflicts_death_blight?: boolean
    inflicts_scarlet_rot?: boolean
}
