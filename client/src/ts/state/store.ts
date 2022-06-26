import { configureStore } from "@reduxjs/toolkit"

import { FEATURE_KEYS } from "@util"
import {
    ArmorSlice,
    BuilderSlice,
    ChecklistSlice,
    CoreSlice,
    SpellsSlice,
    TalismansSlice,
    WeaponsSlice,
} from "@app/features"

export const store = configureStore({
    reducer: {
        [FEATURE_KEYS.Armor]:     ArmorSlice.reducer,
        [FEATURE_KEYS.Builder]:   BuilderSlice.reducer,
        [FEATURE_KEYS.Checklist]: ChecklistSlice.reducer,
        [FEATURE_KEYS.Core]:      CoreSlice.reducer,
        [FEATURE_KEYS.Spells]:    SpellsSlice.reducer,
        [FEATURE_KEYS.Talismans]: TalismansSlice.reducer,
        [FEATURE_KEYS.Weapons]:   WeaponsSlice.reducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck:    { ignoredPaths: ["Builder.everythingRequest.response"] },
        // serializableCheck: { ignoredPaths: ["Builder.everythingRequest.response"] },
        serializableCheck: { warnAfter: 500 },
    }),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
