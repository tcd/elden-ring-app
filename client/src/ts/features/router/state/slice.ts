import {
    createReduxHistoryContext,
    IHistoryContextOptions,
} from "redux-first-history"
import { createBrowserHistory } from "history"

import { FeatureKeys } from "@app/constants"

const routerOptions: IHistoryContextOptions = {
    history: createBrowserHistory(),
    reduxTravelling: true,
    savePreviousLocations: 25,
    routerReducerKey: FeatureKeys.Router,
}

export const {
    createReduxHistory,
    routerMiddleware,
    routerReducer,
} = createReduxHistoryContext(routerOptions)
