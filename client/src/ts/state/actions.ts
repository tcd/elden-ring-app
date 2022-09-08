import { FeatureKeys } from "@app/constants"
import {
    AmmunitionActions,
    ArmorActions,
    BuilderActions,
    CharacterStatusActions,
    ChecklistActions,
    CoreActions,
    EquipmentActions,
    ImportExportActions,
    LevelUpActions,
    QuickItemsActions,
    RoutingActions,
    SpellsActions,
    StartingClassActions,
    TalismansActions,
    WeaponsActions,
} from "@app/features"

export interface AppActions {
    [FeatureKeys.Ammunition]:      typeof AmmunitionActions
    [FeatureKeys.Armor]:           typeof ArmorActions
    [FeatureKeys.Builder]:         typeof BuilderActions
    [FeatureKeys.CharacterStatus]: typeof CharacterStatusActions
    [FeatureKeys.Checklist]:       typeof ChecklistActions
    [FeatureKeys.Core]:            typeof CoreActions
    [FeatureKeys.Equipment]:       typeof EquipmentActions
    [FeatureKeys.ImportExport]:    typeof ImportExportActions
    [FeatureKeys.LevelUp]:         typeof LevelUpActions
    [FeatureKeys.QuickItems]:      typeof QuickItemsActions
    [FeatureKeys.Routing]:         typeof RoutingActions
    [FeatureKeys.Spells]:          typeof SpellsActions
    [FeatureKeys.StartingClass]:   typeof StartingClassActions
    [FeatureKeys.Talismans]:       typeof TalismansActions
    [FeatureKeys.Weapons]:         typeof WeaponsActions
}

export const Actions: AppActions = {
    Ammunition:      AmmunitionActions,
    Armor:           ArmorActions,
    Builder:         BuilderActions,
    CharacterStatus: CharacterStatusActions,
    Checklist:       ChecklistActions,
    Core:            CoreActions,
    Equipment:       EquipmentActions,
    ImportExport:    ImportExportActions,
    LevelUp:         LevelUpActions,
    QuickItems:      QuickItemsActions,
    Routing:         RoutingActions,
    Spells:          SpellsActions,
    StartingClass:   StartingClassActions,
    Talismans:       TalismansActions,
    Weapons:         WeaponsActions,
}
