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
import { createReduxHistoryContext, IHistoryContextOptions } from "redux-first-history"
import { createBrowserHistory } from "history"

import { FEATURE_KEYS, CONFIG } from "@app/util"
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
} from "@app/features"


const routerOptions: IHistoryContextOptions = {
    history: createBrowserHistory(),
    reduxTravelling: true,
    savePreviousLocations: 25,
}

const {
    createReduxHistory,
    routerMiddleware,
    routerReducer,
} = createReduxHistoryContext(routerOptions)

const rootReducer = combineReducers({
    [FEATURE_KEYS.Ammunition]:    AmmunitionSlice.reducer,
    [FEATURE_KEYS.Armor]:         ArmorSlice.reducer,
    [FEATURE_KEYS.Builder]:       BuilderSlice.reducer,
    [FEATURE_KEYS.Checklist]:     ChecklistSlice.reducer,
    [FEATURE_KEYS.Core]:          CoreSlice.reducer,
    [FEATURE_KEYS.Equipment]:     EquipmentSlice.reducer,
    [FEATURE_KEYS.LevelUp]:       LevelUpSlice.reducer,
    [FEATURE_KEYS.StartingClass]: StartingClassSlice.reducer,
    [FEATURE_KEYS.Spells]:        SpellsSlice.reducer,
    [FEATURE_KEYS.Talismans]:     TalismansSlice.reducer,
    [FEATURE_KEYS.Weapons]:       WeaponsSlice.reducer,
    [FEATURE_KEYS.router]:        routerReducer,
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
    devTools: (CONFIG.nodeEnv !== "development"),
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
