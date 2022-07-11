import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

import { store, persistor } from "@app/state"
import { ConsoleLogger } from "@app/util"
import { LoggingProvider, ThingsProvider } from "@app/shared"
import { AppRoot } from "./AppRoot"

export const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <LoggingProvider value={new ConsoleLogger()}>
                    <ThingsProvider value={{ anything: "something" }}>
                        <AppRoot />
                    </ThingsProvider>
                </LoggingProvider>
            </PersistGate>
        </Provider>
    )
}
