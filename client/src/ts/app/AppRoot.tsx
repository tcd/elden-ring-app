import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"
import { CssBaseline, ThemeProvider, SxProps } from "@mui/material"
import Backdrop from "@mui/material/Backdrop"
import CircularProgress from "@mui/material/CircularProgress"

import {
    EldenRingMaterialThemeDark,
    // EldenRingMaterialThemeLight,
} from "@util"
import { Actions, Selectors } from "@app/state"
import { AppRoutesComponent } from "./AppRoutesComponent"

const backdropSx: SxProps = {
    color: "#fff",
    // zIndex: (theme) => theme.zIndex.drawer + 1
    zIndex: 50,
}

export const AppRoot = (_props: never): JSX.Element => {

    const dispatch = useDispatch()

    // const darkModeEnabled = useSelector(Selectors.Core.darkModeEnabled)
    const fetching: boolean = useSelector(Selectors.Builder.api.loading)
    const shouldFetch: boolean = useSelector(Selectors.Builder.api.shouldFetchEverything)

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
            <Backdrop sx={backdropSx} open={fetching}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </ThemeProvider>
    )
}

