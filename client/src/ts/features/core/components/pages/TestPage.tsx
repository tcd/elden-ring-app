import { useEffect } from "react"
import { useHotkeys } from "react-hotkeys-hook"
import {
    Box,
    Button,
    Container,
} from "@mui/material"

import { ThemeVars } from "@app/theme"
import { ErPage, ErTextField, Br } from "@app/features/common"
import { Audio, getCssVariable } from "@app/util"

export const TestPage = (_props: unknown): JSX.Element => {

    const playClick = () => {
        Audio.menuClick()
    }

    const playSlider = () => {
        Audio.slider()
    }

    const playOpenMenu = () => {
        Audio.openMenu()
    }

    // useHotkeys("left, right", playClick)
    // useHotkeys("up, down", playSlider)
    useHotkeys("left, right", () => { console.log("left or right")})
    useHotkeys("up, down", () => { console.log("up or down")})

    useEffect(() => {
        logCssVariables()
    }, [])

    return (
        <ErPage pageName="about" title="Test" icon="empty">
            <Container>
                {/* <p>This is a development page. You shouldn&apos;t be here.</p>
                <Button variant="elden-ring" onClick={playClick}>click</Button>
                <Br />
                <Button variant="contained" onClick={playSlider}>slider</Button>
                <Br />
                <Button variant="outlined" onClick={playOpenMenu}>open menu</Button>
                <Br /> */}
                <Box sx={{ p: 1 }}>
                    <ErTextField />
                </Box>
            </Container>

        </ErPage>
    )
}

// =============================================================================

const logCssVariables = (): void => {

    const cssVariables = {
        // "hex-modal-color-bg":                getCssVariable("--hex-modal-color-bg"),
        // "hex-affinity-item-color-bg":        getCssVariable("--hex-affinity-item-color-bg"),
        // "hex-affinity-item-color-active-bg": getCssVariable("--hex-affinity-item-color-active-bg"),
        // "hsl-modal-color-bg":                getCssVariable("--hsl-modal-color-bg"),
        // "hsl-affinity-item-color-bg":        getCssVariable("--hsl-affinity-item-color-bg"),
        // "hsl-affinity-item-color-active-b":  getCssVariable("--hsl-affinity-item-color-active-bg"),

        "contextMenuItem-color-bg":          getCssVariable("--contextMenuItem-color-bg"),
        "contextMenuItem-color-bg-active":   getCssVariable("--contextMenuItem-color-bg-active"),
    }

    console.log(cssVariables)

    // const sass = {
    //     hex: {
    //         modalColorBg: cssVariables["hex-modal-color-bg"],
    //         itemBg:       cssVariables["hex-affinity-item-color-bg"],
    //         itemActiveBg: cssVariables["hex-affinity-item-color-active-bg"],
    //     },
    //     hsl: {
    //         modalColorBg: cssVariables["hsl-modal-color-bg"],
    //         itemBg:       cssVariables["hsl-affinity-item-color-bg"],
    //         itemActiveBg: cssVariables["hsl-affinity-item-color-active-bg"],
    //     },
    // }
//
//     console.log({
//         sass,
//         sx: ThemeVars?.debugging,
//     })
}
