import {
    Armor,
    Spell,
    Talisman,
    // UpgradeMaterial,
    WeaponAffinity,
    WeaponSkill,
    Weapon,
} from "@app/types"
import { CONFIG } from "@app/util"

export type ImageableType =
    | Armor
    | Spell
    | Talisman
    | WeaponAffinity
    | WeaponSkill
    | Weapon

export type ImageableString =
    | "Armor"
    | "Spell"
    | "Spell Group"
    | "Talisman"
    | "Upgrade Material"
    | "Weapon Affinity"
    | "Weapon Skill"
    | "Weapon"

type ImageableFolderMap = Record<ImageableString, string>

const IMAGE_FOLDERS: ImageableFolderMap = {
    "Armor":            "Armor",
    "Spell":            "Spells",
    "Spell Group":      "Spell Groups",
    "Talisman":         "Talismans",
    "Upgrade Material": "Upgrade Materials",
    "Weapon Affinity":  "Affinities",
    "Weapon Skill":     "Ashes of War",
    "Weapon":           "Weapons",
}

export type CloudflareVariant = "72" | "128" | "256" | "512" | "1024"

export const getImageSrc = (type: ImageableString, name: string, variant: CloudflareVariant = "1024"): string => {
    const folder  = IMAGE_FOLDERS[type]
    if (type == "Spell") {
        name = name.replaceAll(":", "_")
    }
    return `https://imagedelivery.net/${CONFIG.cloudflareHash}/${folder}/${name}/${variant}`
}
