import { FeatureKeys } from "@app/constants"
import {
    AmmunitionSelectors,
    ArmorSelectors,
    BuilderSelectors,
    CharacterStatusSelectors,
    ChecklistSelectors,
    CoreSelectors,
    EquipmentSelectors,
    ImportExportSelectors,
    LevelUpSelectors,
    QuickItemsSelectors,
    RoutingSelectors,
    SpellsSelectors,
    StartingClassSelectors,
    TalismansSelectors,
    WeaponsSelectors,
} from "@app/features"

import { MetaSelectors } from "./meta-selectors"

export interface AppSelectors {
    [FeatureKeys.Ammunition]:      typeof AmmunitionSelectors
    [FeatureKeys.Armor]:           typeof ArmorSelectors
    [FeatureKeys.Builder]:         typeof BuilderSelectors
    [FeatureKeys.CharacterStatus]: typeof CharacterStatusSelectors
    [FeatureKeys.Checklist]:       typeof ChecklistSelectors
    [FeatureKeys.Core]:            typeof CoreSelectors
    [FeatureKeys.Equipment]:       typeof EquipmentSelectors
    [FeatureKeys.ImportExport]:    typeof ImportExportSelectors
    [FeatureKeys.LevelUp]:         typeof LevelUpSelectors
    [FeatureKeys.QuickItems]:      typeof QuickItemsSelectors
    [FeatureKeys.Routing]:         typeof RoutingSelectors
    [FeatureKeys.Spells]:          typeof SpellsSelectors
    [FeatureKeys.StartingClass]:   typeof StartingClassSelectors
    [FeatureKeys.Talismans]:       typeof TalismansSelectors
    [FeatureKeys.Weapons]:         typeof WeaponsSelectors
    Meta:                          typeof MetaSelectors
}

export const Selectors: AppSelectors = {
    Ammunition:      AmmunitionSelectors,
    Armor:           ArmorSelectors,
    Builder:         BuilderSelectors,
    CharacterStatus: CharacterStatusSelectors,
    Checklist:       ChecklistSelectors,
    Core:            CoreSelectors,
    Equipment:       EquipmentSelectors,
    ImportExport:    ImportExportSelectors,
    LevelUp:         LevelUpSelectors,
    Meta:            MetaSelectors,
    QuickItems:      QuickItemsSelectors,
    Routing:         RoutingSelectors,
    Spells:          SpellsSelectors,
    StartingClass:   StartingClassSelectors,
    Talismans:       TalismansSelectors,
    Weapons:         WeaponsSelectors,
}
