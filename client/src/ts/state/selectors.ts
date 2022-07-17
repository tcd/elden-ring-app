import { FEATURE_KEYS } from "@app/util"
import {
    AmmunitionSelectors,
    ArmorSelectors,
    BuilderSelectors,
    ChecklistSelectors,
    CoreSelectors,
    EquipmentSelectors,
    LevelUpSelectors,
    SpellsSelectors,
    StartingClassSelectors,
    TalismansSelectors,
    WeaponsSelectors,
} from "@app/features"
import { MetaSelectors } from "./meta-selectors"

export interface AppSelectors {
    [FEATURE_KEYS.Ammunition]:    typeof AmmunitionSelectors
    [FEATURE_KEYS.Armor]:         typeof ArmorSelectors
    [FEATURE_KEYS.Builder]:       typeof BuilderSelectors
    [FEATURE_KEYS.Checklist]:     typeof ChecklistSelectors
    [FEATURE_KEYS.Core]:          typeof CoreSelectors
    [FEATURE_KEYS.Equipment]:     typeof EquipmentSelectors
    [FEATURE_KEYS.LevelUp]:       typeof LevelUpSelectors
    [FEATURE_KEYS.Spells]:        typeof SpellsSelectors
    [FEATURE_KEYS.StartingClass]: typeof StartingClassSelectors
    [FEATURE_KEYS.Talismans]:     typeof TalismansSelectors
    [FEATURE_KEYS.Weapons]:       typeof WeaponsSelectors
    Meta:                         typeof MetaSelectors,
}

export const Selectors: AppSelectors = {
    Ammunition:    AmmunitionSelectors,
    Armor:         ArmorSelectors,
    Builder:       BuilderSelectors,
    Checklist:     ChecklistSelectors,
    Core:          CoreSelectors,
    Equipment:     EquipmentSelectors,
    LevelUp:       LevelUpSelectors,
    Spells:        SpellsSelectors,
    StartingClass: StartingClassSelectors,
    Talismans:     TalismansSelectors,
    Weapons:       WeaponsSelectors,
    Meta:          MetaSelectors,
}
