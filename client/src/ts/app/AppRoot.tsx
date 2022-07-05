import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"
import { CssBaseline, ThemeProvider } from "@mui/material"

import { EldenRingMaterialThemeDark, isBlank } from "@app/util"
import { Actions, Selectors } from "@app/state"
import { AppRoutesComponent } from "./AppRoutesComponent"

export const AppRoot = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()

    // const fetching: boolean = useSelector(Selectors.Builder.api.loading)
    // const shouldFetch: boolean = useSelector(Selectors.Builder.api.shouldFetchEverything)
    // const fetchFailed: boolean = useSelector(Selectors.Builder.api.fetchFailed)
    // const fetchSuccessful: boolean = useSelector(Selectors.Builder.api.fetchSuccessful)

    // const theme = darkModeEnabled ? EldenRingMaterialThemeDark : EldenRingMaterialThemeLight
    const theme = EldenRingMaterialThemeDark

    // useEffect(() => {
    //     if (shouldFetch) { dispatch(Actions.Builder.fetchEverything()) }
    // }, [shouldFetch])

    // if (fetchFailed) {
    //     return (
    //         <div id="er__fetchFailed">
    //             <div>
    //                 <span>unable to connect to server</span>
    //             </div>
    //         </div>
    //     )
    // }

    const _mainContent = (
        <Router>
            <AppRoutesComponent />
        </Router>
    )

    // const mainContent = fetchSuccessful ? _mainContent : null

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {_mainContent}
        </ThemeProvider>
    )
}

