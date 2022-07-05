import { configureStore, combineReducers } from "@reduxjs/toolkit"
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist"
import storage from "redux-persist/lib/storage" // defaults to localStorage for web

import { FEATURE_KEYS } from "@app/util"
import {
    ArmorSlice,
    BuilderSlice,
    ChecklistSlice,
    CoreSlice,
    SpellsSlice,
    TalismansSlice,
    WeaponsSlice,
} from "@app/features"

const rootReducer = combineReducers({
    [FEATURE_KEYS.Armor]:     ArmorSlice.reducer,
    [FEATURE_KEYS.Builder]:   BuilderSlice.reducer,
    [FEATURE_KEYS.Checklist]: ChecklistSlice.reducer,
    [FEATURE_KEYS.Core]:      CoreSlice.reducer,
    [FEATURE_KEYS.Spells]:    SpellsSlice.reducer,
    [FEATURE_KEYS.Talismans]: TalismansSlice.reducer,
    [FEATURE_KEYS.Weapons]:   WeaponsSlice.reducer,
})

const persistConfig = {
    key: "root",
    version: 1,
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        // immutableCheck:    { ignoredPaths: ["Builder.everythingRequest.response"] },
        // serializableCheck: { ignoredPaths: ["Builder.everythingRequest.response"] },
        // serializableCheck: { warnAfter: 500 },
        serializableCheck: {
            ignoredActions: [ FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER ],
        },
    }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
