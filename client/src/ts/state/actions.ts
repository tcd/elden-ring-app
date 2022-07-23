import { FeatureKeys } from "@app/constants"
import {
    AmmunitionActions,
    ArmorActions,
    BuilderActions,
    ChecklistActions,
    CoreActions,
    EquipmentActions,
    LevelUpActions,
    QuickItemsActions,
    SpellsActions,
    StartingClassActions,
    TalismansActions,
    WeaponsActions,
} from "@app/features"

export interface AppActions {
    [FeatureKeys.Ammunition]:    typeof AmmunitionActions
    [FeatureKeys.Armor]:         typeof ArmorActions
    [FeatureKeys.Builder]:       typeof BuilderActions
    [FeatureKeys.Checklist]:     typeof ChecklistActions
    [FeatureKeys.Core]:          typeof CoreActions
    [FeatureKeys.Equipment]:     typeof EquipmentActions
    [FeatureKeys.LevelUp]:       typeof LevelUpActions
    [FeatureKeys.QuickItems]:    typeof QuickItemsActions
    [FeatureKeys.Spells]:        typeof SpellsActions
    [FeatureKeys.StartingClass]: typeof StartingClassActions
    [FeatureKeys.Talismans]:     typeof TalismansActions
    [FeatureKeys.Weapons]:       typeof WeaponsActions
}

export const Actions: AppActions = {
    Ammunition:    AmmunitionActions,
    Armor:         ArmorActions,
    Builder:       BuilderActions,
    Checklist:     ChecklistActions,
    Core:          CoreActions,
    Equipment:     EquipmentActions,
    LevelUp:       LevelUpActions,
    QuickItems:    QuickItemsActions,
    Spells:        SpellsActions,
    StartingClass: StartingClassActions,
    Talismans:     TalismansActions,
    Weapons:       WeaponsActions,
}
