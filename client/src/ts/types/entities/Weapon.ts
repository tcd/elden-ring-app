import {
    BaseEntity,
    WeaponSkill,
    WeaponTypePluralString,
    EquipmentEffect,
    WeaponStat,
} from "@types"

export interface Weapon extends BaseEntity {
    name: string
    is_shield?: boolean
    is_special?: boolean
    weapon_type: WeaponTypePluralString
    weapon_skill: WeaponSkill
    weapon_type_id: number
    weapon_skill_id: number
    weight: number
    physical_damage_types: string[]
    range?: number
    spell_boost_groups?: string[]
    spell_boost_percentage?: number

    effects?: EquipmentEffect[]
    stats?: WeaponStat[]

    defense_magic: number
    defense_fire: number
    defense_physical: number
    defense_lightning: number
    defense_holy: number
    defense_guard_boost: number

    required_strength?: number
    required_dexterity?: number
    required_intelligence?: number
    required_faith?: number
    required_arcane?: number
}
