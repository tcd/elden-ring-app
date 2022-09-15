import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { BrowserRouter as Router } from "react-router-dom"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { ConfirmProvider } from "material-ui-confirm"


import { EldenRingMaterialTheme } from "@app/theme"
import { store, persistor } from "@app/state"
import { LoggingProvider, ViewportProvider, logger } from "@app/util"
import { AppHelmet } from "@app/features/core"
import { AppRoutesComponent } from "@app/features/routing"
import { AppNotifications } from "@app/features/notifications"

export const App = (_props: unknown): JSX.Element => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <LoggingProvider value={logger}>
                    <ViewportProvider>
                        <ThemeProvider theme={EldenRingMaterialTheme}>
                            <AppHelmet />
                            <CssBaseline />
                            <AppNotifications />
                            <ConfirmProvider>
                                <Router>
                                    <AppRoutesComponent />
                                </Router>
                            </ConfirmProvider>
                        </ThemeProvider>
                    </ViewportProvider>
                </LoggingProvider>
            </PersistGate>
        </Provider>
    )
}
