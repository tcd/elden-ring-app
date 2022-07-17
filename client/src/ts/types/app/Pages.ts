import { CloudflareVariant, getImageSrcManual } from "@app/util"

// =============================================================================
// Page Name (used internally)
// =============================================================================

export const PageNames = {
    "about":          "about",
    "ammunition":     "ammunition",
    "armor":          "armor",
    "ashes-of-war":   "ashes-of-war",
    "builder":        "builder",
    "equipment":      "equipment",
    "level-up":       "level-up",
    "not-found":      "not-found",
    "settings":       "settings",
    "spell":          "spell",
    "starting-class": "starting-class",
    "status":         "status",
    "talisman":       "talisman",
    "weapon":         "weapon",
} as const
type PageNameKey = keyof typeof PageNames
export type PageName = typeof PageNames[PageNameKey];

// =============================================================================
// Page Title (displayed on header)
// =============================================================================

export const PageTitles = {
    "About":                 "About",
    "Ammunition":            "Ammunition",
    "Armor":                 "Armor",
    "Ashes of War":          "Ashes of War",
    "Builder":               "Builder",
    "Equipment":             "Equipment",
    "Level Up":              "Level Up",
    "Memorize Spells":       "Memorize Spells",
    "Not Found":             "Not Found",
    "Select Character Base": "Select Character Base",
    "Settings":              "Settings",
    "Status":                "Status",
    "System":                "System",
    "Talisman":              "Talisman",
    "Weapon":                "Weapon",
} as const
type PageTitleKey = keyof typeof PageTitles
export type PageTitle = typeof PageTitles[PageTitleKey];

// =============================================================================
// Utilities
// =============================================================================

export const PAGE_NAME_TITLES: Record<PageName, PageTitle> = {
    "about":          "About",
    "ammunition":     "Ammunition",
    "armor":          "Armor",
    "ashes-of-war":   "Ashes of War",
    "builder":        "Builder",
    "equipment":      "Equipment",
    "level-up":       "Level Up",
    "not-found":      "Not Found",
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
    "alter-garments":  "ui/title-icons/alter-garments",
    "ashes-of-war":    "ui/title-icons/ashes-of-war",
    "crafting":        "ui/title-icons/crafting",
    "equipment":       "ui/title-icons/equipment",
    "great-runes":     "ui/title-icons/great-runes",
    "inventory":       "ui/title-icons/inventory",
    "level-up":        "ui/title-icons/level-up",
    "map":             "ui/title-icons/map",
    "messages":        "ui/title-icons/messages",
    "multiplayer":     "ui/title-icons/multiplayer",
    "physick":         "ui/title-icons/physick",
    "site-of-grace":   "ui/title-icons/site-of-grace",
    "smithing":        "ui/title-icons/smithing",
    "sort-chest":      "ui/title-icons/sort-chest",
    "spells":          "ui/title-icons/spells",
    "starting-class":  "ui/title-icons/starting-class",
    "status":          "ui/title-icons/status",
    "system":          "ui/title-icons/system",
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
    "ashes-of-war":   HEADER_ICONS["ashes-of-war"],
    "builder":        HEADER_ICONS.smithing,
    "equipment":      HEADER_ICONS.equipment,
    "level-up":       HEADER_ICONS["level-up"],
    "not-found":      HEADER_ICONS["site-of-grace"],
    "settings":       HEADER_ICONS.system,
    "spell":          HEADER_ICONS.spells,
    "starting-class": HEADER_ICONS["starting-class"],
    "status":         HEADER_ICONS.status,
    "talisman":       HEADER_ICONS.equipment,
    "weapon":         HEADER_ICONS.equipment,
}
