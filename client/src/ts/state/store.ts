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
import type { RootState } from "./state"

export const persistList: NestedKeyOf<RootState>[] = [
    "Core.preferences",
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
]

const persistConfig = getPersistConfig({
    rootReducer,
    key: "elden-ring-app",
    version: 1,
    storage: storage,
    // @ts-ignore: next-line
    whitelist: persistList,
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
