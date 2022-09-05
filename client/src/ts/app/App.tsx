import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { BrowserRouter as Router } from "react-router-dom"
import { CssBaseline, ThemeProvider } from "@mui/material"

import { EldenRingMaterialTheme } from "@app/theme"
import { logger } from "@app/util"
import { store, persistor } from "@app/state"
import { LoggingProvider, ViewportProvider } from "@app/features/common"
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
                            <Router>
                                <AppRoutesComponent />
                            </Router>
                        </ThemeProvider>
                    </ViewportProvider>
                </LoggingProvider>
            </PersistGate>
        </Provider>
    )
}
