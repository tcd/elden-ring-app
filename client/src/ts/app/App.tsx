import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
// import { HistoryRouter as Router } from "react-router-dom"
import { HistoryRouter as Router } from "redux-first-history/rr6"
import { CssBaseline, ThemeProvider } from "@mui/material"

import { store, persistor, history } from "@app/state"
import { LoggingProvider } from "@app/features"
import { ConsoleLogger, EldenRingMaterialTheme } from "@app/util"
// import { AppRoot } from "./AppRoot"
import { AppRoutesComponent } from "./AppRoutesComponent"

export const App = () => {

    const logger = new ConsoleLogger()

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <LoggingProvider value={logger}>
                    <ThemeProvider theme={EldenRingMaterialTheme}>
                        <CssBaseline />
                        <Router history={history}>
                            <AppRoutesComponent />
                        </Router>
                    </ThemeProvider>
                </LoggingProvider>
            </PersistGate>
        </Provider>
    )
}
