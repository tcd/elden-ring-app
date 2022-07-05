import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"
import { CssBaseline, ThemeProvider, SxProps } from "@mui/material"
import Backdrop from "@mui/material/Backdrop"
import CircularProgress from "@mui/material/CircularProgress"

import {
    EldenRingMaterialThemeDark,
    // EldenRingMaterialThemeLight,
} from "@app/util"
import { Actions, Selectors } from "@app/state"
import { AppRoutesComponent } from "./AppRoutesComponent"

const backdropSx: SxProps = {
    color: "#fff",
    // zIndex: (theme) => theme.zIndex.drawer + 1
    zIndex: 50,
}

export const AppRoot = (_props: unknown): JSX.Element => {

    const dispatch = useDispatch()

    // const darkModeEnabled = useSelector(Selectors.Core.darkModeEnabled)
    const fetching: boolean = useSelector(Selectors.Builder.api.loading)
    const shouldFetch: boolean = useSelector(Selectors.Builder.api.shouldFetchEverything)
    const fetchFailed: boolean = useSelector(Selectors.Builder.api.fetchFailed)
    const fetchSuccessful: boolean = useSelector(Selectors.Builder.api.fetchSuccessful)

    // const theme = darkModeEnabled ? EldenRingMaterialThemeDark : EldenRingMaterialThemeLight
    const theme = EldenRingMaterialThemeDark

    useEffect(() => {
        if (shouldFetch) { dispatch(Actions.Builder.fetchEverything()) }
    })

    if (fetchFailed) {
        return (
            <div id="er__fetchFailed">
                <div>
                    <span>unable to connect to server</span>
                </div>
            </div>
        )
    }

    const _mainContent = (
        <Router>
            <AppRoutesComponent />
        </Router>
    )

    const mainContent = fetchSuccessful ? _mainContent : null

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {mainContent}
            <Backdrop id="er__loadingBackdrop" open={fetching}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </ThemeProvider>
    )
}

