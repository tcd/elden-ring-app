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
import { getPersistConfig } from "redux-deep-persist"

import { FeatureKeys } from "@app/constants"
import {
    AmmunitionSlice,
    ArmorSlice,
    BuilderSlice,
    ChecklistSlice,
    CoreSlice,
    EquipmentSlice,
    LevelUpSlice,
    SpellsSlice,
    StartingClassSlice,
    TalismansSlice,
    WeaponsSlice,
    // Router
    createReduxHistory,
    routerMiddleware,
    routerReducer,
} from "@app/features"

const rootReducer = combineReducers({
    [FeatureKeys.Ammunition]:    AmmunitionSlice.reducer,
    [FeatureKeys.Armor]:         ArmorSlice.reducer,
    [FeatureKeys.Builder]:       BuilderSlice.reducer,
    [FeatureKeys.Checklist]:     ChecklistSlice.reducer,
    [FeatureKeys.Core]:          CoreSlice.reducer,
    [FeatureKeys.Equipment]:     EquipmentSlice.reducer,
    [FeatureKeys.LevelUp]:       LevelUpSlice.reducer,
    [FeatureKeys.StartingClass]: StartingClassSlice.reducer,
    [FeatureKeys.Spells]:        SpellsSlice.reducer,
    [FeatureKeys.Talismans]:     TalismansSlice.reducer,
    [FeatureKeys.Weapons]:       WeaponsSlice.reducer,
    [FeatureKeys.Router]:        routerReducer,
})

const persistConfig = getPersistConfig({
    rootReducer,
    key: "root",
    version: 1,
    storage: storage,
    // blacklist: [
    //     "router",
    // ],
    whitelist: [
        // "Armor.activeType",
        "Armor.armorNames",
        // "Armor.oldName",
        "LevelUp.attributes",
        // "Checklist.obtainedResources",
        // "Spells.spellNames",
        "StartingClass.startingClassName",
        // "Talismans.activeSlotId",
        // "Talismans.oldTalismanName",
        "Talismans.talismanNames",
        // "Weapons.activeSlotId",
        // "Weapons.choosingAffinity",
        // "Weapons.customizingWeapon",
        // "Weapons.oldWeapon",
        "Weapons.slots",
    ],
})

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
    }).concat(routerMiddleware),
})

export const history = createReduxHistory(store)

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AnySelector<T = any> = (rootState: RootState) => T
