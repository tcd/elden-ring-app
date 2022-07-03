import {
    Armor,
    Spell,
    Talisman,
    Weapon,
    WeaponSkill,
    WeaponType,
    AttackElementCorrectParam,
} from "."

export interface KitchenSink {
    armor: Armor[],
    spells: Spell[],
    talismans: Talisman[],
    weapons: Weapon[],
    weapon_skills: WeaponSkill[],
    weapon_types: WeaponType[],
    attack_element_correct_params: AttackElementCorrectParam[],
}
