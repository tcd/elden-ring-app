import { configureStore } from "@reduxjs/toolkit"
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

import { CONFIG } from "@app/util"
import { createReduxHistory, routerMiddleware } from "@app/features"
import { rootReducer } from "./root-reducer"

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
    devTools: !CONFIG.production(),
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
