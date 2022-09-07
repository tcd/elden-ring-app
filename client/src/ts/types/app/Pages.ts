import { CloudflareVariant, getImageSrcManual } from "@app/util"

// =============================================================================
// Page Name (used internally)
// =============================================================================

export type PageName =
    | "about"
    | "ammunition"
    | "armor"
    | "ashes-of-war"
    | "builder"
    | "checklist"
    | "data"
    | "equipment"
    | "level-up"
    | "not-found"
    | "quick-items"
    | "settings"
    | "spell"
    | "starting-class"
    | "status"
    | "talisman"
    | "weapon"


// =============================================================================
// Page Title (displayed on header)
// =============================================================================

export type PageTitle =
    | "About"
    | "Ammunition"
    | "Armor"
    | "Ashes of War"
    | "Builder"
    | "Checklist"
    | "Data"
    | "Equipment"
    | "Finite Resources"
    | "Level Up"
    | "Memorize Spells"
    | "Not Found"
    | "Quick Items"
    | "Select Character Base"
    | "Settings"
    | "Status"
    | "System"
    | "Talisman"
    | "Weapon"

// =============================================================================
// Utilities
// =============================================================================

export const PAGE_NAME_TITLES: Record<PageName, PageTitle> = {
    "about":          "About",
    "ammunition":     "Ammunition",
    "armor":          "Armor",
    "ashes-of-war":   "Ashes of War",
    "builder":        "Builder",
    "checklist":      "Finite Resources",
    "data":           "Data",
    "equipment":      "Equipment",
    "level-up":       "Level Up",
    "not-found":      "Not Found",
    "quick-items":    "Quick Items",
    "settings":       "System",
    "spell":          "Memorize Spells",
    "starting-class": "Select Character Base",
    "status":         "Status",
    "talisman":       "Talisman",
    "weapon":         "Weapon",
}

// =============================================================================
// Icons
// =============================================================================

export const HeaderIconIds = {
    "alter-garments": "ui/title-icons/alter-garments",
    "ashes-of-war":   "ui/title-icons/ashes-of-war",
    "crafting":       "ui/title-icons/crafting",
    "equipment":      "ui/title-icons/equipment",
    "finger-reader":  "ui/title-icons/finger-reader",
    "gestures":       "ui/title-icons/gestures",
    "great-runes":    "ui/title-icons/great-runes",
    "inventory":      "ui/title-icons/inventory",
    "level-up":       "ui/title-icons/level-up",
    "map":            "ui/title-icons/map",
    "materials":      "ui/title-icons/materials",
    "mausoleum":      "ui/title-icons/mausoleum",
    "messages":       "ui/title-icons/messages",
    "multiplayer":    "ui/title-icons/multiplayer",
    "physick":        "ui/title-icons/physick",
    "rebirth":        "ui/title-icons/rebirth",
    "site-of-grace":  "ui/title-icons/site-of-grace",
    "smithing":       "ui/title-icons/smithing",
    "sort-chest":     "ui/title-icons/sort-chest",
    "spells":         "ui/title-icons/spells",
    "starting-class": "ui/title-icons/starting-class",
    "status":         "ui/title-icons/status",
    "system":         "ui/title-icons/system",
    "weapon-skill":   "ui/title-icons/weapon-skill",
} as const
export type HeaderIconId = keyof typeof HeaderIconIds

const HEADER_ICON_SIZE: CloudflareVariant = "128"
export const HEADER_ICONS = Object.entries(HeaderIconIds).reduce((acc, [key, value]) => {
    acc[key] = getImageSrcManual(value, HEADER_ICON_SIZE)
    return acc
// }, {}) as unknown as Record<keyof typeof _titleIcons, string>
}, {}) as unknown as Record<HeaderIconId, string>

export const DEFAULT_PAGE_ICON = HEADER_ICONS["site-of-grace"]

export const PAGE_NAME_ICONS: Record<PageName, string> = {
    "about":          HEADER_ICONS.map,
    "ammunition":     HEADER_ICONS.equipment,
    "armor":          HEADER_ICONS.equipment,
    "ashes-of-war":   HEADER_ICONS["weapon-skill"],
    "builder":        HEADER_ICONS.smithing,
    "checklist":      HEADER_ICONS.inventory,
    // "data":           HEADER_ICONS["finger-reader"],
    "data":           HEADER_ICONS["system"],
    "equipment":      HEADER_ICONS.equipment,
    "level-up":       HEADER_ICONS["level-up"],
    "not-found":      HEADER_ICONS["site-of-grace"],
    "quick-items":    HEADER_ICONS.inventory,
    "settings":       HEADER_ICONS.system,
    "spell":          HEADER_ICONS.spells,
    "starting-class": HEADER_ICONS["starting-class"],
    "status":         HEADER_ICONS.status,
    "talisman":       HEADER_ICONS.equipment,
    "weapon":         HEADER_ICONS.equipment,
}
