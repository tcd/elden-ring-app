import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { HistoryRouter as Router } from "redux-first-history/rr6"
import { CssBaseline, ThemeProvider } from "@mui/material"

import { EldenRingMaterialTheme } from "@app/theme"
import { logger } from "@app/util"
import { store, persistor, history } from "@app/state"
import { LoggingProvider, ViewportProvider } from "@app/shared"
import { AppHelmet } from "@app/features/core"
import { AppRoutesComponent } from "@app/features/routing"

export const App = (_props: unknown): JSX.Element => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <LoggingProvider value={logger}>
                    <ViewportProvider>
                        <ThemeProvider theme={EldenRingMaterialTheme}>
                            <AppHelmet />
                            <CssBaseline />
                            <Router history={history}>
                                <AppRoutesComponent />
                            </Router>
                        </ThemeProvider>
                    </ViewportProvider>
                </LoggingProvider>
            </PersistGate>
        </Provider>
    )
}
