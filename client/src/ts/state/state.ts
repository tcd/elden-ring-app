/* ========================================================================== */
/* NOTE: this file is just used at development time for deriving types        */
/* You shouldn't ever have to touch it.                                       */
/* ========================================================================== */

import { configureStore } from "@reduxjs/toolkit"
import { persistReducer } from "redux-persist"
import { getPersistConfig } from "redux-deep-persist"

import { rootReducer } from "./root-reducer"

const persistConfig = getPersistConfig({
    rootReducer,
    key: "elden-ring-app",
    storage: undefined,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

/**
 * This value is only used to derive types.
 *
 * The **real** store is in `./store.ts`.
 */
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({}),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppSelector<T = any> = (rootState: RootState) => T

