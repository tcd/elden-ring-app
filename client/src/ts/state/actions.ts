import { FEATURE_KEYS } from "@app/util"
import {
    ArmorActions,
    BuilderActions,
    ChecklistActions,
    CoreActions,
    SpellsActions,
    TalismansActions,
    WeaponsActions,
} from "@app/features"

export interface AppActions {
    [FEATURE_KEYS.Armor]:     typeof ArmorActions
    [FEATURE_KEYS.Builder]:   typeof BuilderActions
    [FEATURE_KEYS.Checklist]: typeof ChecklistActions
    [FEATURE_KEYS.Core]:      typeof CoreActions
    [FEATURE_KEYS.Spells]:    typeof SpellsActions
    [FEATURE_KEYS.Talismans]: typeof TalismansActions
    [FEATURE_KEYS.Weapons]:   typeof WeaponsActions
}

export const Actions: AppActions = {
    Armor:     { ...ArmorActions     },
    Builder:   { ...BuilderActions   },
    Checklist: { ...ChecklistActions },
    Core:      { ...CoreActions      },
    Spells:    { ...SpellsActions    },
    Talismans: { ...TalismansActions },
    Weapons:   { ...WeaponsActions   },
}
