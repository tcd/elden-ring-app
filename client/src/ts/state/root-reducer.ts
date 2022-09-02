import { combineReducers } from "@reduxjs/toolkit"

import { FeatureKeys } from "@app/constants"
import {
    AmmunitionSlice,
    ArmorSlice,
    BuilderSlice,
    CharacterStatusSlice,
    ChecklistSlice,
    CoreSlice,
    EquipmentSlice,
    LevelUpSlice,
    QuickItemsSlice,
    RoutingSlice,
    SpellsSlice,
    StartingClassSlice,
    TalismansSlice,
    WeaponsSlice,
} from "@app/features"

export const rootReducer = combineReducers({
    [FeatureKeys.Ammunition]:      AmmunitionSlice.reducer,
    [FeatureKeys.Armor]:           ArmorSlice.reducer,
    [FeatureKeys.Builder]:         BuilderSlice.reducer,
    [FeatureKeys.CharacterStatus]: CharacterStatusSlice.reducer,
    [FeatureKeys.Checklist]:       ChecklistSlice.reducer,
    [FeatureKeys.Core]:            CoreSlice.reducer,
    [FeatureKeys.Equipment]:       EquipmentSlice.reducer,
    [FeatureKeys.LevelUp]:         LevelUpSlice.reducer,
    [FeatureKeys.QuickItems]:      QuickItemsSlice.reducer,
    [FeatureKeys.Routing]:         RoutingSlice.reducer,
    [FeatureKeys.Spells]:          SpellsSlice.reducer,
    [FeatureKeys.StartingClass]:   StartingClassSlice.reducer,
    [FeatureKeys.Talismans]:       TalismansSlice.reducer,
    [FeatureKeys.Weapons]:         WeaponsSlice.reducer,
})
