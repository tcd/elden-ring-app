import { FeatureKeys } from "../constants"

export const TabValues = <const>{
    // Common
    "grid": "grid",
    "detail": "detail",
    "status": "status",
    // Builder
    "level": "level",
    "equipment": "equipment",
    // Core/About
    "about": "about",
    "credit": "credit",
    "related": "related",
}

export type TabValue = typeof TabValues[keyof typeof TabValues]

const _tabs = [
    // Ammunition
    "grid", "detail", "status",
    // Armor
    "grid", "detail", "status",
    // Builder
    "level", "equipment", "status",
    // Equipment
    "grid", "detail", "status",
    // QuickItems
    "grid", "detail", "status",
    // Talismans
    "grid", "detail", "status",
    // Weapons
    "grid", "detail", "status",
    // Core/About
    "about", "credit", "related",
]
