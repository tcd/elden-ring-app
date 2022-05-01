import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"
import { CssBaseline, ThemeProvider } from "@mui/material"

import {
    EldenRingMaterialThemeDark,
    EldenRingMaterialThemeLight,
} from "@util"
import { Actions, Selectors } from "@app/state"
import { AppRoutesComponent } from "./AppRoutesComponent"

export const AppRoot = (): JSX.Element => {

    const dispatch = useDispatch()

    // const darkModeEnabled = useSelector(Selectors.Core.darkModeEnabled)
    const shouldFetch: boolean = useSelector(Selectors.Builder.shouldFetchEverything)

    // const theme = darkModeEnabled ? EldenRingMaterialThemeDark : EldenRingMaterialThemeLight
    const theme = EldenRingMaterialThemeDark

    useEffect(() => {
        if (shouldFetch) { dispatch(Actions.Builder.fetchEverything()) }
    })

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <AppRoutesComponent />
            </Router>
        </ThemeProvider>
    )
}

