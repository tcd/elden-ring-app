import {
    BaseEntity,
    WeaponSkill,
    WeaponTypePluralString,
    ScalingTierString,
} from "@types"

export interface Weapon extends BaseEntity {
    name: string
    image_url: string
    is_shield?: boolean
    weapon_type: WeaponTypePluralString
    weapon_skill: WeaponSkill
    weight: number
    physical_damage_types: string[]
    range?: number
    sorcery_scaling?: number
    incantation_scaling?: number
    spell_boost_groups?: string[]
    spell_boost_percentage?: number

    attack_physical: number
    attack_magic: number
    attack_fire: number
    attack_lightning: number
    attack_holy: number
    attack_critical: number
    attack_stamina_damage?: number

    defense_magic: number
    defense_fire: number
    defense_physical: number
    defense_lightning: number
    defense_holy: number
    defense_guard_boost: number

    scaling_strength?: ScalingTierString
    scaling_dexterity?: ScalingTierString
    scaling_intelligence?: ScalingTierString
    scaling_faith?: ScalingTierString
    scaling_arcane?: ScalingTierString

    required_strength?: number
    required_dexterity?: number
    required_intelligence?: number
    required_faith?: number
    required_arcane?: number

    damage_blood_loss?: number
    damage_frost?: number
    damage_madness?: number
    damage_poison?: number
    damage_sleep?: number
    damage_death_blight?: number
    damage_scarlet_rot?: number
}
