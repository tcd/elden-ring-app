import { FeatureKeys } from "@app/constants"
import {
    AmmunitionSelectors,
    ArmorSelectors,
    BuilderSelectors,
    CharacterStatusSelectors,
    ChecklistSelectors,
    CoreSelectors,
    EquipmentSelectors,
    LevelUpSelectors,
    QuickItemsSelectors,
    RouterSelectors,
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
    [FeatureKeys.LevelUp]:         typeof LevelUpSelectors
    [FeatureKeys.QuickItems]:      typeof QuickItemsSelectors
    [FeatureKeys.Router]:          typeof RouterSelectors
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
    LevelUp:         LevelUpSelectors,
    Meta:            MetaSelectors,
    QuickItems:      QuickItemsSelectors,
    Router:          RouterSelectors,
    Routing:         RoutingSelectors,
    Spells:          SpellsSelectors,
    StartingClass:   StartingClassSelectors,
    Talismans:       TalismansSelectors,
    Weapons:         WeaponsSelectors,
}
