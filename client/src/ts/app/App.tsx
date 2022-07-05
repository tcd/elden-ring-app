import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

import { store, persistor } from "@app/state"
import { AppRoot } from "./AppRoot"

export const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <AppRoot />
            </PersistGate>
        </Provider>
    )
}
