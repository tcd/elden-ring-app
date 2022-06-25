import { Armor, ArmorType } from "@app/types"

export const NO_ARMOR: Armor = {
    id: -1,
    name: null,
    armor_type: null,
    image_url: null,
    sort_group: null,
    weight: 0.0,
    poise: 0.0,

    // Resistance
    immunity:   0,
    robustness: 0,
    focus:      0,
    vitality:   0,

    // Damage Negation
    physical:  0.0,
    vs_strike: 0.0,
    vs_slash:  0.0,
    vs_pierce: 0.0,
    magic:     0.0,
    fire:      0.0,
    lightning: 0.0,
    holy:      0.0,
}

export const Head: Armor = {
    ...NO_ARMOR,
    name: "Head",
}

export const Chest: Armor = {
    ...NO_ARMOR,
    name: "Chest",
}

export const Arms: Armor = {
    ...NO_ARMOR,
    name: "Arms",
}

export const Legs: Armor = {
    ...NO_ARMOR,
    name: "Legs",
}

export type INakedArmorSet = {
    [key in keyof typeof ArmorType]: Armor
}

export const NakedArmorSet: INakedArmorSet = {
    Head: Head,
    Chest: Chest,
    Arms: Arms,
    Legs: Legs,
}
