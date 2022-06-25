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
    "Weapon Affinity":  "Weapon Affinities",
    "Weapon Skill":     "Ashes of War",
    "Weapon":           "Weapons",
}

export const getImageSrc = (type: ImageableString, name: string): string => {
    const folder  = IMAGE_FOLDERS[type]
    const variant = "public"
    if (type == "Spell") {
        name = name.replaceAll(":", "_")
    }
    return `https://imagedelivery.net/${CONFIG.cloudflareHash}/${folder}/${name}/${variant}`
}
