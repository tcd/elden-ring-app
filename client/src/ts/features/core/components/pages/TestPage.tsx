import { useEffect } from "react"
import { useHotkeys } from "react-hotkeys-hook"
import { Box, Container } from "@mui/material"

import { ThemeVars } from "@app/theme"
import { ErPage, ErTextField } from "@app/features/common"
import { SpecialCharacters, Audio, getCssVariable } from "@app/util"

export const TestPage = (_props: unknown): JSX.Element => {

    const playClick = () => {
        Audio.menuClick()
    }

    const playSlider = () => {
        Audio.slider()
    }

    useHotkeys("left, right", playClick)
    useHotkeys("up, down", playSlider)
    useHotkeys("left, right", () => { console.log("left or right")})
    useHotkeys("up, down", () => { console.log("up or down")})

    useEffect(() => {
        logCssVariables()
    }, [])

    return (
        <ErPage pageName="about">
            <Container>
                <p>This is a development page. You shouldn{SpecialCharacters.singleQuote}t be here.</p>
                <button onClick={playClick}>click</button>
                <button onClick={playSlider}>slider</button>
                <br />
                <br />
                <br />
                <Box>
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
