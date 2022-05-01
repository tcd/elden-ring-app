import { FEATURE_KEYS } from "@app/util"
import {
    ArmorSelectors,
    BuilderSelectors,
    ChecklistSelectors,
    CoreSelectors,
    SpellsSelectors,
    TalismansSelectors,
    WeaponsSelectors,
} from "@app/features"

export interface AppSelectors {
    [FEATURE_KEYS.Armor]:     typeof ArmorSelectors
    [FEATURE_KEYS.Builder]:   typeof BuilderSelectors
    [FEATURE_KEYS.Checklist]: typeof ChecklistSelectors
    [FEATURE_KEYS.Core]:      typeof CoreSelectors
    [FEATURE_KEYS.Spells]:    typeof SpellsSelectors
    [FEATURE_KEYS.Talismans]: typeof TalismansSelectors
    [FEATURE_KEYS.Weapons]:   typeof WeaponsSelectors
}

export const Selectors: AppSelectors = {
    Armor:     { ...ArmorSelectors     },
    Builder:   { ...BuilderSelectors   },
    Checklist: { ...ChecklistSelectors },
    Core:      { ...CoreSelectors      },
    Spells:    { ...SpellsSelectors    },
    Talismans: { ...TalismansSelectors },
    Weapons:   { ...WeaponsSelectors   },
}
