import { FEATURE_KEYS } from "@app/util"
import {
    ArmorActions,
    BuilderActions,
    ChecklistActions,
    CoreActions,
    EquipmentActions,
    LevelUpActions,
    SpellsActions,
    StartingClassActions,
    TalismansActions,
    WeaponsActions,
} from "@app/features"

export interface AppActions {
    [FEATURE_KEYS.Armor]:         typeof ArmorActions
    [FEATURE_KEYS.Builder]:       typeof BuilderActions
    [FEATURE_KEYS.Checklist]:     typeof ChecklistActions
    [FEATURE_KEYS.Core]:          typeof CoreActions
    [FEATURE_KEYS.Equipment]:     typeof EquipmentActions
    [FEATURE_KEYS.LevelUp]:       typeof LevelUpActions
    [FEATURE_KEYS.Spells]:        typeof SpellsActions
    [FEATURE_KEYS.StartingClass]: typeof StartingClassActions
    [FEATURE_KEYS.Talismans]:     typeof TalismansActions
    [FEATURE_KEYS.Weapons]:       typeof WeaponsActions
}

export const Actions: AppActions = {
    Armor:         ArmorActions,
    Builder:       BuilderActions,
    Checklist:     ChecklistActions,
    Core:          CoreActions,
    Equipment:     EquipmentActions,
    LevelUp:       LevelUpActions,
    Spells:        SpellsActions,
    StartingClass: StartingClassActions,
    Talismans:     TalismansActions,
    Weapons:       WeaponsActions,
}
